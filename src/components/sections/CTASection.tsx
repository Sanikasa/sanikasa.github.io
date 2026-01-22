import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Calendar } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-primary" />
      
      {/* Decorative elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent text-sm font-medium uppercase tracking-wider mb-4"
          >
            Let's Connect
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
          >
            Ready to Elevate Your
            <br />
            <span className="text-gradient-gold">Financial Strategy?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto"
          >
            I'm currently exploring new opportunities where I can leverage my 
            expertise to drive meaningful financial outcomes. Let's discuss how 
            I can contribute to your organization's success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-lg transition-all inline-flex items-center gap-2"
                style={{ boxShadow: "var(--shadow-gold)" }}
              >
                <Mail size={20} />
                Get in Touch
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </Link>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-primary-foreground/20 text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary-foreground/10 transition-all inline-flex items-center gap-2"
              >
                <Calendar size={20} />
                Schedule a Call
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
