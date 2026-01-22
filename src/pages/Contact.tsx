import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/ui/GridPattern";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Send, 
  ArrowRight, 
  Download, 
  Phone,
  FileText,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "sanikasa@buffalo.edu",
    href: "mailto:sanikasa@buffalo.edu",
    description: "Best for detailed inquiries",
    primary: true,
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1-716-308-9362",
    href: "tel:+17163089362",
    description: "Available during business hours",
    primary: false,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/sanikamore",
    href: "https://linkedin.com/in/sanikamore/",
    description: "Connect professionally",
    primary: true,
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Buffalo, New York",
    href: null,
    description: "Open to remote & relocation",
    primary: false,
  },
];

const availabilityHighlights = [
  "Open to full-time FP&A and Financial Analyst roles",
  "Available for Summer 2025 internships",
  "Open to remote, hybrid, and on-site positions",
  "Authorized to work in the United States",
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const handleResumeDownload = () => {
    // Create a temporary link to trigger download
    // In production, this would link to the actual PDF file
    toast({
      title: "Resume Download",
      description: "Your resume download will start shortly. For the live PDF, please contact me directly.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-card">
          <GridPattern className="opacity-30" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4"
              >
                Get in Touch
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Let's Start a
                <br />
                <span className="text-gradient-gold">Conversation</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl mb-8"
              >
                I'm actively seeking FP&A and Financial Analyst opportunities where I can 
                apply my analytical skills and drive strategic decision-making.
              </motion.p>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  onClick={handleResumeDownload}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25"
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://linkedin.com/in/sanikamore/", "_blank")}
                  className="border-border hover:bg-muted"
                >
                  <Linkedin size={18} className="mr-2" />
                  Connect on LinkedIn
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Availability Banner */}
        <section className="bg-accent/5 border-y border-accent/20">
          <div className="container mx-auto px-6 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
            >
              <div className="flex items-center gap-2 text-accent font-semibold">
                <Sparkles size={18} />
                <span>Currently Available</span>
              </div>
              {availabilityHighlights.slice(0, 2).map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 size={14} className="text-accent" />
                  <span>{highlight}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold mb-8">
                  Contact Information
                </h2>

                <div className="space-y-4 mb-12">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.href.startsWith("http") ? "_blank" : undefined}
                          rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors"
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                            method.primary 
                              ? "bg-accent/10 group-hover:bg-accent/20" 
                              : "bg-muted group-hover:bg-muted"
                          }`}>
                            <method.icon size={22} className="text-accent" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold mb-0.5">{method.title}</h4>
                            <p className="text-accent font-medium mb-1 truncate">
                              {method.value}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                          <ArrowRight
                            size={18}
                            className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all self-center flex-shrink-0"
                          />
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 p-4 rounded-xl">
                          <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                            <method.icon size={22} className="text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-0.5">{method.title}</h4>
                            <p className="text-foreground font-medium mb-1">
                              {method.value}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Resume Download Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="p-6 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                      <FileText size={22} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Download My Resume</h4>
                      <p className="text-sm text-muted-foreground">
                        PDF format • Updated January 2025
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={handleResumeDownload}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Download size={16} className="mr-2" />
                    Download Resume (PDF)
                  </Button>
                </motion.div>

                {/* Availability Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 p-6 rounded-2xl border border-border bg-card"
                >
                  <h4 className="font-semibold mb-4">Availability</h4>
                  <div className="space-y-3">
                    {availabilityHighlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold mb-2">
                  Send a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have an opportunity or question? I typically respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name <span className="text-accent">*</span>
                      </label>
                      <Input
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-card"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email <span className="text-accent">*</span>
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="bg-card"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      name="company"
                      placeholder="Your company name"
                      className="bg-card"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject <span className="text-accent">*</span>
                    </label>
                    <Input
                      name="subject"
                      placeholder="e.g., FP&A Opportunity, Interview Request"
                      required
                      className="bg-card"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message <span className="text-accent">*</span>
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about the role or opportunity..."
                      rows={6}
                      required
                      className="bg-card resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to be contacted regarding your inquiry.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
