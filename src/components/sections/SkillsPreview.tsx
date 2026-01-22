import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Code2, LineChart, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NetworkGridBackground } from "@/components/ui/FinanceBackgrounds";

interface Skill {
  name: string;
  level: number;
}

interface Category {
  name: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  skills: Skill[];
}

const skillCategories: Category[] = [
  {
    name: "Finance & Strategy",
    icon: TrendingUp,
    color: "from-emerald to-emerald/70",
    bgColor: "bg-emerald/10 border-emerald/30",
    skills: [
      { name: "FP&A", level: 95 },
      { name: "Financial Modeling (DCF)", level: 90 },
      { name: "Budgeting & Forecasting", level: 92 },
      { name: "Variance Analysis", level: 88 },
    ],
  },
  {
    name: "Tools & Technologies",
    icon: Code2,
    color: "from-purple to-purple/70",
    bgColor: "bg-purple/10 border-purple/30",
    skills: [
      { name: "Excel (Advanced)", level: 98 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 82 },
      { name: "Bloomberg Terminal", level: 80 },
    ],
  },
  {
    name: "Analytics & Valuation",
    icon: LineChart,
    color: "from-accent to-gold-dark",
    bgColor: "bg-accent/10 border-accent/30",
    skills: [
      { name: "Equity Valuation", level: 90 },
      { name: "Portfolio Optimization", level: 88 },
      { name: "Fixed Income Analysis", level: 85 },
      { name: "Scenario Analysis", level: 92 },
    ],
  },
];

const SkillBarPreview = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium group-hover:text-accent transition-colors">
          {skill.name}
        </span>
        <AnimatePresence>
          {isHovered && (
            <motion.span 
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              className="text-xs font-semibold text-accent"
            >
              {skill.level}%
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="h-full rounded-full bg-accent"
        />
      </div>
    </motion.div>
  );
};

export const SkillsPreview = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-card via-background to-card overflow-hidden">
      {/* Background */}
      <NetworkGridBackground className="opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & Competencies"
          description="Advanced proficiency in financial analysis, modeling, and data-driven decision support."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group p-6 rounded-2xl border ${category.bgColor} bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all`}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                >
                  <category.icon size={22} className="text-foreground" />
                </motion.div>
                <h3 className="font-display text-lg font-semibold">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBarPreview 
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
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
          <Link to="/skills">
            <motion.button
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-accent font-semibold group"
            >
              View All Skills
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};