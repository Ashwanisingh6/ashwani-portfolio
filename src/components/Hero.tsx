import React from 'react';
import { FileText, Mail, ArrowDown, Sparkles, ExternalLink, GraduationCap, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden text-center"
      aria-label="Introduction & Hero"
    >
      {/* Cinematic purple light flare overlay in background */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Monogram Luxury Crest */}
        <div className="relative mb-6 group cursor-default">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600 opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#0d0d1b] border-2 border-purple-500/40 p-1 flex items-center justify-center shadow-2xl shadow-purple-950/60 transform group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-2xl bg-gradient-to-b from-purple-950/40 to-[#070710] flex flex-col items-center justify-center border border-purple-400/20">
              <span className="font-heading font-black text-3xl sm:text-4xl tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-purple-400">
                {PERSONAL_INFO.monogram}
              </span>
              <span className="text-[9px] tracking-[0.25em] text-purple-400 uppercase font-bold mt-1">
                Portfolio
              </span>
            </div>
          </div>
        </div>

        {/* Verified Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-medium mb-5 backdrop-blur-md">
          <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
          <span>BBA Candidate • Allenhouse Business School</span>
        </div>

        {/* Full Name & Cinematic Sweep */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
          <span className="text-gradient-purple block sm:inline">
            {PERSONAL_INFO.name}
          </span>
        </h1>

        {/* Professional Headline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-300/90 tracking-wide mb-3">
          {PERSONAL_INFO.headline}
        </p>

        {/* Brand Tagline */}
        <div className="inline-block px-4 py-1 rounded-lg bg-white/5 border border-purple-500/20 text-xs sm:text-sm font-medium text-slate-300 tracking-wider uppercase mb-6">
          ✨ {PERSONAL_INFO.tagline}
        </div>

        {/* Resume Grounded Summary */}
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-8 px-2">
          {PERSONAL_INFO.summary}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={onOpenResume}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-purple-900/40 hover:from-purple-500 hover:to-indigo-500 transition-all hover:scale-103 active:scale-97 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>View My Resume</span>
          </button>

          <button
            type="button"
            onClick={scrollToContact}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#121222] hover:bg-[#1a1a30] text-purple-200 hover:text-white font-semibold text-sm border border-purple-500/30 transition-all hover:border-purple-400 hover:scale-103 active:scale-97 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Contact Me</span>
          </button>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium border border-slate-800 transition-all"
            aria-label="Ashwani Pratap Singh LinkedIn Profile (Opens in new tab)"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
          </a>
        </div>

        {/* Verified Quick Stats Bar */}
        <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-2xl glass-panel bg-[#0a0a16]/70 border border-purple-500/20"
            >
              <div className="text-[11px] text-purple-400 uppercase font-bold tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-sm sm:text-base font-bold text-white">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={scrollToAbout}
          aria-label="Scroll to about section"
          className="mt-14 inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-purple-300 transition-colors animate-bounce cursor-pointer"
        >
          <span className="text-[11px] uppercase tracking-widest font-semibold">Explore</span>
          <ArrowDown className="w-4 h-4 text-purple-400" />
        </button>
      </div>
    </section>
  );
};
