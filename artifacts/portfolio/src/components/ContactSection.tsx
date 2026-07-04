import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, ArrowUpRight, FileText } from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'yograjgarad4@gmail.com',
    href: 'mailto:yograjgarad4@gmail.com',
    icon: <Mail className="w-6 h-6" />,
    color: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white',
    border: 'hover:border-primary/30',
    arrow: 'group-hover:text-primary',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yograjgarad',
    href: 'https://www.linkedin.com/feed/',
    icon: <Linkedin className="w-6 h-6" />,
    color: 'bg-[#0077b5]/10 text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white',
    border: 'hover:border-[#0077b5]/30',
    arrow: 'group-hover:text-[#0077b5]',
  },
  {
    label: 'GitHub',
    value: 'github.com/YOGRAJGARAD',
    href: 'https://github.com/YOGRAJGARAD',
    icon: <Github className="w-6 h-6" />,
    color: 'bg-foreground/5 text-foreground group-hover:bg-foreground group-hover:text-background',
    border: 'hover:border-foreground/30',
    arrow: 'group-hover:text-foreground',
  },
  {
    label: 'Phone',
    value: '+91 9850550013',
    href: 'tel:+919850550013',
    icon: <Phone className="w-6 h-6" />,
    color: 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white',
    border: 'hover:border-accent/30',
    arrow: 'group-hover:text-accent',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's build something.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        {/* Contact Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 mb-8"
        >
          {contactLinks.map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
              className={`glass-panel p-6 rounded-3xl flex items-center justify-between group ${item.border} transition-all hover:-translate-y-0.5`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3.5 rounded-2xl transition-colors ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium mb-0.5">{item.label}</div>
                  <div className="text-base font-bold text-foreground">{item.value}</div>
                </div>
              </div>
              <ArrowUpRight className={`w-5 h-5 text-muted-foreground transition-colors shrink-0 ${item.arrow}`} />
            </motion.a>
          ))}
        </motion.div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://drive.google.com/file/d/1mJUBXC90AOWmewtOpKlvTLtUn7uDooZI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:opacity-80 hover:-translate-y-0.5 transition-all shadow-lg"
          >
            <FileText className="w-5 h-5" />
            View Full Resume
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
