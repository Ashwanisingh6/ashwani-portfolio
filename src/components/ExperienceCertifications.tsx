import React from 'react';
import { Award, Calendar, CheckCircle2, Bookmark, Sparkles, Building2 } from 'lucide-react';
import { WORKSHOPS_DATA } from '../data/portfolioData';

export const ExperienceCertifications: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative z-10" aria-label="Certifications & Milestones">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Workshops & <span className="text-gradient-purple">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Formal seminar participations, club programs, and verified learning milestones.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {WORKSHOPS_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl p-7 glass-panel bg-[#0b0b18]/85 border border-purple-500/25 hover:border-purple-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-[11px] font-semibold text-purple-300">
                    <Award className="w-3.5 h-3.5 text-purple-400" />
                    {item.credentialType}
                  </span>

                  <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors mb-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-semibold text-purple-300/90 mb-4">
                  <Building2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>{item.organizer}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-purple-500/15">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-purple-400 mb-2">
                    Key Competencies Acquired:
                  </div>
                  {item.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified on Official Resume
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  Allenhouse / Google Program
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Milestones Roadmap */}
        <div className="rounded-3xl p-6 sm:p-8 glass-panel bg-[#090914]/80 border border-purple-500/20">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-300">
              Ongoing Development Focus (2025 – 2028)
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/15">
              <div className="font-semibold text-white mb-1">1. Advanced Data Analytics</div>
              <p className="text-slate-400 text-[11px]">
                Deepening knowledge of structured business analytics, formula automation, and financial spreadsheet modeling.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/15">
              <div className="font-semibold text-white mb-1">2. Strategic Corporate HR</div>
              <p className="text-slate-400 text-[11px]">
                Studying modern talent acquisition systems, recruitment analytics, and workplace culture development.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/15">
              <div className="font-semibold text-white mb-1">3. AI Productivity Integration</div>
              <p className="text-slate-400 text-[11px]">
                Leveraging Google Gemini and AI-assisted workflows to accelerate business document synthesis and research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
