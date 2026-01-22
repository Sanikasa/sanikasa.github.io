import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import type { Project } from "./ProjectData";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <motion.div
        whileHover={{ y: -8 }}
        className="relative h-full rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-accent/50 hover:shadow-xl"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center transition-transform group-hover:scale-110`}
            >
              <project.icon size={28} className="text-foreground" />
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg bg-muted/50 group-hover:bg-accent/10 transition-colors"
            >
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </motion.div>
          </div>

          {/* Category */}
          <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full uppercase tracking-wider">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="font-display text-2xl font-semibold mt-4 mb-3 group-hover:text-accent transition-colors line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-6 line-clamp-2">
            {project.shortDesc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.slice(0, 3).map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 text-xs font-medium bg-muted rounded-md text-muted-foreground"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="px-2.5 py-1 text-xs font-medium bg-muted rounded-md text-muted-foreground">
                +{project.tools.length - 3}
              </span>
            )}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {project.year}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {project.duration}
            </span>
          </div>

          {/* Impact */}
          <div className="pt-6 border-t border-border">
            <div className="font-display text-3xl font-bold text-accent">
              <AnimatedCounter
                end={project.impactValue}
                suffix={project.impactSuffix}
                prefix={project.impactPrefix}
              />
            </div>
            <div className="text-sm text-muted-foreground">
              {project.impactLabel}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
