import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface LightboxItem {
  src: string;
  title: string;
  subtitle: string;
}

interface LightboxProps {
  items: LightboxItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, currentIndex, onClose, onNavigate }: LightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const current = isOpen ? items[currentIndex] : null;

  useEffect(() => {
    if (!isOpen || currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && current && currentIndex !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-[#04050C]/92 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-mono text-[#A5B4C8] tabular-nums">
              {currentIndex + 1} / {items.length}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close lightbox"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Media + Prev/Next */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {items.length > 1 && (
              <button
                type="button"
                aria-label="Previous photo"
                onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
                className="hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#111629]/85 border border-slate-400/20 text-white hover:border-[#3B82F6]/60 transition-colors mr-4 shrink-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={current.src}
                initial={{ opacity: 0, scale: 0.95, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-h-[70vh] sm:max-h-[74vh] max-w-4xl w-full flex items-center justify-center overflow-hidden rounded-2xl border border-slate-400/20 bg-[#080914]"
              >
                <img
                  src={current.src}
                  alt={current.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] sm:max-h-[74vh] w-auto max-w-full object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {items.length > 1 && (
              <button
                type="button"
                aria-label="Next photo"
                onClick={() => onNavigate((currentIndex + 1) % items.length)}
                className="hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#111629]/85 border border-slate-400/20 text-white hover:border-[#3B82F6]/60 transition-colors ml-4 shrink-0"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Caption Footer */}
          <div
            className="max-w-3xl w-full mx-auto text-center space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs font-mono text-[#22D3EE]">{current.subtitle}</p>
            <p className="text-sm sm:text-base text-[#F8FAFC]">{current.title}</p>

            {items.length > 1 && (
              <div className="flex sm:hidden items-center justify-center gap-4 pt-3">
                <button
                  type="button"
                  onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
                  className="px-4 py-2 rounded-lg bg-white/10 text-xs font-medium text-white"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate((currentIndex + 1) % items.length)}
                  className="px-4 py-2 rounded-lg bg-white/10 text-xs font-medium text-white"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
