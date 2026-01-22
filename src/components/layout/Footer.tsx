import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        {/* Main CTA Section */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-4"
          >
            Ready to explore my work?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://linkedin.com/in/sanikamore/"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Role */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-sm">
                SM
              </span>
            </div>
            <div>
              <span className="font-display font-semibold text-foreground">
                Sanika More
              </span>
              <p className="text-xs text-muted-foreground">
                Financial Analyst
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <motion.a
              href="mailto:sanikasa@buffalo.edu"
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">sanikasa@buffalo.edu</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sanikamore/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={16} />
              <span className="hidden sm:inline">LinkedIn</span>
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sanika More
          </p>
        </div>
      </div>
    </footer>
  );
};
