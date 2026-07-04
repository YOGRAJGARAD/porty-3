import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "AI & Machine Learning",
    skills: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Causal Inference", "Generative Models", "LangChain", "OpenCV"]
  },
  {
    category: "Data Engineering",
    skills: ["SQL", "PostgreSQL", "ETL Pipelines", "Apache Spark", "Data Warehousing", "dbt"]
  },
  {
    category: "Visualization & BI",
    skills: ["Power BI", "Tableau", "Recharts", "D3.js", "Excel Advanced"]
  },
  {
    category: "Languages & Tools",
    skills: ["Python", "JavaScript", "TypeScript", "Git", "Docker", "VS Code", "Jupyter"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-primary/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Toolkit</h2>
          <p className="text-muted-foreground">The stack I use to build scalable intelligence.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="glass-panel p-8 rounded-[2rem] flex flex-col"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (groupIdx * 0.1) + (i * 0.05) }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-background border border-primary/10 text-foreground hover:bg-primary hover:text-white transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
