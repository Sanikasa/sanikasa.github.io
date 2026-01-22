import { motion } from "framer-motion";

// Trading Chart Background with animated candlesticks and grid
export const TradingChartBackground = ({ className = "" }: { className?: string }) => {
  const candles = [
    { x: 10, open: 40, close: 55, high: 60, low: 35, bullish: true },
    { x: 18, open: 55, close: 45, high: 58, low: 40, bullish: false },
    { x: 26, open: 45, close: 60, high: 65, low: 42, bullish: true },
    { x: 34, open: 60, close: 50, high: 63, low: 45, bullish: false },
    { x: 42, open: 50, close: 70, high: 75, low: 48, bullish: true },
    { x: 50, open: 70, close: 65, high: 72, low: 60, bullish: false },
    { x: 58, open: 65, close: 80, high: 85, low: 62, bullish: true },
    { x: 66, open: 80, close: 72, high: 82, low: 68, bullish: false },
    { x: 74, open: 72, close: 88, high: 92, low: 70, bullish: true },
    { x: 82, open: 88, close: 85, high: 90, low: 80, bullish: false },
    { x: 90, open: 85, close: 95, high: 98, low: 82, bullish: true },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bgBullish" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--emerald))" />
            <stop offset="100%" stopColor="hsl(var(--emerald))" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="bgBearish" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--burgundy))" />
            <stop offset="100%" stopColor="hsl(var(--burgundy))" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="hsl(var(--border))" strokeWidth="0.2" />
        ))}
        {[20, 40, 60, 80].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="hsl(var(--border))" strokeWidth="0.2" />
        ))}
        
        {/* Candlesticks */}
        {candles.map((candle, i) => (
          <motion.g 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <line
              x1={candle.x}
              y1={100 - candle.high}
              x2={candle.x}
              y2={100 - candle.low}
              stroke={candle.bullish ? "hsl(var(--emerald))" : "hsl(var(--burgundy))"}
              strokeWidth="0.3"
            />
            <rect
              x={candle.x - 2}
              y={100 - Math.max(candle.open, candle.close)}
              width="4"
              height={Math.abs(candle.close - candle.open)}
              fill={candle.bullish ? "url(#bgBullish)" : "url(#bgBearish)"}
            />
          </motion.g>
        ))}
        
        {/* Trend line */}
        <motion.path
          d="M 10 60 Q 30 50, 50 35 T 90 15"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="0.5"
          strokeDasharray="2 1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
};

// Data Matrix Background with flowing numbers
export const DataMatrixBackground = ({ className = "" }: { className?: string }) => {
  const columns = 20;
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 flex gap-4 opacity-[0.07]">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <motion.div
            key={colIndex}
            className="flex flex-col gap-1 font-mono text-xs text-accent whitespace-nowrap"
            initial={{ y: -100 }}
            animate={{ y: ["-100%", "100%"] }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: colIndex * 0.3,
              ease: "linear",
            }}
          >
            {Array.from({ length: 30 }).map((_, rowIndex) => (
              <span key={rowIndex} className="opacity-70">
                {Math.random() > 0.7 
                  ? `$${(Math.random() * 1000).toFixed(2)}` 
                  : Math.random() > 0.5 
                    ? `${(Math.random() * 100).toFixed(1)}%`
                    : (Math.random() * 100).toFixed(4)
                }
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Network Grid Background with glowing nodes
export const NetworkGridBackground = ({ className = "" }: { className?: string }) => {
  const nodes = Array.from({ length: 15 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 3,
    delay: Math.random() * 2,
  }));

  const connections: { x1: number; y1: number; x2: number; y2: number }[] = [];
  nodes.forEach((node, i) => {
    const nearestNodes = nodes
      .map((n, j) => ({ node: n, dist: Math.hypot(n.x - node.x, n.y - node.y), j }))
      .filter(({ j }) => j !== i)
      .sort((a, b) => a.dist - b.dist)
      .slice(0, 2);
    
    nearestNodes.forEach(({ node: n }) => {
      connections.push({ x1: node.x, y1: node.y, x2: n.x, y2: n.y });
    });
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--purple))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--emerald))" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        
        {/* Connection lines */}
        {connections.map((conn, i) => (
          <motion.line
            key={i}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="url(#lineGlow)"
            strokeWidth="0.15"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
          />
        ))}
        
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="url(#nodeGlow)"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2 + Math.random(), delay: node.delay, repeat: Infinity }}
          />
        ))}
      </svg>
    </div>
  );
};

// Geometric Gradient Background - Light Pastel Version
export const GeometricGradientBackground = ({ 
  variant = "default",
  className = "" 
}: { 
  variant?: "default" | "purple" | "emerald" | "gold" | "lavender" | "mint";
  className?: string;
}) => {
  const gradients = {
    default: "from-lavender/20 via-mint/10 to-peach/20",
    purple: "from-lavender/30 via-background to-lavender/20",
    emerald: "from-mint/30 via-background to-mint/20",
    gold: "from-accent/20 via-background to-accent/10",
    lavender: "from-lavender/25 via-sky/10 to-lavender/15",
    mint: "from-mint/25 via-peach/10 to-mint/15",
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Main gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[variant]} opacity-60`} />
      
      {/* Soft geometric shapes */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-1/2"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full bg-gradient-to-br from-lavender/20 to-transparent rounded-full blur-3xl" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-0 left-0 w-2/3 h-2/3"
        animate={{ rotate: [360, 270, 180, 90, 0] }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full bg-gradient-to-tr from-mint/20 to-transparent rounded-full blur-3xl" />
      </motion.div>
      
      <motion.div
        className="absolute top-1/4 left-1/4 w-1/3 h-1/3"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="w-full h-full bg-gradient-to-r from-mint/15 to-peach/15 rounded-full blur-2xl" />
      </motion.div>

      {/* Floating geometric shapes - lighter colors */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-lavender/30 rounded-lg"
        animate={{ rotate: [0, 45, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ transformOrigin: "center" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 border border-mint/30 rounded-full"
        animate={{ scale: [1, 1.1, 1], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-peach/10 rotate-45"
        animate={{ rotate: [45, 90, 45], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
};

// Combined Premium Finance Background
export const PremiumFinanceBackground = ({ 
  showTrading = true,
  showMatrix = true,
  showNetwork = true,
  showGeometric = true,
  className = "" 
}: { 
  showTrading?: boolean;
  showMatrix?: boolean;
  showNetwork?: boolean;
  showGeometric?: boolean;
  className?: string;
}) => (
  <div className={`absolute inset-0 overflow-hidden ${className}`}>
    {showGeometric && <GeometricGradientBackground variant="default" />}
    {showNetwork && <NetworkGridBackground className="opacity-50" />}
    {showTrading && <TradingChartBackground className="opacity-30" />}
    {showMatrix && <DataMatrixBackground className="opacity-50" />}
  </div>
);
