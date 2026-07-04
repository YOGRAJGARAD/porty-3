import React from 'react';
import { motion } from 'framer-motion';
import { Network, TrendingUp, MessageSquareText, LayoutTemplate, GitMerge, Presentation } from 'lucide-react';

const expertise = [
  { icon: Network, title: "Causal Machine Learning" },
  { icon: TrendingUp, title: "Predictive Analytics" },
  { icon: MessageSquareText, title: "NLP & Text Intelligence" },
  { icon: LayoutTemplate, title: "BI Dashboard Design" },
  { icon: GitMerge, title: "Data Pipeline Engineering" },
  { icon: Presentation, title: "Executive Storytelling" }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Built at the intersection of <br className="hidden md:block"/> 
            <span className="text-primary">AI and strategy</span>
          </h2>
          
          <div className="glass-panel p-8 md:p-12 rounded-[2rem]">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              I'm Yograj Garad, an AI & Data Science graduate passionate about turning messy data into elegant, decision-ready intelligence systems. My work spans causal machine learning, NLP pipelines, predictive analytics, and executive-grade BI dashboards — built to ship, not just showcase.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {expertise.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
