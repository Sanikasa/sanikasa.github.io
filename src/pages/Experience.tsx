import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/ui/GridPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap } from "lucide-react";
import { ExperienceCard, type ExperienceData } from "@/components/experience/ExperienceCard";

const experiences: ExperienceData[] = [
  {
    period: "2023",
    role: "Finance Intern",
    company: "Mintskill HR Solutions",
    location: "India",
    current: false,
    challenge: "Manual budget tracking processes were causing delayed variance detection, resulting in missed cost optimization opportunities and reactive rather than proactive financial management.",
    built: "Developed automated variance analysis dashboards and forecasting models in Excel. Created standardized reporting templates that enabled real-time budget monitoring across departments.",
    impact: "Identified 6-8% excess vendor payments for recovery. Improved forecast accuracy by 10%. Transformed FP&A function from reactive to proactive financial management.",
    metrics: [
      { value: 8, suffix: "%", label: "Payments Recovered" },
      { value: 10, suffix: "%", label: "Forecast Accuracy Gain" },
      { value: 40, suffix: "%", label: "Reporting Time Saved" },
      { value: 3, suffix: "+", label: "Dashboards Built" }
    ]
  }
];

const education = [
  {
    degree: "MS in Quantitative Finance & Fintech",
    school: "University at Buffalo, SUNY",
    year: "2024 - 2026",
    focus: "Financial Analysis & Modeling",
  },
  {
    degree: "B.Com in Financial Accounting & Auditing",
    school: "University of Mumbai",
    year: "2021 - 2024",
    focus: "Accounting & Finance",
  },
];

const certifications = [
  { name: "Chartered Accountant (CA)", status: "In Progress" },
  { name: "Bloomberg Market Concepts", status: "Completed" },
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
              Impact-Driven
              <br />
              <span className="text-gradient-gold">Experience</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              A track record of solving real problems, building scalable solutions, 
              and delivering measurable business outcomes.
            </motion.p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceCard 
                  key={exp.period} 
                  experience={exp} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <SectionHeading
              eyebrow="Credentials"
              title="Education & Certifications"
              description="Building expertise through continuous learning."
            />

            <div className="max-w-4xl mx-auto mt-16">
              {/* Education */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl border border-border bg-background group hover:border-accent/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-border bg-background"
              >
                <h3 className="font-display text-lg font-semibold mb-4">
                  Professional Certifications
                </h3>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30"
                    >
                      <span className="text-sm font-medium">{cert.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        cert.status === "Completed" 
                          ? "bg-green-500/10 text-green-500" 
                          : "bg-accent/10 text-accent"
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
