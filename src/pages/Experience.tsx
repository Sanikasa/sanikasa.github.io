import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/ui/GridPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Calendar, ChevronRight, GraduationCap } from "lucide-react";

const experiences = [
  {
    period: "2021 - Present",
    role: "Senior Financial Analyst",
    company: "Global Corp",
    location: "New York, NY",
    type: "Full-time",
    current: true,
    description: "Leading financial planning and analysis for a $2B business unit. Partnering with senior leadership to drive strategic decision-making through data-driven insights.",
    achievements: [
      "Led $12M cost optimization initiative resulting in 30% reduction in operational expenses",
      "Developed automated reporting suite reducing monthly close time by 40%",
      "Built 5-year strategic financial model supporting $200M M&A transaction",
      "Mentored team of 3 junior analysts on financial modeling best practices",
    ],
  },
  {
    period: "2018 - 2021",
    role: "Financial Analyst",
    company: "Tech Finance Inc",
    location: "Boston, MA",
    type: "Full-time",
    current: false,
    description: "Managed end-to-end budgeting, forecasting, and variance analysis for technology division with $500M annual revenue.",
    achievements: [
      "Created revenue forecasting model with 95% accuracy across 8 product lines",
      "Identified $5M in working capital optimization opportunities",
      "Implemented new FP&A reporting framework adopted across 4 business units",
      "Received 'Rising Star' award for exceptional performance",
    ],
  },
  {
    period: "2016 - 2018",
    role: "Junior Accountant",
    company: "Accounting Partners LLP",
    location: "Chicago, IL",
    type: "Full-time",
    current: false,
    description: "Performed financial reporting, audit preparation, and month-end close activities for diverse client portfolio.",
    achievements: [
      "Managed month-end close process for 15+ clients",
      "Assisted in preparation of audited financial statements",
      "Developed Excel-based automation tools saving 20 hours per month",
      "Passed CPA exam on first attempt while working full-time",
    ],
  },
];

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    school: "Columbia Business School",
    year: "2016",
    focus: "Finance & Accounting",
  },
  {
    degree: "Bachelor of Science in Accounting",
    school: "University of Illinois",
    year: "2014",
    focus: "Magna Cum Laude",
  },
];

const Experience = () => {
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
              Career Journey
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Professional
              <br />
              <span className="text-gradient-gold">Experience</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              A progressive career in finance and accounting, marked by 
              increasing responsibility and measurable impact.
            </motion.p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.period}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-12 pb-16 last:pb-0"
                >
                  {/* Timeline line */}
                  {index < experiences.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      className="absolute left-[7px] md:left-[11px] top-6 w-0.5 h-full bg-border origin-top"
                    />
                  )}

                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`absolute left-0 top-2 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center ${
                      exp.current
                        ? "bg-accent border-accent"
                        : "bg-background border-muted-foreground"
                    }`}
                  >
                    {exp.current && (
                      <span className="w-2 h-2 rounded-full bg-accent-foreground" />
                    )}
                  </motion.div>

                  {/* Content Card */}
                  <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-accent/50 transition-all">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                          {exp.current && (
                            <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-2xl font-bold">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Key Achievements
                      </h4>
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <ChevronRight
                            size={16}
                            className="text-accent flex-shrink-0 mt-0.5"
                          />
                          <span className="text-sm text-muted-foreground">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <SectionHeading
              eyebrow="Education"
              title="Academic Foundation"
              description="A strong educational background in finance and accounting."
            />

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-16">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-border bg-background"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <GraduationCap size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-accent font-medium mb-2">{edu.school}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{edu.focus}</span>
                    <span>{edu.year}</span>
                  </div>
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

export default Experience;
