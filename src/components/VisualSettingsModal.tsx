import React from 'react';
import { X, Moon, Sun, Sparkles, Sliders, RotateCcw, Eye, MousePointer } from 'lucide-react';
import { EffectIntensity, VisualSettings } from '../types/portfolio';

interface VisualSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: VisualSettings;
  onUpdateSettings: (newSettings: Partial<VisualSettings>) => void;
  onResetSettings: () => void;
}

export const VisualSettingsModal: React.FC<VisualSettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onResetSettings,
}) => {
  if (!isOpen) return null;

  const intensities: { id: EffectIntensity; label: string; desc: string }[] = [
    { id: 'high', label: 'Full 3D Cosmic', desc: 'Maximum particles, galactic depth & dynamic parallax' },
    { id: 'medium', label: 'Balanced', desc: 'Optimized particle count with smooth ambient drift' },
    { id: 'low', label: 'Minimal Particles', desc: 'Low GPU usage for battery saving or modest devices' },
    { id: 'off', label: 'Clean Static', desc: 'No canvas particles, maximum clarity and battery life' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="visual-settings-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-[#0d0d18] border border-purple-500/30 rounded-2xl p-6 shadow-2xl shadow-purple-950/50">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-500/20">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 id="visual-settings-title" className="text-lg font-bold text-white">
                Visual & Experience Settings
              </h3>
              <p className="text-xs text-slate-400">
                Tailor 3D visuals, motion preferences, and accessibility
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close settings"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-5 space-y-6">
          {/* Theme Switcher */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
              Color Theme
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => onUpdateSettings({ theme: 'dark' })}
                className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all ${
                  settings.theme === 'dark'
                    ? 'bg-purple-950/50 border-purple-500 text-white shadow-md shadow-purple-950/40'
                    : 'bg-[#121222] border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Moon className={`w-4 h-4 ${settings.theme === 'dark' ? 'text-purple-400' : ''}`} />
                <div>
                  <div className="text-xs font-semibold">Midnight Cosmic</div>
                  <div className="text-[10px] text-slate-400">Default Luxury Dark</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onUpdateSettings({ theme: 'light' })}
                className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all ${
                  settings.theme === 'light'
                    ? 'bg-purple-950/50 border-purple-500 text-white shadow-md shadow-purple-950/40'
                    : 'bg-[#121222] border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sun className={`w-4 h-4 ${settings.theme === 'light' ? 'text-amber-400' : ''}`} />
                <div>
                  <div className="text-xs font-semibold">Clean Platinum</div>
                  <div className="text-[10px] text-slate-400">High Contrast Light</div>
                </div>
              </button>
            </div>
          </div>

          {/* 3D Particle Intensity */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                3D Particle Galaxy Intensity
              </label>
              <span className="text-[11px] text-purple-400 capitalize font-medium">
                {settings.particleIntensity}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {intensities.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onUpdateSettings({ particleIntensity: item.id })}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    settings.particleIntensity === item.id
                      ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-900/40 font-semibold'
                      : 'bg-[#121222] border-purple-500/15 text-slate-400 hover:text-white hover:border-purple-500/30'
                  }`}
                >
                  <div className="text-xs">{item.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Reduced Motion Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#121222] border border-purple-500/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-950/60 text-purple-300">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Reduced Motion Mode</div>
                <div className="text-[11px] text-slate-400">
                  Calms particle spin and disables steep parallax tilts
                </div>
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={settings.reducedMotion}
              onClick={() => onUpdateSettings({ reducedMotion: !settings.reducedMotion })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.reducedMotion ? 'bg-purple-600' : 'bg-slate-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Custom Neon Cursor Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#121222] border border-purple-500/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-950/60 text-purple-300">
                <MousePointer className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Neon Aura Cursor</div>
                <div className="text-[11px] text-slate-400">
                  Interactive glowing ring on desktop mouse pointers
                </div>
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={settings.customCursor}
              onClick={() => onUpdateSettings({ customCursor: !settings.customCursor })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.customCursor ? 'bg-purple-600' : 'bg-slate-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.customCursor ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between">
          <button
            type="button"
            onClick={onResetSettings}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-purple-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Defaults
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-900/40 transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
