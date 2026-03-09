import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

const businessTypes = ["Spa", "Clinic", "Restaurant", "School", "Real Estate", "Boutique", "Gym", "Hotel", "Other"];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", type: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => { document.title = "Contact — Kipmay AI"; }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.business.trim()) errs.business = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.phone.trim()) errs.phone = "Required";
    if (!form.type) errs.type = "Required";
    if (!form.message.trim()) errs.message = "Required";
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

  const field = (id: string, label: string, el: React.ReactNode) => (
    <div>
      <Label htmlFor={id} className="text-xs text-muted-foreground">{label}</Label>
      <div className="mt-1">{el}</div>
      {errors[id] && <p className="text-destructive text-xs mt-0.5">{errors[id]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen pt-14 lg:pt-20">
      <section className="py-8 pb-12 lg:py-14 lg:pb-16">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Page header */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-7 lg:mb-10">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-1.5">
              <span className="h-px w-6 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Get in touch</motion.h1>
            <motion.p variants={fadeInUp} className="text-xs text-muted-foreground mt-0.5">We respond within 24 hours. No commitment required.</motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 max-w-5xl">

            {/* ── Form ── */}
            <motion.form
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              onSubmit={handleSubmit}
              className="lg:col-span-3 space-y-3 lg:space-y-4"
            >
              {/* Row 1: name + business */}
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-3">
                {field("name", "Full name",
                  <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="John Doe" className="h-8 lg:h-9 text-sm" />
                )}
                {field("business", "Business name",
                  <Input id="business" value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="Your Business" className="h-8 lg:h-9 text-sm" />
                )}
              </motion.div>

              {/* Row 2: email + phone */}
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-3">
                {field("email", "Email",
                  <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className="h-8 lg:h-9 text-sm" />
                )}
                {field("phone", "Phone",
                  <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+254 700 000 000" className="h-8 lg:h-9 text-sm" />
                )}
              </motion.div>

              {/* Row 3: type + message side by side on sm+ */}
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-3 items-start">
                {field("type", "Business type",
                  <Select value={form.type} onValueChange={(v) => update("type", v)}>
                    <SelectTrigger className="h-8 lg:h-9 text-sm"><SelectValue placeholder="Select industry" /></SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((t) => <SelectItem key={t} value={t.toLowerCase()} className="text-sm">{t}</SelectItem>)}
                    </SelectContent>
                  </Select>
                )}
                {field("message", "Message",
                  <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your needs" rows={3} className="text-sm resize-none lg:rows-4" />
                )}
              </motion.div>

              {/* Submit */}
              <motion.div variants={fadeInUp}>
                <Button type="submit" size="sm" className="w-full gradient-primary text-primary-foreground font-semibold hover:opacity-90">
                  Send Message <ArrowUpRight size={14} className="ml-1" />
                </Button>
              </motion.div>
            </motion.form>

            {/* ── Side info ── */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="lg:col-span-2 space-y-3 lg:space-y-4"
            >
              {/* Contact details */}
              <motion.div variants={fadeInUp} className="glass-card p-4 lg:p-6 space-y-3 lg:space-y-4">
                {[
                  { icon: Mail,  label: "Email",         value: "helpdesk@kipmay.co.ke" },
                  { icon: Phone, label: "Phone",         value: "+254 796 911 236" },
                  { icon: MapPin,label: "Location",      value: "Eldoret, Kenya" },
                  { icon: Clock, label: "Response time", value: "Within 24 hours" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon size={13} className="text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-muted-foreground text-xs uppercase tracking-wider leading-none mb-0.5">{item.label}</p>
                      <p className="text-foreground text-xs font-medium truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* WhatsApp */}
              <motion.div variants={fadeInUp}>
                <a
                  href="https://wa.me/254796911236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 lg:py-2.5 rounded-lg gradient-primary text-primary-foreground text-xs lg:text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={14} /> Chat on WhatsApp
                </a>
              </motion.div>

              {/* FAQ */}
              <motion.div variants={fadeInUp}>
                <p className="text-muted-foreground text-xs">
                  Have questions?{" "}
                  <Link to="/how-it-works#faq" className="text-primary hover:underline">See our FAQ</Link>
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