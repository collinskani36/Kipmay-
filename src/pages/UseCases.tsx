import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const useCases = [
  { icon: "💆", name: "Spas & Salons", enquiries: ["Service menu & descriptions", "Pricing for treatments", "Availability & booking requests", "Location & directions", "Special offers & packages"], result: "95% of enquiries handled instantly, bookings up 35%" },
  { icon: "🏥", name: "Clinics & Pharmacies", enquiries: ["Appointment booking", "Operating hours", "Services available", "Doctor availability", "Insurance queries"], result: "Staff freed to focus on patient care" },
  { icon: "🍽️", name: "Restaurants & Cafes", enquiries: ["Menu & daily specials", "Table reservations", "Opening hours", "Delivery information", "Event bookings"], result: "40% increase in reservations" },
  { icon: "🎓", name: "Schools & Colleges", enquiries: ["Admission requirements", "Fee structure", "Programs offered", "Application process", "Campus information"], result: "Admissions enquiries handled 24/7" },
  { icon: "🏠", name: "Real Estate", enquiries: ["Property listings", "Viewing requests", "Pricing & availability", "Agent contact details", "Neighborhood info"], result: "Never miss a potential buyer" },
  { icon: "👗", name: "Boutiques & Retail", enquiries: ["Product availability", "Pricing", "Store hours", "Delivery options", "New arrivals"], result: "Sales enquiries converted faster" },
  { icon: "🏋️", name: "Gyms & Fitness", enquiries: ["Membership pricing", "Class schedules", "Facilities available", "Trial sessions", "Trainer availability"], result: "Trial session bookings up 50%" },
  { icon: "🏨", name: "Hotels & Airbnbs", enquiries: ["Room availability", "Pricing & packages", "Check-in information", "Amenities", "Local attractions"], result: "Booking enquiries handled around the clock" },
];

const caseStudies = [
  {
    industry: "School in Eldoret",
    before: "Receptionist spending 3+ hours/day answering the same WhatsApp questions about services and prices.",
    after: "AI handles 95% of enquiries instantly. Receptionist focuses on in-person customers and upselling.",
    metric: "95% enquiries automated",
  },
  {
    industry: "Restaurant in Eldoret",
    before: "Missing reservation requests that came in after hours. Losing customers to competitors who responded faster.",
    after: "Every message gets an instant reply. Reservations captured 24/7, even at 2am.",
    metric: "40% more reservations",
  },
  
];

const UseCases = () => {
  useEffect(() => { document.title = "Use Cases — KipmayAI"; }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Built for businesses that run on WhatsApp
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl mx-auto">
              Whatever your industry, if customers message you on WhatsApp, we can automate it.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card p-6 hover:border-primary/30 transition-colors">
                <span className="text-3xl mb-3 block">{uc.icon}</span>
                <h3 className="text-foreground font-semibold text-lg mb-3">{uc.name}</h3>
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-2">Common enquiries handled:</p>
                <ul className="space-y-1.5 mb-4">
                  {uc.enquiries.map((e, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span> {e}
                    </li>
                  ))}
                </ul>
                <p className="text-primary text-sm font-medium">{uc.result}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
            Real results from real businesses
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8 max-w-4xl mx-auto">
            {caseStudies.map((cs, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card p-8">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <h3 className="text-foreground font-bold text-xl">{cs.industry}</h3>
                  <span className="px-3 py-1 rounded-full gradient-primary text-primary-foreground text-sm font-semibold">{cs.metric}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-destructive text-xs font-semibold uppercase tracking-wider mb-2">Before</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cs.before}</p>
                  </div>
                  <div>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">After</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cs.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-4">Don't see your industry?</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-8">We work with any business that receives WhatsApp enquiries.</motion.p>
            <motion.div variants={fadeInUp}>
              <Button asChild size="lg" className="gradient-primary text-primary-foreground font-semibold hover:opacity-90">
                <Link to="/contact">Contact Us <ArrowRight size={16} /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
