import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, Target, Wrench, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export interface ExperienceMetric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export interface ExperienceData {
  period: string;
  role: string;
  company: string;
  location: string;
  current?: boolean;
  challenge: string;
  built: string;
  impact: string;
  metrics: ExperienceMetric[];
}

interface ExperienceCardProps {
  experience: ExperienceData;
  index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 md:pl-16"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />
      
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        className={`absolute left-0 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
          experience.current
            ? "bg-accent border-accent shadow-lg shadow-accent/50"
            : "bg-background border-muted-foreground"
        }`}
      >
        {experience.current && (
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-50" />
        )}
      </motion.div>

      {/* Card */}
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer group"
      >
        <motion.div
          layout
          className={`relative rounded-2xl border bg-card overflow-hidden transition-all duration-300 ${
            isExpanded 
              ? "border-accent shadow-xl shadow-accent/10" 
              : "border-border hover:border-accent/50 hover:shadow-lg"
          }`}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative p-6 md:p-8">
            {/* Header - Always visible */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* Period badge */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    {experience.period}
                  </span>
                  {experience.current && (
                    <span className="px-2.5 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      Current
                    </span>
                  )}
                </div>

                {/* Role & Company */}
                <h3 className="font-display text-xl md:text-2xl font-bold mb-1 group-hover:text-accent transition-colors">
                  {experience.role}
                </h3>
                <p className="text-accent font-medium text-lg">{experience.company}</p>
                
                <div className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  {experience.location}
                </div>
              </div>

              {/* Expand indicator */}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="p-2 rounded-lg bg-muted/50 group-hover:bg-accent/10 transition-colors"
              >
                <ChevronDown size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </motion.div>
            </div>

            {/* Metrics preview - Always visible */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
              {experience.metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-accent">
                    <AnimatedCounter
                      end={metric.value}
                      suffix={metric.suffix}
                      prefix={metric.prefix}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Expanded content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 space-y-6">
                    {/* Challenge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                        <Target size={20} className="text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                          The Challenge
                        </h4>
                        <p className="text-foreground">{experience.challenge}</p>
                      </div>
                    </motion.div>

                    {/* What was built */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <Wrench size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                          What I Built
                        </h4>
                        <p className="text-foreground">{experience.built}</p>
                      </div>
                    </motion.div>

                    {/* Business Impact */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <TrendingUp size={20} className="text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                          Business Impact
                        </h4>
                        <p className="text-foreground">{experience.impact}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
