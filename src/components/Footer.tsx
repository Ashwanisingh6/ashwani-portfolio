import React from 'react';
import { ArrowUp, Mail, Linkedin, FileText, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-purple-500/20 bg-[#040409] pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Bold Closing Banner */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-purple-950/40 via-[#0e0e1e] to-purple-950/30 border border-purple-500/30 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs uppercase font-bold text-purple-400 tracking-widest">
              Closing Note
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Let’s Connect & Create Value
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-2 leading-relaxed">
              Open to internship opportunities, data handling assignments, and collaborative projects.
              Let's turn analytical insights into actionable business outcomes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-950 transition-all hover:scale-102"
            >
              Get In Touch
            </a>
            <button
              type="button"
              onClick={onOpenResume}
              className="px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-purple-500/20 transition-all"
            >
              View Resume
            </button>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-8 border-b border-purple-500/15">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-white font-bold text-xs tracking-wider">
                {PERSONAL_INFO.monogram}
              </div>
              <span className="text-sm font-bold text-white tracking-wide">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed mb-4">
              Aspiring Business Professional specializing in data handling, MS Excel reporting, HR recruitment, and AI-based ideation.
            </p>
            <div className="text-[11px] text-purple-300 font-medium">
              "{PERSONAL_INFO.tagline}"
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Portfolio
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-purple-300 transition-colors">
                  About Ashwani
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-300 transition-colors">
                  Core Skills
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-purple-300 transition-colors">
                  Education & Resume
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-300 transition-colors">
                  Projects & Case Studies
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-purple-300 transition-colors">
                  Workshops & Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Verified Links
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-purple-300 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <span>Email Ashwani</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5 text-purple-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="hover:text-purple-300 transition-colors flex items-center gap-1.5 text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-purple-400" />
                  <span>Official ATS Resume</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} Ashwani Pratap Singh. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              Built with precision & high-performance WebGL
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-xl bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/30 text-purple-300 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
