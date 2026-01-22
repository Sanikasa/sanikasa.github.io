import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Briefcase, 
  Target,
  ChevronRight
} from "lucide-react";
import { useRef } from "react";

const journeySteps = [
  {
    id: 1,
    icon: BookOpen,
    year: "Foundation",
    title: "Accounting Roots",
    description: "Built a strong foundation in financial statements, GAAP principles, and the language of business. Learned that every number tells a story.",
    highlight: "Understanding the fundamentals",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    id: 2,
    icon: TrendingUp,
    year: "Evolution",
    title: "Finance Transition",
    description: "Expanded into financial modeling, forecasting, and valuation. Discovered the power of turning historical data into future insights.",
    highlight: "From recording to predicting",
    color: "from-accent/20 to-accent/10",
  },
  {
    id: 3,
    icon: Briefcase,
    year: "Experience",
    title: "Real-World Application",
    description: "Applied skills through internships and case studies with real data. Transformed theoretical knowledge into practical impact.",
    highlight: "Theory meets practice",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    id: 4,
    icon: Target,
    year: "Now",
    title: "Strategic Focus",
    description: "Seeking roles where finance drives strategy. Ready to contribute to organizations that value data-driven decision making.",
    highlight: "Impact-driven mindset",
    color: "from-purple-500/20 to-purple-600/10",
  },
];

const TimelineStep = ({ 
  step, 
  index, 
  isLast 
}: { 
  step: typeof journeySteps[0]; 
  index: number; 
  isLast: boolean;
}) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={stepRef}
      style={{ opacity, scale }}
      className="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8"
    >
      {/* Content - alternating sides on desktop */}
      <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-3'}`}>
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          {/* Year badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full">
            {step.year}
          </span>
          
          {/* Title */}
          <h3 className="font-display text-2xl font-bold">{step.title}</h3>
          
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {step.description}
          </p>
          
          {/* Highlight */}
          <div className={`inline-flex items-center gap-2 text-sm font-medium ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <ChevronRight size={14} className="text-accent" />
            <span className="text-foreground/80">{step.highlight}</span>
          </div>
        </motion.div>
      </div>

      {/* Timeline center - visible on md+ */}
      <div className="hidden md:flex flex-col items-center">
        {/* Icon node */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} border border-border flex items-center justify-center shadow-lg`}
        >
          <step.icon size={24} className="text-accent" />
          
          {/* Pulse effect */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl bg-accent/20"
          />
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <div className="relative w-0.5 h-32 bg-border/50 mt-4">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent to-accent/30"
            />
          </div>
        )}
      </div>

      {/* Empty space for grid on alternating side */}
      <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-3' : 'md:col-start-1 md:row-start-1'}`} />

      {/* Mobile timeline indicator */}
      <div className="md:hidden absolute left-0 top-0 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} border border-border flex items-center justify-center`}
        >
          <step.icon size={18} className="text-accent" />
        </motion.div>
        {!isLast && <div className="w-0.5 h-full bg-border/50 mt-2" />}
      </div>
    </motion.div>
  );
};

export const AboutPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4"
          >
            My Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            From Numbers to
            <br />
            <span className="text-gradient-gold">Strategic Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Every great finance professional has a story. Here's mine—a journey of 
            curiosity, growth, and a relentless pursuit of turning data into decisions.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto pl-14 md:pl-0 space-y-12 md:space-y-0">
          {journeySteps.map((step, index) => (
            <TimelineStep
              key={step.id}
              step={step}
              index={index}
              isLast={index === journeySteps.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-full text-accent font-semibold transition-all duration-300"
            >
              <span>Read the Full Story</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
