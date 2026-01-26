import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, CheckCircle2, Lightbulb, Target, BarChart2, Zap } from "lucide-react";
import { KPICard } from "./KPICard";
import { InteractiveChart } from "./InteractiveChart";
import { DynamicTable } from "./DynamicTable";
import { SensitivityChart } from "./SensitivityChart";
import type { Project } from "./ProjectData";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  if (!project) return null;

  const sections = [
    { icon: Target, title: project.problem.title, content: project.problem.content },
    { icon: Lightbulb, title: project.approach.title, content: project.approach.content },
    { icon: BarChart2, title: project.analysis.title, content: project.analysis.content },
    { icon: Zap, title: project.outcome.title, content: project.outcome.content },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="min-h-screen"
        >
          {/* Header */}
          <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <motion.button
                  whileHover={{ x: -4 }}
                  onClick={onClose}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span className="font-medium">Back to Projects</span>
                </motion.button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="container mx-auto px-6 py-12 md:py-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                <span className="px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full">
                  {project.industry}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8"
              >
                {project.overview}
              </motion.p>


              {/* Tools & Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2 mt-8"
              >
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-sm font-medium bg-card border border-border rounded-lg"
                  >
                    {tool}
                  </span>
                ))}
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-accent/10 text-accent rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* KPIs */}
          <section className="bg-card border-y border-border py-12">
            <div className="container mx-auto px-6">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-display text-2xl font-semibold mb-8"
              >
                Key Metrics
              </motion.h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {project.kpis.map((kpi, index) => (
                  <KPICard key={kpi.label} metric={kpi} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Story Sections */}
          <section className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto space-y-16">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Icon */}
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <section.icon size={18} className="text-accent" />
                  </div>
                  
                  {/* Connecting line */}
                  {index < sections.length - 1 && (
                    <div className="absolute left-[15px] top-10 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-accent/30 to-transparent" />
                  )}
                  
                  <h3 className="font-display text-2xl font-semibold mb-4">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Data Visualization */}
          <section className="bg-muted/30 border-y border-border py-16">
            <div className="container mx-auto px-6">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-display text-2xl font-semibold mb-8"
              >
                Data & Insights
              </motion.h3>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Show sensitivity chart for valuation projects */}
                {project.slug === "home-depot-valuation" ? (
                  <SensitivityChart 
                    data={project.chartData.map(d => ({ name: d.name, value: d.value }))}
                    title="DCF Valuation Sensitivity: Margin Impact"
                    baseValue={334}
                    prefix="$"
                    suffix="/share"
                  />
                ) : (
                  <InteractiveChart 
                    data={project.chartData} 
                    title="Performance Analysis"
                    chartType="area"
                  />
                )}
                <DynamicTable 
                  headers={project.tableData.headers}
                  rows={project.tableData.rows}
                  title={project.slug === "home-depot-valuation" ? "DCF Cash Flow Projections" : "Financial Model"}
                />
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-display text-2xl font-semibold mb-8"
              >
                Key Learnings
              </motion.h3>
              
              <div className="space-y-4">
                {project.learnings.map((learning, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{learning}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="border-t border-border bg-card py-12">
            <div className="container mx-auto px-6 text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all"
              >
                <ArrowLeft size={18} />
                Back to All Projects
              </motion.button>
            </div>
          </section>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
