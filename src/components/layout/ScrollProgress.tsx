import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Rocket } from 'lucide-react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });
  const iconLeft = useTransform(scaleX, [0, 1], ['0%', '98.5%']);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed top-0 left-0 right-0 z-[60] h-7">
      <motion.div
        style={{ scaleX }}
        className="h-[3px] w-full origin-left bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#22D3EE] shadow-[0_0_12px_rgba(34,211,238,0.6)]"
      />
      <motion.div
        style={{ left: iconLeft }}
        className="absolute top-[5px] -translate-x-1/2 flex items-center justify-center"
      >
        <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-[#0B1024]/95 border border-[#22D3EE]/70 shadow-[0_0_14px_rgba(34,211,238,0.85)]">
          <Rocket className="w-3 h-3 text-[#22D3EE] rotate-45" />
        </span>
      </motion.div>
    </div>
  );
}
