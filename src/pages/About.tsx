import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GridPattern } from "@/components/ui/GridPattern";
import { Award, BookOpen, Target, Users, CheckCircle2 } from "lucide-react";

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

const certifications = [
  "Certified Public Accountant (CPA)",
  "Chartered Financial Analyst (CFA) Level II",
  "Certified Management Accountant (CMA)",
  "SAP Certified Application Associate",
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
                I'm a finance professional passionate about transforming complex 
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
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-accent/30 flex items-center justify-center">
                      <span className="font-display text-6xl font-bold text-accent">JD</span>
                    </div>
                  </div>
                </div>
                
                {/* Stats overlay */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {[
                    { value: 8, suffix: "+", label: "Years Experience" },
                    { value: 50, suffix: "M+", prefix: "$", label: "Managed" },
                    { value: 15, suffix: "+", label: "Projects" },
                    { value: 4, suffix: "", label: "Certifications" },
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
                          prefix={stat.prefix}
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
                    My career in finance began with a fascination for how numbers 
                    can reveal hidden truths about business performance. After 
                    graduating with an MBA in Finance from Columbia Business School, 
                    I embarked on a journey that has taken me through various sectors 
                    of the financial world.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Over the past 8+ years, I've had the privilege of working with 
                    Fortune 500 companies, helping them navigate complex financial 
                    challenges and unlock new opportunities for growth. My experience 
                    spans financial planning & analysis, M&A due diligence, cost 
                    optimization, and process automation.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    What sets me apart is my ability to bridge the gap between 
                    technical financial analysis and strategic business objectives. 
                    I believe that finance should be a driver of innovation, not 
                    just a support function.
                  </p>
                </motion.div>

                {/* Certifications */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Certifications & Credentials
                  </h3>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{cert}</span>
                      </motion.div>
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
