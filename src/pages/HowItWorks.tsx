import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, MessageSquare, BarChart3, Users, Clock, FileText, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const faqs = [
  { q: "Do I need to change my WhatsApp number?", a: "No. We connect directly to your existing WhatsApp Business number. Your customers won't notice any change — except the instant replies." },
  { q: "What if the AI gets a question it can't answer?", a: "The AI will politely let the customer know and escalate the conversation to you or your team immediately via notification." },
  { q: "Can I update the AI's knowledge after setup?", a: "Absolutely. You can update your services, prices, FAQs, and more anytime through your dashboard. Changes take effect instantly." },
  { q: "Will my customers know they're talking to AI?", a: "The AI is designed to sound natural and human-like. Most customers won't notice the difference. You can choose to disclose it if you prefer." },
  { q: "What happens if I get more messages than my plan?", a: "We'll notify you when you're approaching your limit. You can upgrade your plan anytime, or extra messages are handled at a small per-message fee." },
  { q: "How do I see all the conversations?", a: "Every conversation is logged in your live dashboard. You can view, search, and filter all customer interactions in real-time." },
];

const timeline = [
  { day: "Step 1", title: "You reach out to us", desc: "Submit an enquiry through our contact page. A Kipmay AI representative will respond within a few hours." },
  { day: "Step 2", title: "Guided onboarding", desc: "Our team sends you a structured onboarding form — services, pricing, FAQs, operating hours, and tone of voice." },
  { day: "Step 3", title: "AI training & testing", desc: "We train and rigorously test your custom AI. Sample conversations are reviewed before anything goes live." },
  { day: "Step 4", title: "Go live", desc: "We connect the AI to your WhatsApp number. Every inbound message receives an instant, intelligent reply." },
];

const HowItWorks = () => {
  useEffect(() => { document.title = "How It Works — Kipmay AI"; }, []);

  return (
    <div className="min-h-screen pt-14 lg:pt-20">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="py-6 lg:py-12 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-2">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Simple. Guided. Professional.</span>
              <span className="h-px w-6 bg-primary" />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1.5">
              How It Works
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xs lg:text-sm text-muted-foreground max-w-lg mx-auto">
              Our team handles the entire setup process with you — from first contact to a fully live AI assistant on your WhatsApp.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 3 Steps ──────────────────────────────────────────── */}
      <section className="py-6 lg:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 space-y-6 lg:space-y-10">

          {/* Step 1 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            <div>
              <motion.span variants={fadeInUp} className="text-5xl lg:text-6xl font-black text-primary/10 leading-none block">01</motion.span>
              <motion.h2 variants={fadeInUp} className="text-base lg:text-xl font-bold text-foreground mt-0.5 mb-1.5">Contact Our Team</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-xs lg:text-sm leading-relaxed mb-3">
                Reach out through our contact page and a dedicated representative will respond promptly — understanding your goals and walking you through the process.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-1.5">
                {["No commitment required", "We explain the full process", "Dedicated point of contact", "Response within a few hours"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs lg:text-sm text-foreground">
                    <Check size={13} className="text-primary flex-shrink-0" /> {item}
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="glass-card p-4 lg:p-6 flex items-center justify-center min-h-[100px] lg:min-h-[140px]">
              <div className="text-center">
                <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-1.5">
                  <MessageSquare size={20} className="text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium text-sm">Initial consultation</p>
                <p className="text-muted-foreground text-xs mt-0.5">A real person. A real conversation.</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="border-t border-border/50" />

          {/* Step 2 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            <motion.div variants={fadeInUp} className="glass-card p-6 flex items-center justify-center min-h-[140px] order-2 lg:order-1">
              <div className="text-center">
                <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-1.5">
                  <FileText size={20} className="text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium text-sm">Guided onboarding form</p>
                <p className="text-muted-foreground text-xs mt-0.5">Structured. Simple. Assisted.</p>
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.span variants={fadeInUp} className="text-5xl lg:text-6xl font-black text-primary/10 leading-none block">02</motion.span>
              <motion.h2 variants={fadeInUp} className="text-base lg:text-xl font-bold text-foreground mt-0.5 mb-1.5">Complete Your Onboarding</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-xs lg:text-sm leading-relaxed mb-3">
                We send you a structured form to capture everything your AI needs to know. We guide you through every field — nothing gets missed.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-1.5">
                {["Services, pricing & operating hours", "Frequently asked questions", "Location and contact details", "Preferred tone & escalation rules"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs lg:text-sm text-foreground">
                    <Check size={13} className="text-primary flex-shrink-0" /> {item}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <div className="border-t border-border/50" />

          {/* Step 3 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            <div>
              <motion.span variants={fadeInUp} className="text-5xl lg:text-6xl font-black text-primary/10 leading-none block">03</motion.span>
              <motion.h2 variants={fadeInUp} className="text-base lg:text-xl font-bold text-foreground mt-0.5 mb-1.5">Your AI Goes Live</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-xs lg:text-sm leading-relaxed mb-3">
                We train, test, and connect your AI to your existing WhatsApp number. Every inbound message gets an instant, professional reply — with full visibility and control from your dashboard.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-1.5">
                {["Your existing number, unchanged", "Trained & tested before going live", "Live within 48 hours of onboarding", "Full dashboard access from day one"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs lg:text-sm text-foreground">
                    <Check size={13} className="text-primary flex-shrink-0" /> {item}
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="glass-card p-4 lg:p-6 flex items-center justify-center min-h-[100px] lg:min-h-[140px]">
              <div className="text-center">
                <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-1.5">
                  <BarChart3 size={20} className="text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium text-sm">Live dashboard</p>
                <p className="text-muted-foreground text-xs mt-0.5">Every conversation, in real-time.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Dashboard features ────────────────────────────────── */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-4 lg:mb-6">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-2">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Dashboard</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-xl lg:text-2xl font-bold text-foreground mb-1">You stay in control</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-sm max-w-md">
              Monitor every conversation and step in whenever you need to.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="glass-card p-3 lg:p-5 max-w-3xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
              {[
                { icon: MessageSquare, label: "Live conversations" },
                { icon: Users, label: "Customer profiles" },
                { icon: BarChart3, label: "Enquiry analytics" },
                { icon: Clock, label: "Response history" },
              ].map((f, i) => (
                <div key={i} className="bg-background text-center p-3 lg:p-4 hover:bg-secondary transition-colors">
                  <f.icon className="text-primary mx-auto mb-2" size={18} />
                  <p className="text-foreground text-xs font-medium">{f.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="py-6 lg:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-6">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-2">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Timeline</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-xl lg:text-2xl font-bold text-foreground mb-1">
              First contact to live in 48 hours
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-sm">
              Our team is beside you every step of the way.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="max-w-xl space-y-0">
            {timeline.map((t, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-primary/15 my-1.5" />}
                </div>
                <div className="pb-4 lg:pb-6">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">{t.day}</span>
                  <h3 className="text-foreground font-semibold text-sm">{t.title}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section id="faq" className="py-6 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-4 lg:mb-6">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-2">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQ</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-xl lg:text-2xl font-bold text-foreground">Frequently asked questions</motion.h2>
          </motion.div>
          <div className="max-w-2xl">
            <Accordion type="single" collapsible className="space-y-1.5">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-4 lg:px-5 border-none">
                  <AccordionTrigger className="text-foreground text-xs lg:text-sm text-left hover:no-underline py-2.5 lg:py-3">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xs lg:text-sm">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-6 lg:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-2">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get Started</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1.5">
              Ready to get started?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-xs lg:text-sm mb-4 lg:mb-6 max-w-md">
              Reach out today and our team will walk you through everything — no technical knowledge required.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 lg:gap-3">
              <Button asChild size="sm" className="gradient-primary text-primary-foreground font-semibold hover:opacity-90 px-6">
                <Link to="/contact">Contact Us <ArrowUpRight size={15} className="ml-1" /></Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HowItWorks;