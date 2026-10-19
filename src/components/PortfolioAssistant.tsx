import React, { useState } from 'react';
import { Bot, X, MessageSquare, ChevronRight, Sparkles, ArrowRight, CornerDownLeft } from 'lucide-react';
import { FAQ_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { FAQItem } from '../types/portfolio';

interface Message {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  action?: {
    label: string;
    sectionId: string;
  };
}

export const PortfolioAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I'm Ashwani's Portfolio Guide. How can I help you learn more about his qualifications, BBA studies, skills, or internship availability?`,
    },
  ]);
  const [customInput, setCustomInput] = useState('');

  const handleSelectFaq = (faq: FAQItem) => {
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: faq.question,
    };

    const replyMsg: Message = {
      id: `a-${Date.now() + 1}`,
      sender: 'assistant',
      text: faq.answer,
      action: faq.action,
    };

    setMessages((prev) => [...prev, userMsg, replyMsg]);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const query = customInput.trim().toLowerCase();
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: customInput.trim(),
    };

    // Deterministic match against FAQ keywords
    let matchedFaq = FAQ_DATA.find(
      (f) =>
        f.question.toLowerCase().includes(query) ||
        (query.includes('skill') && f.category === 'skills') ||
        (query.includes('resume') && f.category === 'resume') ||
        (query.includes('education') && f.category === 'education') ||
        (query.includes('college') && f.category === 'education') ||
        (query.includes('contact') && f.category === 'contact') ||
        (query.includes('hire') && f.category === 'contact') ||
        (query.includes('intern') && f.category === 'contact') ||
        (query.includes('certif') && f.id === 'faq-certifications') ||
        (query.includes('who') && f.category === 'background')
    );

    let replyMsg: Message;
    if (matchedFaq) {
      replyMsg = {
        id: `a-${Date.now() + 1}`,
        sender: 'assistant',
        text: matchedFaq.answer,
        action: matchedFaq.action,
      };
    } else {
      replyMsg = {
        id: `a-${Date.now() + 1}`,
        sender: 'assistant',
        text: `Ashwani is an Aspiring Business Professional pursuing his BBA at Allenhouse Business School (Expected Graduation 2028). For direct queries or internship opportunities, you can contact him at ${PERSONAL_INFO.email}.`,
        action: { label: 'Go to Contact Section', sectionId: 'contact' },
      };
    }

    setMessages((prev) => [...prev, userMsg, replyMsg]);
    setCustomInput('');
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open portfolio guide assistant"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0e0e1a]/95 border border-purple-500/40 text-purple-200 hover:text-white shadow-xl shadow-purple-950/60 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md">
            <Bot className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold tracking-wide">
            Portfolio Guide
          </span>
          <span className="flex h-2 w-2 relative">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
        </button>
      )}

      {/* Assistant Modal Window */}
      {isOpen && (
        <div
          role="region"
          aria-label="Portfolio Guide Assistant"
          className="w-[92vw] sm:w-[380px] h-[520px] max-h-[80vh] bg-[#0c0c16] border border-purple-500/30 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-purple-950/70 backdrop-blur-xl animate-fadeIn"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-purple-500/20 bg-[#080811]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  Portfolio Assistant
                  <Sparkles className="w-3 h-3 text-purple-400" />
                </h4>
                <p className="text-[10px] text-slate-400">
                  Verified facts & interactive navigation
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
              className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs bg-[#06060e]/50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-purple-600 text-white font-medium rounded-br-xs'
                      : 'bg-[#151525] border border-purple-500/20 text-slate-200 rounded-bl-xs'
                  }`}
                >
                  {m.text}
                </div>
                {m.action && (
                  <button
                    type="button"
                    onClick={() => scrollToSection(m.action!.sectionId)}
                    className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-purple-300 hover:text-purple-100 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/30 transition-all hover:bg-purple-900/60"
                  >
                    {m.action.label}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Suggested Quick Questions */}
          <div className="px-3 py-2 border-t border-purple-500/15 bg-[#090913]">
            <div className="text-[10px] uppercase font-bold text-purple-400/80 mb-1.5 flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              Frequently Asked Questions:
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {FAQ_DATA.slice(0, 4).map((faq) => (
                <button
                  key={faq.id}
                  type="button"
                  onClick={() => handleSelectFaq(faq)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#17172b] border border-purple-500/20 text-[10px] text-slate-300 hover:text-white hover:border-purple-400 transition-all flex items-center gap-1 flex-shrink-0"
                >
                  <span>{faq.question.slice(0, 24)}...</span>
                  <ChevronRight className="w-2.5 h-2.5 text-purple-400" />
                </button>
              ))}
            </div>
          </div>

          {/* Ask Input Form */}
          <form
            onSubmit={handleCustomSubmit}
            className="p-3 border-t border-purple-500/20 bg-[#080811] flex items-center gap-2"
          >
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Ask about Ashwani's skills, BBA, contact..."
              className="flex-1 bg-[#131322] border border-purple-500/20 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!customInput.trim()}
              aria-label="Send query"
              className="p-2 rounded-xl bg-purple-600 text-white disabled:opacity-40 hover:bg-purple-500 transition-colors"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
