import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const useCases = [
  { icon: "💆", name: "Spas & Salons",        enquiries: ["Service menu & pricing", "Booking requests", "Location & directions", "Special offers"],         result: "Bookings up 35%" },
  { icon: "🏥", name: "Clinics",              enquiries: ["Appointment booking", "Operating hours", "Doctor availability", "Insurance queries"],            result: "Staff freed for patient care" },
  { icon: "🍽️", name: "Restaurants",          enquiries: ["Menu & daily specials", "Table reservations", "Opening hours", "Delivery info"],                result: "Reservations up 40%" },
  { icon: "🎓", name: "Schools & Colleges",   enquiries: ["Admission requirements", "Fee structure", "Programs offered", "Application process"],           result: "Enquiries handled 24/7" },
  { icon: "🏠", name: "Real Estate",          enquiries: ["Property listings", "Viewing requests", "Pricing & availability", "Agent contacts"],            result: "Never miss a buyer" },
  { icon: "👗", name: "Boutiques & Retail",   enquiries: ["Product availability", "Pricing", "Store hours", "New arrivals"],                               result: "Faster sales conversion" },
  { icon: "🏋️", name: "Gyms & Fitness",       enquiries: ["Membership pricing", "Class schedules", "Facilities", "Trainer availability"],                 result: "Trial bookings up 50%" },
  { icon: "🏨", name: "Hotels & Airbnbs",     enquiries: ["Room availability", "Pricing & packages", "Check-in info", "Amenities"],                       result: "Bookings around the clock" },
];

const caseStudies = [
  {
    industry: "School in Eldoret",
    before: "Secretary spending 3+ hours/day answering the same WhatsApp questions about admission and School fees.",
    after: "AI handles 95% of enquiries instantly. Receptionist focuses on in-person customers and upselling.",
    metric: "95% automated",
  },
  {
    industry: "Restaurant in Eldoret",
    before: "Missing reservation requests after hours. Losing customers to competitors who responded faster.",
    after: "Every message gets an instant reply. Reservations captured 24/7, even at 2am.",
    metric: "40% more reservations",
  },
];

const UseCases = () => {
  useEffect(() => { document.title = "Use Cases — Kipmay AI"; }, []);

  return (
    <div className="min-h-screen pt-16">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="py-6 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-1.5 lg:mb-3">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Use Cases</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-1 lg:mb-3 max-w-2xl">
              Built for businesses that run on WhatsApp
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xs lg:text-lg text-muted-foreground max-w-xl">
              Whatever your industry — if customers message you on WhatsApp, we can automate it.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Use Case Cards ───────────────────────────────────── */}
      <section className="pb-8 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6"
          >
            {useCases.map((uc, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card p-3 lg:p-6 hover:border-primary/30 transition-colors">
                <span className="text-xl lg:text-3xl mb-1.5 lg:mb-3 block">{uc.icon}</span>
                <h3 className="text-foreground font-semibold text-xs lg:text-lg mb-1.5 lg:mb-3 leading-tight">{uc.name}</h3>
                {/* enquiry list — hidden on mobile, shown on desktop */}
                <ul className="hidden lg:block space-y-1.5 mb-4">
                  {uc.enquiries.map((e, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span> {e}
                    </li>
                  ))}
                </ul>
                {/* on mobile: show enquiries as a tiny comma-separated line */}
                <p className="lg:hidden text-muted-foreground text-xs leading-relaxed mb-1.5">
                  {uc.enquiries.slice(0, 2).join(", ")}
                </p>
                <p className="text-primary text-xs lg:text-sm font-semibold">{uc.result}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Case Studies ─────────────────────────────────────── */}
      <section className="py-8 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-5 lg:mb-12">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-1.5">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Results</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-xl lg:text-4xl font-bold text-foreground">
              Real results from real businesses
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="space-y-3 lg:space-y-6 max-w-4xl"
          >
            {caseStudies.map((cs, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card p-4 lg:p-8">
                <div className="flex items-center justify-between mb-3 lg:mb-6 gap-3 flex-wrap">
                  <h3 className="text-foreground font-bold text-sm lg:text-xl">{cs.industry}</h3>
                  <span className="px-2 py-0.5 lg:px-3 lg:py-1 rounded-full gradient-primary text-primary-foreground text-xs font-semibold">{cs.metric}</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 lg:gap-6">
                  <div>
                    <p className="text-destructive text-xs font-semibold uppercase tracking-wider mb-1">Before</p>
                    <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">{cs.before}</p>
                  </div>
                  <div>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">After</p>
                    <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">{cs.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-8 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-1.5">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get Started</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-xl lg:text-3xl font-bold text-foreground mb-1 lg:mb-3">
              Don't see your industry?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-xs lg:text-base mb-4 lg:mb-6">
              We work with any business that receives WhatsApp enquiries.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button asChild size="sm" className="gradient-primary text-primary-foreground font-semibold hover:opacity-90 lg:text-base lg:px-6 lg:py-2.5 lg:h-auto">
                <Link to="/contact">Contact Us <ArrowUpRight size={14} className="ml-1" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default UseCases;