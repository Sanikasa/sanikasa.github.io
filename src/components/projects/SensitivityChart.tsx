import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from "recharts";

interface SensitivityData {
  name: string;
  value: number;
  label?: string;
}

interface SensitivityChartProps {
  data: SensitivityData[];
  title: string;
  baseValue: number;
  prefix?: string;
  suffix?: string;
}

const getBarColor = (value: number, baseValue: number) => {
  if (value < baseValue - 30) return "hsl(0, 70%, 65%)"; // Red - Bear
  if (value < baseValue - 10) return "hsl(30, 80%, 65%)"; // Orange - Conservative
  if (value <= baseValue + 10) return "hsl(220, 10%, 70%)"; // Gray - Base
  if (value <= baseValue + 30) return "hsl(120, 50%, 65%)"; // Light Green - Optimistic
  return "hsl(120, 60%, 55%)"; // Green - Bull
};

export const SensitivityChart = ({ 
  data, 
  title, 
  baseValue, 
  prefix = "$", 
  suffix = "" 
}: SensitivityChartProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl border border-border bg-card"
    >
      <h4 className="font-display font-semibold text-lg mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground mb-6">
        Base Case: {prefix}{baseValue}{suffix}
      </p>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 60, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
            <XAxis 
              type="number" 
              domain={['dataMin - 20', 'dataMax + 20']}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              tickFormatter={(value) => `${prefix}${value}`}
            />
            <YAxis 
              type="category" 
              dataKey="name" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              width={100}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.75rem",
              }}
              formatter={(value: number) => [`${prefix}${value}${suffix}`, "Intrinsic Value"]}
            />
            <ReferenceLine 
              x={baseValue} 
              stroke="hsl(var(--muted-foreground))" 
              strokeDasharray="5 5"
              strokeWidth={2}
            />
            <Bar 
              dataKey="value" 
              radius={[0, 4, 4, 0]}
              label={{ 
                position: 'right', 
                fill: 'hsl(var(--foreground))',
                fontSize: 12,
                formatter: (value: number) => `${prefix}${value}`
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.value, baseValue)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(0, 70%, 65%)" }} />
          <span>Bear (-200bps)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(30, 80%, 65%)" }} />
          <span>Conservative (-100bps)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(220, 10%, 70%)" }} />
          <span>Base Case</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(120, 50%, 65%)" }} />
          <span>Optimistic (+100bps)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(120, 60%, 55%)" }} />
          <span>Bull (+200bps)</span>
        </div>
      </div>
    </motion.div>
  );
};
