import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const plans = [
  {
    name: "Starter",
    price: { monthly: 2000, annual: 1500 },
    desc: "For small businesses just getting started",
    features: [
      { text: "Up to 100 conversations/day", included: true },
      { text: "1 WhatsApp number", included: true },
      { text: "Basic dashboard", included: true },
      { text: "Email support", included: true },
      
      { text: "Custom AI personality", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Get setup",
    popular: false,
  },
  {
    name: "Growth",
    price: { monthly: 4000, annual: 3500 },
    desc: "For growing businesses with steady traffic",
    features: [
      { text: "Up to 500 conversations/day", included: true },
      { text: "1 WhatsApp number", included: true },
      { text: "Full dashboard + analytics", included: true },
      { text: "Priority support", included: true },
      { text: "Custom AI personality and tone", included: true },
      
      { text: "Monthly performance report", included: true },
    ],
    cta: "Get setup",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 0, annual: 0 },
    desc: "For high-volume businesses",
    features: [
      { text: "Unlimited conversations", included: true },
      { text: "Multiple WhatsApp numbers", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom integrations", included: true },
      { text: "SLA guarantee", included: true },
      { text: "Onboarding support", included: true },
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: "Daily conversations", starter: "100", growth: "500", enterprise: "Unlimited" },
  { feature: "WhatsApp numbers", starter: "1", growth: "1", enterprise: "Multiple" },
  { feature: "Dashboard", starter: "Basic", growth: "Full + Analytics", enterprise: "Full + Custom" },
  { feature: "AI personality", starter: false, growth: true, enterprise: true },
  { feature: "Priority support", starter: false, growth: true, enterprise: true },
  { feature: "Performance reports", starter: false, growth: true, enterprise: true },
  { feature: "Dedicated manager", starter: false, growth: false, enterprise: true },
  { feature: "Custom integrations", starter: false, growth: false, enterprise: true },
  { feature: "SLA guarantee", starter: false, growth: false, enterprise: true },
];

const pricingFaqs = [
  { q: "What counts as a conversation?", a: "A conversation is a series of messages exchanged with a single customer within a 24-hour window. If the same customer messages again after 24 hours, it counts as a new conversation." },
  { q: "Do unused conversations roll over?", a: "No, unused conversations don't roll over to the next month. Each billing cycle starts fresh with your full allocation." },
  { q: "Can I switch plans?", a: "Yes! You can upgrade or downgrade your plan anytime. Changes take effect at the start of your next billing cycle." },
  { q: "Do you offer refunds?", a: "We offer a 14-day free trial so you can test the service risk-free. After that, we don't offer refunds but you can cancel anytime." },
  { q: "Is there a setup fee?", a: "No setup fees. The price you see is the price you pay. Setup and onboarding are included in all plans." },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  useEffect(() => { document.title = "Pricing — KipmayAI"; }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Simple, honest pricing</motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">No hidden fees. No long contracts. Cancel anytime.</motion.p>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-4 glass-card px-4 py-2">
              <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-12 h-6 rounded-full transition-colors ${isAnnual ? "bg-primary" : "bg-muted"}`}
              >
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-foreground transition-transform ${isAnnual ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                Annual <span className="text-primary text-xs">Save 20%</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`glass-card p-8 relative ${plan.popular ? "border-primary/50 md:-mt-4 md:mb-4" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-foreground text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.desc}</p>
                {plan.price.monthly > 0 ? (
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">
                      KES {(isAnnual ? plan.price.annual : plan.price.monthly).toLocaleString()}
                    </span>
                    <span className="text-muted-foreground text-sm">/month</span>
                  </div>
                ) : (
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">Custom</span>
                  </div>
                )}
                <div className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm">
                      {f.included ? (
                        <Check size={16} className="text-primary flex-shrink-0" />
                      ) : (
                        <X size={16} className="text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={f.included ? "text-foreground" : "text-muted-foreground"}>{f.text}</span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className={`w-full font-semibold ${plan.popular ? "gradient-primary text-primary-foreground hover:opacity-90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link to={plan.name === "Enterprise" ? "/contact" : "/contact"}>{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-bold text-foreground text-center mb-12">
            Compare plans
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 text-muted-foreground font-medium">Feature</th>
                  <th className="text-center py-4 text-foreground font-semibold">Starter</th>
                  <th className="text-center py-4 text-primary font-semibold">Growth</th>
                  <th className="text-center py-4 text-foreground font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((f, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-4 text-foreground">{f.feature}</td>
                    {(["starter", "growth", "enterprise"] as const).map((plan) => (
                      <td key={plan} className="text-center py-4">
                        {typeof f[plan] === "boolean" ? (
                          f[plan] ? <Check size={16} className="text-primary mx-auto" /> : <X size={16} className="text-muted-foreground mx-auto" />
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

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-bold text-foreground text-center mb-12">
            Pricing FAQ
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {pricingFaqs.map((faq, i) => (
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
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-4">Still not sure? Talk to us</motion.h2>
            <motion.div variants={fadeInUp}>
              <Button asChild size="lg" className="gradient-primary text-primary-foreground font-semibold hover:opacity-90">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
