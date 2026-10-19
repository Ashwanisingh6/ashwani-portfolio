import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  enabled: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ enabled }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (!enabled || !isDesktop) return;

    let rafId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, select, textarea, [role="button"], .clickable');
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animateCursor = () => {
      // Smooth interpolation for luxury ring trailing
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      setPos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [enabled, isDesktop, isVisible]);

  if (!enabled || !isDesktop || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Central precise dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-purple-400 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          width: isHovered ? '4px' : '5px',
          height: isHovered ? '4px' : '5px',
          opacity: 0.9,
        }}
        aria-hidden="true"
      />
      {/* Hollow neon trailing aura ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-purple-500/60 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out"
        style={{
          transform: `translate3d(${pos.x - (isHovered ? 24 : 15)}px, ${pos.y - (isHovered ? 24 : 15)}px, 0)`,
          width: isHovered ? '48px' : '30px',
          height: isHovered ? '48px' : '30px',
          boxShadow: isHovered
            ? '0 0 20px 2px rgba(168, 85, 247, 0.4), inset 0 0 10px rgba(168, 85, 247, 0.2)'
            : '0 0 12px rgba(168, 85, 247, 0.25)',
          backgroundColor: isHovered ? 'rgba(168, 85, 247, 0.08)' : 'transparent',
        }}
        aria-hidden="true"
      />
    </>
  );
};
