import { motion } from 'motion/react';

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-10 sm:mb-12 md:mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}
    >
      <div className={`flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : ''}`}>
        <span
          aria-hidden="true"
          className="h-[2px] w-7 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#22D3EE]"
        />
        <p className="text-xs font-mono font-medium tracking-[0.16em] text-[#22D3EE] uppercase">
          {kicker}
        </p>
      </div>
      <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC] leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3.5 sm:mt-4 text-sm sm:text-lg text-[#A5B4C8] leading-relaxed ${
            isCenter ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
