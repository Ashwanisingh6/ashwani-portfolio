import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, AlertCircle, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  initialInquiryType?: 'internship' | 'collaboration' | 'general';
}

export const Contact: React.FC<ContactProps> = ({ initialInquiryType = 'internship' }) => {
  const [inquiryType, setInquiryType] = useState<'internship' | 'collaboration' | 'general'>(initialInquiryType);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    honeypot: '', // anti-bot field
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInquiryChange = (type: 'internship' | 'collaboration' | 'general') => {
    setInquiryType(type);
    if (!formState.subject) {
      if (type === 'internship') {
        setFormState((prev) => ({ ...prev, subject: 'Internship Opportunity Inquiry for Ashwani' }));
      } else if (type === 'collaboration') {
        setFormState((prev) => ({ ...prev, subject: 'Project / Business Collaboration Inquiry' }));
      } else {
        setFormState((prev) => ({ ...prev, subject: 'Connecting with Ashwani Pratap Singh' }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Bot honeypot check
    if (formState.honeypot) {
      return;
    }

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Create a well-formatted mailto link to open sender's email client directly with all details
    const subjectLine = encodeURIComponent(
      formState.subject.trim() || `[${inquiryType.toUpperCase()}] Portfolio Contact from ${formState.name}`
    );
    const bodyText = encodeURIComponent(
      `Hello Ashwani,\n\nName: ${formState.name}\nEmail: ${formState.email}\nOrganization: ${
        formState.organization || 'N/A'
      }\nInquiry Type: ${inquiryType}\n\nMessage:\n${formState.message}\n\nSent via Ashwani Pratap Singh Portfolio Website`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subjectLine}&body=${bodyText}`;
    window.location.href = mailtoUrl;

    setStatus('success');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative z-10" aria-label="Contact Ashwani">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let’s Build the <span className="text-gradient-purple">Future Together</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Whether you have an internship opportunity, academic collaboration, or business inquiry, I look forward to connecting.
          </p>
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side: Verified Contact Methods (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl glass-panel bg-[#0b0b18]/85 border border-purple-500/25">
              <h3 className="text-xl font-bold text-white mb-2">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Connect via official verified channels. Response time is typically within 24–48 hours.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-[#121224] border border-purple-500/20 mb-4 group hover:border-purple-400/40 transition-colors">
                <div className="text-[11px] font-bold uppercase tracking-wider text-purple-400 mb-1 flex items-center justify-between">
                  <span>Official Email</span>
                  <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                </div>
                <div className="text-sm font-semibold text-white break-all mb-3">
                  {PERSONAL_INFO.email}
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex-1 text-center py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
                  >
                    Open Mail Client
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-[#19192e] hover:bg-[#22223e] text-purple-300 hover:text-white border border-purple-500/30 transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#121224] border border-purple-500/20 hover:border-purple-400/50 hover:bg-[#16162c] transition-all mb-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                      LinkedIn Profile
                    </div>
                    <div className="text-[11px] text-slate-400">
                      /in/ashwani-pratap-singh-6b1653373
                    </div>
                  </div>
                </div>
                <span className="text-xs text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Connect →
                </span>
              </a>

              {/* WhatsApp (Configurable) */}
              <div
                onClick={() => {
                  if (PERSONAL_INFO.whatsappNumber) {
                    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber}`, '_blank');
                  } else {
                    setShowWhatsAppModal(true);
                  }
                }}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#121224] border border-purple-500/20 hover:border-emerald-500/40 hover:bg-[#131c18] transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                      WhatsApp Messaging
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {PERSONAL_INFO.whatsappNumber
                        ? 'Click to start direct chat'
                        : 'Configurable direct messaging'}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-semibold">
                  {PERSONAL_INFO.whatsappNumber ? 'Chat →' : 'Setup Info'}
                </span>
              </div>

              {/* Location Badge */}
              <div className="mt-6 pt-5 border-t border-purple-500/15 flex items-start gap-3 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Location:</span> {PERSONAL_INFO.location}
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Campus: Allenhouse Business School, Rooma, Kanpur
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl glass-panel bg-[#0b0b18]/85 border border-purple-500/25">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Choose your inquiry topic to help prioritize your communication.
              </p>

              {/* Inquiry Type Radio Pills */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
                  Inquiry Purpose
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleInquiryChange('internship')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                      inquiryType === 'internship'
                        ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-900/40'
                        : 'bg-[#121224] text-slate-400 border-purple-500/15 hover:text-white'
                    }`}
                  >
                    💼 Recruitment & Internship
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInquiryChange('collaboration')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                      inquiryType === 'collaboration'
                        ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-900/40'
                        : 'bg-[#121224] text-slate-400 border-purple-500/15 hover:text-white'
                    }`}
                  >
                    🤝 Project Collaboration
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInquiryChange('general')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                      inquiryType === 'general'
                        ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-900/40'
                        : 'bg-[#121224] text-slate-400 border-purple-500/15 hover:text-white'
                    }`}
                  >
                    ✉️ General Inquiries
                  </button>
                </div>
              </div>

              {/* The Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for bot protection */}
                <input
                  type="text"
                  name="user_nickname"
                  value={formState.honeypot}
                  onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1">
                      Your Full Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#121224] border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1">
                      Your Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className="w-full bg-[#121224] border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-org" className="block text-xs font-medium text-slate-300 mb-1">
                      Company / College / Organization
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      placeholder="Optional"
                      className="w-full bg-[#121224] border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Subject line"
                      className="w-full bg-[#121224] border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell Ashwani about the opportunity, role requirements, or collaboration idea..."
                    className="w-full bg-[#121224] border border-purple-500/20 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  />
                </div>

                {/* Status messages */}
                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Message prepared for dispatch!</div>
                      <div className="text-[11px] text-emerald-400/90 mt-0.5">
                        Your email client has been opened with your pre-formatted message addressed to {PERSONAL_INFO.email}.
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-purple-900/40 hover:from-purple-500 hover:to-indigo-500 transition-all hover:scale-101 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Ashwani</span>
                </button>

                <p className="text-[10px] text-slate-400 text-center pt-2">
                  🔒 Privacy Guarantee: Ashwani does not store, share, or sell contact submissions. Inquiries are kept strictly confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Configuration Modal */}
      {showWhatsAppModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowWhatsAppModal(false);
          }}
        >
          <div className="relative w-full max-w-md bg-[#0d0d1a] border border-purple-500/30 rounded-3xl p-6 shadow-2xl">
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              WhatsApp Channel Configuration
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Per strict privacy guidelines, phone numbers are not fabricated. To enable direct WhatsApp click-to-chat on this portfolio:
            </p>
            <ol className="space-y-2 text-xs text-slate-300 mb-6 bg-purple-950/30 p-3.5 rounded-xl border border-purple-500/20">
              <li>1. Open <code className="text-purple-300 font-mono">src/data/portfolioData.ts</code></li>
              <li>2. Locate <code className="text-purple-300 font-mono">whatsappNumber: ''</code></li>
              <li>3. Insert your verified phone number in international format (e.g. <code className="text-emerald-400 font-mono">'919876543210'</code>).</li>
            </ol>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowWhatsAppModal(false)}
                className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
