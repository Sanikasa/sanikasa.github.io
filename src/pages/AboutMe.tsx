import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/ui/GridPattern";
import { MapPin, GraduationCap, Plane, ImageIcon } from "lucide-react";

const chapters = [
  {
    number: 1,
    title: "Mumbai & Accounting",
    location: "KC College, Churchgate",
    icon: GraduationCap,
    content: `My journey started in the bustling heart of Mumbai at KC College, Churchgate. While I was diving deep into the world of debits and credits for my Bachelor's in Accounting, the vibrant streets of Churchgate were teaching me a different lesson. Being in the center of the city gave me a passport to explore—I found myself constantly looking past the spreadsheets to capture the world through a camera lens.`,
    accent: "from-amber-500/20 to-orange-500/20",
    images: [
      { id: 1, label: "KC College" },
      { id: 2, label: "Churchgate Streets" },
      { id: 3, label: "Mumbai Life" },
    ],
  },
  {
    number: 2,
    title: "The Move to the USA",
    location: "University at Buffalo",
    icon: Plane,
    content: `Seeking a global perspective, I moved to the USA for my Master's. This leap wasn't just about a degree; it was about exposure. A life-changing transition that pushed me beyond my comfort zone and opened doors to new experiences, cultures, and opportunities.`,
    accent: "from-blue-500/20 to-cyan-500/20",
    images: [
      { id: 1, label: "University at Buffalo" },
      { id: 2, label: "Campus Life" },
      { id: 3, label: "New Beginnings" },
    ],
  },
];

const AboutMe = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-card">
          <GridPattern className="opacity-30" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4"
              >
                My Story
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                The Accountant with a
                <br />
                <span className="text-gradient-gold">Creative Compass</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                I'm not just an accountant; I'm a storyteller navigating the globe.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Chapter Timeline */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="mb-24 last:mb-0"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Card */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`p-8 rounded-2xl border border-border bg-card hover:border-accent/50 transition-all bg-gradient-to-br ${chapter.accent} ${
                        index % 2 !== 0 ? "lg:order-2" : ""
                      }`}
                    >
                      {/* Chapter number */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-medium text-accent uppercase tracking-wider">
                          Chapter {chapter.number}
                        </span>
                      </div>

                      {/* Icon and title */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                          <chapter.icon size={24} className="text-accent" />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-bold">
                            {chapter.title}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                            <MapPin size={14} />
                            {chapter.location}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <p className="text-muted-foreground leading-relaxed">
                        {chapter.content}
                      </p>
                    </motion.div>

                    {/* Image Grid Placeholder */}
                    <div
                      className={`grid grid-cols-2 gap-4 ${
                        index % 2 !== 0 ? "lg:order-1" : ""
                      }`}
                    >
                      {chapter.images.map((image, imgIndex) => (
                        <motion.div
                          key={image.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + imgIndex * 0.1 }}
                          className={`aspect-square rounded-xl border border-border bg-muted flex flex-col items-center justify-center gap-3 hover:border-accent/50 transition-all ${
                            imgIndex === 0 ? "col-span-2" : ""
                          }`}
                        >
                          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                            <ImageIcon size={24} className="text-accent" />
                          </div>
                          <p className="text-sm text-muted-foreground font-medium">
                            {image.label}
                          </p>
                          <p className="text-xs text-muted-foreground/60">
                            Add image here
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <blockquote className="font-display text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
                "I realized that while I value the{" "}
                <span className="text-accent">precision of finance</span>, I crave the{" "}
                <span className="text-accent">connection of creativity</span>."
              </blockquote>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutMe;
