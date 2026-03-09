import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import WhatsAppMockup from "@/components/ui/WhatsAppMockup";
import { Bot, Zap, Clock, BarChart3, Target, Bell, Star, ArrowRight, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const industries = [
  "💆 Spas", "🏥 Clinics", "🍽️ Restaurants", "🎓 Schools",
  "🏠 Real Estate", "👗 Boutiques", "🏋️ Gyms", "🏨 Hotels",
];

const stats = [
  { value: 98, suffix: "%", label: "Average response rate" },
  { value: 48, suffix: "hrs", label: "Average setup time" },
  { value: 24, suffix: "/7", label: "Always available" },
  { value: 3, suffix: "s", label: "Average reply speed" },
];

const features = [
  { icon: Bot,      number: "01", title: "Intelligent AI Replies",   desc: "Human-quality responses trained on your exact business data — services, prices, tone and all." },
  { icon: Zap,      number: "02", title: "Instant Response",         desc: "Every message answered in seconds. No queues, no delays, no missed leads." },
  { icon: Clock,    number: "03", title: "24/7 Availability",        desc: "Your AI never sleeps. Public holidays, weekends, 3am — always covered." },
  { icon: BarChart3,number: "04", title: "Live Dashboard",           desc: "One clean view of every conversation, metric, and customer interaction in real-time." },
  { icon: Target,   number: "05", title: "Trained on Your Business", desc: "Knows your services, prices, FAQs, and location as well as your best employee does." },
  { icon: Bell,     number: "06", title: "Smart Escalation",         desc: "Complex or urgent requests are flagged and routed to you immediately." },
];

const testimonials = [
  { quote: "KipmayAI has completely transformed how we handle enquiries. We went from missing 60% of messages to responding to every single one instantly.", name: "Aisha M.", business: "Marketing Director, Eldoret", rating: 5 },
  { quote: "Our spa bookings increased by 40% in the first month. The AI handles questions and reservations perfectly.", name: "James K.", business: "Spa Manager, Eldoret", rating: 5 },
];

// ── Premium scroll indicator ──────────────────────────────────
function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
      transition={{ duration: 0.4 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none z-20"
    >
      {/* Mouse shell */}
      <div className="w-[22px] h-[34px] rounded-full border border-muted-foreground/30 flex items-start justify-center pt-[6px]">
        {/* Scrolling dot */}
        <motion.div
          className="w-[4px] h-[6px] rounded-full bg-primary"
          animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 font-medium">
        Scroll
      </span>
    </motion.div>
  );
}

const Home = () => {
  useEffect(() => { document.title = "Kipmay AI — AI WhatsApp Automation for Business"; }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      {/* h-screen on mobile = exact viewport, no overflow. lg: back to min-h-screen */}
      <section className="h-screen lg:min-h-screen lg:h-auto flex flex-col justify-center lg:items-center pt-16 lg:pt-20 pb-16 lg:pb-0 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 w-full relative z-10 flex-1 flex flex-col justify-center lg:block">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="w-full min-w-0">

              {/* Eyebrow */}
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4 lg:mb-8">
                <span className="h-px w-8 bg-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  AI-Powered WhatsApp Automation
                </span>
              </motion.div>

              {/* Headline — smaller on mobile to guarantee fit */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-4 lg:mb-6"
              >
                Never miss a{" "}
                <span className="text-gradient">customer</span>{" "}again.
              </motion.h1>

              {/* Subtext */}
              <motion.p variants={fadeInUp} className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 lg:mb-10 max-w-md font-light">
                Kipmay AI connects to your WhatsApp Business number and handles every enquiry instantly — 24 hours a day, trained on your business.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 lg:gap-4 mb-5 lg:mb-10">
                <Button asChild size="lg" className="gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity px-8">
                  <Link to="/contact">Get Started <ArrowUpRight size={16} className="ml-1" /></Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
                  <Link to="/how-it-works">See how it works</Link>
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 lg:gap-6 text-xs text-muted-foreground">
                {["Setup in 48 hours", "No technical skills needed", "Cancel anytime"].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary inline-block" /> {t}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Mockup — hidden on mobile so hero stays within one screen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex w-full min-w-0 justify-center"
            >
              <WhatsAppMockup />
            </motion.div>
          </div>
        </div>

        {/* ── Scroll indicator — pinned to bottom of the hero, always visible ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none select-none"
        >
          <div className="w-[18px] h-[28px] rounded-full border border-muted-foreground/25 flex items-start justify-center pt-[5px]">
            <motion.div
              className="w-[3px] h-[5px] rounded-full bg-primary"
              animate={{ opacity: [1, 0.2, 1], y: [0, 7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground/35 font-medium">
            scroll
          </span>
        </motion.div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <section className="py-5 border-y border-border overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...industries, ...industries].map((ind, i) => (
              <span key={i} className="mx-6 text-sm text-muted-foreground/50">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-background px-6 py-6 text-center group hover:bg-secondary transition-colors duration-300">
                <p className="text-3xl sm:text-4xl font-bold text-foreground mb-1 tabular-nums">
                  <AnimatedNumber target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────── */}
      <section className="py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-3">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Problem</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-8">
              Your customers are messaging you right now.{" "}
              <span className="text-muted-foreground font-light">Who is replying?</span>
            </motion.h2>
            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🕐", title: "Enquiries pile up after hours with no one to respond" },
                { icon: "💸", title: "Hiring a full-time receptionist costs more than it should" },
                { icon: "😤", title: "Customers leave when they don't get instant replies" },
              ].map((p, i) => (
                <motion.div key={i} variants={fadeInUp} className="group">
                  <span className="text-2xl mb-3 block">{p.icon}</span>
                  <p className="text-foreground font-medium text-sm leading-snug">{p.title}</p>
                  <div className="h-px bg-border mt-3 group-hover:bg-primary transition-colors duration-500" />
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6">
              <Link to="/how-it-works" className="text-primary hover:opacity-70 transition-opacity inline-flex items-center gap-2 text-sm font-medium">
                See how we solve this <ArrowRight size={13} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-6">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-3">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Capabilities</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              Everything your business needs
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden"
          >
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-background px-5 py-5 group hover:bg-secondary transition-colors duration-300 relative overflow-hidden">
                <span className="absolute top-2 right-3 text-4xl font-black text-muted-foreground/5 select-none">
                  {f.number}
                </span>
                <f.icon className="text-primary mb-2 group-hover:scale-110 transition-transform duration-300" size={18} />
                <h3 className="text-foreground font-semibold text-xs mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed hidden sm:block">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-6">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-3">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Process</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold text-foreground">
              Up and running in three steps
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-6 max-w-4xl"
          >
            {[
              { n: "01", title: "Contact Us", desc: "A representative walks you through onboarding and sends you the setup form." },
              { n: "02", title: "We Build Your Bot", desc: "We train, test, and connect your AI to your WhatsApp number." },
              { n: "03", title: "Go Live", desc: "Live in 48hrs. Every message answered. Watch it all from your dashboard." },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative">
                <span className="text-5xl font-black text-muted-foreground/10 block mb-2 leading-none">{s.n}</span>
                <h3 className="text-foreground font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-6 -right-3 text-muted-foreground/20">
                    <ArrowRight size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-5">
            <Link to="/how-it-works" className="text-primary hover:opacity-70 transition-opacity inline-flex items-center gap-2 text-xs font-medium">
              Full process walkthrough <ArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-6">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-3">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Client Stories</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold text-foreground">
              What our clients say
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-4 max-w-4xl"
          >
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeInUp} className="border border-border rounded-xl p-5 hover:border-primary/30 transition-colors duration-300 bg-background">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={11} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4 text-xs font-light">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-2 pt-3 border-t border-border">
                  <div className="w-7 h-7 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">
                    {t.name.split(" ").map((n: string) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-foreground text-xs font-semibold">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.business}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-3">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get Started</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-3">
              Ready to put your customer support on autopilot?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-6 text-sm font-light max-w-xl">
              Contact our team today. We handle everything — onboarding, training, and setup — in 48 hours.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <Button asChild size="default" className="gradient-primary text-primary-foreground font-semibold hover:opacity-90 px-6">
                <Link to="/contact">Contact Us <ArrowUpRight size={15} className="ml-1" /></Link>
              </Button>
              <Button asChild variant="outline" size="default">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;