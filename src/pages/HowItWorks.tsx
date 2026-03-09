import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, MessageSquare, BarChart3, Users, Clock, FileText } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const faqs = [
  { q: "Do I need to change my WhatsApp number?", a: "No. We connect directly to your existing WhatsApp Business number. Your customers won't notice any change — except the instant replies." },
  { q: "What if the AI gets a question it can't answer?", a: "The AI will politely let the customer know and escalate the conversation to you or your team immediately via notification." },
  { q: "Can I update the AI's knowledge after setup?", a: "Absolutely. You can update your services, prices, FAQs, and more anytime through your dashboard. Changes take effect instantly." },
  { q: "Will my customers know they're talking to AI?", a: "The AI is designed to sound natural and human-like. Most customers won't notice the difference. You can choose to disclose it if you prefer." },
  { q: "What happens if I get more messages than my plan?", a: "We'll notify you when you're approaching your limit. You can upgrade your plan anytime, or extra messages are handled at a small per-message fee." },
  { q: "How do I see all the conversations?", a: "Every conversation is logged in your live dashboard. You can view, search, and filter all customer interactions in real-time." },
];

const timeline = [
  {
    day: "Step 1",
    title: "You reach out to us",
    desc: "Submit an enquiry through our contact page. A Kipmay AI representative will respond within a few hours to understand your needs and walk you through the process.",
  },
  {
    day: "Step 2",
    title: "Guided onboarding",
    desc: "Our team sends you a structured onboarding form to capture your business details — services, pricing, FAQs, operating hours, and tone of voice. We guide you through every field.",
  },
  {
    day: "Step 3",
    title: "AI training & testing",
    desc: "We use your submitted information to train and rigorously test your custom AI. Sample conversations are reviewed to ensure accuracy and a natural tone before anything goes live.",
  },
  {
    day: "Step 4",
    title: "Go live",
    desc: "We connect the AI to your WhatsApp Business number. From this point, every inbound message receives an instant, intelligent reply — while you monitor everything from your dashboard.",
  },
];

const HowItWorks = () => {
  useEffect(() => { document.title = "How It Works — Kipmay AI"; }, []);

  return (
    <div className="min-h-screen pt-16">

      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted-foreground mb-6">
              Simple. Guided. Professional.
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              How It Works
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl mx-auto">
              Our team handles the entire setup process with you — from first contact to a fully live AI assistant on your WhatsApp.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 space-y-24">

          {/* Step 1 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span variants={fadeInUp} className="text-7xl font-black text-primary/10">01</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mt-2 mb-4">Contact Our Team</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
                Reach out through our contact page and a dedicated Kipmay AI representative will respond promptly. We take time to understand your business goals, answer your questions, and determine the right setup for your needs.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-3">
                {[
                  "No commitment required at this stage",
                  "We explain the full process clearly",
                  "You get a dedicated point of contact",
                  "Response within a few hours",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" /> {item}
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="glass-card p-8 flex items-center justify-center min-h-[220px]">
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-3">
                  <MessageSquare size={26} className="text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium text-sm">Initial consultation</p>
                <p className="text-muted-foreground text-xs mt-1 max-w-[160px] mx-auto">A real person. A real conversation.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Step 2 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} className="glass-card p-8 flex items-center justify-center min-h-[220px] order-2 lg:order-1">
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-3">
                  <FileText size={26} className="text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium text-sm">Guided onboarding form</p>
                <p className="text-muted-foreground text-xs mt-1 max-w-[160px] mx-auto">Structured. Simple. Assisted.</p>
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.span variants={fadeInUp} className="text-7xl font-black text-primary/10">02</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mt-2 mb-4">Complete Your Onboarding</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
                Our team sends you a structured onboarding form to capture everything your AI needs to know. We guide you through each section and follow up if anything needs clarification — nothing gets missed.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-3">
                {[
                  "Services, pricing & operating hours",
                  "Frequently asked questions",
                  "Location and contact details",
                  "Preferred tone and communication style",
                  "Any special instructions or escalation rules",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" /> {item}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span variants={fadeInUp} className="text-7xl font-black text-primary/10">03</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mt-2 mb-4">Your AI Goes Live</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
                We train, test, and connect your AI to your existing WhatsApp Business number. From the moment it goes live, every inbound message receives an instant, accurate, professional reply — while you retain full visibility and control.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-3">
                {[
                  "Your existing number, unchanged",
                  "AI trained and tested before going live",
                  "Live within 48 hours of onboarding",
                  "Full dashboard access from day one",
                  "Escalation to your team for urgent issues",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" /> {item}
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="glass-card p-8 flex items-center justify-center min-h-[220px]">
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-3">
                  <BarChart3 size={26} className="text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium text-sm">Live dashboard</p>
                <p className="text-muted-foreground text-xs mt-1 max-w-[160px] mx-auto">Every conversation, in real-time.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">You stay in control</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-xl mx-auto">
              Monitor every conversation, track performance, and step in whenever you need to — all from one clean dashboard.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="glass-card p-8 max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: MessageSquare, label: "Live conversations" },
                { icon: Users, label: "Customer profiles" },
                { icon: BarChart3, label: "Enquiry analytics" },
                { icon: Clock, label: "Response history" },
              ].map((f, i) => (
                <div key={i} className="text-center p-4 rounded-lg hover:bg-muted/30 transition-colors">
                  <f.icon className="text-primary mx-auto mb-3" size={24} />
                  <p className="text-foreground text-sm font-medium">{f.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              From first contact to live in 48 hours
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-lg mx-auto">
              A clear, guided process — with our team beside you every step of the way.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto space-y-0">
            {timeline.map((t, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px h-full bg-primary/20 my-2" />}
                </div>
                <div className="pb-10">
                  <span className="text-primary text-sm font-semibold">{t.day}</span>
                  <h3 className="text-foreground font-semibold text-lg">{t.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently asked questions</motion.h2>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
                  <AccordionTrigger className="text-foreground text-left hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Ready to get started?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 max-w-md mx-auto">
              Reach out today and our team will walk you through everything — no technical knowledge required.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary text-primary-foreground font-semibold hover:opacity-90">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
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