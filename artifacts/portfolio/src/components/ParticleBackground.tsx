import { useEffect, useRef } from 'react';

// ─── Particle physics constants ───────────────────────────────────────────────
const GRID_SPACING  = 44;      // px between each particle origin
const PARTICLE_R    = 1.6;     // dot radius in px
const REPEL_RADIUS  = 110;     // mouse influence radius (px)
const REPEL_FORCE   = 7.5;     // max repulsion acceleration
const SPRING        = 0.045;   // spring strength back to origin
const DAMPING       = 0.72;    // velocity damping per frame (lower = more friction)

// ─── Types ────────────────────────────────────────────────────────────────────
interface Particle {
  x: number;       // current x
  y: number;       // current y
  originX: number; // home x
  originY: number; // home y
  vx: number;      // velocity x
  vy: number;      // velocity y
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Store mutable state in refs so the animation loop always reads the latest
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef     = useRef({ x: -9999, y: -9999 });
  const rafRef       = useRef<number | null>(null);

  useEffect(() => {
    // Non-null assertion is safe here: useEffect runs after mount so the ref is attached
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    // ── Build the particle grid to fill the current canvas size ───────────
    function buildGrid(w: number, h: number) {
      const cols = Math.ceil(w / GRID_SPACING) + 1;
      const rows = Math.ceil(h / GRID_SPACING) + 1;

      // Centre the grid so particles are symmetrically distributed
      const offsetX = (w - (cols - 1) * GRID_SPACING) / 2;
      const offsetY = (h - (rows - 1) * GRID_SPACING) / 2;

      const ps: Particle[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = offsetX + c * GRID_SPACING;
          const oy = offsetY + r * GRID_SPACING;
          ps.push({ x: ox, y: oy, originX: ox, originY: oy, vx: 0, vy: 0 });
        }
      }
      particlesRef.current = ps;
    }

    // ── Resize canvas to fill the window and rebuild the grid ─────────────
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w   = window.innerWidth;
      const h   = window.innerHeight;

      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scale for retina

      buildGrid(w, h);
    }

    // ── Detect dot color from CSS variable (supports dark mode) ──────────
    function getDotColor() {
      // Read the --primary HSL variable set in index.css
      const isDark = document.documentElement.classList.contains('dark');
      return isDark
        ? 'rgba(99, 102, 241, 0.35)'   // soft violet on dark bg
        : 'rgba(99, 102, 241, 0.28)';  // soft violet on cream bg
    }

    // ── Main animation loop ───────────────────────────────────────────────
    function draw() {
      const w   = canvas.width  / (window.devicePixelRatio || 1);
      const h   = canvas.height / (window.devicePixelRatio || 1);
      const mx  = mouseRef.current.x;
      const my  = mouseRef.current.y;
      const ps  = particlesRef.current;

      // Clear
      ctx.clearRect(0, 0, w, h);

      const color = getDotColor();
      ctx.fillStyle = color;

      for (let i = 0; i < ps.length; i++) {
        const p  = ps[i];
        const dx = p.x - mx;
        const dy = p.y - my;
        const distSq = dx * dx + dy * dy;

        // ── Repulsion from cursor ────────────────────────────────────────
        if (distSq < REPEL_RADIUS * REPEL_RADIUS && distSq > 0.01) {
          const dist  = Math.sqrt(distSq);
          // Strength falls off linearly from centre of influence
          const strength = (1 - dist / REPEL_RADIUS) * REPEL_FORCE;
          p.vx += (dx / dist) * strength;
          p.vy += (dy / dist) * strength;
        }

        // ── Spring back to origin ────────────────────────────────────────
        p.vx += (p.originX - p.x) * SPRING;
        p.vy += (p.originY - p.y) * SPRING;

        // ── Damping ──────────────────────────────────────────────────────
        p.vx *= DAMPING;
        p.vy *= DAMPING;

        // ── Integrate ────────────────────────────────────────────────────
        p.x += p.vx;
        p.y += p.vy;

        // ── Draw dot ─────────────────────────────────────────────────────
        ctx.beginPath();
        ctx.arc(p.x, p.y, PARTICLE_R, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    // ── Mouse tracking (use clientX/Y — viewport coordinates) ────────────
    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }
    function onMouseLeave() {
      // Push cursor far off-screen so no repulsion
      mouseRef.current = { x: -9999, y: -9999 };
    }

    // ── Touch support ─────────────────────────────────────────────────────
    function onTouchMove(e: TouchEvent) {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }
    function onTouchEnd() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    // ── Init ──────────────────────────────────────────────────────────────
    resize();
    draw();

    window.addEventListener('resize',     resize,      { passive: true });
    window.addEventListener('mousemove',  onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('touchmove',  onTouchMove, { passive: true });
    window.addEventListener('touchend',   onTouchEnd);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize',     resize);
      window.removeEventListener('mousemove',  onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('touchmove',  onTouchMove);
      window.removeEventListener('touchend',   onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none', // never blocks clicks or hover
        display: 'block',
      }}
    />
  );
}
