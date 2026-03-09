import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, MessageSquare, BarChart3, Users, Clock } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const faqs = [
  { q: "Do I need to change my WhatsApp number?", a: "No! We connect directly to your existing WhatsApp Business number. Your customers won't notice any change — except the instant replies." },
  { q: "What if the AI gets a question it can't answer?", a: "The AI will politely let the customer know and escalate the conversation to you or your team immediately via notification." },
  { q: "Can I update the AI's knowledge after setup?", a: "Absolutely. You can update your services, prices, FAQs, and more anytime through your dashboard. Changes take effect instantly." },
  { q: "Will my customers know they're talking to AI?", a: "The AI is designed to sound natural and human-like. Most customers won't notice the difference. You can choose to disclose it if you prefer." },
  { q: "What happens if I get more messages than my plan?", a: "We'll notify you when you're approaching your limit. You can upgrade your plan anytime, or extra messages are handled at a small per-message fee." },
  { q: "How do I see all the conversations?", a: "Every conversation is logged in your live dashboard. You can view, search, and filter all customer interactions in real-time." },
];

const timeline = [
  { hour: "Hour 0", title: "Sign up and fill onboarding form", desc: "Tell us about your business, services, and how you want the AI to communicate." },
  { hour: "Hour 2", title: "We review your business info", desc: "Our team reviews your submission and prepares the AI training data." },
  { hour: "Hour 24", title: "AI trained and tested", desc: "Your custom AI is trained, tested with sample conversations, and ready for review." },
  { hour: "Hour 48", title: "Connected and live", desc: "We connect to your WhatsApp and your AI starts handling real conversations." },
];

const HowItWorks = () => {
  useEffect(() => { document.title = "How It Works — BotServe"; }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-foreground mb-4">How It Works</motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl mx-auto">
              From signup to your first automated reply in 48 hours
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 space-y-24">
          {/* Step 1 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span variants={fadeInUp} className="text-7xl font-black text-primary/20">01</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mt-2 mb-4">We Learn Your Business</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
                You share your services, prices, FAQs, operating hours and location. We use this to train an AI that knows your business inside out.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-3">
                {["Services list", "Pricing", "Operating hours", "Location", "Common FAQs", "Your tone of voice"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" /> {item}
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="glass-card p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={36} className="text-primary-foreground" />
                </div>
                <p className="text-muted-foreground text-sm">Business onboarding form</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Step 2 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="glass-card p-12 flex items-center justify-center min-h-[300px] order-2 lg:order-1">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Users size={36} className="text-primary-foreground" />
                </div>
                <p className="text-muted-foreground text-sm">WhatsApp connection</p>
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.span variants={fadeInUp} className="text-7xl font-black text-primary/20">02</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mt-2 mb-4">We Connect Your WhatsApp</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
                We connect our AI to your existing WhatsApp Business number. No need for a new number. Your customers won't notice anything changed — except the instant replies.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-3">
                {["Your number stays the same", "Existing chats unaffected", "Live within 48 hours"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" /> {item}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span variants={fadeInUp} className="text-7xl font-black text-primary/20">03</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mt-2 mb-4">AI Handles Everything</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
                From the moment it goes live, every inbound WhatsApp message gets an instant, accurate, human-sounding reply. You watch from your dashboard.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-3">
                {["Answers service enquiries", "Shares pricing", "Gives directions", "Handles appointment requests", "Escalates urgent issues to you"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" /> {item}
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="glass-card p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <BarChart3 size={36} className="text-primary-foreground" />
                </div>
                <p className="text-muted-foreground text-sm">Live dashboard</p>
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
              Monitor every conversation, track performance, and step in whenever you need to.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="glass-card p-8 max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: MessageSquare, label: "Live conversations" },
                { icon: Users, label: "Customer profiles" },
                { icon: BarChart3, label: "Enquiry analytics" },
                { icon: Clock, label: "Response history" },
              ].map((f, i) => (
                <div key={i} className="text-center p-4">
                  <f.icon className="text-primary mx-auto mb-3" size={28} />
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
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">From signup to live in 48 hours</motion.h2>
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
                  <span className="text-primary text-sm font-semibold">{t.hour}</span>
                  <h3 className="text-foreground font-semibold text-lg">{t.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{t.desc}</p>
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
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to get started?</motion.h2>
            <motion.div variants={fadeInUp}>
              <Button asChild size="lg" className="gradient-primary text-primary-foreground font-semibold hover:opacity-90">
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
