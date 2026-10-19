import React, { useState } from 'react';
import { Layers, CheckCircle2, Cpu, BarChart3, Users, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Competencies' },
    ...SKILL_CATEGORIES.map((c) => ({ id: c.id, name: c.name })),
  ];

  const displayedCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'tools-utilities':
        return <Wrench className="w-4 h-4 text-purple-400" />;
      case 'business-skills':
        return <BarChart3 className="w-4 h-4 text-purple-400" />;
      case 'emerging-tech':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'soft-skills':
        return <Users className="w-4 h-4 text-purple-400" />;
      default:
        return <Layers className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative z-10" aria-label="Skills & Expertise">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-purple">Expertise</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Verified technical utilities, business administration foundations, and modern tools.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/50 scale-102 border border-purple-400/40'
                  : 'bg-[#101020] text-slate-300 hover:text-white hover:bg-[#18182c] border border-purple-500/15'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Groups */}
        <div className="space-y-12">
          {displayedCategories.map((group) => (
            <div key={group.id} className="space-y-4">
              <div className="flex items-center gap-2 border-b border-purple-500/20 pb-2">
                <div className="p-1.5 rounded-lg bg-purple-950/70 border border-purple-500/30">
                  {getCategoryIcon(group.id)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {group.name}
                  </h3>
                  <p className="text-xs text-slate-400">{group.description}</p>
                </div>
              </div>

              {/* Grid of Skill Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative p-5 rounded-2xl glass-panel bg-[#0b0b18]/80 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          Verified
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {skill.description}
                      </p>
                    </div>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-purple-500/15">
                      {skill.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-purple-950/40 border border-purple-500/20 text-[10px] text-purple-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
