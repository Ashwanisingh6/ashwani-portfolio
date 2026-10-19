import React from 'react';
import { BookOpen, TrendingUp, Sparkles, MapPin, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative z-10" aria-label="About Me">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Story & Professional Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-purple">Ashwani Pratap Singh</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            A grounded overview of my academic pursuits, analytical mindset, and career aspirations.
          </p>
        </div>

        {/* 3D Storytelling Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PERSONAL_INFO.aboutStory.map((story, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl p-6 sm:p-7 glass-panel bg-[#0b0b18]/80 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 p-4 text-3xl font-black text-purple-900/30 group-hover:text-purple-600/20 transition-colors pointer-events-none">
                0{idx + 1}
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-5 group-hover:scale-105 transition-transform">
                  {idx === 0 && <BookOpen className="w-5 h-5" />}
                  {idx === 1 && <TrendingUp className="w-5 h-5" />}
                  {idx === 2 && <Sparkles className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                  {story.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {story.content}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center gap-2 text-xs text-purple-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Resume Fact</span>
              </div>
            </div>
          ))}
        </div>

        {/* Location & Career Focus Banner */}
        <div className="rounded-2xl p-6 sm:p-8 glass-panel bg-gradient-to-r from-purple-950/40 via-[#0d0d1e] to-purple-950/30 border border-purple-500/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-purple-400 tracking-wider">
                Current Base & Mobility
              </div>
              <div className="text-base sm:text-lg font-bold text-white">
                {PERSONAL_INFO.location}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Available for internships, corporate training programs, and remote projects
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-xs text-slate-400">Core Guiding Philosophy</div>
              <div className="text-sm font-semibold text-purple-200">
                "{PERSONAL_INFO.tagline}"
              </div>
            </div>
            <div className="h-10 w-[1px] bg-purple-500/30 hidden sm:block" />
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-950 transition-all hover:scale-102"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
