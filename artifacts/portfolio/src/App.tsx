import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DashboardsSection } from './components/DashboardsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { AntigravityCursor } from './components/AntigravityCursor';
import { ParticleBackground } from './components/ParticleBackground';

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      {/* Fixed canvas layer — sits behind everything */}
      <ParticleBackground />
      <AntigravityCursor />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <DashboardsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border/10 mt-12">
        <p>© {new Date().getFullYear()} Yograj Garad. All rights reserved.</p>
        <p className="mt-2">Designed with intention. Built for scale.</p>
      </footer>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-muted-foreground">Page not found.</p>
        <a href="/" className="mt-6 inline-block text-primary hover:underline">Return Home</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Switch>
        <Route path="/" component={PortfolioPage} />
        <Route component={NotFound} />
      </Switch>
      <Analytics />
    </WouterRouter>
  );
}

export default App;
