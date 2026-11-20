import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { downloadResume } from '../utils/resume';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'volunteering', label: 'Volunteering', href: '#volunteering' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeId, setActiveId] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setActiveId(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080914]/88 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.8)]'
          : 'bg-[#080914]/55 backdrop-blur-lg border-b border-white/8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg"
        >
          <span className="font-display text-xl font-black tracking-tighter bg-gradient-to-r from-[#818CF8] via-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.45)]">
            {PROFILE.initials}
          </span>
          <span className="font-display text-base sm:text-lg font-bold tracking-tight text-[#F8FAFC] group-hover:text-white transition-colors">
            {PROFILE.name}
          </span>
        </a>

        {/* Zone 2: Primary Nav Links */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-1.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-full ${
                  isActive ? 'text-white' : 'text-[#CBD5E1] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3B82F6]/25 via-[#22D3EE]/15 to-[#8B5CF6]/25 border border-[#38BDF8]/55 shadow-[0_0_18px_rgba(56,189,248,0.35)]"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              void downloadResume();
            }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:brightness-110 transition-all shadow-[0_0_24px_-4px_rgba(99,102,241,0.65)] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Download Resume</span>
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-400/20 bg-[#111629]/80 text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-b border-slate-400/15 bg-[#0B0E1D]/95 backdrop-blur-2xl"
          >
            <nav aria-label="Mobile Navigation" className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#3B82F6]/15 text-white border border-[#3B82F6]/30'
                        : 'text-[#A5B4C8] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  void downloadResume();
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] cursor-pointer"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Download Resume</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
