import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  {
    icon: Briefcase,
    title: "Strategic Finance",
    description: "Led financial planning and analysis for Fortune 500 companies",
  },
  {
    icon: Award,
    title: "CPA Certified",
    description: "Licensed CPA with expertise in GAAP and IFRS standards",
  },
  {
    icon: GraduationCap,
    title: "MBA Finance",
    description: "Advanced degree from top-tier business school",
  },
];

export const AboutPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-muted relative">
              {/* Placeholder for professional photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-accent/30 flex items-center justify-center">
                  <span className="font-display text-6xl font-bold text-accent">JD</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 glass-card rounded-xl p-4">
                <div className="text-2xl font-display font-bold text-accent">8+</div>
                <div className="text-xs text-muted-foreground">Years Exp.</div>
              </div>
              <div className="absolute bottom-6 left-6 glass-card rounded-xl p-4">
                <div className="text-2xl font-display font-bold text-accent">CPA</div>
                <div className="text-xs text-muted-foreground">Certified</div>
              </div>
            </div>
            
            {/* Floating accent */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-4 -bottom-4 w-24 h-24 border-2 border-dashed border-accent/30 rounded-xl"
            />
          </motion.div>

          {/* Right - Content */}
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Driving Financial Excellence"
              align="left"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground mt-6 mb-8"
            >
              With over 8 years of experience in corporate finance, I specialize in 
              transforming complex financial data into actionable insights. My approach 
              combines analytical rigor with strategic thinking to help organizations 
              achieve their financial goals.
            </motion.p>

            <div className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <motion.button
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-accent font-semibold"
              >
                Learn more about me
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
