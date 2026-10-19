import React, { useState, useEffect } from 'react';
import { VisualSettings } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { EducationResume } from './components/EducationResume';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { ExperienceCertifications } from './components/ExperienceCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticleGalaxy } from './components/ParticleGalaxy';
import { CustomCursor } from './components/CustomCursor';
import { ResumeModal } from './components/ResumeModal';
import { VisualSettingsModal } from './components/VisualSettingsModal';
import { PortfolioAssistant } from './components/PortfolioAssistant';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<'internship' | 'collaboration' | 'general'>('internship');

  // Load initial settings with system reduced motion detection
  const [settings, setSettings] = useState<VisualSettings>(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return {
      theme: 'dark',
      particleIntensity: 'high',
      reducedMotion: prefersReducedMotion,
      customCursor: true,
      soundEffects: false,
    };
  });

  // Apply theme class to document element
  useEffect(() => {
    if (settings.theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [settings.theme]);

  const handleUpdateSettings = (newSettings: Partial<VisualSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const handleResetSettings = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setSettings({
      theme: 'dark',
      particleIntensity: 'high',
      reducedMotion: prefersReducedMotion,
      customCursor: true,
      soundEffects: false,
    });
  };

  return (
    <div className="relative min-h-screen selection:bg-purple-600/30 selection:text-purple-200">
      {/* 3D Particle Galaxy Background */}
      <ParticleGalaxy
        intensity={settings.particleIntensity}
        reducedMotion={settings.reducedMotion}
      />

      {/* Desktop Custom Neon Cursor */}
      <CustomCursor
        enabled={settings.customCursor && !settings.reducedMotion && settings.particleIntensity !== 'off'}
      />

      {/* Floating Glass Navigation */}
      <Navbar
        onOpenSettings={() => setSettingsModalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <EducationResume onOpenResume={() => setResumeModalOpen(true)} />
        <Projects />
        <Services onSelectInquiry={(type) => setInquiryType(type)} />
        <ExperienceCertifications />
        <Contact initialInquiryType={inquiryType} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Floating Guided Portfolio Assistant */}
      <PortfolioAssistant />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <VisualSettingsModal
        isOpen={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onResetSettings={handleResetSettings}
      />
    </div>
  );
}
