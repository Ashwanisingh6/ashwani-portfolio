export type EffectIntensity = 'high' | 'medium' | 'low' | 'off';

export interface VisualSettings {
  theme: 'dark' | 'light';
  particleIntensity: EffectIntensity;
  reducedMotion: boolean;
  customCursor: boolean;
  soundEffects: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: 'Expected Graduation: 2028' | 'Completed' | string;
  description: string;
  highlights: string[];
  location?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    description: string;
    icon?: string;
    tags: string[];
    verified: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  type: 'Verified Initiative' | 'Academic Case Study' | 'Concept Project';
  role: string;
  date: string;
  category: 'AI & Ideation' | 'Business Analysis' | 'HR & Operations';
  summary: string;
  description: string;
  keyLearnings: string[];
  toolsUsed: string[];
  verified: boolean;
  link?: string;
  linkText?: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  organizer: string;
  date: string;
  credentialType: string;
  description: string;
  keyTakeaways: string[];
}

export interface ServiceOpportunity {
  id: string;
  title: string;
  category: 'Recruiter & Internships' | 'Business & Analytics' | 'Creative Presentation';
  targetAudience: string;
  description: string;
  capabilities: string[];
  actionLabel: string;
  inquiryType: 'internship' | 'collaboration' | 'general';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'background' | 'skills' | 'resume' | 'contact' | 'education';
  action?: {
    label: string;
    sectionId: string;
  };
}
