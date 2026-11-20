import { motion } from 'motion/react';
import type { TechItem } from '../../data/skills';

function TechLogo({ id, accent }: { id: string; accent: string }) {
  switch (id) {
    case 'python':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" aria-hidden="true">
          <path
            d="M15.8 4C10.9 4 11.2 6.1 11.2 6.1l.01 2.2h4.7v.7H8.8S5.5 8.6 5.5 13.7s2.9 4.9 2.9 4.9h1.7v-2.4s-.1-2.9 2.9-2.9h4.9s2.7.04 2.7-2.6V6.8S21 4 15.8 4Zm-2.5 1.7a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"
            fill="#3776AB"
          />
          <path
            d="M16.2 28c4.9 0 4.6-2.1 4.6-2.1l-.01-2.2h-4.7v-.7h7.1s3.3.4 3.3-4.7-2.9-4.9-2.9-4.9h-1.7v2.4s.1 2.9-2.9 2.9h-4.9s-2.7-.04-2.7 2.6v3.9S11 28 16.2 28Zm2.5-1.7a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z"
            fill="#FFD43B"
          />
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" aria-hidden="true">
          <path
            d="M12.5 22.8s-1 .6.7.8c2.1.2 3.2.2 5.5-.2 0 0 .6.4 1.5.7-5.2 2.2-11.8-.1-7.7-1.3Zm-.6-2.8s-1.1.8.6 1c2.2.2 4 .2 7-.3 0 0 .4.4 1.1.7-6.3 1.8-13.3.1-8.7-1.4Z"
            fill="#5382A1"
          />
          <path
            d="M17.2 15.3c1.3 1.5-.3 2.8-.3 2.8s3.3-1.7 1.8-3.8c-1.4-2-2.5-2.9 3.4-6.3 0 0-9.2 2.3-4.9 7.3Z"
            fill="#F89820"
          />
          <path
            d="M23.7 25.1s.8.6-.8 1.1c-3.1.9-12.8 1.2-15.5 0-1-.4.9-1 1.4-1.1.6-.1.9-.1.9-.1-1-.7-6.7 1.4-2.9 2 10.4 1.7 18.9-.8 16.9-1.9Z"
            fill="#5382A1"
          />
          <path
            d="M16 4s3.2 3.2-3 8.1c-5 3.9-1.1 6.2 0 8.7-2.9-2.6-5-4.9-3.6-7C11.5 10.6 17.5 9.1 16 4Z"
            fill="#F89820"
          />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="2.4" fill="#61DAFB" />
          <ellipse cx="16" cy="16" rx="12" ry="4.6" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="4.6"
            transform="rotate(60 16 16)"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="4.6"
            transform="rotate(120 16 16)"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
        </svg>
      );
    case 'html':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" aria-hidden="true">
          <path d="M6 5h20l-1.8 19.6L16 27l-8.2-2.4L6 5Z" fill="#E34F26" />
          <path d="M16 6.7v18.6l6.6-1.9 1.5-16.7H16Z" fill="#EF652A" />
          <path
            d="M16 13.5h-4l-.3-3.1H16V7.5H8.8l.8 8.9H16v-2.9Zm0 7.6-.1.1-3.3-.9-.2-2.4h-3l.4 4.7 6.1 1.7h.1v-3.2Z"
            fill="#EBEBEB"
          />
          <path
            d="M16 13.5v2.9h3.7l-.3 3.9-3.4.9v3.2l6.1-1.7.8-9.2H16Zm0-6v2.9h7.3l.3-2.9H16Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" aria-hidden="true">
          <path d="M6 5h20l-1.8 19.6L16 27l-8.2-2.4L6 5Z" fill="#1572B6" />
          <path d="M16 6.7v18.6l6.6-1.9 1.5-16.7H16Z" fill="#33A9DC" />
          <path
            d="M16 13.5h-4.4l.3 2.9H16v-2.9Zm0-6H9.3l.3 2.9H16V7.5Zm0 13.6-3.3-.9-.2-2.3h-3l.4 4.6 6.1 1.7v-3.1Z"
            fill="#EBEBEB"
          />
          <path
            d="M19.8 16.4l-.4 3.9-3.4.9v3.1l6.1-1.7.9-10.3H16v2.9h4l-.2 1.2Zm-3.8-8.9v2.9h7.1l.3-2.9H16Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" aria-hidden="true">
          <path
            d="M16 3.5 26.5 9.6v12.8L16 28.5 5.5 22.4V9.6L16 3.5Z"
            stroke="#539E43"
            strokeWidth="2"
            fill="rgba(83,158,67,0.14)"
          />
          <path
            d="M13 12v8m0-8 6 8m0-8v8"
            stroke="#83CD29"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" aria-hidden="true">
          <ellipse cx="16" cy="9" rx="9" ry="3.5" stroke="#4479A1" strokeWidth="1.8" />
          <path
            d="M7 9v14c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5V9"
            stroke="#4479A1"
            strokeWidth="1.8"
          />
          <path d="M7 16c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5" stroke="#F29111" strokeWidth="1.8" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" aria-hidden="true">
          <path
            d="M16 4c2.8 4.4 5.5 7.7 5.5 12.6 0 4.4-2.5 7.4-5.5 9.4-3-2-5.5-5-5.5-9.4C10.5 11.7 13.2 8.4 16 4Z"
            fill="#47A248"
          />
          <path d="M16 8v19" stroke="#B8E986" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'supabase':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" aria-hidden="true">
          <path
            d="M17.2 26.8c-.6.8-1.9.4-1.9-.6V17h8.2c1.4 0 2.2 1.6 1.3 2.7l-7.6 7.1Z"
            fill="#3ECF8E"
          />
          <path
            d="M14.8 5.2c.6-.8 1.9-.4 1.9.6V15H8.5c-1.4 0-2.2-1.6-1.3-2.7l7.6-7.1Z"
            fill="#24B47E"
          />
        </svg>
      );
    case 'cloudflare':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" aria-hidden="true">
          <path
            d="M22.8 22H9.6a4.1 4.1 0 0 1-.4-8.2 5.7 5.7 0 0 1 11-1.3 3.7 3.7 0 0 1 4.1 3.5c2 .3 3.2 1.8 3.2 3.3 0 1.6-1.3 2.7-4.7 2.7Z"
            fill="#F38020"
          />
          <path d="M22.5 18.2h4.2" stroke="#FBAE40" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'canva':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="11" fill="url(#canvaGrad)" />
          <defs>
            <linearGradient id="canvaGrad" x1="5" y1="5" x2="27" y2="27">
              <stop stopColor="#00C4CC" />
              <stop offset="1" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
          <path
            d="M19.8 19.2c-.9 1.2-2.2 1.9-3.6 1.9-2.4 0-4.1-2-4.1-4.8 0-3 2-5.4 4.5-5.4 1.5 0 2.6.7 3 1.7"
            stroke="#FFFFFF"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <span
          className="w-7 h-7 rounded-lg inline-flex items-center justify-center font-bold text-xs text-white"
          style={{ backgroundColor: accent }}
        >
          {id.slice(0, 2).toUpperCase()}
        </span>
      );
  }
}

export function SkillCard({ skill, index }: { skill: TechItem; index: number }) {
  return (
    <motion.div
      initial={{ y: 12, scale: 0.985 }}
      whileInView={{ y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-36px' }}
      transition={{ duration: 0.38, delay: Math.min(index * 0.035, 0.18), ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group glass-panel glass-panel-hover rounded-xl p-4 flex items-center gap-3.5"
    >
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
        style={{ backgroundColor: `${skill.accent}18` }}
      >
        <TechLogo id={skill.id} accent={skill.accent} />
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-sm sm:text-base font-semibold text-[#F8FAFC] leading-tight truncate">
          {skill.name}
        </h3>
        <p className="text-xs text-[#A5B4C8] mt-0.5 truncate">{skill.note}</p>
      </div>
    </motion.div>
  );
}
