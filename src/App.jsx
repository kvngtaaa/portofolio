import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import ProfessionalSummary from "./components/sections/ProfessionalSummary";
import WorkExperiences from "./components/sections/WorkExperiences";
import Education from "./components/sections/Education";
import Certificates from "./components/sections/Certificates";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import ResumeModal from "./components/modals/ResumeModal";
import ClickSpark from "./components/reactbits/ClickSpark";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      {/* ReactBits ClickSpark - Subtle Emerald / Green Spark Physics */}
      <ClickSpark
        sparkColor="#4ade80"
        sparkCount={8}
        sparkSize={7}
        sparkRadius={24}
        duration={420}
      />

      {/* Ambient Grid Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#888_0.5px,_transparent_0.5px)] dark:bg-[radial-gradient(circle,_#444_0.5px,_transparent_0.5px)] opacity-15 [background-size:24px_24px]" />
        {/* Subtle Ambient Top-Left Light Cone with Green Glow */}
        <div
          style={{
            transform: "translateY(-300px) rotate(-45deg)",
            background:
              "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(142, 71%, 45%, 0.12) 0, hsla(142, 71%, 45%, 0.02) 50%, transparent 80%)",
            width: "560px",
            height: "1380px"
          }}
          className="absolute top-0 left-0 pointer-events-none"
        />
      </div>

      {/* Sticky Header Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Single-Page Scroll Sections as per PRD Section 5 */}
      <main className="relative z-10 overflow-x-hidden">
        {/* 1. Hero */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="h-px w-full bg-zinc-200 dark:bg-white/[0.06]" />
        </div>

        {/* 2. Professional Summary */}
        <ProfessionalSummary />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="h-px w-full bg-zinc-200 dark:bg-white/[0.06]" />
        </div>

        {/* 3. Work Experiences & Flagship Projects */}
        <WorkExperiences />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="h-px w-full bg-zinc-200 dark:bg-white/[0.06]" />
        </div>

        {/* 4. Education */}
        <Education />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="h-px w-full bg-zinc-200 dark:bg-white/[0.06]" />
        </div>

        {/* 5. Certificates */}
        <Certificates />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="h-px w-full bg-zinc-200 dark:bg-white/[0.06]" />
        </div>

        {/* 6. Skills */}
        <Skills />

        {/* 7. Contact (Footer Gelap) */}
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Download CV / Resume Modal */}
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </ThemeProvider>
  );
}
