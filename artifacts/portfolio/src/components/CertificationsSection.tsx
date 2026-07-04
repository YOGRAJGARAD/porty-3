import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "Data Analytics Virtual Experience",
    issuer: "Deloitte · Forage",
    year: "2024",
    description: "Hands-on virtual internship covering data analysis, visualization, and business problem-solving using real Deloitte datasets and analytics frameworks.",
    tags: ["Data Analytics", "Excel", "Visualisation"],
    color: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    title: "GenAI Simulation",
    issuer: "Forage",
    year: "2024",
    description: "Practical simulation exploring Generative AI capabilities, prompt engineering, and applied LLM workflows for real-world business use cases.",
    tags: ["Generative AI", "Prompt Engineering", "LLMs"],
    color: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/10 text-accent",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel rounded-3xl p-7 relative overflow-hidden group hover:-translate-y-1 transition-all"
            >
              {/* Background gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className={`p-3 rounded-2xl ${cert.iconBg} shrink-0 group-hover:scale-110 transition-transform`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-background px-2.5 py-1 rounded-full border border-border/20 whitespace-nowrap">
                    {cert.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground leading-snug">{cert.title}</h3>
                  <p className="text-sm text-primary font-medium mt-0.5">{cert.issuer}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-background border border-border/20 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
