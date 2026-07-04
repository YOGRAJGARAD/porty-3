import React, { useEffect, useRef, useState } from 'react';

export function AntigravityCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  
  const targetPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const timeRef = useRef(0);
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const animate = () => {
      timeRef.current += 0.05; // speed of breathing
      
      // Lerp for physics
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.08;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.08;

      if (ringRef.current) {
        // Breathe effect
        const breath = Math.sin(timeRef.current) * 3;
        
        ringRef.current.style.transform = `translate(${currentPos.current.x - 20}px, ${currentPos.current.y - 20}px) scale(${1 + breath/40})`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  return (
    <>
      {/* Violet Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] rounded-full border-2 pointer-events-none z-[9998]"
        style={{
          borderColor: '#6366F1',
          boxShadow: '0 0 12px rgba(99,102,241,0.4)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-out'
        }}
      />
      {/* Orange Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[10px] h-[10px] rounded-full pointer-events-none z-[9999]"
        style={{
          backgroundColor: '#FF7A00',
          boxShadow: '0 0 8px rgba(255,122,0,0.6), 0 0 20px rgba(255,122,0,0.3)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-out'
        }}
      />
    </>
  );
}
