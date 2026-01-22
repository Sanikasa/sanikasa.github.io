import { TrendingUp, Rocket, Brain } from "lucide-react";

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

export const allSkills = ["Financial Modeling", "FP&A", "Data Analytics", "Forecasting", "Budgeting", "Variance Analysis", "Process Automation", "Strategic Finance", "AI Development"];
export const allTools = ["Excel", "Power BI", "Tableau", "M365 Copilot", "Python", "SQL"];
export const allIndustries = ["Technology", "Financial Services", "Startups"];

export const projects: Project[] = [
  {
    id: 1,
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
  {
    id: 2,
    slug: "financial-strategy-companion",
    title: "Financial Strategy Companion: AI Agent for Variance Analysis",
    category: "AI & Automation",
    skills: ["AI Development", "Financial Analysis", "Process Automation", "Data Analytics"],
    tools: ["M365 Copilot", "Excel", "Power BI"],
    industry: "Technology",
    shortDesc: "Built a custom AI agent in M365 Copilot that automates variance analysis and executive reporting by integrating internal P&L data with external macro-benchmarks.",
    icon: Brain,
    color: "from-blue-500/20 to-cyan-500/20",
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
