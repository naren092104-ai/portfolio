import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { PROFILE } from '../data/profile';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Volunteering', href: '#volunteering' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-400/12 bg-[#060712]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/45 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-400/10">
          {/* Brand Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
            <a
              href="#home"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] text-sm font-bold tracking-wider text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] shrink-0"
            >
              {PROFILE.initials}
            </a>
            <div>
              <p className="font-display text-base font-bold text-[#F8FAFC]">{PROFILE.name}</p>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-0.5">
                Full-Stack Developer | Implementation | Social Impact
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-[#A5B4C8]"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back-to-Top Action */}
          <div className="flex items-center gap-2.5">
            <a
              href={`mailto:${PROFILE.contact.email}`}
              aria-label="Email Narendhar D"
              className="w-9 h-9 rounded-xl border border-slate-400/15 bg-[#10152B] flex items-center justify-center text-[#A5B4C8] hover:text-white hover:border-[#3B82F6]/50 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl border border-slate-400/15 bg-[#10152B] flex items-center justify-center text-[#A5B4C8] hover:text-white hover:border-[#3B82F6]/50 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-xl border border-slate-400/15 bg-[#10152B] flex items-center justify-center text-[#A5B4C8] hover:text-white hover:border-[#8B5CF6]/50 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-xl border border-slate-400/15 bg-[#10152B] flex items-center justify-center text-[#A5B4C8] hover:text-white hover:border-[#22D3EE]/50 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <motion.button
              type="button"
              onClick={handleBackToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="ml-1.5 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#E2E8F0] bg-[#111730] border border-slate-400/20 hover:border-[#38BDF8]/50 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#22D3EE]" aria-hidden="true" />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B] text-center sm:text-left">
          <p>© {year} {PROFILE.name}. All rights reserved.</p>
          <p>{PROFILE.location}</p>
        </div>
      </div>
    </footer>
  );
}
