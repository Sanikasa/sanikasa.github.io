import { motion } from "framer-motion";
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
  FileText,
  PieChart,
  Code,
  Workflow,
  Users
} from "lucide-react";

const skillCategories = [
  {
    name: "Financial Analysis",
    icon: TrendingUp,
    skills: [
      { name: "Financial Modeling", level: 95 },
      { name: "Valuation (DCF, Comps)", level: 90 },
      { name: "FP&A", level: 95 },
      { name: "Budgeting & Forecasting", level: 92 },
      { name: "Variance Analysis", level: 88 },
      { name: "M&A Due Diligence", level: 85 },
    ],
  },
  {
    name: "Accounting",
    icon: Calculator,
    skills: [
      { name: "GAAP", level: 95 },
      { name: "IFRS", level: 85 },
      { name: "Revenue Recognition", level: 90 },
      { name: "Consolidation", level: 88 },
      { name: "Audit Preparation", level: 85 },
      { name: "Month-End Close", level: 92 },
    ],
  },
  {
    name: "Technical Tools",
    icon: Code,
    skills: [
      { name: "Excel / VBA", level: 98 },
      { name: "SQL", level: 85 },
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 82 },
      { name: "SAP", level: 80 },
      { name: "Oracle", level: 78 },
    ],
  },
];

const tools = [
  { name: "Microsoft Excel", icon: FileSpreadsheet, description: "Advanced VBA, Power Query, Pivot Tables" },
  { name: "SQL Databases", icon: Database, description: "Data extraction and analysis" },
  { name: "Power BI", icon: BarChart3, description: "Dashboard development and reporting" },
  { name: "SAP", icon: Workflow, description: "Financial modules and reporting" },
  { name: "Tableau", icon: PieChart, description: "Data visualization and analytics" },
  { name: "Financial Software", icon: FileText, description: "Bloomberg, FactSet, Hyperion" },
];

const softSkills = [
  "Strategic Thinking",
  "Cross-functional Leadership",
  "Executive Communication",
  "Problem Solving",
  "Stakeholder Management",
  "Team Mentorship",
  "Project Management",
  "Presentation Skills",
];

const Skills = () => {
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
              A comprehensive toolkit spanning financial analysis, accounting 
              standards, and business intelligence technologies.
            </motion.p>
          </div>
        </section>

        {/* Skills with Progress */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="p-6 md:p-8 rounded-2xl border border-border bg-card"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <category.icon size={24} className="text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">
                      {category.name}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-accent">{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full bg-accent"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <SectionHeading
              eyebrow="Technology Stack"
              title="Tools & Software"
              description="Proficient in industry-leading financial and analytical tools."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-border bg-background flex items-start gap-4 hover:border-accent/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <tool.icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{tool.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <SectionHeading
              eyebrow="Leadership"
              title="Soft Skills"
              description="Beyond technical expertise, essential skills for effective collaboration and leadership."
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mt-16 max-w-3xl mx-auto"
            >
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:border-accent hover:text-accent transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
