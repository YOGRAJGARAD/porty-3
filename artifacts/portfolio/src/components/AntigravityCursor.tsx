import React, { useEffect, useRef, useState } from 'react';

/**
 * Returns true when the primary pointing device is a finger (touch).
 * `pointer: coarse` = touchscreen; `pointer: fine` = mouse/stylus.
 * On hybrid devices (e.g. Surface) this returns false — mouse wins.
 */
function hasTouchPrimaryInput(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches
  );
}

export function AntigravityCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef  = useRef<number | null>(null);

  // Start off-screen so the ring never flashes at centre on mount
  const targetPos  = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const timeRef    = useRef(0);

  // Track visibility via ref to avoid re-registering listeners on each change
  const visibleRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  const show = () => {
    if (!visibleRef.current) {
      visibleRef.current = true;
      setIsVisible(true);
    }
  };
  const hide = () => {
    if (visibleRef.current) {
      visibleRef.current = false;
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const isTouch = hasTouchPrimaryInput();

    // ── Shared position updater ──────────────────────────────────────
    const moveDot = (x: number, y: number) => {
      targetPos.current = { x, y };
      show();
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 5}px, ${y - 5}px)`;
      }
    };

    // ── Desktop: mouse events ────────────────────────────────────────
    const onMouseMove  = (e: MouseEvent) => moveDot(e.clientX, e.clientY);
    const onMouseLeave = () => hide();
    const onMouseEnter = () => show();

    // ── Mobile: touch events ─────────────────────────────────────────
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) moveDot(t.clientX, t.clientY);
    };
    const onTouchEnd = () => hide();

    if (isTouch) {
      // passive: true — we never call preventDefault, so scrolling stays fast
      window.addEventListener('touchmove',   onTouchMove, { passive: true });
      window.addEventListener('touchend',    onTouchEnd);
      window.addEventListener('touchcancel', onTouchEnd);
    } else {
      window.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mouseenter', onMouseEnter);
    }

    // ── rAF loop: ring lerp + breathing pulse ─────────────────────────
    const animate = () => {
      timeRef.current += 0.05;

      // Lerp factor 0.08 → smooth lag at 60 fps
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.08;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.08;

      if (ringRef.current) {
        const breath = Math.sin(timeRef.current) * 3;
        ringRef.current.style.transform =
          `translate(${currentPos.current.x - 20}px, ${currentPos.current.y - 20}px) scale(${1 + breath / 40})`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (isTouch) {
        window.removeEventListener('touchmove',   onTouchMove);
        window.removeEventListener('touchend',    onTouchEnd);
        window.removeEventListener('touchcancel', onTouchEnd);
      } else {
        window.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseleave', onMouseLeave);
        document.removeEventListener('mouseenter', onMouseEnter);
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []); // ← empty array: register once, never re-run

  return (
    <>
      {/* Violet lagging ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] rounded-full border-2 pointer-events-none z-[9998]"
        style={{
          borderColor: '#6366F1',
          boxShadow: '0 0 12px rgba(99,102,241,0.4)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      />
      {/* Orange snap dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[10px] h-[10px] rounded-full pointer-events-none z-[9999]"
        style={{
          backgroundColor: '#FF7A00',
          boxShadow: '0 0 8px rgba(255,122,0,0.6), 0 0 20px rgba(255,122,0,0.3)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      />
    </>
  );
}
