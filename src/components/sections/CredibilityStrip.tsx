import { motion } from "framer-motion";
import { Award, GraduationCap, TrendingUp, BarChart3, PieChart } from "lucide-react";
import { NetworkGridBackground } from "@/components/ui/FinanceBackgrounds";

const credentials = [
  {
    icon: GraduationCap,
    value: "MS Quant Finance & Fintech",
    label: "University at Buffalo",
    color: "from-lavender/40 to-lavender/20",
  },
  {
    icon: TrendingUp,
    value: "$334/share",
    label: "Home Depot Valuation",
    color: "from-mint/40 to-mint/20",
  },
  {
    icon: BarChart3,
    value: "+52%",
    label: "Sharpe Improvement",
    color: "from-peach/40 to-peach/20",
  },
  {
    icon: PieChart,
    value: "85%",
    label: "Process Time Saved",
    color: "from-sky/40 to-sky/20",
  },
  {
    icon: Award,
    value: "6",
    label: "Interactive Projects",
    color: "from-lavender/40 to-lavender/20",
  },
];

export const CredibilityStrip = () => {
  return (
    <section className="relative py-10 bg-gradient-to-r from-lavender/10 via-mint/10 to-peach/10 border-y border-lavender/20 overflow-hidden">
      {/* Animated background */}
      <NetworkGridBackground className="opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {credentials.map((cred, index) => (
            <motion.div
              key={cred.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cred.color} border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:border-accent/50 transition-colors`}>
                <cred.icon size={22} className="text-accent" />
              </div>
              <div>
                <div className="font-display font-bold text-base text-foreground">{cred.value}</div>
                <div className="text-xs text-muted-foreground">{cred.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
