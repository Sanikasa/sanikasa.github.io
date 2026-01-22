import { motion } from "framer-motion";
import { ExternalLink, Building2, TrendingUp, BarChart3, Briefcase, Landmark, LineChart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Certification {
  id: number;
  icon: React.ReactNode;
  iconBg: string;
  companyInitials: string;
  title: string;
  issuer: string;
  category: string;
  categoryColor: string;
  link: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    icon: <Landmark className="w-6 h-6" />,
    iconBg: "bg-[#00AEEF]/10 text-[#00AEEF]",
    companyInitials: "BC",
    title: "Investment Banking & Corporate Finance Virtual Experience",
    issuer: "Barclays (via Springpod)",
    category: "Corporate Finance / Investment Banking",
    categoryColor: "bg-blue-500/10 text-blue-600",
    link: "https://experience.springpod.co.uk/certificates/cnon6zcg2z",
  },
  {
    id: 2,
    icon: <Briefcase className="w-6 h-6" />,
    iconBg: "bg-[#6366F1]/10 text-[#6366F1]",
    companyInitials: "SP",
    title: "Financial Services & Commercial Awareness Experience",
    issuer: "Springpod",
    category: "Financial Services",
    categoryColor: "bg-purple-500/10 text-purple-600",
    link: "https://experience.springpod.co.uk/certificates/h816qgd5kg",
  },
  {
    id: 3,
    icon: <LineChart className="w-6 h-6" />,
    iconBg: "bg-[#FF6900]/10 text-[#FF6900]",
    companyInitials: "BB",
    title: "Bloomberg Market Concepts (BMC)",
    issuer: "Bloomberg for Education",
    category: "Financial Markets",
    categoryColor: "bg-orange-500/10 text-orange-600",
    link: "https://portal.bloombergforeducation.com/certificates/vktBd4cA64V9SVCsNbJEA6mw",
  },
  {
    id: 4,
    icon: <BarChart3 className="w-6 h-6" />,
    iconBg: "bg-[#0056D2]/10 text-[#0056D2]",
    companyInitials: "C",
    title: "Financial Modeling & Valuation",
    issuer: "Coursera",
    category: "Financial Modeling",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    link: "https://www.coursera.org/account/accomplishments/verify/S4LNP2G89XNM",
  },
  {
    id: 5,
    icon: <Building2 className="w-6 h-6" />,
    iconBg: "bg-[#E31837]/10 text-[#E31837]",
    companyInitials: "BoA",
    title: "Investment Banking Virtual Experience",
    issuer: "Bank of America (via Forage)",
    category: "Investment Banking",
    categoryColor: "bg-red-500/10 text-red-600",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Bank%20of%20America/Hi8MJQE5T3MeTRWQR_Bank%20of%20America_zeHDAiXymjoiviZrA_1692985751412_completion_certificate.pdf",
  },
  {
    id: 6,
    icon: <TrendingUp className="w-6 h-6" />,
    iconBg: "bg-[#0A2540]/10 text-[#0A2540]",
    companyInitials: "JPM",
    title: "Corporate & Investment Banking Virtual Experience",
    issuer: "JPMorgan Chase (via Forage)",
    category: "Corporate & Investment Banking",
    categoryColor: "bg-slate-500/10 text-slate-600",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase/YD2kY95RQxQtXxFTS_JPMorgan%20Chase_zeHDAiXymjoiviZrA_1692534963420_completion_certificate.pdf",
  },
];

const CertificationCard = ({ cert, index }: { cert: Certification; index: number }) => {
  return (
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group block"
    >
      <div className="relative p-6 rounded-2xl border border-border bg-background hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
        {/* Hover overlay hint */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 text-xs text-accent font-medium">
          <span>View Credential</span>
          <ExternalLink size={12} />
        </div>

        <div className="flex items-start gap-5">
          {/* Logo Container with Icon */}
          <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${cert.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-border/30`}>
            {cert.icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300 line-clamp-2">
              {cert.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {cert.issuer}
            </p>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${cert.categoryColor}`}>
              {cert.category}
            </span>
          </div>
        </div>

        {/* Bottom accent line on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
      </div>
    </motion.a>
  );
};

export const CertificationsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Professional Credentials"
          description="Industry-recognized programs demonstrating applied finance, analytics, and real-world corporate exposure."
        />

        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>

          {/* Trust indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                All credentials are verifiable — click any card to view the official certificate
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
