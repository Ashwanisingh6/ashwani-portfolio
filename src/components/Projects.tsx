import React, { useState } from 'react';
import { Briefcase, ExternalLink, Sparkles, CheckCircle2, Info, X, Lightbulb, FileSpreadsheet, Users } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'verified' | 'concept'>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'verified') return p.verified;
    if (filter === 'concept') return !p.verified;
    return true;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Ideation':
        return <Lightbulb className="w-5 h-5 text-purple-400" />;
      case 'Business Analysis':
        return <FileSpreadsheet className="w-5 h-5 text-purple-400" />;
      case 'HR & Operations':
        return <Users className="w-5 h-5 text-purple-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative z-10" aria-label="Projects & Initiatives">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Showcase & Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & <span className="text-gradient-purple">Initiatives</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Transparently organized between verified ambassador initiatives and academic concept models.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40 border border-purple-400/40'
                : 'bg-[#101020] text-slate-300 hover:text-white border border-purple-500/15'
            }`}
          >
            All Initiatives ({PROJECTS_DATA.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('verified')}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'verified'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40 border border-purple-400/40'
                : 'bg-[#101020] text-slate-300 hover:text-white border border-purple-500/15'
            }`}
          >
            Verified Programs (1)
          </button>
          <button
            type="button"
            onClick={() => setFilter('concept')}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'concept'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40 border border-purple-400/40'
                : 'bg-[#101020] text-slate-300 hover:text-white border border-purple-500/15'
            }`}
          >
            Academic Concepts (2)
          </button>
        </div>

        {/* 3D Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl p-6 glass-panel bg-[#0b0b18]/85 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/40"
            >
              <div>
                {/* Header Tag / Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/30">
                    {getCategoryIcon(project.category)}
                  </div>

                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      project.verified
                        ? 'bg-emerald-950/50 text-emerald-300 border-emerald-500/40'
                        : 'bg-purple-950/40 text-purple-300 border-purple-500/30'
                    }`}
                  >
                    {project.type}
                  </span>
                </div>

                <div className="text-[11px] text-purple-400 uppercase font-bold tracking-wider mb-1">
                  {project.category} • {project.date}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Tools Used */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-purple-500/15 mb-4">
                  {project.toolsUsed.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-200 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-purple-400 group-hover:text-purple-300 font-medium">
                  <span>View Details & Learnings</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Footnote */}
        <div className="mt-12 p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 max-w-2xl mx-auto flex items-start gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Authenticity Guarantee:</strong> In accordance with professional ethics, academic
            case studies and concept models are distinctly labeled from officially certified initiatives like
            the Google Student Ambassador Build Night.
          </span>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="relative w-full max-w-2xl bg-[#0c0c16] border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/60 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                  selectedProject.verified
                    ? 'bg-emerald-950/50 text-emerald-300 border-emerald-500/40'
                    : 'bg-purple-950/40 text-purple-300 border-purple-500/30'
                }`}
              >
                {selectedProject.type}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {selectedProject.category} • {selectedProject.date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {selectedProject.title}
            </h3>

            <div className="text-xs font-semibold text-purple-300 mb-5">
              Role: {selectedProject.role}
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              <p>{selectedProject.description}</p>
            </div>

            {/* Key Learnings */}
            <div className="mb-6 bg-purple-950/30 p-4 rounded-2xl border border-purple-500/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Key Learnings & Methodology
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedProject.keyLearnings.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Tools & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-[#141426] border border-purple-500/20 text-xs text-purple-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-500/20 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
