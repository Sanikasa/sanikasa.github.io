import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { projects } from "@/components/projects/ProjectData";
import { DataMatrixBackground, GeometricGradientBackground } from "@/components/ui/FinanceBackgrounds";

export const ProjectsPreview = () => {
  // Show first 3 featured projects for homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-navy via-navy-light to-navy overflow-hidden">
      {/* Rich backgrounds */}
      <DataMatrixBackground className="opacity-40" />
      <GeometricGradientBackground variant="emerald" className="opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Real Work, Real Impact"
          description="Interactive case studies showcasing DCF valuations, fixed income analysis, portfolio optimization, and AI-powered financial tools."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to="/projects">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group h-full rounded-2xl border border-accent/20 bg-card/90 backdrop-blur-sm overflow-hidden transition-all hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
                >
                  {/* Gradient header */}
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  
                  <div className="p-6">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
                    >
                      <project.icon size={24} className="text-foreground" />
                    </div>

                    {/* Category */}
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold mt-3 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.shortDesc}
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 text-xs font-medium bg-muted rounded text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Impact & Arrow */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <div className="font-display text-2xl font-bold text-accent">
                          <AnimatedCounter
                            end={project.impactValue}
                            suffix={project.impactSuffix}
                            prefix={project.impactPrefix}
                          />
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {project.impactLabel}
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-lg bg-muted/50 group-hover:bg-accent/10 transition-colors"
                      >
                        <ArrowUpRight
                          size={18}
                          className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-full text-accent font-semibold transition-all duration-300"
            >
              <span>View All Projects</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
