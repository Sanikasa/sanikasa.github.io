import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skillCategories = [
  {
    name: "Technical Skills",
    skills: ["Excel/VBA", "SAP", "Oracle", "SQL", "Power BI", "Tableau"],
  },
  {
    name: "Finance Skills",
    skills: ["FP&A", "Budgeting", "Forecasting", "Financial Modeling", "Valuation"],
  },
  {
    name: "Accounting",
    skills: ["GAAP", "IFRS", "Audit", "Consolidation", "Revenue Recognition"],
  },
];

export const SkillsPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & Competencies"
          description="A comprehensive toolkit spanning financial analysis, accounting standards, and business intelligence."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-background"
            >
              <h3 className="font-display text-lg font-semibold mb-6">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
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
              className="inline-flex items-center gap-2 text-accent font-semibold"
            >
              View All Skills
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
