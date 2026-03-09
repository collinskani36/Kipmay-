import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const businessTypes = ["Spa", "Clinic", "Restaurant", "School", "Real Estate", "Boutique", "Gym", "Hotel", "Other"];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", type: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => { document.title = "Contact — Chattify"; }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.business.trim()) errs.business = "Business name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.type) errs.type = "Please select a business type";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", business: "", email: "", phone: "", type: "", message: "" });
    setErrors({});
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get in touch</motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">We'll get back to you within 24 hours</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + Details */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              onSubmit={handleSubmit}
              className="lg:col-span-3 space-y-5"
            >
              <motion.div variants={fadeInUp}>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="John Doe" className="mt-1.5" />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Label htmlFor="business">Business name</Label>
                <Input id="business" value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="Your Business" className="mt-1.5" />
                {errors.business && <p className="text-destructive text-sm mt-1">{errors.business}</p>}
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-5">
                <motion.div variants={fadeInUp}>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className="mt-1.5" />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+254 700 000 000" className="mt-1.5" />
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                </motion.div>
              </div>
              <motion.div variants={fadeInUp}>
                <Label>Business type</Label>
                <Select value={form.type} onValueChange={(v) => update("type", v)}>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select your industry" /></SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((t) => <SelectItem key={t} value={t.toLowerCase()}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
                {errors.type && <p className="text-destructive text-sm mt-1">{errors.type}</p>}
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your business and what you need" rows={5} className="mt-1.5" />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground font-semibold hover:opacity-90">
                  Send Message
                </Button>
              </motion.div>
            </motion.form>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="lg:col-span-2 space-y-8">
              <motion.div variants={fadeInUp} className="glass-card p-8 space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@Chattify.co.ke/kani36@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+254796911236" },
                  { icon: MapPin, label: "Location", value: "Eldoret,Kenya" },
                  { icon: Clock, label: "Response time", value: "Within 24 hours" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <item.icon size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-foreground text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp}>
                <a
                  href="https://wa.me/254796911236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={20} /> Chat with us on WhatsApp
                </a>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <p className="text-muted-foreground text-sm">
                  Looking for answers? Check our{" "}
                  <Link to="/how-it-works#faq" className="text-primary hover:underline">FAQ</Link>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
