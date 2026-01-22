import { TrendingUp, Rocket, Brain, BarChart3, PieChart, Briefcase } from "lucide-react";

export interface ProjectMetric {
  label: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
}

export interface ChartData {
  name: string;
  value: number;
  projected?: number;
  actual?: number;
  variance?: number;
}

export interface TableRow {
  [key: string]: string | number;
}

export interface ProjectSection {
  title: string;
  content: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  skills: string[];
  tools: string[];
  industry: string;
  shortDesc: string;
  icon: typeof TrendingUp;
  color: string;
  year: string;
  duration: string;
  
  // Storytelling sections
  overview: string;
  problem: ProjectSection;
  approach: ProjectSection;
  analysis: ProjectSection;
  outcome: ProjectSection;
  learnings: string[];
  
  // Visual data
  kpis: ProjectMetric[];
  chartData: ChartData[];
  tableData: {
    headers: string[];
    rows: TableRow[];
  };
  
  // Impact
  impactValue: number;
  impactSuffix: string;
  impactPrefix?: string;
  impactLabel: string;
}

export const allSkills = ["Financial Modeling", "FP&A", "Data Analytics", "Forecasting", "Budgeting", "Variance Analysis", "Process Automation", "Strategic Finance", "AI Development", "DCF Valuation", "Fixed Income", "Portfolio Optimization", "Equity Research"];
export const allTools = ["Excel", "Power BI", "Tableau", "M365 Copilot", "Python", "SQL", "Bloomberg Terminal"];
export const allIndustries = ["Technology", "Financial Services", "Startups", "Retail", "Investment Management"];

export const projects: Project[] = [
  // ============ HOME DEPOT VALUATION PROJECT ============
  {
    id: 1,
    slug: "home-depot-valuation",
    title: "Home Depot DCF Valuation & Equity Research",
    category: "Equity Valuation",
    skills: ["DCF Valuation", "Financial Modeling", "Equity Research", "Data Analytics"],
    tools: ["Excel", "Bloomberg Terminal"],
    industry: "Retail",
    shortDesc: "Comprehensive DCF valuation and FCFE model for Home Depot Inc., analyzing intrinsic value with sensitivity analysis on key value drivers.",
    icon: TrendingUp,
    color: "from-orange-500/20 to-amber-500/20",
    year: "2024",
    duration: "3 weeks",
    
    overview: "Conducted comprehensive equity valuation of Home Depot Inc. using Free Cash Flow to Equity (FCFE) methodology. Built detailed 5-year projection model with terminal value calculation, sensitivity analysis on operating margins and growth rates, and comparative valuation against market price.",
    
    problem: {
      title: "The Valuation Challenge",
      content: "Home Depot's stock was trading at a premium to historical averages. The challenge was to determine intrinsic value using fundamental analysis and identify whether the current market price reflected the company's true growth potential and operational efficiency."
    },
    
    approach: {
      title: "FCFE Valuation Framework",
      content: "Built a comprehensive FCFE model starting with historical financial analysis (2019-2023), projecting revenue growth, operating margins, capex requirements, and working capital needs. Applied cost of equity derived from CAPM with industry-specific beta and risk-free rate assumptions."
    },
    
    analysis: {
      title: "Financial Projections & Sensitivity",
      content: "Modeled 5-year cash flow projections with terminal value using perpetuity growth method. Conducted two-way sensitivity analysis on operating margin (10-14%) and revenue growth (3-7%) to understand value drivers. Analyzed historical trends in same-store sales, margin expansion, and capital allocation."
    },
    
    outcome: {
      title: "Investment Recommendation",
      content: "Derived intrinsic value of $334/share vs. market price of $310, indicating 7.7% upside potential. Base case assumptions: 4.5% revenue CAGR, 12.5% operating margin, and 2.5% terminal growth. Recommended HOLD with price target revision based on margin improvement catalysts."
    },
    
    learnings: [
      "Terminal value assumptions drive 60%+ of DCF valuation outcomes",
      "Sensitivity analysis is critical for understanding value driver impact",
      "Retail valuations must account for cyclical capital expenditure patterns",
      "FCFE is preferred over FCFF when analyzing equity value directly"
    ],
    
    kpis: [
      { label: "Intrinsic Value", value: "$334", trend: "up" },
      { label: "Market Price", value: "$310", trend: "neutral" },
      { label: "Upside", value: "7.7%", trend: "up" },
      { label: "Cost of Equity", value: "9.2%", trend: "neutral" }
    ],
    
    chartData: [
      { name: "Bear (-2%)", value: 285 },
      { name: "Conservative", value: 308 },
      { name: "Base Case", value: 334 },
      { name: "Optimistic", value: 362 },
      { name: "Bull (+2%)", value: 391 }
    ],
    
    tableData: {
      headers: ["Year", "Revenue ($B)", "EBIT ($B)", "FCFE ($B)", "PV FCFE ($B)"],
      rows: [
        { year: "2024E", revenue: "159.2", ebit: "19.9", fcfe: "14.2", pv: "13.0" },
        { year: "2025E", revenue: "166.4", ebit: "20.8", fcfe: "15.1", pv: "12.7" },
        { year: "2026E", revenue: "173.9", ebit: "21.7", fcfe: "16.0", pv: "12.3" },
        { year: "2027E", revenue: "181.8", ebit: "22.7", fcfe: "17.0", pv: "12.0" },
        { year: "2028E", revenue: "190.0", ebit: "23.8", fcfe: "18.1", pv: "11.7" },
        { year: "Terminal", revenue: "-", ebit: "-", fcfe: "276.5", pv: "178.8" }
      ]
    },
    
    impactValue: 334,
    impactSuffix: "/share",
    impactPrefix: "$",
    impactLabel: "Intrinsic Value Estimate"
  },

  // ============ FIXED INCOME ANALYSIS PROJECT ============
  {
    id: 2,
    slug: "fixed-income-analysis",
    title: "Fixed Income Portfolio Analysis & Bond Valuation",
    category: "Fixed Income",
    skills: ["Fixed Income", "Financial Modeling", "Data Analytics", "Portfolio Optimization"],
    tools: ["Excel", "Python", "Bloomberg Terminal"],
    industry: "Investment Management",
    shortDesc: "Comprehensive fixed income analysis including YTM calculations, duration/convexity metrics, and bond portfolio construction for WMT, F, AAPL, and CAT.",
    icon: BarChart3,
    color: "from-blue-500/20 to-indigo-500/20",
    year: "2024",
    duration: "2 weeks",
    
    overview: "Performed detailed fixed income analysis on a four-bond portfolio including Walmart, Ford, Apple, and Caterpillar corporate bonds. Calculated yield to maturity, Macaulay and modified duration, convexity, and analyzed interest rate sensitivity for portfolio risk management.",
    
    problem: {
      title: "The Portfolio Challenge",
      content: "Investment committee required a detailed risk assessment of a $10M corporate bond portfolio. Needed to quantify interest rate sensitivity, identify duration mismatches, and recommend portfolio adjustments to optimize risk-adjusted returns in a rising rate environment."
    },
    
    approach: {
      title: "Bond Analytics Framework",
      content: "Built comprehensive Excel model calculating YTM using Newton-Raphson iteration, Macaulay duration, modified duration, and convexity for each bond. Analyzed portfolio-level metrics including weighted average duration and convexity contribution from each position."
    },
    
    analysis: {
      title: "Risk Metrics & Sensitivity",
      content: "Calculated price sensitivity to 100bp rate shock using duration-convexity approximation. Identified Ford bond as highest duration risk (7.2 years) while Apple offered best risk-adjusted carry. Modeled parallel and non-parallel yield curve shifts to stress test portfolio value."
    },
    
    outcome: {
      title: "Portfolio Recommendations",
      content: "Recommended reducing Ford position by 20% and reallocating to shorter-duration Walmart bonds to lower portfolio duration from 5.8 to 4.9 years. Projected $180K reduction in potential losses from 100bp rate increase while maintaining 4.2% portfolio yield."
    },
    
    learnings: [
      "Convexity becomes increasingly important for larger rate movements",
      "Corporate spread duration adds risk beyond treasury rate sensitivity",
      "Duration matching is critical for liability-driven investment strategies",
      "Credit quality impacts both spread and liquidity risk in portfolios"
    ],
    
    kpis: [
      { label: "Portfolio Yield", value: "4.2%", trend: "up" },
      { label: "Avg Duration", value: "5.8 yrs", trend: "neutral" },
      { label: "Convexity", value: "42.3", trend: "up" },
      { label: "Rate Sensitivity", value: "-$580K", trend: "down" }
    ],
    
    chartData: [
      { name: "WMT 3.5%", value: 98.5, projected: 4.1 },
      { name: "F 4.75%", value: 95.2, projected: 7.2 },
      { name: "AAPL 2.85%", value: 97.8, projected: 3.8 },
      { name: "CAT 3.9%", value: 99.1, projected: 5.6 }
    ],
    
    tableData: {
      headers: ["Bond", "Coupon", "YTM", "Duration", "Convexity", "Weight"],
      rows: [
        { bond: "Walmart 2028", coupon: "3.50%", ytm: "4.12%", duration: "4.1", convexity: "21.5", weight: "25%" },
        { bond: "Ford 2031", coupon: "4.75%", ytm: "5.82%", duration: "7.2", convexity: "62.4", weight: "20%" },
        { bond: "Apple 2027", coupon: "2.85%", ytm: "3.45%", duration: "3.8", convexity: "18.2", weight: "35%" },
        { bond: "Caterpillar 2030", coupon: "3.90%", ytm: "4.56%", duration: "5.6", convexity: "38.7", weight: "20%" }
      ]
    },
    
    impactValue: 180,
    impactSuffix: "K",
    impactPrefix: "$",
    impactLabel: "Risk Reduction Achieved"
  },

  // ============ PORTFOLIO OPTIMIZATION PROJECT ============
  {
    id: 3,
    slug: "portfolio-optimization",
    title: "Mean-Variance Portfolio Optimization & Asset Allocation",
    category: "Investment Analytics",
    skills: ["Portfolio Optimization", "Data Analytics", "Financial Modeling", "Strategic Finance"],
    tools: ["Python", "Excel", "Tableau"],
    industry: "Investment Management",
    shortDesc: "Built Python-based mean-variance optimization model to construct efficient frontier and optimal portfolio allocation across equity, fixed income, and alternative assets.",
    icon: PieChart,
    color: "from-purple-500/20 to-violet-500/20",
    year: "2024",
    duration: "3 weeks",
    
    overview: "Developed a quantitative portfolio optimization framework using Modern Portfolio Theory. Built efficient frontier using historical returns and covariance matrix, identified optimal Sharpe ratio portfolio, and conducted Monte Carlo simulation for risk analysis across multiple asset classes.",
    
    problem: {
      title: "The Allocation Challenge",
      content: "Client portfolio of $5M was concentrated in large-cap US equities with suboptimal risk-adjusted returns. Required systematic approach to diversification across asset classes while maintaining target return of 8% with maximum drawdown tolerance of 15%."
    },
    
    approach: {
      title: "Quantitative Optimization Framework",
      content: "Implemented mean-variance optimization in Python using scipy.optimize. Calculated expected returns using historical averages and CAPM-implied returns. Built covariance matrix from 5-year monthly data. Generated 10,000 random portfolios to visualize efficient frontier."
    },
    
    analysis: {
      title: "Efficient Frontier & Risk Analysis",
      content: "Identified minimum variance portfolio (6.2% return, 8.1% volatility) and maximum Sharpe ratio portfolio (9.8% return, 12.4% volatility). Conducted Monte Carlo simulation with 10,000 trials to estimate VaR (5%) and CVaR. Stress tested against 2008 and 2020 market scenarios."
    },
    
    outcome: {
      title: "Optimized Allocation Strategy",
      content: "Recommended allocation: 45% US Equity, 20% International Equity, 25% Fixed Income, 10% Alternatives. Improved Sharpe ratio from 0.52 to 0.79 while reducing portfolio volatility from 16.2% to 12.4%. Projected $95K annual alpha generation vs. benchmark."
    },
    
    learnings: [
      "Historical correlations break down during market stress periods",
      "Rebalancing frequency impacts transaction costs and tax efficiency",
      "Factor exposures provide better diversification than asset class alone",
      "Risk parity approaches can outperform mean-variance in volatile markets"
    ],
    
    kpis: [
      { label: "Sharpe Ratio", value: "0.79", trend: "up", change: "+52%" },
      { label: "Expected Return", value: "9.8%", trend: "up" },
      { label: "Volatility", value: "12.4%", trend: "down" },
      { label: "Max Drawdown", value: "-14.2%", trend: "up" }
    ],
    
    chartData: [
      { name: "US Equity", value: 45, projected: 10.2 },
      { name: "Intl Equity", value: 20, projected: 8.5 },
      { name: "Fixed Income", value: 25, projected: 4.8 },
      { name: "Alternatives", value: 10, projected: 7.2 }
    ],
    
    tableData: {
      headers: ["Asset Class", "Weight", "Exp Return", "Volatility", "Sharpe"],
      rows: [
        { asset: "US Large Cap", weight: "30%", return: "10.5%", vol: "16.2%", sharpe: "0.56" },
        { asset: "US Small Cap", weight: "15%", return: "11.8%", vol: "22.4%", sharpe: "0.48" },
        { asset: "Intl Developed", weight: "15%", return: "8.2%", vol: "18.1%", sharpe: "0.39" },
        { asset: "Emerging Mkts", weight: "5%", return: "9.5%", vol: "24.6%", sharpe: "0.35" },
        { asset: "Investment Grade", weight: "20%", return: "4.5%", vol: "5.8%", sharpe: "0.52" },
        { asset: "High Yield", weight: "5%", return: "6.2%", vol: "10.4%", sharpe: "0.50" },
        { asset: "Real Estate", weight: "10%", return: "7.2%", vol: "14.8%", sharpe: "0.41" }
      ]
    },
    
    impactValue: 52,
    impactSuffix: "%",
    impactPrefix: "+",
    impactLabel: "Sharpe Ratio Improvement"
  },

  // ============ GLOWSAFE PROJECT ============
  {
    id: 4,
    slug: "glowsafe-brand-strategy",
    title: "GlowSafe: Tech Startup Brand & Go-to-Market Strategy",
    category: "Strategic Finance",
    skills: ["Financial Modeling", "Data Analytics", "Forecasting", "Strategic Finance"],
    tools: ["Excel", "Power BI", "Tableau"],
    industry: "Technology",
    shortDesc: "Developed comprehensive brand strategy, financial projections, and go-to-market plan for a safety technology app startup.",
    icon: Rocket,
    color: "from-green-500/20 to-emerald-500/20",
    year: "2024",
    duration: "6 weeks",
    
    overview: "Led financial analysis, brand positioning, and marketing strategy development for GlowSafe, a safety technology mobile application. Delivered investor-ready materials including financial projections, market sizing, and integrated marketing campaign.",
    
    problem: {
      title: "The Strategic Challenge",
      content: "Develop a compelling brand identity and go-to-market strategy for a new safety tech app entering a competitive market. Required market validation, financial feasibility analysis, and cohesive brand messaging to attract investors and early adopters."
    },
    
    approach: {
      title: "Integrated Strategy Framework",
      content: "Conducted comprehensive market research and competitive analysis. Built financial projections including revenue forecasts, customer acquisition costs, and unit economics. Developed brand positioning, messaging hierarchy, and multi-channel marketing strategy."
    },
    
    analysis: {
      title: "Market & Financial Analysis",
      content: "Performed TAM/SAM/SOM analysis for the safety tech market. Modeled 5-year financial projections with customer growth assumptions, pricing strategy, and path to profitability. Analyzed competitor positioning to identify differentiation opportunities."
    },
    
    outcome: {
      title: "Deliverables & Impact",
      content: "Delivered investor pitch deck, brand guidelines, financial model, and integrated marketing campaign including social media, email, and web advertising strategy. Materials positioned the startup for seed funding conversations."
    },
    
    learnings: [
      "Unit economics must validate before scaling customer acquisition spend",
      "Brand positioning should address emotional and functional benefits",
      "Cross-functional projects require clear stakeholder alignment",
      "Financial projections must be grounded in realistic market assumptions"
    ],
    
    kpis: [
      { label: "Market Size (TAM)", value: "$2.5B", trend: "neutral" },
      { label: "5-Year Revenue", value: "$15M", trend: "up" },
      { label: "CAC Payback", value: "8 mo", trend: "up" },
      { label: "Deliverables", value: "12+", trend: "neutral" }
    ],
    
    chartData: [
      { name: "Year 1", value: 0.5, projected: 50 },
      { name: "Year 2", value: 1.8, projected: 120 },
      { name: "Year 3", value: 4.5, projected: 280 },
      { name: "Year 4", value: 8.2, projected: 450 },
      { name: "Year 5", value: 15.0, projected: 680 }
    ],
    
    tableData: {
      headers: ["Metric", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
      rows: [
        { metric: "Revenue ($M)", year1: "0.5", year2: "1.8", year3: "4.5", year4: "8.2", year5: "15.0" },
        { metric: "Users (K)", year1: "50", year2: "120", year3: "280", year4: "450", year5: "680" },
        { metric: "ARPU ($)", year1: "10", year2: "15", year3: "16", year4: "18", year5: "22" },
        { metric: "CAC ($)", year1: "25", year2: "20", year3: "18", year4: "16", year5: "15" },
        { metric: "LTV/CAC", year1: "2.0x", year2: "2.8x", year3: "3.2x", year4: "3.8x", year5: "4.5x" }
      ]
    },
    
    impactValue: 15,
    impactSuffix: "M",
    impactPrefix: "$",
    impactLabel: "5-Year Revenue Projection"
  },

  // ============ AI AGENT PROJECT ============
  {
    id: 5,
    slug: "financial-strategy-companion",
    title: "Financial Strategy Companion: AI Agent for Variance Analysis",
    category: "AI & Automation",
    skills: ["AI Development", "Financial Analysis", "Process Automation", "Data Analytics"],
    tools: ["M365 Copilot", "Excel", "Power BI"],
    industry: "Technology",
    shortDesc: "Built a custom AI agent in M365 Copilot that automates variance analysis and executive reporting by integrating internal P&L data with external macro-benchmarks.",
    icon: Brain,
    color: "from-cyan-500/20 to-teal-500/20",
    year: "2024",
    duration: "4 weeks",
    
    overview: "Designed and deployed a task-oriented AI agent within Microsoft 365 Copilot to automate the labor-intensive process of variance analysis and executive reporting. The agent bridges internal corporate data with external economic benchmarks from SEC EDGAR, World Bank, and IMF sources.",
    
    problem: {
      title: "The Efficiency Challenge",
      content: "Finance analysts spend significant time manually reconciling monthly expense reports against budgets, then searching for external factors like inflation or regional economic shifts to explain variances. In Buffalo, seasonal changes cause utility and logistics cost spikes that require extensive research to contextualize."
    },
    
    approach: {
      title: "AI-Powered Automation Framework",
      content: "Built a custom agent from scratch with a four-step workflow: Data Ingestion (instruction-based file uploads), Market Contextualization (SEC/IMF references), Variance Identification (categorizing overruns), and Executive Synthesis (markdown tables and email drafts). Enabled Code Interpreter for Excel-based variance calculations."
    },
    
    analysis: {
      title: "Knowledge Integration & Testing",
      content: "Grounded the agent in high-authority sources including SEC EDGAR, World Bank Data, and IMF Data Portal. Tested with Buffalo regional expense data, successfully identifying cost drivers and generating contextual explanations linking variances to local weather conditions."
    },
    
    outcome: {
      title: "Business Impact & Results",
      content: "Agent identified 12% increase in operating expenses and correctly linked $6,200 utility spend to seasonal factors. Generated professional CFO summaries with variance tables and strategic mitigation suggestions. Reduced analysis time from hours to minutes."
    },
    
    learnings: [
      "Task-oriented agents outperform generic chatbots for specialized workflows",
      "Grounding AI in authoritative data sources ensures reliable outputs",
      "Code Interpreter enables structured data analysis within conversational AI",
      "Clear instruction frameworks (ROSES, APE, CARE) improve prompt consistency"
    ],
    
    kpis: [
      { label: "Time Reduction", value: "85%", trend: "up" },
      { label: "Variance Identified", value: "12%", trend: "neutral" },
      { label: "Data Sources", value: "3+", trend: "neutral" },
      { label: "Workflow Steps", value: "4", trend: "neutral" }
    ],
    
    chartData: [
      { name: "Data Ingestion", value: 15, projected: 60 },
      { name: "Contextualization", value: 10, projected: 45 },
      { name: "Variance Analysis", value: 8, projected: 35 },
      { name: "Report Generation", value: 5, projected: 30 }
    ],
    
    tableData: {
      headers: ["Task", "Manual Time", "AI Time", "Reduction"],
      rows: [
        { metric: "Data Ingestion", manual: "60 min", ai: "15 min", reduction: "75%" },
        { metric: "Market Research", manual: "45 min", ai: "10 min", reduction: "78%" },
        { metric: "Variance Calc", manual: "35 min", ai: "8 min", reduction: "77%" },
        { metric: "Report Draft", manual: "30 min", ai: "5 min", reduction: "83%" },
        { metric: "Total Workflow", manual: "170 min", ai: "38 min", reduction: "78%" }
      ]
    },
    
    impactValue: 85,
    impactSuffix: "%",
    impactPrefix: "",
    impactLabel: "Time Savings Achieved"
  }
];
