import { TrendingUp, DollarSign, BarChart3, PieChart, FileSpreadsheet, Database } from "lucide-react";

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

export const allSkills = ["Financial Modeling", "FP&A", "Data Analytics", "Forecasting", "M&A", "Budgeting", "Variance Analysis", "Process Automation"];
export const allTools = ["Excel", "Python", "SQL", "Power BI", "Tableau", "SAP", "VBA"];
export const allIndustries = ["Technology", "Manufacturing", "Healthcare", "Retail", "Financial Services"];

export const projects: Project[] = [
  {
    id: 1,
    slug: "cost-optimization",
    title: "Enterprise Cost Optimization Initiative",
    category: "Financial Analysis",
    skills: ["Data Analytics", "Budgeting", "Variance Analysis"],
    tools: ["Excel", "Power BI", "SQL"],
    industry: "Technology",
    shortDesc: "Led enterprise-wide cost reduction program resulting in $12M annual savings across 15 business units.",
    icon: TrendingUp,
    color: "from-emerald-500/20 to-teal-500/20",
    year: "2023",
    duration: "8 months",
    
    overview: "A strategic initiative to identify and eliminate operational inefficiencies while maintaining service quality and employee satisfaction.",
    
    problem: {
      title: "The Challenge",
      content: "Operating costs had grown 40% over three years without proportional revenue growth. Leadership needed a data-driven approach to optimize spending without compromising core business operations or employee morale."
    },
    
    approach: {
      title: "Strategic Approach",
      content: "Implemented a three-phase methodology: (1) Deep-dive analysis of all cost centers using zero-based budgeting principles, (2) Cross-functional stakeholder interviews to understand value drivers, (3) Priority ranking of cost reduction opportunities based on impact and feasibility."
    },
    
    analysis: {
      title: "Data & Analysis",
      content: "Analyzed 36 months of historical spending data across 15 business units. Built dynamic cost allocation models to identify hidden inefficiencies and redundant processes. Created real-time dashboards for ongoing monitoring."
    },
    
    outcome: {
      title: "Results & Impact",
      content: "Achieved $12M in annual savings (30% cost reduction) while improving operational efficiency. Changes were implemented within 8 months with minimal disruption. The framework became a template for future optimization initiatives."
    },
    
    learnings: [
      "Early stakeholder buy-in is critical for successful cost initiatives",
      "Quick wins build momentum for larger structural changes",
      "Data visualization significantly improves executive decision-making"
    ],
    
    kpis: [
      { label: "Annual Savings", value: "$12M", change: "+30%", trend: "up" },
      { label: "Business Units", value: 15, trend: "neutral" },
      { label: "Implementation", value: "8 mo", trend: "neutral" },
      { label: "ROI", value: "450%", change: "+350%", trend: "up" }
    ],
    
    chartData: [
      { name: "Q1", value: 4200, projected: 4000, actual: 4200, variance: -200 },
      { name: "Q2", value: 3800, projected: 3600, actual: 3800, variance: -200 },
      { name: "Q3", value: 3200, projected: 3200, actual: 3200, variance: 0 },
      { name: "Q4", value: 2940, projected: 3000, actual: 2940, variance: 60 }
    ],
    
    tableData: {
      headers: ["Category", "Before ($K)", "After ($K)", "Savings ($K)", "% Change"],
      rows: [
        { category: "IT Infrastructure", before: 2400, after: 1680, savings: 720, change: "-30%" },
        { category: "Vendor Contracts", before: 3600, after: 2520, savings: 1080, change: "-30%" },
        { category: "Operations", before: 5200, after: 3640, savings: 1560, change: "-30%" },
        { category: "Marketing", before: 1800, after: 1440, savings: 360, change: "-20%" }
      ]
    },
    
    impactValue: 30,
    impactSuffix: "%",
    impactLabel: "Cost Reduction"
  },
  {
    id: 2,
    slug: "ma-due-diligence",
    title: "M&A Due Diligence - Tech Acquisition",
    category: "Strategic Finance",
    skills: ["M&A", "Financial Modeling", "Forecasting"],
    tools: ["Excel", "Python", "SQL"],
    industry: "Technology",
    shortDesc: "Managed financial due diligence for $200M acquisition, identifying $15M in synergies.",
    icon: DollarSign,
    color: "from-blue-500/20 to-indigo-500/20",
    year: "2022",
    duration: "6 weeks",
    
    overview: "Comprehensive financial due diligence for a strategic acquisition that would expand market presence and technology capabilities.",
    
    problem: {
      title: "The Challenge",
      content: "Evaluate a $200M acquisition target within a compressed 6-week timeline. Needed to assess financial health, revenue quality, and integration risks while identifying value creation opportunities."
    },
    
    approach: {
      title: "Strategic Approach",
      content: "Led an 8-person cross-functional team through structured due diligence phases: financial statement analysis, quality of earnings assessment, working capital normalization, and synergy identification."
    },
    
    analysis: {
      title: "Data & Analysis",
      content: "Reviewed 500+ documents including 3 years of audited financials, customer contracts, and operational data. Built integrated financial models to stress-test valuations under multiple scenarios."
    },
    
    outcome: {
      title: "Results & Impact",
      content: "Identified $15M in post-merger synergies and flagged $3M in hidden liabilities. Recommendations influenced final deal structure and negotiated price reduction of 8%."
    },
    
    learnings: [
      "Thorough revenue quality analysis prevents post-deal surprises",
      "Integration planning should start during due diligence",
      "Clear communication with leadership accelerates decision-making"
    ],
    
    kpis: [
      { label: "Deal Value", value: "$200M", trend: "neutral" },
      { label: "Synergies Found", value: "$15M", change: "+7.5%", trend: "up" },
      { label: "Documents Reviewed", value: "500+", trend: "neutral" },
      { label: "Price Adjustment", value: "-8%", trend: "up" }
    ],
    
    chartData: [
      { name: "Year 1", value: 45, projected: 40, actual: 45 },
      { name: "Year 2", value: 52, projected: 48, actual: 52 },
      { name: "Year 3", value: 68, projected: 60, actual: 68 },
      { name: "Year 4", value: 85, projected: 75, actual: 85 },
      { name: "Year 5", value: 105, projected: 92, actual: 105 }
    ],
    
    tableData: {
      headers: ["Synergy Category", "Year 1 ($M)", "Year 2 ($M)", "Year 3 ($M)", "Cumulative ($M)"],
      rows: [
        { category: "Revenue Synergies", year1: 2.0, year2: 4.5, year3: 6.0, cumulative: 12.5 },
        { category: "Cost Synergies", year1: 3.5, year2: 5.0, year3: 6.5, cumulative: 15.0 },
        { category: "Technology Savings", year1: 1.0, year2: 2.0, year3: 2.5, cumulative: 5.5 },
        { category: "Total", year1: 6.5, year2: 11.5, year3: 15.0, cumulative: 33.0 }
      ]
    },
    
    impactValue: 200,
    impactSuffix: "M",
    impactPrefix: "$",
    impactLabel: "Deal Value"
  },
  {
    id: 3,
    slug: "fpa-automation",
    title: "FP&A Process Automation",
    category: "Process Improvement",
    skills: ["Process Automation", "FP&A", "Data Analytics"],
    tools: ["Excel", "VBA", "Power BI", "Python"],
    industry: "Manufacturing",
    shortDesc: "Automated financial reporting workflows, reducing monthly close time by 40%.",
    icon: BarChart3,
    color: "from-amber-500/20 to-orange-500/20",
    year: "2023",
    duration: "4 months",
    
    overview: "Digital transformation of the FP&A function through intelligent automation and real-time reporting capabilities.",
    
    problem: {
      title: "The Challenge",
      content: "Monthly close process required 10 days of manual work, creating delays in decision-making and consuming valuable analyst time on repetitive tasks instead of strategic analysis."
    },
    
    approach: {
      title: "Strategic Approach",
      content: "Mapped all existing workflows to identify automation opportunities. Prioritized based on time savings and error reduction potential. Implemented phased rollout with user training."
    },
    
    analysis: {
      title: "Data & Analysis",
      content: "Documented 25 recurring reports and their data sources. Built automated data pipelines connecting ERP systems to Power BI dashboards. Created VBA macros for complex Excel processes."
    },
    
    outcome: {
      title: "Results & Impact",
      content: "Reduced close time from 10 to 6 days (40% improvement). Eliminated 95% of manual data entry errors. Freed up 120 hours monthly for value-added analysis."
    },
    
    learnings: [
      "User adoption requires change management, not just technical implementation",
      "Error reduction often delivers more value than time savings",
      "Automated processes need clear documentation for maintenance"
    ],
    
    kpis: [
      { label: "Time Saved", value: "40%", change: "-4 days", trend: "up" },
      { label: "Reports Automated", value: 25, trend: "neutral" },
      { label: "Hours Saved/Month", value: 120, change: "+120", trend: "up" },
      { label: "Error Reduction", value: "95%", trend: "up" }
    ],
    
    chartData: [
      { name: "Jan", value: 10, projected: 10, actual: 10 },
      { name: "Feb", value: 9, projected: 9, actual: 9 },
      { name: "Mar", value: 8, projected: 8, actual: 7.5 },
      { name: "Apr", value: 7, projected: 7, actual: 6.5 },
      { name: "May", value: 6, projected: 6, actual: 6 },
      { name: "Jun", value: 6, projected: 6, actual: 6 }
    ],
    
    tableData: {
      headers: ["Process", "Before (hrs)", "After (hrs)", "Savings (hrs)", "Automation %"],
      rows: [
        { process: "Data Collection", before: 24, after: 4, savings: 20, automation: "85%" },
        { process: "Report Generation", before: 32, after: 8, savings: 24, automation: "75%" },
        { process: "Variance Analysis", before: 16, after: 6, savings: 10, automation: "60%" },
        { process: "Review & Approval", before: 8, after: 6, savings: 2, automation: "25%" }
      ]
    },
    
    impactValue: 40,
    impactSuffix: "%",
    impactLabel: "Time Saved"
  },
  {
    id: 4,
    slug: "revenue-forecasting",
    title: "Predictive Revenue Forecasting Model",
    category: "Financial Modeling",
    skills: ["Forecasting", "Financial Modeling", "Data Analytics"],
    tools: ["Python", "Excel", "SQL", "Tableau"],
    industry: "Retail",
    shortDesc: "Built predictive revenue model achieving 95% forecast accuracy using ML techniques.",
    icon: PieChart,
    color: "from-purple-500/20 to-pink-500/20",
    year: "2022",
    duration: "3 months",
    
    overview: "Development of a sophisticated revenue forecasting system using statistical and machine learning techniques to improve planning accuracy.",
    
    problem: {
      title: "The Challenge",
      content: "Existing forecast methodology had only 82% accuracy, leading to inventory mismatches, staffing issues, and missed revenue opportunities. Leadership needed reliable 12-month forward visibility."
    },
    
    approach: {
      title: "Strategic Approach",
      content: "Combined traditional financial modeling with machine learning. Incorporated external variables (seasonality, market indicators, customer behavior) into multi-factor regression models."
    },
    
    analysis: {
      title: "Data & Analysis",
      content: "Analyzed 5 years of historical data across 8 revenue streams. Tested multiple forecasting methodologies including ARIMA, Prophet, and ensemble models. Validated predictions against holdout data."
    },
    
    outcome: {
      title: "Results & Impact",
      content: "Improved forecast accuracy from 82% to 95%. Model now supports monthly rolling forecasts with automated variance tracking. Enabled better resource allocation and inventory management."
    },
    
    learnings: [
      "Simple models often outperform complex ones for business forecasting",
      "External variables matter more than many internal ones",
      "Model interpretability is crucial for stakeholder trust"
    ],
    
    kpis: [
      { label: "Accuracy", value: "95%", change: "+13%", trend: "up" },
      { label: "Forecast Horizon", value: "12 mo", trend: "neutral" },
      { label: "Revenue Streams", value: 8, trend: "neutral" },
      { label: "Variables", value: "50+", trend: "neutral" }
    ],
    
    chartData: [
      { name: "Q1", value: 12.4, projected: 12.2, actual: 12.4 },
      { name: "Q2", value: 14.8, projected: 14.5, actual: 14.8 },
      { name: "Q3", value: 11.2, projected: 11.4, actual: 11.2 },
      { name: "Q4", value: 18.6, projected: 18.2, actual: 18.6 }
    ],
    
    tableData: {
      headers: ["Model Type", "MAPE", "R-Squared", "Complexity", "Selected"],
      rows: [
        { model: "Simple Moving Avg", mape: "18%", rsquared: "0.72", complexity: "Low", selected: "No" },
        { model: "ARIMA", mape: "12%", rsquared: "0.85", complexity: "Medium", selected: "No" },
        { model: "Prophet", mape: "8%", rsquared: "0.91", complexity: "Medium", selected: "No" },
        { model: "Ensemble", mape: "5%", rsquared: "0.95", complexity: "High", selected: "Yes" }
      ]
    },
    
    impactValue: 95,
    impactSuffix: "%",
    impactLabel: "Accuracy"
  },
  {
    id: 5,
    slug: "budget-variance",
    title: "Dynamic Budget vs. Actual Dashboard",
    category: "FP&A",
    skills: ["Budgeting", "Variance Analysis", "Data Analytics", "FP&A"],
    tools: ["Power BI", "SQL", "Excel"],
    industry: "Healthcare",
    shortDesc: "Created real-time variance analysis dashboard for $50M annual budget tracking.",
    icon: FileSpreadsheet,
    color: "from-cyan-500/20 to-blue-500/20",
    year: "2023",
    duration: "6 weeks",
    
    overview: "End-to-end development of a live dashboard providing real-time budget vs. actual visibility across all departments.",
    
    problem: {
      title: "The Challenge",
      content: "Budget tracking was done monthly via static Excel reports, providing insights too late for corrective action. Managers needed real-time visibility to manage spending proactively."
    },
    
    approach: {
      title: "Strategic Approach",
      content: "Designed a Power BI solution with direct database connections for real-time data. Built drill-down capabilities from company-level to individual cost centers."
    },
    
    analysis: {
      title: "Data & Analysis",
      content: "Integrated data from 3 source systems (ERP, HR, Procurement). Created automated data refresh pipelines. Built variance calculation logic with tolerance thresholds and alerting."
    },
    
    outcome: {
      title: "Results & Impact",
      content: "Reduced time-to-insight from 2 weeks to real-time. Identified $2.3M in budget overruns before month-end, enabling corrective action. Dashboard adoption reached 95% among managers."
    },
    
    learnings: [
      "Real-time access changes budget owner behavior",
      "Alert thresholds need calibration to avoid alert fatigue",
      "Self-service analytics empowers better decision-making"
    ],
    
    kpis: [
      { label: "Budget Managed", value: "$50M", trend: "neutral" },
      { label: "Overruns Caught", value: "$2.3M", trend: "up" },
      { label: "User Adoption", value: "95%", trend: "up" },
      { label: "Time to Insight", value: "Real-time", change: "-2 weeks", trend: "up" }
    ],
    
    chartData: [
      { name: "Jan", value: 4.2, projected: 4.0, actual: 4.2, variance: -0.2 },
      { name: "Feb", value: 4.1, projected: 4.2, actual: 4.1, variance: 0.1 },
      { name: "Mar", value: 4.5, projected: 4.3, actual: 4.5, variance: -0.2 },
      { name: "Apr", value: 4.0, projected: 4.1, actual: 4.0, variance: 0.1 },
      { name: "May", value: 4.3, projected: 4.2, actual: 4.3, variance: -0.1 },
      { name: "Jun", value: 4.2, projected: 4.2, actual: 4.2, variance: 0 }
    ],
    
    tableData: {
      headers: ["Department", "Budget ($K)", "Actual ($K)", "Variance ($K)", "Status"],
      rows: [
        { department: "Operations", budget: 1200, actual: 1180, variance: 20, status: "✓ Under" },
        { department: "Clinical", budget: 2400, actual: 2520, variance: -120, status: "⚠ Over" },
        { department: "Administration", budget: 800, actual: 785, variance: 15, status: "✓ Under" },
        { department: "IT", budget: 600, actual: 640, variance: -40, status: "⚠ Over" }
      ]
    },
    
    impactValue: 50,
    impactSuffix: "M",
    impactPrefix: "$",
    impactLabel: "Budget Managed"
  },
  {
    id: 6,
    slug: "dcf-valuation",
    title: "DCF Valuation Model Suite",
    category: "Financial Modeling",
    skills: ["Financial Modeling", "Forecasting", "M&A"],
    tools: ["Excel", "Python"],
    industry: "Financial Services",
    shortDesc: "Built comprehensive DCF model template used for 10+ investment evaluations.",
    icon: Database,
    color: "from-rose-500/20 to-red-500/20",
    year: "2022",
    duration: "2 months",
    
    overview: "Creation of a robust, flexible DCF valuation template that became the standard tool for investment analysis across the organization.",
    
    problem: {
      title: "The Challenge",
      content: "Each analyst built valuations from scratch, leading to inconsistent methodologies, errors, and wasted time. Leadership needed a standardized, auditable approach."
    },
    
    approach: {
      title: "Strategic Approach",
      content: "Designed a modular template with clear input sections, automatic sensitivity analysis, and built-in error checking. Created documentation and training materials."
    },
    
    analysis: {
      title: "Data & Analysis",
      content: "Researched best practices from investment banks and academic sources. Incorporated WACC calculator, terminal value options, and scenario modeling with Monte Carlo simulation."
    },
    
    outcome: {
      title: "Results & Impact",
      content: "Model adopted as the standard for all valuations. Reduced analysis time by 60% and eliminated methodology inconsistencies. Used for 10+ investment decisions totaling $500M+."
    },
    
    learnings: [
      "Good models are tools that make complex analysis accessible",
      "Error prevention is as important as calculation accuracy",
      "Documentation ensures model longevity beyond creator"
    ],
    
    kpis: [
      { label: "Deals Analyzed", value: "10+", trend: "neutral" },
      { label: "Combined Value", value: "$500M+", trend: "neutral" },
      { label: "Time Savings", value: "60%", trend: "up" },
      { label: "Adoption Rate", value: "100%", trend: "up" }
    ],
    
    chartData: [
      { name: "Base", value: 145, projected: 145 },
      { name: "Bull", value: 185, projected: 185 },
      { name: "Bear", value: 105, projected: 105 },
      { name: "Stress", value: 75, projected: 75 }
    ],
    
    tableData: {
      headers: ["Year", "Revenue ($M)", "EBITDA ($M)", "FCF ($M)", "Discount Factor", "PV ($M)"],
      rows: [
        { year: "2024", revenue: 120, ebitda: 24, fcf: 18, discount: "0.91", pv: "16.4" },
        { year: "2025", revenue: 138, ebitda: 29, fcf: 22, discount: "0.83", pv: "18.2" },
        { year: "2026", revenue: 159, ebitda: 35, fcf: 26, discount: "0.75", pv: "19.5" },
        { year: "2027", revenue: 183, ebitda: 42, fcf: 32, discount: "0.68", pv: "21.8" },
        { year: "Terminal", revenue: "-", ebitda: "-", fcf: "-", discount: "-", pv: "89.3" }
      ]
    },
    
    impactValue: 500,
    impactSuffix: "M+",
    impactPrefix: "$",
    impactLabel: "Deals Valued"
  }
];
