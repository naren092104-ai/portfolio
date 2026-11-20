import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Award, Expand } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Lightbox, type LightboxItem } from '../components/Lightbox';
import { ACHIEVEMENTS } from '../data/achievements';
import { getThumbnailSrc } from '../utils/images';

export function Achievements() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxItems: LightboxItem[] = useMemo(
    () =>
      ACHIEVEMENTS.filter((a) => Boolean(a.image)).map((a) => ({
        src: a.image!,
        title: a.title,
        subtitle: `${a.organization} · ${a.category}`,
      })),
    []
  );

  return (
    <section id="achievements" className="py-16 sm:py-24 lg:py-28 border-t border-slate-400/10 bg-[#0B0E1E]/45">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Awards & Recognitions"
          title="Honors earned through sustained community service."
          description="Recognized by NGOs, educational trusts, and academic leadership for humanitarian impact and student social responsibility."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ACHIEVEMENTS.map((award, idx) => {
            const photoIdx = lightboxItems.findIndex((item) => item.src === award.image);
            return (
              <motion.article
                key={award.id}
                initial={{ y: 14, scale: 0.99 }}
                whileInView={{ y: 0, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true, margin: '-48px' }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col"
              >
                {award.image ? (
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(photoIdx >= 0 ? photoIdx : 0)}
                    aria-label={`View photo of ${award.title}`}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-[#080914] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                  >
                    <img
                      src={getThumbnailSrc(award.image)}
                      alt={`${award.title} — ${award.organization}`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#080914]/80 via-transparent to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />
                    <span className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/55 backdrop-blur border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Expand className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </button>
                ) : (
                  <div className="aspect-[4/3] w-full bg-[#111629] flex items-center justify-center">
                    <Award className="w-12 h-12 text-[#3B82F6]" aria-hidden="true" />
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono text-[#22D3EE] mb-2">
                      {award.category} · {award.organization}
                    </p>
                    <h3 className="font-display text-xl font-bold text-[#F8FAFC] leading-snug">
                      {award.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#A5B4C8] leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(nextIdx) => setLightboxIndex(nextIdx)}
      />
    </section>
  );
}
