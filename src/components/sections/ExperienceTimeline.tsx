import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const experiences = [
  {
    period: "2023",
    role: "Finance Intern",
    company: "Mintskill HR Solutions",
    description: "Performed variance analysis, built automated dashboards, improved forecast accuracy by 10%, and recovered 6-8% in excess vendor payments.",
    current: true,
  },
  {
    period: "2024 - 2026",
    role: "MS Quantitative Finance",
    company: "University at Buffalo",
    description: "Building DCF/FCFE models, portfolio optimization, fixed income analysis, and Python for finance.",
    current: false,
  },
  {
    period: "2021 - 2024",
    role: "B.Com Financial Accounting",
    company: "University of Mumbai",
    description: "Strong foundation in accounting principles, financial statements, and audit procedures.",
    current: false,
  },
];

export const ExperienceTimeline = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Career Journey"
          title="Experience That Matters"
          description="A track record of driving financial excellence across diverse industries."
        />

        <div className="max-w-3xl mx-auto mt-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="absolute left-[7px] top-4 w-0.5 h-full bg-border origin-top"
                />
              )}

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 ${
                  exp.current
                    ? "bg-accent border-accent"
                    : "bg-background border-muted-foreground"
                }`}
              />

              {/* Content */}
              <div className="group">
                <span className="text-sm text-muted-foreground">
                  {exp.period}
                </span>
                <h3 className="font-display text-xl font-semibold mt-1">
                  {exp.role}
                </h3>
                <p className="text-accent font-medium mb-2">{exp.company}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/experience">
            <motion.button
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-accent font-semibold"
            >
              View Full Experience
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
