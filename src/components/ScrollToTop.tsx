import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Rocket } from 'lucide-react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 360);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 360, damping: 24 }}
          className="group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] p-[1.5px] shadow-[0_14px_34px_-6px_rgba(59,130,246,0.6)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
        >
          <span className="relative flex w-full h-full items-center justify-center rounded-[14px] bg-[#0B1024]/90 backdrop-blur-md group-hover:bg-[#0D1430]/75 transition-colors overflow-hidden">
            <motion.span
              aria-hidden="true"
              animate={{ y: [0, -2.5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center justify-center"
            >
              <Rocket
                className="w-5 h-5 text-[#22D3EE] -rotate-45 transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:text-white"
                aria-hidden="true"
              />
            </motion.span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
