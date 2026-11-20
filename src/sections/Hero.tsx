import { motion } from 'motion/react';
import {
  ArrowRight,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MessageCircle,
  Settings,
  Users,
} from 'lucide-react';
import { PROFILE } from '../data/profile';
import { downloadResume } from '../utils/resume';

const FLOATING_BADGE_STYLES: Record<
  string,
  {
    Icon: typeof Code2;
    iconBox: string;
    iconColor: string;
    cardBorder: string;
    cardGlow: string;
  }
> = {
  Developer: {
    Icon: Code2,
    iconBox: 'bg-[#0EA5E9]/20 border-[#38BDF8]/50',
    iconColor: 'text-[#38BDF8]',
    cardBorder: 'border-[#38BDF8]/40',
    cardGlow: 'shadow-[0_12px_36px_-8px_rgba(56,189,248,0.32)]',
  },
  'Technology Implementation': {
    Icon: Settings,
    iconBox: 'bg-[#8B5CF6]/22 border-[#A855F7]/50',
    iconColor: 'text-[#C084FC]',
    cardBorder: 'border-[#A855F7]/40',
    cardGlow: 'shadow-[0_12px_36px_-8px_rgba(168,85,247,0.32)]',
  },
  Education: {
    Icon: GraduationCap,
    iconBox: 'bg-[#6366F1]/22 border-[#818CF8]/50',
    iconColor: 'text-[#818CF8]',
    cardBorder: 'border-[#6366F1]/40',
    cardGlow: 'shadow-[0_12px_36px_-8px_rgba(99,102,241,0.32)]',
  },
  'Social Impact': {
    Icon: Users,
    iconBox: 'bg-[#A855F7]/22 border-[#C084FC]/50',
    iconColor: 'text-[#D8B4FE]',
    cardBorder: 'border-[#C084FC]/45',
    cardGlow: 'shadow-[0_12px_36px_-8px_rgba(192,132,252,0.34)]',
  },
};

const FLOATING_POSITIONS: Record<
  'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
  string
> = {
  'top-left': 'lg:top-[15%] lg:-left-14 xl:-left-20',
  'top-right': 'lg:top-[22%] lg:-right-2 xl:-right-10',
  'bottom-left': 'lg:bottom-[27%] lg:-left-16 xl:-left-24',
  'bottom-right': 'lg:bottom-[17%] lg:-right-2 xl:-right-8',
};

export function Hero() {
  const nameParts = PROFILE.name.trim().split(' ');
  const firstName = nameParts.slice(0, -1).join(' ') || PROFILE.name;
  const lastInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

  const socialLinks = [
    {
      label: 'GitHub',
      href: PROFILE.contact.githubUrl,
      external: true,
      Icon: Github,
    },
    {
      label: 'LinkedIn',
      href: PROFILE.contact.linkedinUrl,
      external: true,
      Icon: Linkedin,
    },
    {
      label: 'Email',
      href: `mailto:${PROFILE.contact.email}`,
      external: false,
      Icon: Mail,
    },
    {
      label: 'WhatsApp',
      href: PROFILE.contact.whatsappUrl,
      external: true,
      Icon: MessageCircle,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-1rem)] flex items-center pt-24 pb-10 sm:pt-28 lg:pt-20 lg:pb-0 overflow-hidden"
    >
      {/* Ambient Neon Radial Glows + Flowing Lower Cosmic Waves */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.78, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-[18%] right-[22%] w-80 h-80 rounded-full bg-[#38BDF8]/20 blur-[110px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="pointer-events-none absolute top-[28%] right-[6%] w-96 h-96 rounded-full bg-[#A855F7]/24 blur-[120px]"
      />

      {/* Flowing Neon Light Waves Across Bottom Of Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 sm:h-72 overflow-hidden z-10"
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full opacity-90"
        >
          <defs>
            <linearGradient id="heroWaveLeft" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
              <stop offset="42%" stopColor="#3B82F6" stopOpacity="0.7" />
              <stop offset="72%" stopColor="#22D3EE" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="heroWaveRight" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.65" />
              <stop offset="78%" stopColor="#D946EF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="heroWaveFill" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#080914" stopOpacity="0.96" />
            </linearGradient>
            <filter id="waveGlow" x="-10%" y="-40%" width="120%" height="180%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M-40,290 C220,210 420,275 680,220 C940,165 1140,260 1480,120 L1480,320 L-40,320 Z"
            fill="url(#heroWaveFill)"
          />
          <path
            d="M-40,250 C190,320 430,245 720,205 C960,172 1190,195 1480,105"
            fill="none"
            stroke="url(#heroWaveLeft)"
            strokeWidth="2.5"
            filter="url(#waveGlow)"
          />
          <path
            d="M-40,290 C280,225 520,295 820,235 C1060,185 1250,240 1480,165"
            fill="none"
            stroke="url(#heroWaveRight)"
            strokeWidth="2"
            filter="url(#waveGlow)"
          />
          <path
            d="M520,320 C760,215 960,260 1160,175 C1290,120 1390,110 1480,65"
            fill="none"
            stroke="url(#heroWaveRight)"
            strokeWidth="1.5"
            opacity="0.7"
          />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#080914] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Editorial Identity, Intro, Actions & Inline Socials */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left lg:pb-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#E2E8F0] px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md shadow-[0_0_24px_rgba(99,102,241,0.18)]"
            >
              <span aria-hidden="true">👋</span>
              <span>Hello, I&apos;m</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold tracking-tight leading-[1.03]"
            >
              <span className="text-[#F8FAFC]">{firstName}</span>
              {lastInitial && (
                <>
                  {' '}
                  <span className="bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#6366F1] bg-clip-text text-transparent">
                    {lastInitial}
                  </span>
                </>
              )}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-sm sm:text-lg font-medium text-[#E2E8F0]"
            >
              {PROFILE.roles.map((role, idx) => (
                <span key={role} className="inline-flex items-center gap-3">
                  <span>{role}</span>
                  {idx < PROFILE.roles.length - 1 && (
                    <span aria-hidden="true" className="text-[#64748B] font-light">
                      |
                    </span>
                  )}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg text-[#CBD5E1] leading-relaxed border-l-2 border-[#6366F1] pl-4 text-left"
            >
              {PROFILE.heroDescription}
            </motion.p>

            {/* Primary & Secondary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] hover:brightness-110 transition-all shadow-[0_0_30px_-4px_rgba(99,102,241,0.75)] whitespace-nowrap shrink-0"
              >
                <Code2 className="w-4 h-4 text-[#BAE6FD]" aria-hidden="true" />
                <span>View My Work</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </motion.a>

              <motion.button
                type="button"
                onClick={() => {
                  void downloadResume();
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#F8FAFC] border border-white/25 bg-[#0F1326]/70 backdrop-blur-md hover:border-[#38BDF8]/60 hover:bg-[#151B34] transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4 text-white" aria-hidden="true" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            {/* Inline Social Links with Vertical Pipe Dividers */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2"
            >
              {socialLinks.map((social, idx) => {
                const Icon = social.Icon;
                return (
                  <div key={social.label} className="inline-flex items-center gap-4">
                    <a
                      href={social.href}
                      target={social.external ? '_blank' : undefined}
                      rel={social.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#CBD5E1] hover:text-white transition-colors group"
                    >
                      <Icon
                        className="w-4 h-4 text-[#E2E8F0] group-hover:text-[#38BDF8] transition-colors"
                        aria-hidden="true"
                      />
                      <span>{social.label}</span>
                    </a>
                    {idx < socialLinks.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600 select-none">
                        |
                      </span>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Frameless Cutout Portrait Stage + Neon Backlight + Floating Badges */}
          <div className="lg:col-span-5 flex flex-col items-center justify-end lg:self-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-64 sm:w-80 lg:w-[360px] xl:w-[400px] flex items-end justify-center"
            >
              {/* Dual Electric Blue & Magenta-Purple Backlight Aura Behind Shoulders */}
              <motion.div
                aria-hidden="true"
                animate={{ scale: [1, 1.05, 1], opacity: [0.75, 0.95, 0.75] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute top-[24%] -left-10 w-56 h-72 rounded-full bg-[#0EA5E9]/40 blur-[70px]"
              />
              <motion.div
                aria-hidden="true"
                animate={{ scale: [1, 1.07, 1], opacity: [0.75, 0.95, 0.75] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="pointer-events-none absolute top-[22%] -right-8 w-64 h-80 rounded-full bg-[#D946EF]/38 blur-[80px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[12%] inset-x-4 h-40 rounded-full bg-gradient-to-r from-[#38BDF8]/30 via-[#6366F1]/25 to-[#A855F7]/35 blur-[55px]"
              />

              {/* Seamless Background-Free Cutout Portrait */}
              <img
                src={PROFILE.portraitSrc}
                alt="Portrait of Narendhar D"
                className="relative z-10 w-full h-auto max-h-[540px] sm:max-h-[600px] lg:max-h-[640px] object-contain object-bottom select-none drop-shadow-[0_12px_40px_rgba(59,130,246,0.28)] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
              />

              {/* Desktop Floating Glass Badges Positioned Cleanly Around Shoulders & Arms */}
              {PROFILE.floatingLabels.map((item, idx) => {
                const badgeStyle =
                  FLOATING_BADGE_STYLES[item.label] || FLOATING_BADGE_STYLES.Developer;
                const BadgeIcon = badgeStyle.Icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{
                      opacity: 1,
                      y: [0, idx % 2 === 0 ? -6 : 6, 0],
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      opacity: { duration: 0.45, delay: 0.45 + idx * 0.08 },
                      y: {
                        duration: 4.8 + idx * 0.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: idx * 0.3,
                      },
                    }}
                    className={`hidden lg:flex items-center gap-3 absolute ${FLOATING_POSITIONS[item.position]} z-20 rounded-2xl px-4 py-2.5 bg-[#0F1326]/72 backdrop-blur-xl border ${badgeStyle.cardBorder} ${badgeStyle.cardGlow}`}
                  >
                    <span
                      className={`w-9 h-9 rounded-xl border ${badgeStyle.iconBox} flex items-center justify-center shrink-0`}
                    >
                      <BadgeIcon className={`w-4 h-4 ${badgeStyle.iconColor}`} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold text-[#F8FAFC] leading-tight whitespace-nowrap">
                        {item.label}
                      </p>
                      <p className="text-[11px] font-medium text-[#CBD5E1] mt-0.5 whitespace-nowrap">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile/Tablet Responsive 2x2 Floating Badge Grid */}
            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-2.5 mt-4 w-full max-w-md lg:hidden relative z-20">
              {PROFILE.floatingLabels.map((item, idx) => {
                const badgeStyle =
                  FLOATING_BADGE_STYLES[item.label] || FLOATING_BADGE_STYLES.Developer;
                const BadgeIcon = badgeStyle.Icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 + idx * 0.06 }}
                    className={`rounded-2xl px-3.5 py-2.5 bg-[#0F1326]/78 backdrop-blur-xl border ${badgeStyle.cardBorder} flex items-center gap-2.5`}
                  >
                    <span
                      className={`w-8 h-8 rounded-lg border ${badgeStyle.iconBox} flex items-center justify-center shrink-0`}
                    >
                      <BadgeIcon className={`w-4 h-4 ${badgeStyle.iconColor}`} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-xs font-bold text-[#F8FAFC] truncate">
                        {item.label}
                      </p>
                      <p className="text-[11px] font-medium text-[#CBD5E1] mt-0.5 truncate">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
