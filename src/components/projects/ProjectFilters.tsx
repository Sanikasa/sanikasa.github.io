import { motion } from "framer-motion";
import { Filter, X } from "lucide-react";
import { useState } from "react";

interface ProjectFiltersProps {
  skills: string[];
  tools: string[];
  industries: string[];
  selectedSkills: string[];
  selectedTools: string[];
  selectedIndustry: string | null;
  onSkillToggle: (skill: string) => void;
  onToolToggle: (tool: string) => void;
  onIndustrySelect: (industry: string | null) => void;
  onClearAll: () => void;
}

export const ProjectFilters = ({
  skills,
  tools,
  industries,
  selectedSkills,
  selectedTools,
  selectedIndustry,
  onSkillToggle,
  onToolToggle,
  onIndustrySelect,
  onClearAll,
}: ProjectFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const hasActiveFilters = selectedSkills.length > 0 || selectedTools.length > 0 || selectedIndustry !== null;

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent/10">
            <Filter size={18} className="text-accent" />
          </div>
          <span className="font-semibold">Filter Projects</span>
          {hasActiveFilters && (
            <span className="px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded-full">
              {selectedSkills.length + selectedTools.length + (selectedIndustry ? 1 : 0)}
            </span>
          )}
        </div>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="text-muted-foreground"
        >
          ↓
        </motion.span>
      </button>

      {/* Expanded Filters */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="p-4 pt-0 space-y-6">
          {/* Skills */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              By Skill
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <motion.button
                  key={skill}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSkillToggle(skill)}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                    selectedSkills.includes(skill)
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {skill}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              By Tool
            </h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <motion.button
                  key={tool}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onToolToggle(tool)}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                    selectedTools.includes(tool)
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tool}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Industry */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              By Industry
            </h4>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <motion.button
                  key={industry}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onIndustrySelect(selectedIndustry === industry ? null : industry)}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                    selectedIndustry === industry
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {industry}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Clear All */}
          {hasActiveFilters && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={onClearAll}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={14} />
              Clear all filters
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
