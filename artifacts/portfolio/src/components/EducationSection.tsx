import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Engineering in Artificial Intelligence & Data Science",
    institution: "Babasaheb Naik College of Engineering, Pusad",
    year: "2022 – 2026",
    honor: "CGPA: 7.44",
    description: "Focused on machine learning, deep learning, causal AI, data pipelines, and data visualization. Final year project on Causal Semantic Generative models for OOD prediction.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Shri Shivaji Junior College, Pusad",
    year: "2020 – 2022",
    honor: "79%",
    description: "Science stream with Mathematics, Physics, and Computer Science fundamentals.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Shri Shivaji High School, Pusad",
    year: "2019 – 2020",
    honor: "78%",
    description: "Strong foundation in science, mathematics, and technology.",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-panel p-6 md:p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-start relative overflow-hidden group hover:border-primary/30 transition-colors md:ml-12"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[3.15rem] top-8 w-3 h-3 rounded-full bg-primary border-2 border-background hidden md:block" />

                <div className="p-3.5 rounded-2xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground leading-snug">{edu.degree}</h3>
                      <div className="text-primary font-medium text-sm mt-0.5">{edu.institution}</div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                      <span className="px-3 py-1 rounded-full bg-background border border-border/20 text-muted-foreground text-xs font-medium whitespace-nowrap">
                        {edu.year}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                        {edu.honor}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
