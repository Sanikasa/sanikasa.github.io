import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { ProjectMetric } from "./ProjectData";

interface KPICardProps {
  metric: ProjectMetric;
  index: number;
}

export const KPICard = ({ metric, index }: KPICardProps) => {
  const TrendIcon = metric.trend === "up" 
    ? TrendingUp 
    : metric.trend === "down" 
    ? TrendingDown 
    : Minus;

  const trendColor = metric.trend === "up" 
    ? "text-emerald-500" 
    : metric.trend === "down" 
    ? "text-red-500" 
    : "text-muted-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative p-6 rounded-2xl bg-gradient-to-br from-card to-muted/30 border border-border overflow-hidden group"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {metric.label}
          </span>
          {metric.trend && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`p-1.5 rounded-lg bg-background ${trendColor}`}
            >
              <TrendIcon size={14} />
            </motion.div>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="font-display text-3xl font-bold text-foreground mb-1"
        >
          {metric.value}
        </motion.div>
        
        {metric.change && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className={`text-sm font-medium ${trendColor}`}
          >
            {metric.change}
          </motion.span>
        )}
      </div>
      
      {/* Decorative element */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent/5"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
};
