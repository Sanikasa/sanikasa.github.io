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
  Send, 
  ArrowRight, 
  Download, 
  Sparkles,
  TrendingUp,
  Target,
  BarChart3
} from "lucide-react";

const roles = [
  { icon: TrendingUp, label: "Financial Analyst" },
  { icon: Target, label: "FP&A" },
  { icon: BarChart3, label: "Strategy" },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const handleResumeDownload = () => {
    toast({
      title: "Resume Download",
      description: "Your resume download will start shortly.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-card via-card to-background">
          <GridPattern className="opacity-20" />
          
          {/* Animated background elements */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
              >
                <Sparkles size={16} className="text-accent" />
                <span className="text-sm font-medium text-accent">Let's Connect</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                Let's Build{" "}
                <span className="relative">
                  <span className="text-gradient-gold">Financial Impact</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 origin-left"
                  />
                </span>
                <br />
                Together
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
              >
                Passionate about Finance & Accounting with a focus on 
                driving strategic decisions through data-driven insights.
              </motion.p>

              {/* Role Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-3 mb-12"
              >
                {roles.map((role, index) => (
                  <motion.div
                    key={role.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted/50 border border-border hover:border-accent/50 transition-colors"
                  >
                    <role.icon size={16} className="text-accent" />
                    <span className="font-medium">{role.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Primary CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    onClick={() => window.open("mailto:sanikasa@buffalo.edu", "_blank")}
                    className="h-14 px-8 text-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/25 group"
                  >
                    <Mail size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                    Email Me
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open("https://linkedin.com/in/sanikamore/", "_blank")}
                    className="h-14 px-8 text-lg border-2 hover:bg-accent/5 hover:border-accent group"
                  >
                    <Linkedin size={20} className="mr-2 text-accent" />
                    Connect on LinkedIn
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-background relative">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-16">
                {/* Left Column - Info */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-2 space-y-8"
                >
                  <div>
                    <h2 className="font-display text-3xl font-bold mb-4">
                      Ready to Chat?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Whether you have an opportunity, a question, or just want to connect—
                      I'd love to hear from you.
                    </p>
                  </div>

                  {/* Quick Contact Cards */}
                  <div className="space-y-4">
                    <motion.a
                      href="mailto:sanikasa@buffalo.edu"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                      className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all"
                    >
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Mail size={24} className="text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-0.5">Email</h4>
                        <p className="text-accent">sanikasa@buffalo.edu</p>
                      </div>
                      <ArrowRight size={18} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </motion.a>

                    <motion.a
                      href="https://linkedin.com/in/sanikamore/"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ x: 4 }}
                      className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all"
                    >
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Linkedin size={24} className="text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-0.5">LinkedIn</h4>
                        <p className="text-accent">linkedin.com/in/sanikamore</p>
                      </div>
                      <ArrowRight size={18} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  </div>

                  {/* Resume Download */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <Download size={18} className="text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Resume</h4>
                        <p className="text-sm text-muted-foreground">Updated January 2025</p>
                      </div>
                    </div>
                    <Button
                      onClick={handleResumeDownload}
                      variant="outline"
                      className="w-full border-accent/30 hover:bg-accent hover:text-accent-foreground transition-all"
                    >
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right Column - Form */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-3"
                >
                  <div className="p-8 md:p-10 rounded-3xl border border-border bg-card shadow-xl">
                    <h3 className="font-display text-2xl font-bold mb-2">
                      Send a Message
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      I typically respond within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                          animate={{ scale: focusedField === "name" ? 1.01 : 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <label className="block text-sm font-medium mb-2">
                            Name <span className="text-accent">*</span>
                          </label>
                          <Input
                            name="name"
                            placeholder="Your name"
                            required
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className="h-12 bg-background border-border focus:border-accent transition-colors"
                          />
                        </motion.div>
                        <motion.div
                          animate={{ scale: focusedField === "email" ? 1.01 : 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <label className="block text-sm font-medium mb-2">
                            Email <span className="text-accent">*</span>
                          </label>
                          <Input
                            name="email"
                            type="email"
                            placeholder="you@company.com"
                            required
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className="h-12 bg-background border-border focus:border-accent transition-colors"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        animate={{ scale: focusedField === "company" ? 1.01 : 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <Input
                          name="company"
                          placeholder="Your company name"
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          className="h-12 bg-background border-border focus:border-accent transition-colors"
                        />
                      </motion.div>

                      <motion.div
                        animate={{ scale: focusedField === "subject" ? 1.01 : 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-medium mb-2">
                          Subject <span className="text-accent">*</span>
                        </label>
                        <Input
                          name="subject"
                          placeholder="e.g., Collaboration, Project Discussion"
                          required
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          className="h-12 bg-background border-border focus:border-accent transition-colors"
                        />
                      </motion.div>

                      <motion.div
                        animate={{ scale: focusedField === "message" ? 1.01 : 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-medium mb-2">
                          Message <span className="text-accent">*</span>
                        </label>
                        <Textarea
                          name="message"
                          placeholder="Share your thoughts or ideas..."
                          rows={5}
                          required
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className="bg-background border-border focus:border-accent transition-colors resize-none"
                        />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full h-14 text-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-6 h-6 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                            />
                          ) : (
                            <>
                              <Send size={20} className="mr-2" />
                              Send Message
                              <ArrowRight size={18} className="ml-2" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-20 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-t border-accent/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Let's create something impactful.
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm excited to bring analytical rigor and strategic thinking to your team.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => window.open("mailto:sanikasa@buffalo.edu", "_blank")}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Mail size={18} className="mr-2" />
                    sanikasa@buffalo.edu
                  </Button>
                </motion.div>
                <span className="text-muted-foreground">or</span>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://linkedin.com/in/sanikamore/", "_blank")}
                    className="hover:border-accent"
                  >
                    <Linkedin size={18} className="mr-2 text-accent" />
                    LinkedIn
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
