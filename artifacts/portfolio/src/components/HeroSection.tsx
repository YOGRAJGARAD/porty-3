import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Code2, LayoutDashboard, Database, Award } from 'lucide-react';

const stats = [
  { value: '6+', label: 'Projects Completed', icon: <Code2 className="w-5 h-5" /> },
  { value: '5+', label: 'Dashboards Built', icon: <LayoutDashboard className="w-5 h-5" /> },
  { value: '3+', label: 'Databases Worked', icon: <Database className="w-5 h-5" /> },
  { value: '2+', label: 'Certifications', icon: <Award className="w-5 h-5" /> },
];

export function HeroSection() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col items-center justify-center pt-28 pb-16 px-6 relative overflow-hidden text-center">
      {/* Scatter dot background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-0 right-0 w-1/2 h-1/2 opacity-40" viewBox="0 0 500 500" fill="none">
          {Array.from({ length: 120 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.sin(i * 2.4) * 240 + 280}
              cy={Math.cos(i * 1.7) * 200 + 200}
              r={Math.random() > 0.7 ? 2 : 1.2}
              fill={i % 3 === 0 ? '#6366F1' : '#FF7A00'}
              opacity={0.3 + (i % 5) * 0.1}
            />
          ))}
        </svg>
        <svg className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-20" viewBox="0 0 300 300" fill="none">
          {Array.from({ length: 60 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.sin(i * 1.9) * 130 + 150}
              cy={Math.cos(i * 2.3) * 120 + 150}
              r={1.5}
              fill={i % 2 === 0 ? '#6366F1' : '#FF7A00'}
              opacity={0.4}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center gap-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] sm:text-sm font-medium max-w-full whitespace-nowrap"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse shrink-0" />
          AI &amp; DATA SCIENCE GRADUATE
          <span className="text-primary/40 shrink-0">›</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
            Yograj
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF9500]">
            Garad
          </span>
        </motion.h1>

        {/* Subtitle roles */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground font-medium"
        >
          Data Analyst | Business Intelligence Enthusiast | Python &amp; SQL Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base text-muted-foreground/80 leading-relaxed max-w-xl"
        >
          Transforming raw data into meaningful insights and building interactive dashboards
          that drive business decisions and create real impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="px-8 py-3.5 rounded-full bg-foreground text-background font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group shadow-lg"
          >
            Explore My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="px-8 py-3.5 rounded-full border border-border/40 bg-background/60 backdrop-blur text-foreground font-semibold hover:border-primary/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 + i * 0.08 }}
              className="glass-panel rounded-2xl px-4 py-5 flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform group"
            >
              <div className="p-2.5 rounded-xl bg-primary/8 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground text-center leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
