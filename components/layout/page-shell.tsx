'use client';

import { useEffect, useState } from 'react';

import type { PortfolioData } from '@/types/portfolio';

import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { TechStackSection } from '@/components/sections/tech-stack-section';
import { LoadingScreen } from '@/components/ui/loading-screen';

export function PageShell({ data }: { data: PortfolioData }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const timer = window.setTimeout(() => setLoading(false), 1500); return () => window.clearTimeout(timer); }, []);
  return <>
    <LoadingScreen isLoading={loading} />
    <main className="relative overflow-hidden">
      <HeroSection hero={data.hero} stats={data.stats} social={data.contact.socialLinks} />
      <AboutSection about={data.about} />
      <TechStackSection categories={data.tech} />
      <ProjectsSection projects={data.projects} />
      <ExperienceSection experience={data.experience} />
      <ContactSection contact={data.contact} />
      <FooterSection contact={data.contact} />
    </main>
  </>;
}
