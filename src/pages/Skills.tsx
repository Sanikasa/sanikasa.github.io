import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/ui/GridPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { 
  FileSpreadsheet, 
  Database, 
  BarChart3, 
  Calculator, 
  TrendingUp, 
  PieChart,
  Code2,
  LineChart,
  Users,
  MessageSquare,
  Target,
  Lightbulb,
  type LucideIcon
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillCategory {
  name: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Finance & Strategy",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "FP&A", level: 95, description: "Budget-to-actual variance analysis, cash flow forecasting, and monthly reporting cycles" },
      { name: "Budgeting & Forecasting", level: 92, description: "Quarterly budgeting, reforecasting, and consolidating departmental inputs" },
      { name: "Cash Flow Management", level: 90, description: "Weekly inflow/outflow tracking, working capital optimization" },
      { name: "Variance & Cost Analysis", level: 88, description: "Departmental cost center analysis, identifying overspend and cost control measures" },
      { name: "Financial Modeling (DCF)", level: 90, description: "Integrated DCF, FCFE models with WACC estimation and terminal value" },
      { name: "Scenario & Sensitivity Analysis", level: 92, description: "1,000+ case Monte Carlo simulations, margin and revenue sensitivity" },
    ],
  },
  {
    name: "Tools & Technologies",
    icon: Code2,
    color: "from-blue-500 to-indigo-500",
    skills: [
      { name: "Excel (Advanced)", level: 98, description: "PivotTables, VLOOKUP, dynamic charts, VBA macros, Power Query" },
      { name: "Python", level: 85, description: "Pandas, NumPy for financial analysis and Monte Carlo simulations" },
      { name: "SQL", level: 82, description: "Data extraction, aggregation, and financial reporting queries" },
      { name: "Bloomberg Terminal", level: 80, description: "Market data, bond analytics, equity screening, and real-time pricing" },
      { name: "Power BI", level: 85, description: "Interactive dashboards, DAX calculations, data modeling" },
      { name: "Tableau", level: 78, description: "Data visualization, storytelling, and executive reporting" },
    ],
  },
  {
    name: "Analytics & Valuation",
    icon: LineChart,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Financial Statement Analysis", level: 92, description: "Balance sheet, income statement, and cash flow statement interpretation" },
      { name: "Equity Valuation", level: 90, description: "DCF, FCFE, comparable company analysis, and precedent transactions" },
      { name: "Fixed Income Analysis", level: 85, description: "Bond pricing, YTM, duration, convexity, and credit risk assessment" },
      { name: "Portfolio Optimization", level: 88, description: "Mean-variance optimization, Sharpe ratio maximization, risk-adjusted returns" },
      { name: "KPI Development", level: 86, description: "Defining and tracking operational and financial performance metrics" },
      { name: "ROI & Cost-Benefit Analysis", level: 90, description: "Investment evaluation, vendor contract analysis, capital allocation" },
    ],
  },
];

const softSkills = [
  { 
    name: "Communication", 
    icon: MessageSquare,
    description: "Clear presentation of complex financial data to non-technical stakeholders" 
  },
  { 
    name: "Stakeholder Management", 
    icon: Users,
    description: "Building relationships with finance leadership and cross-functional teams" 
  },
  { 
    name: "Problem Solving", 
    icon: Lightbulb,
    description: "Analytical approach to identifying root causes and developing solutions" 
  },
  { 
    name: "Strategic Thinking", 
    icon: Target,
    description: "Connecting financial analysis to business strategy and decision-making" 
  },
];

const SkillBar = ({ skill, index, categoryIndex }: { skill: Skill; index: number; categoryIndex: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <motion.span 
          animate={{ scale: isHovered ? 1.1 : 1 }}
          className="text-sm font-semibold text-accent"
        >
          {skill.level}%
        </motion.span>
      </div>
      
      <div className="relative h-3 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: categoryIndex * 0.1 + index * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent to-accent/70"
        />
        
        {/* Animated glow on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-y-0 left-0 rounded-full bg-accent/30 blur-sm"
          style={{ width: `${skill.level}%` }}
        />
      </div>
      
      {/* Description tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute left-0 right-0 mt-2 p-3 rounded-lg bg-popover border border-border shadow-lg z-10 text-xs text-muted-foreground"
          >
            {skill.description}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-card">
          <GridPattern className="opacity-30" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4"
            >
              Expertise
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Skills &
              <br />
              <span className="text-gradient-gold">Competencies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              Advanced proficiency in financial analysis, modeling, and data-driven 
              decision support tools.
            </motion.p>
          </div>
        </section>

        {/* Skills Matrix */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.15 }}
                  onMouseEnter={() => setActiveCategory(categoryIndex)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className="group relative p-6 md:p-8 rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-accent/50"
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCategory === categoryIndex ? 0.05 : 0 }}
                    className={`absolute inset-0 bg-gradient-to-br ${category.color}`}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                      >
                        <category.icon size={24} className="text-white" />
                      </motion.div>
                      <h3 className="font-display text-xl font-semibold">
                        {category.name}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar 
                          key={skill.name}
                          skill={skill}
                          index={skillIndex}
                          categoryIndex={categoryIndex}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <SectionHeading
              eyebrow="Leadership"
              title="Professional Skills"
              description="Beyond technical expertise—skills that drive collaboration and impact."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group p-6 rounded-2xl border border-border bg-background hover:border-accent/50 transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                  >
                    <skill.icon size={24} className="text-accent" />
                  </motion.div>
                  <h4 className="font-display font-semibold mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skill Stats */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "3+", label: "Years of Experience" },
                { value: "6+", label: "Technical Tools" },
                { value: "15+", label: "Core Competencies" },
                { value: "1000+", label: "Scenarios Analyzed" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;