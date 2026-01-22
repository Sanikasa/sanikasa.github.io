import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, TrendingUp, DollarSign, BarChart3 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  {
    id: 1,
    title: "Cost Optimization Initiative",
    category: "Financial Analysis",
    description: "Led enterprise-wide cost reduction program resulting in $12M annual savings",
    impact: "30% reduction",
    icon: TrendingUp,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 2,
    title: "M&A Due Diligence",
    category: "Strategic Finance",
    description: "Managed financial due diligence for $200M acquisition deal",
    impact: "$200M deal",
    icon: DollarSign,
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 3,
    title: "FP&A Automation",
    category: "Process Improvement",
    description: "Automated financial reporting reducing close time by 40%",
    impact: "40% faster",
    icon: BarChart3,
    color: "from-amber-500/20 to-orange-500/20",
  },
];

export const ProjectsPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Work That Speaks for Itself"
          description="Select projects showcasing my expertise in financial analysis, strategic planning, and process optimization."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to="/projects">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group h-full rounded-2xl border border-border bg-background p-6 transition-all hover:border-accent/50 hover:shadow-lg"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6`}
                  >
                    <project.icon size={24} className="text-foreground" />
                  </div>

                  {/* Category */}
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold mt-2 mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  {/* Impact & Arrow */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-semibold text-accent">
                      {project.impact}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                </motion.div>
              </Link>
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
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl font-medium hover:bg-muted transition-all"
            >
              View All Projects
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
