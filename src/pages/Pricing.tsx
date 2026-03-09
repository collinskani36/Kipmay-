import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const plans = [
  {
    name: "Starter",
    price: { monthly: 2000, annual: 1500 },
    desc: "For small businesses just getting started",
    features: [
      "Up to 100 conversations/day",
      "1 WhatsApp number",
      "Basic dashboard",
      "Email support",
      "Custom AI personality",
      "Priority support",
    ],
    cta: "Get Setup",
    popular: false,
  },
  {
    name: "Growth",
    price: { monthly: 4000, annual: 3500 },
    desc: "For growing businesses with steady traffic",
    features: [
      "Up to 500 conversations/day",
      "1 WhatsApp number",
      "Full dashboard + analytics",
      "Priority support",
      "Custom AI personality & tone",
      "Monthly performance report",
    ],
    cta: "Get Setup",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 0, annual: 0 },
    desc: "For high-volume businesses",
    features: [
      "Unlimited conversations",
      "Multiple WhatsApp numbers",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Full onboarding support",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: "Daily conversations",  starter: "100",     growth: "500",              enterprise: "Unlimited" },
  { feature: "WhatsApp numbers",     starter: "1",       growth: "1",                enterprise: "Multiple" },
  { feature: "Dashboard",            starter: "Basic",   growth: "Full + Analytics", enterprise: "Full + Custom" },
  { feature: "AI personality",       starter: false,     growth: true,               enterprise: true },
  { feature: "Priority support",     starter: false,     growth: true,               enterprise: true },
  { feature: "Performance reports",  starter: false,     growth: true,               enterprise: true },
  { feature: "Dedicated manager",    starter: false,     growth: false,              enterprise: true },
  { feature: "Custom integrations",  starter: false,     growth: false,              enterprise: true },
  { feature: "SLA guarantee",        starter: false,     growth: false,              enterprise: true },
];

const pricingFaqs = [
  { q: "What counts as a conversation?", a: "A series of messages with a single customer within a 24-hour window. A new message after 24 hours starts a new conversation." },
  { q: "Do unused conversations roll over?", a: "No — each billing cycle starts fresh with your full allocation." },
  { q: "Can I switch plans?", a: "Yes. Upgrade or downgrade anytime. Changes take effect at the start of your next billing cycle." },
  { q: "Do you offer refunds?", a: "No refunds after the trial period, but you can cancel anytime with no penalty." },
  { q: "Is there a setup fee?", a: "Yes — there is a one-time setup fee of KES 6,000 for all plans. This covers onboarding, AI training, and connecting your WhatsApp number. After that, you only pay the monthly plan rate." },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  useEffect(() => { document.title = "Pricing — Kipmay AI"; }, []);

  return (
    <div className="min-h-screen pt-16">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="py-6 lg:py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-1.5">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Pricing</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1">
              Simple, honest pricing
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xs lg:text-sm text-muted-foreground mb-4 lg:mb-6">
              No hidden fees. No long contracts. Cancel anytime.
            </motion.p>
            {/* Toggle */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 glass-card px-3 py-1.5">
              <span className={`text-xs font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-10 h-5 rounded-full transition-colors ${isAnnual ? "bg-primary" : "bg-muted"}`}
              >
                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-foreground transition-transform ${isAnnual ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
              <span className={`text-xs font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                Annual <span className="text-primary">Save 20%</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Cards ────────────────────────────────────────────── */}
      <section className="pb-8 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-3 lg:gap-6 max-w-5xl mx-auto items-start"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={i} variants={fadeInUp}
                className={`glass-card p-4 lg:p-8 relative ${plan.popular ? "border-primary/50 md:-mt-3 md:mb-3 lg:md:-mt-4 lg:md:mb-4" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold">
                    Most Popular
                  </span>
                )}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-foreground text-base lg:text-xl font-bold">{plan.name}</h3>
                </div>
                <p className="text-muted-foreground text-xs mb-3 lg:mb-5">{plan.desc}</p>

                {/* Price */}
                {plan.price.monthly > 0 ? (
                  <div className="mb-3 lg:mb-6">
                    <span className="text-2xl lg:text-4xl font-bold text-foreground">
                      KES {(isAnnual ? plan.price.annual : plan.price.monthly).toLocaleString()}
                    </span>
                    <span className="text-muted-foreground text-xs">/mo</span>
                  </div>
                ) : (
                  <div className="mb-3 lg:mb-6">
                    <span className="text-2xl lg:text-4xl font-bold text-foreground">Custom</span>
                  </div>
                )}

                {/* One-time setup fee */}
                <p className="text-xs text-muted-foreground mb-3 lg:mb-5 pb-3 lg:pb-4 border-b border-border">
                  <span className="text-foreground font-medium">KES 6,000</span> one-time setup fee
                </p>

                {/* Features */}
                <div className="space-y-1.5 lg:space-y-3 mb-4 lg:mb-8">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs lg:text-sm">
                      <Check size={12} className="text-primary flex-shrink-0" />
                      <span className="text-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild size="sm"
                  className={`w-full font-semibold text-xs lg:text-sm ${plan.popular ? "gradient-primary text-primary-foreground hover:opacity-90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link to="/contact">{plan.cta} <ArrowUpRight size={13} className="ml-1" /></Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Comparison ───────────────────────────────────────── */}
      <section className="py-8 lg:py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-5 lg:mb-10">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-1.5">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Compare</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-xl lg:text-3xl font-bold text-foreground">Compare plans</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="overflow-x-auto">
            <table className="w-full max-w-4xl text-xs lg:text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 lg:py-4 text-muted-foreground font-medium">Feature</th>
                  <th className="text-center py-2 lg:py-4 text-foreground font-semibold">Starter</th>
                  <th className="text-center py-2 lg:py-4 text-primary font-semibold">Growth</th>
                  <th className="text-center py-2 lg:py-4 text-foreground font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((f, i) => (
                  <tr key={i} className="border-b border-border/60">
                    <td className="py-2 lg:py-3 text-foreground">{f.feature}</td>
                    {(["starter", "growth", "enterprise"] as const).map((plan) => (
                      <td key={plan} className="text-center py-2 lg:py-3">
                        {typeof f[plan] === "boolean" ? (
                          f[plan]
                            ? <Check size={13} className="text-primary mx-auto" />
                            : <X size={13} className="text-muted-foreground/40 mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">{f[plan]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-5 lg:mb-10">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-1.5">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQ</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-xl lg:text-3xl font-bold text-foreground">Pricing FAQ</motion.h2>
          </motion.div>
          <div className="max-w-2xl">
            <Accordion type="single" collapsible className="space-y-1.5 lg:space-y-3">
              {pricingFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-4 lg:px-6 border-none">
                  <AccordionTrigger className="text-foreground text-xs lg:text-sm text-left hover:no-underline py-2.5 lg:py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xs lg:text-sm">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-8 lg:py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-1.5">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get Started</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-xl lg:text-3xl font-bold text-foreground mb-2 lg:mb-4">
              Still not sure? Talk to us.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xs lg:text-sm text-muted-foreground mb-4 lg:mb-6">
              We'll help you pick the right plan for your business — no pressure.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button asChild size="sm" className="gradient-primary text-primary-foreground font-semibold hover:opacity-90 px-5 lg:px-8 lg:text-sm lg:h-10">
                <Link to="/contact">Contact Us <ArrowUpRight size={13} className="ml-1" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;