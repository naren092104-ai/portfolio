import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Globe } from 'lucide-react';
import type { ProjectItem } from '../../data/projects';
import { getThumbnailSrc } from '../../utils/images';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      layout
      initial={{ y: 18, scale: 0.985 }}
      whileInView={{ y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-48px' }}
      whileHover={{ y: -6 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.48, delay: Math.min(index * 0.045, 0.24), ease: [0.16, 1, 0.3, 1] }}
      className="h-full group relative rounded-2xl glass-panel glass-panel-hover overflow-hidden flex flex-col"
    >
      {/* Subtle top-edge gradient accent on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#22D3EE]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Unified Uniform Preview Window Frame (16:10 across all cards) */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open live preview of ${project.title}`}
        className="relative block overflow-hidden bg-[#0B0E1E] border-b border-slate-400/12 aspect-[16/10] w-full shrink-0"
      >
        {/* Minimal Browser Bar */}
        <div className="relative z-10 flex items-center justify-between px-3.5 sm:px-4 py-2 bg-[#0D1124]/90 border-b border-slate-400/10 text-[11px] text-[#A5B4C8]">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-slate-500/50 group-hover:bg-[#3B82F6]/80 transition-colors" />
            <span className="w-2 h-2 rounded-full bg-slate-500/50 group-hover:bg-[#8B5CF6]/80 transition-colors" />
            <span className="w-2 h-2 rounded-full bg-slate-500/50 group-hover:bg-[#22D3EE]/80 transition-colors" />
          </div>
          <span className="font-mono truncate max-w-[180px] sm:max-w-[220px] opacity-75">
            {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
          <Globe className="w-3.5 h-3.5 text-[#3B82F6] opacity-80 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
        </div>

        {/* Captured Screenshot with Smooth Hover Zoom */}
        <div className="relative w-full h-[calc(100%-33px)] overflow-hidden">
          {!imgError ? (
            <img
              src={getThumbnailSrc(project.image)}
              alt={`${project.title} live website preview`}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#111629] to-[#080914] text-center">
              <Globe className="w-8 h-8 text-[#3B82F6] mb-2" aria-hidden="true" />
              <p className="font-display text-base font-semibold text-[#F8FAFC]">{project.title}</p>
              <p className="text-xs text-[#A5B4C8] mt-1">{project.subtitle}</p>
            </div>
          )}

          {/* Subtle Contrast Scrim */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#080914]/75 via-[#080914]/15 to-transparent opacity-60 group-hover:opacity-35 transition-opacity duration-300"
          />

          {/* Subtle Shimmer Sweep on Hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        </div>
      </a>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-5">
        <div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#22D3EE] mb-2">
            <span>{project.primaryCategory}</span>
            <span aria-hidden="true" className="text-[#A5B4C8]/40">
              ·
            </span>
            <span className="text-[#A5B4C8]">{project.technologies.join(' / ')}</span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-[#93C5FD] mt-0.5">{project.subtitle}</p>

          <p className="mt-3 text-sm text-[#A5B4C8] leading-relaxed">{project.description}</p>
        </div>

        <div className="pt-2 flex items-center justify-between border-t border-slate-400/10">
          <span className="text-xs text-[#A5B4C8]">{project.categories.join(' · ')}</span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors whitespace-nowrap shrink-0 py-1.5 px-3 rounded-lg bg-white/[0.04] hover:bg-[#3B82F6]/15 border border-slate-400/15 hover:border-[#3B82F6]/40"
          >
            <span>View Project</span>
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
