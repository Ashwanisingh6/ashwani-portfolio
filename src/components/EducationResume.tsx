import React from 'react';
import { GraduationCap, Calendar, MapPin, Download, Eye, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { EDUCATION_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface EducationResumeProps {
  onOpenResume: () => void;
}

export const EducationResume: React.FC<EducationResumeProps> = ({ onOpenResume }) => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 relative z-10" aria-label="Education & Resume">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-purple">Resume Showcase</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Academic timeline verified against official credentials and verified PDF resume.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                Academic Timeline
              </h3>
              <span className="text-xs text-purple-300 font-medium">Undergraduate Track</span>
            </div>

            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-purple-500 before:via-purple-700 before:to-transparent">
              {EDUCATION_DATA.map((item, idx) => (
                <div key={item.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#0a0a14] border-2 border-purple-500 group-hover:border-purple-300 transition-colors shadow-sm shadow-purple-900" />

                  <div className="p-6 rounded-2xl glass-panel bg-[#0b0b18]/80 border border-purple-500/20 group-hover:border-purple-500/40 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] font-semibold text-purple-300 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                      {item.degree}
                    </h4>

                    <div className="text-xs sm:text-sm font-semibold text-purple-300/90 mb-1">
                      {item.institution}
                    </div>

                    {item.location && (
                      <div className="flex items-center gap-1 text-xs text-slate-400 mb-3">
                        <MapPin className="w-3 h-3 text-purple-400" />
                        <span>{item.location}</span>
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-purple-500/15">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Resume Card & Document Viewer (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 p-6 sm:p-7 rounded-3xl glass-panel bg-gradient-to-b from-[#0e0e20] to-[#080812] border-2 border-purple-500/30 shadow-2xl shadow-purple-950/50">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-200 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                  <span>Verified Document</span>
                </div>
                <span className="text-[11px] text-slate-400">PDF • Single Page ATS</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Ashwani's Official Resume
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Formatted specifically for Applicant Tracking Systems (ATS) and corporate recruiting.
                Includes verified coursework, tools, and certifications.
              </p>

              {/* Visual Resume Miniature Preview Mock */}
              <div
                onClick={onOpenResume}
                className="group relative cursor-pointer rounded-2xl overflow-hidden border border-purple-500/30 bg-[#06060c] p-4 mb-6 hover:border-purple-400 transition-all shadow-inner"
              >
                <div className="w-full h-44 rounded-xl bg-white/5 p-4 flex flex-col justify-between text-left border border-white/5 group-hover:scale-[1.01] transition-transform">
                  <div>
                    <div className="h-3 w-1/2 bg-purple-400/80 rounded mb-2" />
                    <div className="h-2 w-3/4 bg-slate-600/60 rounded mb-4" />
                    <div className="h-2 w-full bg-slate-700/40 rounded mb-1.5" />
                    <div className="h-2 w-5/6 bg-slate-700/40 rounded mb-1.5" />
                    <div className="h-2 w-2/3 bg-slate-700/40 rounded" />
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="text-[10px] text-purple-300 font-mono">
                      Allenhouse Business School • 2028
                    </span>
                    <span className="text-[10px] text-purple-400 font-semibold group-hover:underline flex items-center gap-1">
                      Click to Preview <Eye className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold shadow-lg flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    Launch Interactive Viewer
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-purple-900/40 transition-all hover:scale-102 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview Full Resume</span>
                </button>

                <a
                  href={PERSONAL_INFO.resumePath}
                  download={PERSONAL_INFO.resumeFileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#121222] hover:bg-[#1a1a32] text-purple-200 hover:text-white text-xs sm:text-sm font-semibold border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-purple-400" />
                  <span>Download PDF Directly</span>
                </a>
              </div>

              {/* Security & Verification Guarantee */}
              <div className="mt-5 pt-4 border-t border-purple-500/20 text-center">
                <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Original PDF source verified from applicant file</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
