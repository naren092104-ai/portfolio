import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Expand,
  HeartHandshake,
  Users,
  Clock,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { Lightbox, type LightboxItem } from '../components/Lightbox';
import {
  IMPACT_STATS,
  VOLUNTEERING_ORGS,
  VOLUNTEERING_PHOTOS,
} from '../data/volunteering';

const STAT_ICONS = {
  volunteers: Users,
  hours: Clock,
  students: GraduationCap,
  rescues: ShieldCheck,
};

function OrgLogo({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="w-12 h-12 rounded-xl bg-white/95 border border-white/25 shadow-sm p-1.5 flex items-center justify-center shrink-0 overflow-hidden">
      {failed ? (
        <HeartHandshake className="w-6 h-6 text-[#3B82F6]" aria-hidden="true" />
      ) : (
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="w-full h-full object-contain"
        />
      )}
    </div>
  );
}

export function Volunteering() {
  const [selectedOrg, setSelectedOrg] = useState<string>('all');
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    const matching =
      selectedOrg === 'all'
        ? VOLUNTEERING_PHOTOS
        : VOLUNTEERING_PHOTOS.filter((p) => p.orgId === selectedOrg);

    if (selectedOrg === 'all' && !showAllPhotos) {
      return matching.slice(0, 12);
    }
    return matching;
  }, [selectedOrg, showAllPhotos]);

  const lightboxItems: LightboxItem[] = useMemo(
    () =>
      filteredPhotos.map((photo) => ({
        src: photo.src,
        title: photo.caption,
        subtitle: photo.orgName,
      })),
    [filteredPhotos]
  );

  return (
    <section id="volunteering" className="py-20 sm:py-28 border-t border-slate-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Volunteering & Social Impact"
          title="3.5+ years serving schools, shelters, and communities."
          description="Authentic moments from classrooms in Dharmapuri, rescue coordination in Erode, rural surveys in Kolli Hills, and campus mobilization at KSRCT."
        />

        {/* Verified Social Impact Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {IMPACT_STATS.map((stat, idx) => {
            const Icon = STAT_ICONS[stat.id as keyof typeof STAT_ICONS] || HeartHandshake;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel rounded-2xl p-6 relative overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#22D3EE]"
                />
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 border border-[#3B82F6]/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#22D3EE]" aria-hidden="true" />
                  </div>
                </div>
                <p className="font-display text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm font-semibold text-[#93C5FD] mt-1">{stat.label}</p>
                <p className="text-xs text-[#A5B4C8] mt-2 leading-relaxed">{stat.detail}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Partner Organizations Directory */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                Organizations & Leadership Roles
              </h3>
              <p className="text-sm text-[#A5B4C8] mt-1">
                Select an organization to filter the field photography gallery below.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VOLUNTEERING_ORGS.map((org, idx) => {
              const isSelected = selectedOrg === org.id;
              return (
                <motion.button
                  key={org.id}
                  type="button"
                  onClick={() => {
                    setSelectedOrg(isSelected ? 'all' : org.id);
                    setShowAllPhotos(true);
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className={`text-left glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 cursor-pointer transition-all ${
                    isSelected ? 'ring-2 ring-[#3B82F6] border-[#3B82F6]/60 bg-[#131B36]/90' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <OrgLogo src={org.logo} name={org.name} />
                      <div className="text-right min-w-0">
                        <span className="block text-xs font-mono text-[#22D3EE]">
                          {org.period}
                        </span>
                        {org.recognition && (
                          <span className="block text-xs text-[#A5B4C8] truncate max-w-[165px] sm:max-w-[190px] mt-0.5">
                            {org.recognition}
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="font-display text-lg sm:text-xl font-bold text-[#F8FAFC]">{org.name}</h4>
                    <p className="text-sm font-medium text-[#93C5FD] mt-0.5">{org.role}</p>

                    <p className="mt-3 text-sm text-[#A5B4C8] leading-relaxed">{org.summary}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-400/12">
                    <p className="text-xs text-[#CBD5E1] leading-relaxed">
                      {org.activities.join(' · ')}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Editorial Field Photo Gallery */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                Field & Community Gallery
              </h3>
              <p className="text-sm text-[#A5B4C8] mt-1">
                Original photographs from events, classrooms, rescue drives, and volunteer teams.
                Click any photo to view full screen.
              </p>
            </div>

            {/* Organization Photo Filter Bar */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#111629]/85 border border-slate-400/15 overflow-x-auto no-scrollbar sm:flex-wrap">
              <button
                type="button"
                onClick={() => setSelectedOrg('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedOrg === 'all'
                    ? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white'
                    : 'text-[#A5B4C8] hover:text-white'
                }`}
              >
                All ({VOLUNTEERING_PHOTOS.length})
              </button>
              {VOLUNTEERING_ORGS.map((org) => {
                const count = VOLUNTEERING_PHOTOS.filter((p) => p.orgId === org.id).length;
                const shortName = org.name.split(' (')[0];
                return (
                  <button
                    key={org.id}
                    type="button"
                    onClick={() => setSelectedOrg(org.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      selectedOrg === org.id
                        ? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white'
                        : 'text-[#A5B4C8] hover:text-white'
                    }`}
                  >
                    {shortName} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Auto-Moving Uniform-Frame Kinetic Highlight Strip */}
          {selectedOrg === 'all' && (
            <div className="relative overflow-hidden rounded-2xl border border-slate-400/12 bg-[#0B0E1E]/60 py-3.5 mb-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#080914] to-transparent z-10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#080914] to-transparent z-10"
              />
              <div className="animate-marquee gap-4 px-4">
                {[...VOLUNTEERING_PHOTOS.slice(0, 10), ...VOLUNTEERING_PHOTOS.slice(0, 10)].map(
                  (photo, i) => {
                    const actualIdx = i % 10;
                    return (
                      <button
                        key={`reel-${photo.id}-${i}`}
                        type="button"
                        onClick={() => setLightboxIndex(actualIdx)}
                        className="group relative w-60 sm:w-72 aspect-[4/3] shrink-0 overflow-hidden rounded-xl border border-slate-400/15 bg-[#111629] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                      >
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060710]/90 via-transparent to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-3">
                          <p className="text-[10px] font-mono text-[#22D3EE] truncate">
                            {photo.orgName}
                          </p>
                          <p className="text-xs font-medium text-[#F8FAFC] line-clamp-1 mt-0.5">
                            {photo.caption}
                          </p>
                        </div>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          )}

          {/* Uniform-Frame Animated Photo Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, idx) => (
                <motion.button
                  key={photo.id}
                  layout
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  initial={{ opacity: 0, y: 14, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.32, delay: Math.min(idx * 0.025, 0.2) }}
                  aria-label={`Open photo: ${photo.caption}`}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-400/15 hover:border-[#3B82F6]/45 bg-[#111629] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading={idx < 6 ? 'eager' : 'lazy'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Contrast Scrim & Editorial Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060710]/90 via-[#060710]/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/50 backdrop-blur border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Expand className="w-4 h-4" aria-hidden="true" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-[11px] font-mono text-[#22D3EE] truncate">
                      {photo.orgName}
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-[#F8FAFC] line-clamp-2 mt-0.5">
                      {photo.caption}
                    </p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Expand / Collapse All 38 Authentic Photos */}
          {selectedOrg === 'all' && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllPhotos((prev) => !prev)}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-[#F8FAFC] glass-panel hover:border-[#3B82F6]/50 transition-all cursor-pointer"
              >
                {showAllPhotos
                  ? 'Show Featured Gallery (12 Photos)'
                  : `View All ${VOLUNTEERING_PHOTOS.length} Volunteering Photos`}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(nextIdx) => setLightboxIndex(nextIdx)}
      />
    </section>
  );
}
