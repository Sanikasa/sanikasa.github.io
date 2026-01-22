import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-lg">
                  SM
                </span>
              </div>
              <span className="font-display font-semibold text-lg">
                Sanika More
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Quantitative Finance graduate with hands-on experience in FP&A, 
              financial modeling, and data-driven decision making.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/sanikamore/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:sanikasa@buffalo.edu", label: "Email" },
                { icon: Phone, href: "tel:+17163089362", label: "Phone" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Navigate</h4>
            <div className="flex flex-col gap-3">
              {["About", "Projects", "Experience", "Skills", "Contact"].map(
                (link) => (
                  <Link
                    key={link}
                    to={`/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <a
                href="mailto:sanikasa@buffalo.edu"
                className="hover:text-foreground transition-colors"
              >
                sanikasa@buffalo.edu
              </a>
              <a
                href="tel:+17163089362"
                className="hover:text-foreground transition-colors"
              >
                +1-716-308-9362
              </a>
              <span>Buffalo, New York</span>
              <span className="text-accent font-medium">Open to opportunities</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sanika More. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with precision. Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};
