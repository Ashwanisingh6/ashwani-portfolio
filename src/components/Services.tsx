import React from 'react';
import { Target, CheckCircle2, ArrowRight, UserCheck, BarChart2, Palette } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesProps {
  onSelectInquiry: (inquiryType: 'internship' | 'collaboration' | 'general') => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectInquiry }) => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Recruiter & Internships':
        return <UserCheck className="w-5 h-5 text-purple-400" />;
      case 'Business & Analytics':
        return <BarChart2 className="w-5 h-5 text-purple-400" />;
      case 'Creative Presentation':
        return <Palette className="w-5 h-5 text-purple-400" />;
      default:
        return <Target className="w-5 h-5 text-purple-400" />;
    }
  };

  const handleActionClick = (inquiryType: 'internship' | 'collaboration' | 'general') => {
    onSelectInquiry(inquiryType);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 relative z-10" aria-label="Collaboration Opportunities">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Value & Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Collaboration <span className="text-gradient-purple">Opportunities</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Clear pathways tailored for recruiters, business teams, and project collaborators.
          </p>
        </div>

        {/* Opportunity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl p-7 glass-panel bg-[#0b0b18]/85 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                    {getIcon(service.category)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400 bg-purple-950/40 border border-purple-500/20 px-2.5 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <div className="text-xs font-semibold text-purple-300/80 mb-1">
                  Target: {service.targetAudience}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors mb-3">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-purple-500/15">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Contributions:
                  </div>
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleActionClick(service.inquiryType)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#141426] hover:bg-purple-600 text-purple-200 hover:text-white text-xs font-semibold border border-purple-500/30 hover:border-purple-500 transition-all group/btn"
              >
                <span>{service.actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
