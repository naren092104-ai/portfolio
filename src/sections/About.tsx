import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { PROFILE } from '../data/personal';

const ABOUT_HIGHLIGHTS = [
  'Artificial Intelligence and Data Science graduate',
  'software development',
  'social impact',
  'four years',
  'BumbleB Trust',
  'team leadership',
  'community engagement',
];

const ABOUT_HIGHLIGHT_PATTERN = new RegExp(
  `(${ABOUT_HIGHLIGHTS.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
  'gi',
);

function renderAboutParagraph(text: string) {
  const highlightedPhrases = new Set(ABOUT_HIGHLIGHTS.map((phrase) => phrase.toLowerCase()));

  return text.split(ABOUT_HIGHLIGHT_PATTERN).map((part, index) =>
    highlightedPhrases.has(part.toLowerCase()) ? (
      <span
        key={`${part}-${index}`}
        className="font-semibold text-[#67E8F9]"
      >
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 border-t border-slate-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="About Me"
          title="Technology, leadership, and social impact—built around people."
          description="An AI & Data Science graduate combining software development with four years of community leadership and educational implementation."
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
              <p key={idx}>{renderAboutParagraph(para)}</p>
            ))}

            <div className="space-y-3 pt-1">
              <div>
                <p className="mb-2 text-xs font-mono uppercase tracking-[0.16em] text-[#67E8F9]">
                  Organizations & initiatives
                </p>
                <div className="flex flex-wrap gap-2">
                  {PROFILE.aboutOrganizations.map((organization) => (
                    <span
                      key={organization}
                      className="rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/[0.06] px-3 py-1.5 text-xs font-medium text-[#C7D2E0]"
                    >
                      {organization}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-mono uppercase tracking-[0.16em] text-[#67E8F9]">
                  Technology & development
                </p>
                <div className="flex flex-wrap gap-2">
                  {PROFILE.technicalInterests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-[#6366F1]/25 bg-[#6366F1]/[0.08] px-3 py-1.5 text-xs font-medium text-[#D8CCFF]"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
                  <p className="mb-2 text-xs font-mono uppercase tracking-[0.16em] text-[#67E8F9]">
                    Education
                  </p>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#F8FAFC] mt-0.5">
                    {PROFILE.education.degree}
                  </h3>
                  <p className="mt-2 inline-flex rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/[0.07] px-3 py-1.5 text-xs font-semibold text-[#67E8F9]">
                    Degree completed · {PROFILE.education.completed}
                  </p>
                </div>
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
