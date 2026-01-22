import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  TrendingUp, 
  DollarSign, 
  FileSpreadsheet, 
  Shield, 
  Calendar, 
  Lightbulb,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine,
  Cell
} from "recharts";

// Data for charts
const budgetVsActualData = [
  { dept: "Marketing", budget: 45000, actual: 52000 },
  { dept: "IT", budget: 38000, actual: 35000 },
  { dept: "HR", budget: 22000, actual: 24000 },
  { dept: "Ops", budget: 55000, actual: 58000 },
  { dept: "Sales", budget: 48000, actual: 54000 },
  { dept: "R&D", budget: 62000, actual: 59000 },
  { dept: "Admin", budget: 18000, actual: 21000 },
  { dept: "Finance", budget: 28000, actual: 26000 },
];

const cashFlowData = [
  { week: "W1", before: 120, after: 125 },
  { week: "W2", before: 95, after: 108 },
  { week: "W3", before: 140, after: 135 },
  { week: "W4", before: 88, after: 92 },
  { week: "W5", before: 155, after: 148 },
  { week: "W6", before: 102, after: 115 },
  { week: "W7", before: 178, after: 165 },
  { week: "W8", before: 135, after: 142 },
];

const roiScenarioData = [
  { scenario: "Conservative", value: 12 },
  { scenario: "Base", value: 18 },
  { scenario: "Optimistic", value: 28 },
];

interface ContributionCardProps {
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  content: string[];
  children?: React.ReactNode;
  index: number;
}

const ContributionCard = ({ title, icon, iconBg, content, children, index }: ContributionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className={`cursor-pointer rounded-2xl border bg-card overflow-hidden transition-all duration-300 ${
          isExpanded 
            ? "border-accent shadow-xl shadow-accent/10" 
            : "border-border hover:border-accent/50 hover:shadow-lg"
        }`}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}
              >
                {icon}
              </motion.div>
              <h3 className="font-display text-lg md:text-xl font-semibold group-hover:text-accent transition-colors">
                {title}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-lg bg-muted/50 group-hover:bg-accent/10 transition-colors"
            >
              <ChevronDown size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </motion.div>
          </div>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-6 space-y-4">
                  {/* Content bullets */}
                  <div className="space-y-3">
                    {content.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{item}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart/Visual content */}
                  {children && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 pt-6 border-t border-border"
                    >
                      {children}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border rounded-lg p-3 shadow-lg"
      >
        <p className="font-semibold text-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: ${entry.value?.toLocaleString() || entry.value}
          </p>
        ))}
      </motion.div>
    );
  }
  return null;
};

// Process flow component
const ProcessFlow = () => {
  const steps = ["Invoice", "Approval", "Verification", "Payment"];
  
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
      {steps.map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.15 }}
          className="flex items-center gap-2"
        >
          <div className={`px-4 py-2 rounded-lg border-2 ${
            step === "Verification" 
              ? "border-accent bg-accent/10 text-accent font-semibold" 
              : "border-border bg-muted/30"
          }`}>
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight size={16} className="text-muted-foreground" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Timeline component
const BudgetTimeline = () => {
  const stages = ["Budget", "Q1 Forecast", "Q2 Reforecast", "Q3 Reforecast", "Final"];
  
  return (
    <div className="relative">
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent/50 to-accent" />
      <div className="flex justify-between relative">
        {stages.map((stage, i) => (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center z-10">
              <span className="text-xs font-bold text-accent-foreground">{i + 1}</span>
            </div>
            <span className="text-xs text-muted-foreground mt-2 text-center max-w-[60px]">{stage}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const WorkExperienceSection = () => {
  const [showAfter, setShowAfter] = useState(true);

  const metrics = [
    { value: 12, suffix: "%", label: "Cost Overspend Identified" },
    { value: 10, suffix: "%", prefix: "~", label: "Forecast Accuracy Gain" },
    { value: 20, suffix: "%", label: "Reporting Time Reduced" },
    { value: 7, suffix: "%", prefix: "~", label: "Vendor Payment Recovery" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-br from-accent/10 via-card to-card border border-accent/20"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Finance Intern @ <span className="text-accent">Mintskill HR Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Supported core finance operations across budgeting, forecasting, cash flow management, 
              and financial analysis, partnering with multiple departments to improve cost control, 
              reporting efficiency, and strategic decision-making.
            </p>
          </motion.div>
        </motion.div>

        {/* Contributions Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* 1. Budgeting & Variance Analysis */}
          <ContributionCard
            title="Budgeting & Variance Analysis"
            icon={<TrendingUp size={24} className="text-emerald-500" />}
            iconBg="bg-emerald-500/10"
            index={0}
            content={[
              "Performed budget-to-actual variance analysis across 8 departmental cost centres",
              "Identified a 12% overspend in contractor expenses",
              "Conducted root-cause analysis and presented cost control recommendations to finance leadership"
            ]}
          >
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-4">Budget vs Actual by Department</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={budgetVsActualData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis dataKey="dept" type="category" width={60} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="budget" fill="hsl(var(--accent))" name="Budget" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="actual" name="Actual" radius={[0, 4, 4, 0]}>
                      {budgetVsActualData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.actual > entry.budget ? "#ef4444" : "#22c55e"} 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                <span className="inline-block w-3 h-3 bg-red-500 rounded mr-1" /> Overspend
                <span className="inline-block w-3 h-3 bg-green-500 rounded ml-4 mr-1" /> Under Budget
              </p>
            </div>
          </ContributionCard>

          {/* 2. Cash Flow Forecasting */}
          <ContributionCard
            title="Cash Flow Forecasting & Working Capital"
            icon={<DollarSign size={24} className="text-blue-500" />}
            iconBg="bg-blue-500/10"
            index={1}
            content={[
              "Developed weekly cash flow forecasts tracking inflows and outflows",
              "Improved forecast accuracy by approximately 10%",
              "Supported working capital optimisation and liquidity planning"
            ]}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-muted-foreground">Forecast Accuracy Comparison</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowAfter(false)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      !showAfter ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setShowAfter(true)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      showAfter ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    After
                  </button>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={cashFlowData}>
                    <defs>
                      <linearGradient id="colorBefore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorAfter" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="week" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey={showAfter ? "after" : "before"} 
                      stroke={showAfter ? "hsl(var(--accent))" : "#94a3b8"} 
                      fillOpacity={1} 
                      fill={showAfter ? "url(#colorAfter)" : "url(#colorBefore)"} 
                      name={showAfter ? "Improved Forecast" : "Original Forecast"}
                    />
                    <ReferenceLine y={130} stroke="hsl(var(--accent))" strokeDasharray="5 5" label={{ value: 'Target', fill: 'hsl(var(--accent))', fontSize: 11 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ContributionCard>

          {/* 3. Management Reporting */}
          <ContributionCard
            title="Management Reporting & Automation"
            icon={<FileSpreadsheet size={24} className="text-purple-500" />}
            iconBg="bg-purple-500/10"
            index={2}
            content={[
              "Built automated expense tracking and management reporting dashboards in Excel",
              "Used PivotTables, VLOOKUP, and dynamic charts for real-time insights",
              "Reduced monthly reporting cycle time by 20%"
            ]}
          >
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Reports Automated", value: "5+" },
                { label: "Hours Saved/Month", value: "12" },
                { label: "Data Sources", value: "3" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-muted/30 border border-border"
                >
                  <div className="font-display text-2xl font-bold text-accent">{item.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </ContributionCard>

          {/* 4. Vendor Reconciliation */}
          <ContributionCard
            title="Vendor Reconciliation & Internal Controls"
            icon={<Shield size={24} className="text-orange-500" />}
            iconBg="bg-orange-500/10"
            index={3}
            content={[
              "Conducted vendor reconciliation and approval-flow analysis",
              "Identified and recovered approximately 6–8% excess vendor payments",
              "Strengthened internal controls and cost governance"
            ]}
          >
            <div className="space-y-6">
              <ProcessFlow />
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="px-6 py-3 rounded-xl bg-green-500/10 border border-green-500/30"
                >
                  <span className="text-green-500 font-semibold">
                    ~$45K recovered in excess payments
                  </span>
                </motion.div>
              </div>
            </div>
          </ContributionCard>

          {/* 5. Budgeting & Reforecasting */}
          <ContributionCard
            title="Budgeting, Reforecasting & Leadership Support"
            icon={<Calendar size={24} className="text-pink-500" />}
            iconBg="bg-pink-500/10"
            index={4}
            content={[
              "Supported quarterly budgeting and reforecasting cycles",
              "Consolidated departmental inputs and validated assumptions",
              "Prepared variance analysis presentations for senior management"
            ]}
          >
            <BudgetTimeline />
          </ContributionCard>

          {/* 6. Ad-Hoc Analysis */}
          <ContributionCard
            title="Ad-Hoc Financial & Strategic Analysis"
            icon={<Lightbulb size={24} className="text-yellow-500" />}
            iconBg="bg-yellow-500/10"
            index={5}
            content={[
              "Conducted cost–benefit analysis, ROI modelling, and vendor contract evaluations",
              "Delivered insights supporting strategic decision-making initiatives"
            ]}
          >
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-4">ROI Scenario Analysis</p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={roiScenarioData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="scenario" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} unit="%" />
                    <Tooltip 
                      formatter={(value: number) => [`${value}%`, 'ROI']}
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {roiScenarioData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={
                            entry.scenario === "Conservative" ? "#f59e0b" :
                            entry.scenario === "Base" ? "hsl(var(--accent))" : "#22c55e"
                          } 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ContributionCard>
        </div>

        {/* Results Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            Key Results & Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 via-card to-card border border-accent/20"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-accent">
                  <AnimatedCounter
                    end={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                </div>
                <div className="text-sm text-muted-foreground mt-2">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
