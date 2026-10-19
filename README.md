# Ashwani Pratap Singh — 3D Personal Portfolio

Official, production-ready personal portfolio website for **Ashwani Pratap Singh**, Aspiring Business Professional (*"Learning Today. Leading Tomorrow."*).

Built with a futuristic luxury cosmic aesthetic combining midnight-black, electric-purple glassmorphism, high-performance Three.js 3D particle galaxy, accessible ATS resume showcase, and interactive inquiry routing.

---

## 🌟 Key Features

1. **Futuristic Luxury Design System**
   - Cosmic color palette: Midnight black (`#050508`), deep charcoal-violet, and electric purple (`#a855f7`).
   - Frosted glassmorphism panels with refined purple borders and responsive lighting.
   - Desktop neon aura ring cursor with smooth spring damping.

2. **Interactive 3D Particle Galaxy (Three.js)**
   - Spiral galactic starfield with celestial orbital rings and depth layering.
   - Mouse-reactive parallax and soft ambient rotation.
   - Hardware-adaptive: Configurable intensity (`High`, `Medium`, `Low`, `Off`) and automatic OS reduced-motion honoring.

3. **Verified Resume & Academic Showcase**
   - Grounded strictly in Ashwani's official ATS resume document.
   - Interactive Resume Modal: In-browser PDF preview with embedded viewer and alternative structured ATS view for mobile devices.
   - 1-Click verified direct PDF download: `/assets/aistudio/Ashwani_Pratap_Singh_ATS_Resume_v2_5f2f366a.pdf`.
   - Complete education timeline: Bachelor of Business Administration (BBA) at Allenhouse Business School, Rooma, Kanpur (Expected Graduation: 2028) & Intermediate at Sandeepani Public School (2024–2025).

4. **Honest Competencies & Case Studies**
   - Categorized skills: Tools & Utilities (MS Excel, PowerPoint, Canva), Business & Management (HR Recruitment, Digital Marketing, Report Preparation), Emerging Tech & AI Ideation (Google Gemini), and Soft Skills (Time Management, Teamwork).
   - Strict anti-fabrication standards: No artificial percentage bars or fake client reviews.
   - Distinct classification between verified programs (*Fund My Crazy: Build Night Edition | Google Student Ambassador Program 2026*) and academic concept models.

5. **Split-Screen Contact Hub**
   - Direct verified email (`ashwanipratapsingh479@gmail.com`) with 1-click clipboard copy.
   - Verified LinkedIn profile integration (`linkedin.com/in/ashwani-pratap-singh-6b1653373`).
   - Inquiry type filtering: *Recruitment & Internship*, *Project Collaboration*, *General Inquiries*.
   - Anti-spam honeypot protection and instant pre-filled email dispatch.
   - Configurable WhatsApp click-to-chat setup.

6. **Interactive Guided Portfolio Assistant**
   - Deterministic, zero-external-API FAQ assistant answering common recruiter questions about Ashwani's background, BBA coursework, skills, and contact details with instant smooth-scrolling navigation.

7. **Visual & Experience Settings**
   - Dark ("Midnight Cosmic") and Light ("Clean Platinum") themes.
   - Particle intensity switcher (High / Medium / Low / Off).
   - Reduced motion toggle and neon cursor controls.

---

## 🛠️ Project Structure & Content Editing

All portfolio facts and links are centralized in a single file for easy maintenance:

```
src/
├── data/
│   └── portfolioData.ts      <-- EDIT HERE to update personal info, skills, education, links
├── types/
│   └── portfolio.ts          <-- TypeScript interfaces
├── components/
│   ├── ParticleGalaxy.tsx    <-- Three.js WebGL cosmic particle field
│   ├── Navbar.tsx            <-- Glassmorphism floating navbar
│   ├── Hero.tsx              <-- Luxury hero with APS monogram crest
│   ├── About.tsx             <-- 3D storytelling panels
│   ├── Skills.tsx            <-- Glass skill cards & category filters
│   ├── EducationResume.tsx   <-- Academic timeline & PDF showcase
│   ├── Projects.tsx          <-- Initiatives & case studies
│   ├── Services.tsx          <-- Tailored recruiter & collaboration pathways
│   ├── ExperienceCertifications.tsx <-- Workshops & ambassador certifications
│   ├── Contact.tsx           <-- Split-screen contact hub & inquiry form
│   ├── PortfolioAssistant.tsx<-- Guided deterministic FAQ assistant
│   ├── ResumeModal.tsx       <-- Accessible PDF & ATS text viewer
│   ├── VisualSettingsModal.tsx <-- Theme & particle controls
│   ├── CustomCursor.tsx      <-- Desktop neon aura follower
│   └── Footer.tsx            <-- Closing signature & back-to-top
├── App.tsx                   <-- Root application wiring
└── index.css                 <-- Design tokens & glass styling
public/
└── assets/
    └── aistudio/
        └── Ashwani_Pratap_Singh_ATS_Resume_v2_5f2f366a.pdf <-- Official resume file
```

---

## 🚀 How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Open your browser at `http://localhost:3000`.

---

## 🌐 Deployment Guide

### Option 1: Vercel (Recommended)
1. Push this codebase to your GitHub account (`git push origin main`).
2. Log in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your repository. Vercel automatically detects Vite.
4. Click **Deploy**. The site will be live on an HTTPS custom subdomain (e.g. `ashwanipratapsingh.vercel.app`) in under 1 minute.
5. In your Vercel project settings under **Domains**, you can connect your own custom domain (e.g., `ashwanisingh.com`).

### Option 2: Netlify
1. Go to [Netlify](https://netlify.com) and import the repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy**.
