import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, LayoutGrid, PlaySquare } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectCard } from '../components/cards/ProjectCard';
import { PROJECT_FILTERS, PROJECTS, type ProjectFilter } from '../data/projects';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All Projects');
  const [viewMode, setViewMode] = useState<'grid' | 'slide'>('grid');
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All Projects') return PROJECTS;
    return PROJECTS.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    setSlideIndex(0);
  }, [activeFilter]);

  useEffect(() => {
    if (viewMode !== 'slide' || paused || filteredProjects.length <= 1) return;
    const timer = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [viewMode, paused, filteredProjects.length]);

  const activeProject = filteredProjects[slideIndex] || filteredProjects[0];

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 border-t border-slate-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <SectionHeading
              kicker="Selected Work"
              title="Live systems, ERPs, and digital products."
              description="Eight production applications built for educational networks, volunteer organizations, retail operations, scientific research, and local enterprises."
            />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 lg:mb-14">
            {/* Interactive Filter Controls */}
            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="flex items-center gap-1 p-1.5 rounded-xl bg-[#111629]/85 border border-slate-400/15 overflow-x-auto no-scrollbar sm:flex-wrap"
            >
              {PROJECT_FILTERS.map((filter) => {
                const isSelected = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveFilter(filter)}
                    className={`relative px-3 sm:px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      isSelected ? 'text-white' : 'text-[#A5B4C8] hover:text-white'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="projectFilterPill"
                        transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] shadow-[0_6px_18px_-4px_rgba(59,130,246,0.45)]"
                      />
                    )}
                    <span className="relative z-10">{filter}</span>
                  </button>
                );
              })}
            </div>

            {/* Uniform Frame View Switcher (Grid / Animated Slide) */}
            <div className="inline-flex items-center gap-1 p-1.5 rounded-xl bg-[#111629]/85 border border-slate-400/15 self-start sm:self-auto shrink-0">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                aria-label="Grid frame view"
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#3B82F6]/25 text-white border border-[#3B82F6]/40'
                    : 'text-[#A5B4C8] hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('slide')}
                aria-label="Animated slide view"
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  viewMode === 'slide'
                    ? 'bg-[#8B5CF6]/25 text-white border border-[#8B5CF6]/40'
                    : 'text-[#A5B4C8] hover:text-white'
                }`}
              >
                <PlaySquare className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Slide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Uniform-Frame Project Display */}
        {viewMode === 'grid' ? (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="space-y-6"
          >
            <div className="relative max-w-3xl mx-auto">
              <AnimatePresence mode="wait">
                {activeProject && (
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, x: 40, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -40, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ProjectCard project={activeProject} index={0} />
                  </motion.div>
                )}
              </AnimatePresence>

              {filteredProjects.length > 1 && (
                <div className="mt-5 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setSlideIndex(
                        (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#F8FAFC] glass-panel hover:border-[#3B82F6]/50 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Prev</span>
                  </button>

                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                    {filteredProjects.map((p, idx) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSlideIndex(idx)}
                        aria-label={`Show ${p.title}`}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          idx === slideIndex
                            ? 'w-7 bg-gradient-to-r from-[#3B82F6] to-[#22D3EE]'
                            : 'w-2 bg-slate-500/40 hover:bg-slate-400/70'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSlideIndex((prev) => (prev + 1) % filteredProjects.length)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#F8FAFC] glass-panel hover:border-[#3B82F6]/50 transition-all cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
