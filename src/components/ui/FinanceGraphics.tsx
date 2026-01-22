import { motion } from "framer-motion";

// Animated Candlestick Chart
export const CandlestickChart = ({ className = "" }: { className?: string }) => {
  const candles = [
    { open: 60, close: 75, high: 80, low: 55, bullish: true },
    { open: 75, close: 65, high: 78, low: 60, bullish: false },
    { open: 65, close: 80, high: 85, low: 62, bullish: true },
    { open: 80, close: 70, high: 82, low: 65, bullish: false },
    { open: 70, close: 90, high: 95, low: 68, bullish: true },
    { open: 90, close: 85, high: 92, low: 80, bullish: false },
    { open: 85, close: 100, high: 105, low: 82, bullish: true },
  ];

  return (
    <svg viewBox="0 0 200 120" className={`${className}`}>
      <defs>
        <linearGradient id="bullishGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(142 76% 50%)" />
          <stop offset="100%" stopColor="hsl(142 76% 36%)" />
        </linearGradient>
        <linearGradient id="bearishGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(0 84% 60%)" />
          <stop offset="100%" stopColor="hsl(0 84% 45%)" />
        </linearGradient>
      </defs>
      {candles.map((candle, i) => {
        const x = 20 + i * 25;
        const bodyTop = 120 - Math.max(candle.open, candle.close);
        const bodyHeight = Math.abs(candle.close - candle.open);
        const wickTop = 120 - candle.high;
        const wickBottom = 120 - candle.low;
        
        return (
          <motion.g 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {/* Wick */}
            <line
              x1={x}
              y1={wickTop}
              x2={x}
              y2={wickBottom}
              stroke={candle.bullish ? "hsl(142 76% 50%)" : "hsl(0 84% 60%)"}
              strokeWidth="1.5"
            />
            {/* Body */}
            <motion.rect
              x={x - 6}
              y={bodyTop}
              width="12"
              height={Math.max(bodyHeight, 2)}
              fill={candle.bullish ? "url(#bullishGradient)" : "url(#bearishGradient)"}
              rx="1"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
              style={{ transformOrigin: `${x}px ${bodyTop + bodyHeight / 2}px` }}
            />
          </motion.g>
        );
      })}
    </svg>
  );
};

// Stock Ticker Animation
export const StockTicker = ({ className = "" }: { className?: string }) => {
  const stocks = [
    { symbol: "AAPL", price: "189.25", change: "+2.34%", up: true },
    { symbol: "GOOGL", price: "141.80", change: "+1.12%", up: true },
    { symbol: "MSFT", price: "378.91", change: "-0.45%", up: false },
    { symbol: "AMZN", price: "178.25", change: "+3.21%", up: true },
    { symbol: "TSLA", price: "248.50", change: "-1.87%", up: false },
  ];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, -500] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...stocks, ...stocks].map((stock, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-mono">
            <span className="text-foreground font-semibold">{stock.symbol}</span>
            <span className="text-muted-foreground">${stock.price}</span>
            <span className={stock.up ? "text-green-500" : "text-red-500"}>
              {stock.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Dashboard KPI Widget
export const DashboardWidget = ({ 
  label, 
  value, 
  change, 
  trend = "up",
  className = "" 
}: { 
  label: string; 
  value: string; 
  change: string;
  trend?: "up" | "down";
  className?: string;
}) => (
  <motion.div
    className={`p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm ${className}`}
    whileHover={{ scale: 1.02, borderColor: "hsl(var(--accent) / 0.5)" }}
  >
    <div className="text-xs text-muted-foreground mb-1">{label}</div>
    <div className="text-2xl font-bold text-foreground">{value}</div>
    <div className={`text-xs font-medium ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
      {trend === "up" ? "↑" : "↓"} {change}
    </div>
  </motion.div>
);

// Animated Line Chart
export const MiniLineChart = ({ className = "" }: { className?: string }) => {
  const points = [20, 45, 30, 60, 50, 75, 65, 90, 80, 100];
  const pathD = points
    .map((y, i) => `${i === 0 ? "M" : "L"} ${i * 22} ${100 - y}`)
    .join(" ");

  return (
    <svg viewBox="0 0 200 100" className={className}>
      <defs>
        <linearGradient id="lineChartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Area fill */}
      <motion.path
        d={`${pathD} L 198 100 L 0 100 Z`}
        fill="url(#areaGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      {/* Line */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="url(#lineChartGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      {/* Animated dot at end */}
      <motion.circle
        cx="198"
        cy="0"
        r="4"
        fill="hsl(var(--accent))"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ delay: 2, duration: 0.3 }}
      />
    </svg>
  );
};

// Financial Icons Grid
export const FinanceIconsFloat = ({ className = "" }: { className?: string }) => {
  const icons = [
    { symbol: "$", x: 10, y: 20, delay: 0 },
    { symbol: "€", x: 80, y: 15, delay: 0.5 },
    { symbol: "¥", x: 25, y: 70, delay: 1 },
    { symbol: "£", x: 70, y: 60, delay: 1.5 },
    { symbol: "₿", x: 50, y: 35, delay: 2 },
    { symbol: "📈", x: 90, y: 40, delay: 0.8 },
    { symbol: "📊", x: 5, y: 50, delay: 1.2 },
    { symbol: "💹", x: 60, y: 80, delay: 0.3 },
  ];

  return (
    <div className={`relative w-full h-full ${className}`}>
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-accent/30 text-2xl pointer-events-none"
          style={{ left: `${icon.x}%`, top: `${icon.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0.3],
            scale: [0.5, 1.2, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            delay: icon.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {icon.symbol}
        </motion.div>
      ))}
    </div>
  );
};

// Bull & Bear Indicator
export const MarketIndicator = ({ trend = "bull", className = "" }: { trend?: "bull" | "bear"; className?: string }) => (
  <motion.div
    className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
      trend === "bull" 
        ? "bg-green-500/10 text-green-500 border border-green-500/20" 
        : "bg-red-500/10 text-red-500 border border-red-500/20"
    } ${className}`}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.05 }}
  >
    <span className="text-lg">{trend === "bull" ? "🐂" : "🐻"}</span>
    <span className="text-xs font-semibold uppercase tracking-wide">
      {trend === "bull" ? "Bullish" : "Bearish"}
    </span>
  </motion.div>
);

// Data Stream Animation
export const DataStream = ({ className = "" }: { className?: string }) => {
  const numbers = Array.from({ length: 20 }, () => 
    Math.random().toString().slice(2, 8)
  );

  return (
    <div className={`overflow-hidden h-full ${className}`}>
      <motion.div
        className="flex flex-col gap-1 font-mono text-xs text-accent/20"
        animate={{ y: [0, -200] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {[...numbers, ...numbers].map((num, i) => (
          <div key={i} className="whitespace-nowrap">
            {num} | {Math.random().toFixed(4)} | {(Math.random() * 100).toFixed(2)}%
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Pie Chart Widget
export const PieChartWidget = ({ className = "" }: { className?: string }) => {
  const segments = [
    { value: 40, color: "hsl(var(--accent))" },
    { value: 25, color: "hsl(142 76% 50%)" },
    { value: 20, color: "hsl(217 91% 60%)" },
    { value: 15, color: "hsl(280 73% 60%)" },
  ];

  let cumulativePercent = 0;

  return (
    <svg viewBox="0 0 100 100" className={className}>
      {segments.map((segment, i) => {
        const startAngle = cumulativePercent * 3.6;
        cumulativePercent += segment.value;
        const endAngle = cumulativePercent * 3.6;
        
        const startRad = (startAngle - 90) * (Math.PI / 180);
        const endRad = (endAngle - 90) * (Math.PI / 180);
        
        const x1 = 50 + 40 * Math.cos(startRad);
        const y1 = 50 + 40 * Math.sin(startRad);
        const x2 = 50 + 40 * Math.cos(endRad);
        const y2 = 50 + 40 * Math.sin(endRad);
        
        const largeArc = segment.value > 50 ? 1 : 0;
        
        return (
          <motion.path
            key={i}
            d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
            fill={segment.color}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            style={{ transformOrigin: "50px 50px" }}
          />
        );
      })}
      <circle cx="50" cy="50" r="20" fill="hsl(var(--card))" />
    </svg>
  );
};
