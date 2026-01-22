import { motion } from "framer-motion";
import { Award, GraduationCap, TrendingUp, BarChart3, PieChart } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    value: "MS Quantitative Finance",
    label: "University at Buffalo",
  },
  {
    icon: TrendingUp,
    value: "$334/share",
    label: "Home Depot Valuation",
  },
  {
    icon: BarChart3,
    value: "+52%",
    label: "Sharpe Improvement",
  },
  {
    icon: PieChart,
    value: "85%",
    label: "Process Time Saved",
  },
  {
    icon: Award,
    value: "5",
    label: "Interactive Projects",
  },
];

export const CredibilityStrip = () => {
  return (
    <section className="py-8 bg-accent/5 border-y border-accent/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {credentials.map((cred, index) => (
            <motion.div
              key={cred.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <cred.icon size={20} className="text-accent" />
              </div>
              <div>
                <div className="font-display font-bold text-base">{cred.value}</div>
                <div className="text-xs text-muted-foreground">{cred.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
