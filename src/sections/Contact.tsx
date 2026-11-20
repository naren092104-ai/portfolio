import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { PROFILE } from '../data/personal';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [preparedDraft, setPreparedDraft] = useState<{
    mailtoHref: string;
    whatsappHref: string;
    plainText: string;
  } | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.contact.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleCopyDraft = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedDraft(true);
      window.setTimeout(() => setCopiedDraft(false), 2200);
    } catch {
      setCopiedDraft(false);
    }
  };

  const validate = (next: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (next.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    if (!EMAIL_PATTERN.test(next.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (next.subject.trim().length < 3) {
      nextErrors.subject = 'Please add a short subject for your inquiry.';
    }
    if (next.message.trim().length < 10) {
      nextErrors.message = 'Please write a brief message (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleFieldChange = (field: keyof FormValues, val: string) => {
    const updated = { ...values, [field]: val };
    setValues(updated);
    if (errors[field]) {
      const rechecked = validate(updated);
      setErrors((prev) => ({ ...prev, [field]: rechecked[field] }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const cleanName = values.name.trim();
    const cleanEmail = values.email.trim();
    const cleanSubject = values.subject.trim();
    const cleanMessage = values.message.trim();

    const bodyText = `Hi Narendhar,\n\n${cleanMessage}\n\nBest regards,\n${cleanName}\nReply-to: ${cleanEmail}`;
    const mailtoHref = `mailto:${PROFILE.contact.email}?subject=${encodeURIComponent(
      cleanSubject
    )}&body=${encodeURIComponent(bodyText)}`;
    const whatsappHref = `${PROFILE.contact.whatsappUrl}?text=${encodeURIComponent(
      `Hi Narendhar, I'm ${cleanName} (${cleanEmail}).\nSubject: ${cleanSubject}\n\n${cleanMessage}`
    )}`;

    setPreparedDraft({
      mailtoHref,
      whatsappHref,
      plainText: `To: ${PROFILE.contact.email}\nSubject: ${cleanSubject}\nFrom: ${cleanName} <${cleanEmail}>\n\n${cleanMessage}`,
    });

    window.location.href = mailtoHref;
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-28 border-t border-slate-400/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Outer Animated Neon Border Container */}
        <motion.div
          initial={{ y: 18 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-64px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-[#3B82F6]/45 via-[#8B5CF6]/40 to-[#22D3EE]/45 shadow-[0_30px_100px_-25px_rgba(59,130,246,0.3)]"
        >
          {/* Animated Scanning Top Highlight Accent */}
          <motion.div
            aria-hidden="true"
            animate={{ x: ['-35%', '135%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent blur-[1px]"
          />

          <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#0E142B] via-[#10122A] to-[#080B1A] p-6 sm:p-10 lg:p-14">
            {/* Ambient Background Glows */}
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1, 1.08, 1], opacity: [0.28, 0.45, 0.28] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -top-28 -right-24 w-96 h-96 rounded-full bg-[#3B82F6]/25 blur-[110px]"
            />
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1, 1.06, 1], opacity: [0.25, 0.42, 0.25] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="pointer-events-none absolute -bottom-28 -left-24 w-96 h-96 rounded-full bg-[#8B5CF6]/25 blur-[110px]"
            />

            {/* Top Header Row */}
            <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-slate-400/12">
              <div className="space-y-4 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/35 text-xs font-medium text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span>Open to Opportunities</span>
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#F8FAFC] leading-[1.06]">
                  LET&apos;S BUILD SOMETHING{' '}
                  <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">
                    MEANINGFUL.
                  </span>
                </h2>

                <p className="text-sm sm:text-base lg:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl">
                  Have a project in mind, an opportunity, or an idea? Let&apos;s connect and turn
                  it into something impactful.
                </p>
              </div>
            </div>

            {/* Main 2-Column Content Grid */}
            <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 pt-8 sm:pt-10 items-start">
              {/* Left Column: Direct Contact Details & Social Channels */}
              <div className="lg:col-span-5 space-y-5">
                <div className="glass-panel rounded-2xl p-5 sm:p-6 space-y-4 border border-slate-400/15">
                  {/* Email Row */}
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-400/12">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 border border-[#3B82F6]/30 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-[#60A5FA]" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                          Email
                        </p>
                        <a
                          href={`mailto:${PROFILE.contact.email}`}
                          className="text-sm sm:text-[15px] font-semibold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors truncate block"
                        >
                          {PROFILE.contact.email}
                        </a>
                      </div>
                    </div>

                    <motion.button
                      type="button"
                      onClick={handleCopyEmail}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      aria-label="Copy email address"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.06] hover:bg-[#3B82F6]/20 text-[#F8FAFC] border border-white/12 hover:border-[#38BDF8]/40 transition-colors cursor-pointer shrink-0"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                          <span className="text-emerald-300">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#93C5FD]" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Phone / WhatsApp Row */}
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-400/12">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-[#A78BFA]" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                          Phone / WhatsApp
                        </p>
                        <a
                          href={`tel:${PROFILE.contact.phone.replace(/\s+/g, '')}`}
                          className="text-sm sm:text-[15px] font-semibold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors tabular-nums"
                        >
                          {PROFILE.contact.phone}
                        </a>
                      </div>
                    </div>

                    <motion.a
                      href={PROFILE.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#22D3EE]/10 hover:bg-[#22D3EE]/20 text-[#67E8F9] border border-[#22D3EE]/30 transition-colors shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Chat</span>
                    </motion.a>
                  </div>

                  {/* Location Row */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#22D3EE]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                        Location
                      </p>
                      <p className="text-sm sm:text-[15px] font-medium text-[#F8FAFC] leading-snug mt-0.5">
                        {PROFILE.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Connect Cards Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.a
                    href={`mailto:${PROFILE.contact.email}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-panel glass-panel-hover rounded-xl px-4 py-3.5 flex items-center justify-between gap-2 group"
                  >
                    <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#F8FAFC]">
                      <Mail className="w-4 h-4 text-[#60A5FA]" aria-hidden="true" />
                      <span>Email</span>
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#64748B] group-hover:text-[#22D3EE] transition-colors"
                      aria-hidden="true"
                    />
                  </motion.a>

                  <motion.a
                    href={`tel:${PROFILE.contact.phone.replace(/\s+/g, '')}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-panel glass-panel-hover rounded-xl px-4 py-3.5 flex items-center justify-between gap-2 group"
                  >
                    <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#F8FAFC]">
                      <Phone className="w-4 h-4 text-[#A78BFA]" aria-hidden="true" />
                      <span>Call Now</span>
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#64748B] group-hover:text-[#A78BFA] transition-colors"
                      aria-hidden="true"
                    />
                  </motion.a>

                  <motion.a
                    href={PROFILE.contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-panel glass-panel-hover rounded-xl px-4 py-3.5 flex items-center justify-between gap-2 group"
                  >
                    <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#F8FAFC]">
                      <Linkedin className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
                      <span>LinkedIn</span>
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#64748B] group-hover:text-[#38BDF8] transition-colors"
                      aria-hidden="true"
                    />
                  </motion.a>

                  <motion.a
                    href={PROFILE.contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-panel glass-panel-hover rounded-xl px-4 py-3.5 flex items-center justify-between gap-2 group"
                  >
                    <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#F8FAFC]">
                      <Github className="w-4 h-4 text-[#C084FC]" aria-hidden="true" />
                      <span>GitHub</span>
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#64748B] group-hover:text-[#C084FC] transition-colors"
                      aria-hidden="true"
                    />
                  </motion.a>
                </div>
              </div>

              {/* Right Column: Interactive Validated Contact Form */}
              <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-400/15">
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-[#CBD5E1] mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        value={values.name}
                        onChange={(e) => handleFieldChange('name', e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className={`w-full rounded-xl bg-[#080B18]/80 px-4 py-3 text-sm text-[#F8FAFC] placeholder:text-[#64748B] border transition-all duration-200 focus:outline-none ${
                          errors.name
                            ? 'border-rose-400/70 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20'
                            : 'border-slate-400/20 hover:border-slate-400/35 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#3B82F6]/25'
                        }`}
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="mt-1.5 text-xs text-rose-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-[#CBD5E1] mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={values.email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className={`w-full rounded-xl bg-[#080B18]/80 px-4 py-3 text-sm text-[#F8FAFC] placeholder:text-[#64748B] border transition-all duration-200 focus:outline-none ${
                          errors.email
                            ? 'border-rose-400/70 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20'
                            : 'border-slate-400/20 hover:border-slate-400/35 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#3B82F6]/25'
                        }`}
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="mt-1.5 text-xs text-rose-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-medium text-[#CBD5E1] mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="Project collaboration, role, or inquiry"
                      value={values.subject}
                      onChange={(e) => handleFieldChange('subject', e.target.value)}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      className={`w-full rounded-xl bg-[#080B18]/80 px-4 py-3 text-sm text-[#F8FAFC] placeholder:text-[#64748B] border transition-all duration-200 focus:outline-none ${
                        errors.subject
                          ? 'border-rose-400/70 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-slate-400/20 hover:border-slate-400/35 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/25'
                      }`}
                    />
                    {errors.subject && (
                      <p id="contact-subject-error" className="mt-1.5 text-xs text-rose-400">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-[#CBD5E1] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Tell me a little about your project, timeline, or how we can work together..."
                      value={values.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`w-full rounded-xl bg-[#080B18]/80 px-4 py-3 text-sm text-[#F8FAFC] placeholder:text-[#64748B] border transition-all duration-200 focus:outline-none resize-y min-h-[118px] ${
                        errors.message
                          ? 'border-rose-400/70 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-slate-400/20 hover:border-slate-400/35 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE]/25'
                      }`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1.5 text-xs text-rose-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-[#94A3B8]">
                      Opens your email client pre-addressed to{' '}
                      <span className="text-[#CBD5E1] font-medium">{PROFILE.contact.email}</span>.
                    </p>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] hover:brightness-110 transition-all shadow-[0_12px_32px_-8px_rgba(99,102,241,0.65)] cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Send Message</span>
                    </motion.button>
                  </div>
                </form>

                {/* Honest Client Dispatch Panel (Shown Only After Valid Submit) */}
                <AnimatePresence>
                  {preparedDraft && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="mt-5 rounded-xl border border-[#38BDF8]/35 bg-[#0A1328]/90 p-4 space-y-3"
                    >
                      <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed">
                        Because this static portfolio has no server-side mail endpoint configured,
                        your message draft was prepared for your mail client rather than submitted
                        silently. If your mail app didn&apos;t open, choose an option below:
                      </p>

                      <div className="flex flex-wrap items-center gap-2.5">
                        <a
                          href={preparedDraft.mailtoHref}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-[#3B82F6]/85 hover:bg-[#3B82F6] transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Open Email App</span>
                        </a>

                        <a
                          href={preparedDraft.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#67E8F9] bg-[#22D3EE]/12 border border-[#22D3EE]/35 hover:bg-[#22D3EE]/20 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Send on WhatsApp</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => {
                            void handleCopyDraft(preparedDraft.plainText);
                          }}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#CBD5E1] bg-white/[0.06] border border-white/15 hover:bg-white/[0.12] transition-colors cursor-pointer"
                        >
                          {copiedDraft ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                              <span className="text-emerald-300">Message Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>Copy Draft</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
