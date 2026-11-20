import { motion } from 'motion/react';
import { Briefcase, HeartHandshake } from 'lucide-react';
import type { ExperienceEntry } from '../data/experience';

export function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <div className="relative pl-7 sm:pl-10">
      {/* Vertical Glowing Spine */}
      <div
        aria-hidden="true"
        className="absolute left-2.5 sm:left-4 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6]/70 to-[#22D3EE]/20"
      />

      <div className="space-y-6 sm:space-y-8">
        {entries.map((entry, idx) => {
          const isTech = entry.type === 'Technology & Implementation';
          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Timeline Node Indicator */}
              <div
                aria-hidden="true"
                className={`absolute -left-7 sm:-left-10 top-6 w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border ${
                  isTech
                    ? 'bg-[#0C152E] border-[#3B82F6] text-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.45)]'
                    : 'bg-[#15102C] border-[#8B5CF6] text-[#A78BFA] shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                }`}
              >
                {isTech ? (
                  <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  <HeartHandshake className="w-3 h-3 sm:w-4 sm:h-4" />
                )}
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-3">
                  <span className="text-xs font-mono font-medium text-[#22D3EE]">
                    {entry.period}
                  </span>
                  <span className="text-xs text-[#A5B4C8]">{entry.type}</span>
                </div>

                <h3 className="font-display text-lg sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">
                  {entry.role}
                </h3>
                <p className="text-sm font-medium text-[#93C5FD] mt-1">{entry.organization}</p>

                <p className="mt-3 text-sm sm:text-base text-[#A5B4C8] leading-relaxed">
                  {entry.description}
                </p>

                <ul className="mt-4 pt-4 border-t border-slate-400/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                  {entry.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
