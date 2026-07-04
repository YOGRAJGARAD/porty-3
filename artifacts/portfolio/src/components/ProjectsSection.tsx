import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Github, Sparkles, Database } from 'lucide-react';
import { projectsData, Project } from '../data/projects';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Stop body scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Selected Case Studies</h2>
          <p className="text-muted-foreground text-lg">Product-grade analytics ecosystems and AI workflows.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className={`glass-panel rounded-[2rem] overflow-hidden cursor-pointer group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative ${
                project.isFeatured ? 'md:col-span-2 border-primary/40' : 'border-primary/10'
              }`}
            >
              {project.isFeatured && (
                <div className="absolute inset-0 border-2 border-primary/20 rounded-[2rem] animate-pulse pointer-events-none" />
              )}
              
              <div className={`w-full bg-muted/20 relative overflow-hidden ${project.isFeatured ? 'h-72 md:h-96' : 'h-64'}`}>
                <img
                  src={project.banner}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {project.isFeatured && (
                  <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-full text-sm flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Featured Project
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-xs text-muted-foreground">{project.status}</span>
                </div>
                
                <h3 className={`font-bold text-foreground mb-2 ${project.isFeatured ? 'text-3xl' : 'text-2xl'}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="px-3 py-1 bg-background rounded-full text-xs font-medium text-foreground border border-border/10">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-background rounded-full text-xs font-medium text-muted-foreground border border-border/10">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors">
                  View Full Case Study <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-card text-card-foreground shadow-2xl rounded-3xl overflow-hidden flex flex-col border border-border/20 z-10"
              onClick={e => e.stopPropagation()}
            >
              {/* Header with image */}
              <div className="relative h-64 sm:h-80 bg-muted shrink-0">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary font-medium rounded-full text-xs uppercase tracking-wider backdrop-blur-md">
                      {selectedProject.category}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium bg-background/50 px-3 py-1 rounded-full backdrop-blur-md">
                      {selectedProject.status}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl">{selectedProject.subtitle}</p>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-8 sm:p-12 flex-1">
                <div className="grid md:grid-cols-[2fr_1fr] gap-12">
                  
                  {/* Main content */}
                  <div className="space-y-10">
                    <section>
                      <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{selectedProject.problemStatement}</p>
                    </section>

                    {selectedProject.goal && (
                      <section>
                        <h3 className="text-2xl font-bold mb-4">The Goal</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{selectedProject.goal}</p>
                      </section>
                    )}

                    <section>
                      <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    {selectedProject.architectureFlow && (
                      <section>
                        <h3 className="text-2xl font-bold mb-4">Architecture Flow</h3>
                        <div className="space-y-4">
                          {selectedProject.architectureFlow.map((step, i) => {
                            const [title, desc] = step.split('—');
                            return (
                              <div key={i} className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-border/10">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                                  {i + 1}
                                </div>
                                <div>
                                  <div className="font-bold text-foreground mb-1">{title.trim()}</div>
                                  <div className="text-muted-foreground text-sm">{desc?.trim()}</div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </section>
                    )}

                    {selectedProject.results && (
                      <section>
                        <h3 className="text-2xl font-bold mb-4">Results & Impact</h3>
                        <ul className="space-y-3">
                          {selectedProject.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              <span className="leading-relaxed">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-8">
                    <div className="p-6 rounded-2xl bg-muted/30 border border-border/10">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <Database className="w-5 h-5 text-primary" /> Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1.5 bg-background rounded-md text-sm font-medium border border-border/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-lg">Performance Metrics</h4>
                      {selectedProject.metrics.map((metric, i) => (
                        <div key={i} className={`p-4 rounded-xl border ${metric.highlight === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-400' : metric.highlight === 'danger' ? 'bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-400' : 'bg-background border-border/10 text-foreground'}`}>
                          <div className="text-sm font-medium opacity-80 mb-1">{metric.label}</div>
                          <div className="text-2xl font-bold mb-1">{metric.value}</div>
                          <div className="text-xs opacity-70 leading-snug">{metric.description}</div>
                        </div>
                      ))}
                    </div>

                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-4 px-6 rounded-xl bg-foreground text-background font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      <Github className="w-5 h-5" /> View Repository
                    </a>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
