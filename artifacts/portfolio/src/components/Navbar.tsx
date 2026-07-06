import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
        localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section
      const sections = ['hero', 'about', 'skills', 'projects', 'dashboards', 'education', 'certifications', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Dashboards', href: '#dashboards', id: 'dashboards' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? 'pt-3' : 'pt-5'} px-3 sm:px-4`}>
        <div className="glass-panel rounded-full px-3 sm:px-5 py-2.5 flex items-center justify-between w-full max-w-6xl gap-2 sm:gap-4">
          {/* Logo — shrink-0 guarantees it is never pushed off-screen */}
          <button
            className="flex items-center gap-2 shrink-0 cursor-none min-w-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
              YG
            </div>
            {/* Name: always visible at sm+; below sm it hides to preserve space for the YG pill */}
            <span className="text-sm font-semibold text-foreground hidden sm:block truncate">Yograj Garad</span>
          </button>

          {/* Desktop Nav — visible at lg+ (unchanged) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="relative px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Download Resume: visible at lg+ only (hamburger menu has it on mobile/tablet) */}
            <a
              href="https://drive.google.com/file/d/1mJUBXC90AOWmewtOpKlvTLtUn7uDooZI/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-80 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            {/* Hamburger — visible below lg (768px tablet + all mobile) */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-foreground"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 lg:hidden flex flex-col"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left text-lg font-medium py-3 border-b border-border/10 transition-colors ${
                    activeSection === link.id ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-primary align-middle" />
                  )}
                </button>
              ))}
            </div>
            <a
              href="https://drive.google.com/file/d/1mJUBXC90AOWmewtOpKlvTLtUn7uDooZI/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
