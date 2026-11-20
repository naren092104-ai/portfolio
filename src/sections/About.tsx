import { motion } from 'motion/react';
import { GraduationCap, MapPin } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PROFILE } from '../data/profile';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 border-t border-slate-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="About Me"
          title="Bridging practical engineering with real-world community impact."
          description="Building dependable digital systems while staying rooted in education, mentorship, and grassroots outreach."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative */}
          <motion.div
            initial={{ y: 14 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 text-sm sm:text-lg text-[#A5B4C8] leading-relaxed"
          >
            {PROFILE.aboutParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </motion.div>

          {/* Education & Quick Facts Panel */}
          <motion.div
            initial={{ y: 14 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-5"
          >
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-7 space-y-5"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 border border-[#3B82F6]/30 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#3B82F6]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#22D3EE]">{PROFILE.education.period}</p>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#F8FAFC] mt-0.5">
                    {PROFILE.education.degree}
                  </h3>
                  <p className="text-sm text-[#A5B4C8] mt-1">{PROFILE.education.institution}</p>
                  <p className="text-xs font-mono text-[#93C5FD] mt-2">{PROFILE.education.grade}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-400/12 flex items-center gap-3 text-xs sm:text-sm text-[#CBD5E1]">
                <MapPin className="w-4 h-4 text-[#8B5CF6] shrink-0" aria-hidden="true" />
                <span>{PROFILE.location}</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PROFILE.highlights.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ y: 10 }}
                  whileInView={{ y: 0 }}
                  whileHover={{ y: -3 }}
                  viewport={{ once: true, margin: '-36px' }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="glass-panel glass-panel-hover rounded-xl p-4"
                >
                  <p className="text-xs font-mono text-[#A5B4C8]">{item.label}</p>
                  <p className="font-display text-sm font-semibold text-[#F8FAFC] mt-1">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
