import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const networkY = useTransform(scrollYProgress, [0, 1], [0, -96]);

  const [pointer, setPointer] = useState({ x: -600, y: -600 });

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    if (!media.matches) return;

    const handleMove = (e: MouseEvent) => {
      setPointer({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      {/* Ambient Deep Space Canvas & Subtle Architectural Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#080914]"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-45" />
        <div className="ambient-haze absolute inset-0" />
        <motion.div className="ambient-network absolute inset-0" style={{ y: networkY }} />
        <div className="ambient-starfield absolute inset-0" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -24, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-56 left-1/4 h-[620px] w-[620px] rounded-full opacity-25 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.45) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{ x: [0, -32, 0], y: [0, 26, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full opacity-20 blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.45) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute -bottom-56 left-1/3 h-[540px] w-[540px] rounded-full opacity-15 blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.35) 0%, transparent 70%)',
          }}
        />

        {/* Subtle Desktop Cursor Spotlight */}
        <div
          className="hidden lg:block fixed inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(520px circle at ${pointer.x}px ${pointer.y}px, rgba(59, 130, 246, 0.06), transparent 65%)`,
          }}
        />
      </div>
    </>
  );
}
