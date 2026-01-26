import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GridPattern } from "@/components/ui/GridPattern";
import { MapPin, GraduationCap, Plane, Youtube, Play, Code, Database, TrendingUp, BarChart3 } from "lucide-react";

const stats = [
  { value: 85, suffix: "%", label: "Time Saved via Automation" },
  { value: 52, suffix: "%", label: "Sharpe Ratio Achieved" },
  { value: 5, suffix: "", label: "Interactive Projects" },
];

const competencies = [
  { icon: Code, name: "Python", description: "Pandas, NumPy, Data Analysis" },
  { icon: Database, name: "SQL", description: "Query Optimization, ETL" },
  { icon: TrendingUp, name: "DCF Modeling", description: "Valuation & Forecasting" },
  { icon: BarChart3, name: "Bloomberg Terminal", description: "Market Intelligence" },
];

const education = [
  {
    degree: "MS in Quantitative Finance & Fintech",
    school: "University at Buffalo, USA",
    period: "Aug 2024 – May 2026",
  },
  {
    degree: "B.Com in Financial Accounting & Auditing",
    school: "University of Mumbai, India",
    period: "Sept 2021 – May 2024",
  },
];

const chapters = [
  {
    number: 1,
    title: "Mumbai & Accounting",
    location: "KC College, Churchgate",
    icon: GraduationCap,
    content: `My journey started in the bustling heart of Mumbai at KC College, Churchgate. While I was diving deep into the world of debits and credits for my Bachelor's in Accounting, the vibrant streets of Churchgate were teaching me a different lesson. Being in the center of the city gave me a passport to explore—I found myself constantly looking past the spreadsheets to capture the world through a camera lens.`,
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    number: 2,
    title: "The Move to the USA",
    location: "University at Buffalo",
    icon: Plane,
    content: `Seeking a global perspective, I moved to the USA for my Master's. This leap wasn't just about a degree; it was about exposure. A life-changing transition that pushed me beyond my comfort zone and opened doors to new experiences, cultures, and opportunities.`,
    accent: "from-blue-500/20 to-cyan-500/20",
  },
];

const youtubeVideos = [
  { id: "VIDEO_ID_1", title: "My Journey Begins" },
  { id: "VIDEO_ID_2", title: "First Day in America" },
  { id: "VIDEO_ID_3", title: "Campus Life" },
  { id: "VIDEO_ID_4", title: "Cultural Experiences" },
  { id: "VIDEO_ID_5", title: "Student Life Tips" },
  { id: "VIDEO_ID_6", title: "Latest Adventure" },
];

const About = () => {
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
                About Me
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
                Sanika More | Quantitative Finance @ University at Buffalo | Digital Storyteller
              </motion.p>
            </div>
          </div>
        </section>

        {/* At a Glance Stats */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                At a Glance
              </span>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-8 rounded-2xl bg-card border border-border text-center hover:border-accent/50 transition-all"
                >
                  <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Narrative */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              {/* Education & Background */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl font-bold mb-6">My Background</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm a Quantitative Finance graduate student passionate about transforming 
                  complex financial data into strategic insights. My background combines a 
                  strong accounting foundation with advanced quantitative skills.
                </p>

                <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap size={20} className="text-accent" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="p-4 rounded-xl bg-background border border-border"
                    >
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                      <p className="text-xs text-accent mt-1">{edu.period}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Core Competencies */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl font-bold mb-6">Core Competencies</h2>
                <div className="grid grid-cols-2 gap-4">
                  {competencies.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="p-5 rounded-xl bg-background border border-border hover:border-accent/50 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                        <skill.icon size={20} className="text-accent" />
                      </div>
                      <h4 className="font-semibold mb-1">{skill.name}</h4>
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Timeline */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
                My Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                The Chapters of My Journey
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="relative">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

                {chapters.map((chapter, index) => (
                  <motion.div
                    key={chapter.number}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative mb-16 last:mb-0 ${
                      index % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%] md:text-right"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2 top-8" />

                    {/* Chapter card */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`ml-16 md:ml-0 p-8 rounded-2xl border border-border bg-card hover:border-accent/50 transition-all bg-gradient-to-br ${chapter.accent}`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          index % 2 !== 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="text-sm font-medium text-accent uppercase tracking-wider">
                          Chapter {chapter.number}
                        </span>
                      </div>

                      <div
                        className={`flex items-center gap-4 mb-4 ${
                          index % 2 !== 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
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

                      <p className="text-muted-foreground leading-relaxed">
                        {chapter.content}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Follow My Journey
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                My YouTube Channel
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Join me as I document my life as an international student—sharing the highs,
                the hurdles, and everything in between.
              </p>

              <motion.a
                href="https://youtube.com/@YourChannel"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-destructive text-destructive-foreground rounded-lg font-medium text-sm transition-all hover:opacity-90"
              >
                <Youtube size={20} />
                Subscribe on YouTube
              </motion.a>
            </motion.div>

            {/* Video Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {youtubeVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-muted"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                  {video.id.startsWith("VIDEO_ID") && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                        <Play size={32} className="text-accent ml-1" />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {video.title}
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-1">
                        Video coming soon
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Quote */}
        <section className="py-24 bg-background">
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

export default About;
