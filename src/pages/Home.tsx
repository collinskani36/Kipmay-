import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import WhatsAppMockup from "@/components/ui/WhatsAppMockup";
import { Bot, Zap, Clock, BarChart3, Target, Bell, Star, ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const industries = [
  "💆 Spas", "🏥 Clinics", "🍽️ Restaurants", "🎓 Schools",
  "🏠 Real Estate", "👗 Boutiques", "🏋️ Gyms", "🏨 Hotels",
];

const problems = [
  { icon: "🕐", title: "Enquiries pile up after hours with no one to respond" },
  { icon: "💸", title: "Hiring a full-time receptionist costs more than it should" },
  { icon: "😤", title: "Customers leave when they don't get instant replies" },
];

const features = [
  { icon: Bot, title: "Intelligent AI Replies", desc: "Human-quality responses trained on your business data" },
  { icon: Zap, title: "Instant Response", desc: "Replies in seconds, not hours" },
  { icon: Clock, title: "24/7 Availability", desc: "Never miss a message, day or night" },
  { icon: BarChart3, title: "Live Dashboard", desc: "Monitor conversations and analytics in real-time" },
  { icon: Target, title: "Trained on Your Business", desc: "Knows your services, prices, and FAQs inside out" },
  { icon: Bell, title: "Smart Escalation", desc: "Urgent requests are routed to you instantly" },
];

const testimonials = [
  { quote: "KipmayAI has completely transformed how we handle enquiries. We went from missing 60% of messages to responding to every single one instantly.", name: "Aisha M.", business: "Marketing Director, Eldoret", rating: 5 },
  { quote: "Our spa bookings increased by 40% in the first month. The AI handles questions and reservations perfectly.", name: "James K.", business: "Spa Manager, Eldoret", rating: 5 },
];

const Home = () => {
  useEffect(() => { document.title = "KipmayAI — AI WhatsApp Bots for Business"; }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="w-full min-w-0">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted-foreground mb-6">
                🤖 AI-Powered WhatsApp Automation
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Transform Your Customer Support with{" "}
                <span className="text-gradient">Intelligent WhatsApp Bots</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Stop losing customers to unanswered WhatsApp messages. Our AI handles every enquiry instantly, 24/7 — so you never miss a lead again.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
                <Button asChild size="lg" className="gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 sm:gap-6 text-sm text-muted-foreground">
                <span>✓ Setup in 48hrs</span>
                <span>✓ No technical skills</span>
                <span>✓ Cancel anytime</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full min-w-0 flex justify-center"
            >
              <WhatsAppMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Marquee */}
      <section className="py-12 border-y border-border overflow-hidden">
        <p className="text-center text-muted-foreground text-sm mb-6">Trusted by businesses across Kenya</p>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...industries, ...industries].map((ind, i) => (
              <span key={i} className="mx-6 text-lg text-muted-foreground">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your customers are messaging you right now.{" "}
              <span className="text-gradient">Who's replying?</span>
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {problems.map((p, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card p-8 text-center">
                <span className="text-4xl mb-4 block">{p.icon}</span>
                <p className="text-foreground font-medium">{p.title}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mt-10">
            <Link to="/how-it-works" className="text-primary hover:underline inline-flex items-center gap-1 font-medium">
              There's a better way <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solution Snapshot */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet your new AI receptionist</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
            {[
              { step: "1", title: "Contact Us", desc: "Reach out and we onboard you" },
              { step: "2", title: "Connect", desc: "We link to your WhatsApp" },
              { step: "3", title: "Automate", desc: "AI handles everything" },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-center gap-4">
                <div className="glass-card p-6 text-center w-[180px]">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-3">{s.step}</div>
                  <h3 className="text-foreground font-semibold text-base mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-xs">{s.desc}</p>
                </div>
                {i < 2 && <ArrowRight className="hidden md:block text-primary flex-shrink-0" size={20} />}
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mt-10">
            <Link to="/how-it-works" className="text-primary hover:underline inline-flex items-center gap-1 font-medium">
              See the full process <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Everything your business needs</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card p-8 hover:border-primary/30 transition-colors group">
                <f.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="text-foreground font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What our clients say</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card p-8">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                    {t.name.split(" ").map((n: string) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.business}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="gradient-primary rounded-2xl p-12 sm:p-16 text-center">
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to never miss a customer again?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 mb-8">
              Get set up in 48 hours. No technical skills required.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;