import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/ui/GridPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap } from "lucide-react";
import { WorkExperienceSection } from "@/components/experience/WorkExperienceSection";
import { CertificationsSection } from "@/components/experience/CertificationsSection";
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

        {/* Work Experience Section */}
        <WorkExperienceSection />

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Education */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <SectionHeading
              eyebrow="Education"
              title="Academic Background"
              description="Building expertise through continuous learning."
            />

            <div className="max-w-4xl mx-auto mt-16">
              <div className="grid md:grid-cols-2 gap-6">
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
