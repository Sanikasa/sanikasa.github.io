import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase, TrendingUp } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    value: "MS Finance",
    label: "University at Buffalo",
  },
  {
    icon: Briefcase,
    value: "FP&A Experience",
    label: "Hands-on Internship",
  },
  {
    icon: TrendingUp,
    value: "12%",
    label: "Overspend Identified",
  },
  {
    icon: Award,
    value: "85%",
    label: "Time Savings Delivered",
  },
];

export const CredibilityStrip = () => {
  return (
    <section className="py-12 bg-accent/5 border-y border-accent/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {credentials.map((cred, index) => (
            <motion.div
              key={cred.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <cred.icon size={22} className="text-accent" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">{cred.value}</div>
                <div className="text-sm text-muted-foreground">{cred.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
