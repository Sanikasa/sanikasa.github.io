import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, TrendingUp, BarChart3, PieChart, DollarSign } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CandlestickChart, MiniLineChart, PieChartWidget, DataStream } from "@/components/ui/FinanceGraphics";

// Animated data line component
const DataLine = ({ delay, duration, startX, startY, endX, endY }: {
  delay: number;
  duration: number;
  startX: string;
  startY: string;
  endX: string;
  endY: string;
}) => (
  <motion.line
    x1={startX}
    y1={startY}
    x2={endX}
    y2={endY}
    stroke="url(#lineGradient)"
    strokeWidth="1"
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: [0, 0.6, 0.6, 0] }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeInOut",
    }}
  />
);

// Floating number particle
const FloatingNumber = ({ value, x, y, delay }: {
  value: string;
  x: number;
  y: number;
  delay: number;
}) => (
  <motion.div
    className="absolute text-accent/20 font-mono text-sm pointer-events-none select-none"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0, 0.4, 0.4, 0],
      y: [20, -30, -60],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "easeOut",
    }}
  >
    {value}
  </motion.div>
);

// Animated text with letter-by-letter reveal
const AnimatedHeadline = ({ text }: { text: string }) => {
  const words = text.split(" ");
  
  return (
    <motion.h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: wordIndex * 0.1 + letterIndex * 0.03,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
};

// Floating Finance Dashboard Widget
const FloatingDashboard = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute hidden lg:block ${className}`}
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 1.5, duration: 0.8 }}
  >
    <motion.div
      className="p-4 rounded-2xl border border-accent/20 bg-card/80 backdrop-blur-xl shadow-2xl"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="w-4 h-4 text-accent" />
        <span className="text-xs font-semibold text-foreground">Portfolio Performance</span>
      </div>
      <MiniLineChart className="w-40 h-20" />
      <div className="flex justify-between mt-2 text-xs">
        <span className="text-muted-foreground">YTD Return</span>
        <span className="text-accent font-semibold">+24.8%</span>
      </div>
    </motion.div>
  </motion.div>
);

// Candlestick Dashboard Widget
const CandlestickWidget = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute hidden lg:block ${className}`}
    initial={{ opacity: 0, scale: 0.8, y: -20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 1.8, duration: 0.8 }}
  >
    <motion.div
      className="p-4 rounded-2xl border border-accent/20 bg-card/80 backdrop-blur-xl shadow-2xl"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      <div className="flex items-center gap-2 mb-3">
        <BarChart3 className="w-4 h-4 text-accent" />
        <span className="text-xs font-semibold text-foreground">Market Analysis</span>
      </div>
      <CandlestickChart className="w-44 h-24" />
    </motion.div>
  </motion.div>
);

// Allocation Pie Widget
const AllocationWidget = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute hidden lg:block ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 2.1, duration: 0.8 }}
  >
    <motion.div
      className="p-4 rounded-2xl border border-accent/20 bg-card/80 backdrop-blur-xl shadow-2xl"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <PieChart className="w-4 h-4 text-accent" />
        <span className="text-xs font-semibold text-foreground">Allocation</span>
      </div>
      <PieChartWidget className="w-20 h-20" />
    </motion.div>
  </motion.div>
);

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const floatingNumbers = [
    { value: "$2.4M", x: 8, y: 25, delay: 0 },
    { value: "+18.5%", x: 85, y: 20, delay: 1.5 },
    { value: "ROI", x: 12, y: 70, delay: 3 },
    { value: "EBITDA", x: 78, y: 65, delay: 2 },
    { value: "$500K", x: 92, y: 45, delay: 4 },
    { value: "-12%", x: 5, y: 50, delay: 2.5 },
    { value: "NPV", x: 88, y: 80, delay: 1 },
    { value: "IRR", x: 15, y: 85, delay: 3.5 },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-card"
    >
      {/* Animated SVG background with data lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Data flow lines */}
        <DataLine delay={0} duration={3} startX="0%" startY="30%" endX="100%" endY="40%" />
        <DataLine delay={1} duration={4} startX="100%" startY="60%" endX="0%" endY="50%" />
        <DataLine delay={2} duration={3.5} startX="20%" startY="0%" endX="80%" endY="100%" />
        <DataLine delay={0.5} duration={4} startX="80%" startY="0%" endX="20%" endY="100%" />
        <DataLine delay={1.5} duration={3} startX="0%" startY="70%" endX="100%" endY="80%" />
        <DataLine delay={2.5} duration={3.5} startX="50%" startY="0%" endX="50%" endY="100%" />
        
        {/* Cursor glow effect */}
        <motion.circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r="150"
          fill="url(#glowGradient)"
          className="hidden lg:block"
        />
      </svg>

      {/* Floating financial numbers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {floatingNumbers.map((num, i) => (
          <FloatingNumber key={i} {...num} />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />


      {/* Soft gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-lavender/30 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-mint/25 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-peach/20 blur-3xl"
      />

      {/* Main content with parallax */}
      <motion.div 
        className="container mx-auto px-6 py-32 relative z-10"
        style={{ 
          perspective: 1000,
          rotateX,
          rotateY,
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated headline */}
          <div className="mb-6">
            <AnimatedHeadline text="Sanika More" />
          </div>

          {/* Value proposition - clear within 5 seconds */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6"
          >
            MS in Quantitative Finance & Fintech graduate specializing in{" "}
            <span className="text-accent font-semibold">DCF Valuation</span>,{" "}
            <span className="text-accent font-semibold">FP&A</span>, and{" "}
            <span className="text-accent font-semibold">Portfolio Analytics</span>—driving 
            measurable business impact through data-driven financial insights.
          </motion.p>

          {/* Key metrics strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-8"
          >
            {[
              { value: "$334/share", label: "Home Depot Valuation" },
              { value: "85%", label: "Process Time Saved" },
              { value: "+52%", label: "Sharpe Ratio Improvement" },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + i * 0.15 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-accent">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>


          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -12px hsl(45 93% 47% / 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-lg transition-all inline-flex items-center gap-3"
                style={{ boxShadow: "var(--shadow-gold)" }}
              >
                View My Projects
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "hsl(var(--muted))" }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 border-2 border-border rounded-xl font-semibold text-lg hover:border-accent/50 transition-all inline-flex items-center gap-3"
              >
                <Briefcase size={20} className="text-accent" />
                Let's Connect
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-accent"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
