import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/ui/GridPattern";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TrendingUp, DollarSign, BarChart3, PieChart, ArrowUpRight, X, Calendar, Building } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Enterprise Cost Optimization Initiative",
    category: "Financial Analysis",
    shortDesc: "Led enterprise-wide cost reduction program resulting in $12M annual savings",
    fullDesc: "Spearheaded a comprehensive cost optimization initiative across 15 business units. Conducted deep-dive analysis of operational expenses, identified inefficiencies, and implemented strategic cost reduction measures while maintaining service quality.",
    impact: { value: 30, suffix: "%", label: "Cost Reduction" },
    metrics: [
      { label: "Annual Savings", value: "$12M" },
      { label: "Business Units", value: "15" },
      { label: "Implementation Time", value: "8 months" },
      { label: "ROI", value: "450%" },
    ],
    icon: TrendingUp,
    color: "from-emerald-500/20 to-teal-500/20",
    year: "2023",
    company: "Global Corp",
  },
  {
    id: 2,
    title: "M&A Due Diligence - Tech Acquisition",
    category: "Strategic Finance",
    shortDesc: "Managed financial due diligence for $200M acquisition deal",
    fullDesc: "Led the financial due diligence workstream for a strategic tech acquisition. Analyzed target company's financial statements, revenue recognition policies, and working capital requirements. Identified $15M in post-merger synergies.",
    impact: { value: 200, suffix: "M", prefix: "$", label: "Deal Value" },
    metrics: [
      { label: "Synergies Identified", value: "$15M" },
      { label: "Due Diligence Duration", value: "6 weeks" },
      { label: "Team Size", value: "8 analysts" },
      { label: "Documents Reviewed", value: "500+" },
    ],
    icon: DollarSign,
    color: "from-blue-500/20 to-indigo-500/20",
    year: "2022",
    company: "Global Corp",
  },
  {
    id: 3,
    title: "FP&A Process Automation",
    category: "Process Improvement",
    shortDesc: "Automated financial reporting reducing close time by 40%",
    fullDesc: "Designed and implemented automated financial reporting workflows using Power BI and Excel VBA. Reduced monthly close process from 10 days to 6 days while improving data accuracy and enabling real-time insights.",
    impact: { value: 40, suffix: "%", label: "Time Saved" },
    metrics: [
      { label: "Close Time Reduction", value: "4 days" },
      { label: "Reports Automated", value: "25" },
      { label: "Hours Saved Monthly", value: "120" },
      { label: "Error Reduction", value: "95%" },
    ],
    icon: BarChart3,
    color: "from-amber-500/20 to-orange-500/20",
    year: "2023",
    company: "Global Corp",
  },
  {
    id: 4,
    title: "Revenue Forecasting Model",
    category: "Financial Modeling",
    shortDesc: "Built predictive revenue model with 95% accuracy",
    fullDesc: "Developed a sophisticated revenue forecasting model incorporating seasonal trends, market indicators, and customer behavior patterns. The model improved forecast accuracy from 82% to 95%, enabling better resource planning.",
    impact: { value: 95, suffix: "%", label: "Accuracy" },
    metrics: [
      { label: "Accuracy Improvement", value: "+13%" },
      { label: "Forecast Horizon", value: "12 months" },
      { label: "Revenue Streams", value: "8" },
      { label: "Variables Analyzed", value: "50+" },
    ],
    icon: PieChart,
    color: "from-purple-500/20 to-pink-500/20",
    year: "2022",
    company: "Tech Finance Inc",
  },
];

const categories = ["All", "Financial Analysis", "Strategic Finance", "Process Improvement", "Financial Modeling"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

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
              Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Projects That
              <br />
              <span className="text-gradient-gold">Deliver Results</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              Explore select projects showcasing my expertise in financial analysis, 
              strategic planning, and process optimization.
            </motion.p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-background border-b border-border sticky top-[73px] z-30">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <motion.div
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ y: -8 }}
                      className="group cursor-pointer h-full rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                        >
                          <project.icon size={28} className="text-foreground" />
                        </div>
                        <ArrowUpRight
                          size={24}
                          className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                        />
                      </div>

                      {/* Content */}
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="font-display text-2xl font-semibold mt-2 mb-3 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {project.shortDesc}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {project.year}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Building size={14} />
                          {project.company}
                        </span>
                      </div>

                      {/* Impact */}
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="font-display text-3xl font-bold text-accent">
                          <AnimatedCounter
                            end={project.impact.value}
                            suffix={project.impact.suffix}
                            prefix={project.impact.prefix}
                          />
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {project.impact.label}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center`}
                >
                  <selectedProject.icon size={28} className="text-foreground" />
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h2 className="font-display text-3xl font-bold mt-2 mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-muted-foreground mb-8">
                {selectedProject.fullDesc}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {selectedProject.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 rounded-xl bg-muted"
                  >
                    <div className="text-2xl font-display font-bold text-accent">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {selectedProject.year}
                </span>
                <span className="flex items-center gap-1.5">
                  <Building size={14} />
                  {selectedProject.company}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Projects;
