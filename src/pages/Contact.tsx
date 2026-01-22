import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/ui/GridPattern";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, MapPin, Send, ArrowRight, Calendar } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "john@example.com",
    href: "mailto:john@example.com",
    description: "Best for detailed inquiries",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/johndoe",
    href: "https://linkedin.com",
    description: "Connect professionally",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "New York, NY",
    href: null,
    description: "Open to remote & hybrid",
  },
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
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-card">
          <GridPattern className="opacity-30" />
          
          <div className="container mx-auto px-6 relative z-10">
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
              className="text-xl text-muted-foreground max-w-2xl"
            >
              Whether you have a question, an opportunity, or just want to connect, 
              I'd love to hear from you.
            </motion.p>
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

                <div className="space-y-6 mb-12">
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
                          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                            <method.icon size={22} className="text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-0.5">{method.title}</h4>
                            <p className="text-accent font-medium mb-1">
                              {method.value}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                          <ArrowRight
                            size={18}
                            className="ml-auto text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all self-center"
                          />
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 p-4 rounded-xl">
                          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
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

                {/* Schedule Call CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="p-6 rounded-2xl border border-border bg-card"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                      <Calendar size={22} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Schedule a Call</h4>
                      <p className="text-sm text-muted-foreground">
                        Book a 30-minute intro call
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open("#", "_blank")}
                  >
                    View Availability
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold mb-8">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name
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
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-card"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company (Optional)
                    </label>
                    <Input
                      name="company"
                      placeholder="Your company"
                      className="bg-card"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className="bg-card"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your opportunity or question..."
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
