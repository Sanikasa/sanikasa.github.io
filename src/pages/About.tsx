import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GridPattern } from "@/components/ui/GridPattern";
import { Award, BookOpen, Target, Users, CheckCircle2, GraduationCap } from "lucide-react";
import professionalPhoto from "@/assets/professional-photo.jpg";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every number tells a story. I ensure accuracy and attention to detail in all financial analyses.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great financial outcomes come from cross-functional teamwork and clear communication.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "The finance landscape evolves rapidly. I stay current with emerging trends and technologies.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "I hold myself to the highest professional standards and strive to exceed expectations.",
  },
];

const education = [
  {
    degree: "MS in Quantitative Finance & Fintech",
    school: "University at Buffalo, USA",
    period: "Aug 2024 – May 2026",
  },
  {
    degree: "B.Com in Financial Accounting & Auditing",
    school: "University of Mumbai, India",
    period: "Sept 2021 – May 2024",
  },
];

const skills = [
  "FP&A & Budgeting",
  "Financial Modeling (DCF, FCFE)",
  "Variance & Cost Analysis",
  "Cash Flow Management",
  "Scenario & Sensitivity Analysis",
  "Excel (Advanced)",
  "Python (Pandas, NumPy)",
  "SQL & Power BI",
  "Bloomberg Terminal",
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-card">
          <GridPattern className="opacity-30" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4"
              >
                About Me
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                The Story Behind
                <br />
                <span className="text-gradient-gold">the Numbers</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl"
              >
                Quantitative Finance graduate passionate about transforming complex 
                financial data into strategic insights that drive business growth.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <div className="aspect-[3/4] max-w-sm rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 relative border border-accent/20 shadow-2xl">
                  <img 
                    src={professionalPhoto} 
                    alt="Sanika More - Professional Photo" 
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Decorative overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />
                </div>
                
                {/* Stats overlay */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {[
                    { value: 5, suffix: "", label: "Interactive Projects" },
                    { value: 334, suffix: "", prefix: "$", label: "HD Valuation" },
                    { value: 85, suffix: "%", label: "Time Saved" },
                    { value: 52, suffix: "%", prefix: "+", label: "Sharpe Ratio" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-card border border-border text-center"
                    >
                      <div className="font-display text-2xl font-bold text-accent">
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="prose prose-lg"
                >
                  <h2 className="font-display text-3xl font-bold mb-6">My Journey</h2>
                  <p className="text-muted-foreground mb-6">
                    I'm Sanika More, a Quantitative Finance graduate student at the 
                    University at Buffalo with hands-on experience in financial planning 
                    & analysis (FP&A), budgeting, forecasting, and variance analysis.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    My background combines a strong accounting foundation from Mumbai 
                    with advanced quantitative finance skills. I've built DCF and FCFE 
                    models, conducted cash flow analysis, and delivered data-driven 
                    insights to support strategic decision-making.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    What drives me is the intersection of finance and technology—using 
                    Python, SQL, and advanced Excel to automate processes and uncover 
                    insights that traditional methods might miss.
                  </p>
                </motion.div>

                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                    <GraduationCap size={20} className="text-accent" />
                    Education
                  </h3>
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <motion.div
                        key={edu.degree}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="p-4 rounded-xl bg-card border border-border"
                      >
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.school}</p>
                        <p className="text-xs text-accent mt-1">{edu.period}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Key Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Core Competencies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        className="px-3 py-1.5 text-sm font-medium bg-accent/10 text-accent rounded-lg"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <SectionHeading
              eyebrow="Core Values"
              title="What Drives Me"
              description="The principles that guide my professional approach and decision-making."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-border bg-background hover:border-accent/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
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

export default About;
