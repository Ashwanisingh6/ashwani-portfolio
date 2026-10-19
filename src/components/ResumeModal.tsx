import React, { useEffect, useState } from 'react';
import { Download, ExternalLink, X, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'ats-text'>('preview');

  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl h-[92vh] max-h-[850px] bg-[#0c0c16] border border-purple-500/30 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-purple-950/40">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-purple-500/20 bg-[#080811]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold text-sm">
              APS
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-lg font-bold text-white flex items-center gap-2">
                Ashwani Pratap Singh — Official Resume
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  <ShieldCheck className="w-3 h-3 text-purple-400" />
                  Verified ATS Format
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Bachelor of Business Administration | Expected Graduation 2028
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Tab Switcher */}
            <div className="hidden sm:flex items-center bg-purple-950/40 p-1 rounded-lg border border-purple-500/20 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'preview'
                    ? 'bg-purple-600 text-white font-medium shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PDF View
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('ats-text')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'ats-text'
                    ? 'bg-purple-600 text-white font-medium shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Structured ATS View
              </button>
            </div>

            {/* Direct PDF Download */}
            <a
              href={PERSONAL_INFO.resumePath}
              download={PERSONAL_INFO.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all shadow-md shadow-purple-900/30"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-hidden relative bg-[#06060c]">
          {activeTab === 'preview' ? (
            <div className="w-full h-full flex flex-col">
              <iframe
                src={`${PERSONAL_INFO.resumePath}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Ashwani Pratap Singh Resume Document"
                className="w-full flex-1 border-0"
              />
              <div className="px-4 py-2 bg-[#090912] border-t border-purple-500/20 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                <span>PDF not rendering on your mobile browser?</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab('ats-text')}
                    className="text-purple-400 hover:text-purple-300 font-medium underline"
                  >
                    Switch to Structured ATS View
                  </button>
                  <a
                    href={PERSONAL_INFO.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-300 hover:text-white"
                  >
                    Open in new tab <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full overflow-y-auto p-6 max-w-3xl mx-auto space-y-6 text-slate-300">
              {/* ATS Structured Resume Content */}
              <div className="border-b border-purple-500/20 pb-4">
                <h1 className="text-2xl font-bold text-white tracking-wide">
                  ASHWANI PRATAP SINGH
                </h1>
                <p className="text-sm text-purple-300 mt-1">
                  Fatehpur, Uttar Pradesh, India •{' '}
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    {PERSONAL_INFO.linkedin}
                  </a>
                </p>
              </div>

              {/* Summary */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 border-b border-purple-500/20 pb-1 mb-2">
                  Professional Summary
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Detail-oriented BBA student with knowledge of MS Excel, data handling, and report
                  preparation. Interested in understanding data and using it to support business
                  decisions. Eager to learn new tools and continue developing analytical and business
                  skills.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 border-b border-purple-500/20 pb-1 mb-3">
                  Academic Qualifications
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="flex justify-between font-semibold text-white">
                      <span>Bachelor of Business Administration (BBA)</span>
                      <span className="text-purple-300 text-xs">Expected Graduation: 2028</span>
                    </div>
                    <div className="text-slate-400 text-xs">
                      Allenhouse Business School, Rooma, Kanpur
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-semibold text-white">
                      <span>Intermediate</span>
                      <span className="text-purple-300 text-xs">2024 – 2025</span>
                    </div>
                    <div className="text-slate-400 text-xs">Sandeepani Public School</div>
                  </div>
                </div>
              </div>

              {/* Projects & Certifications */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 border-b border-purple-500/20 pb-1 mb-3">
                  Projects & Professional Certifications
                </h3>
                <div className="text-sm">
                  <div className="flex justify-between font-semibold text-white">
                    <span>Fund My Crazy: Build Night Edition | Google Student Ambassador Program</span>
                    <span className="text-purple-300 text-xs">2026</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">
                    Professional Certifications: AI-Based Ideation and Gemini
                  </p>
                </div>
              </div>

              {/* Technical & Core Competencies */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 border-b border-purple-500/20 pb-1 mb-3">
                  Technical & Core Competencies
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-medium text-white sm:w-36">Tools & Utilities:</span>
                    <span className="text-slate-300">MS Excel, Microsoft PowerPoint, Canva</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-medium text-white sm:w-36">Business Skills:</span>
                    <span className="text-slate-300">HR Recruitment, Digital Marketing</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-medium text-white sm:w-36">Soft Skills:</span>
                    <span className="text-slate-300">Time Management, Teamwork</span>
                  </div>
                </div>
              </div>

              {/* Workshops & Seminars */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 border-b border-purple-500/20 pb-1 mb-3">
                  Workshops & Seminars
                </h3>
                <div className="text-sm">
                  <div className="font-semibold text-white">
                    The Changing Face of HR in the New Corporate: From Administrative to Strategic
                  </div>
                  <div className="text-xs text-purple-300 mt-1">
                    Certificate of Participation, Phoenix – The HR Club, Allenhouse Business School (Aug 2026)
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ATS Verified & Verified from Original Document
                </span>
                <a
                  href={PERSONAL_INFO.resumePath}
                  download={PERSONAL_INFO.resumeFileName}
                  className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 font-semibold"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF Original
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
