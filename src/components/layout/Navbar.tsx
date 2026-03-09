import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it Works" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">

      {/* ── Desktop: floating pill navbar ── */}
      <div className="hidden md:flex justify-center pt-4 px-6 pointer-events-auto">
        <div className="flex items-center gap-1 bg-background/80 backdrop-blur-xl border border-border rounded-full px-2 py-1.5 shadow-lg">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 px-3 mr-2">
            <span className="text-sm font-bold text-foreground tracking-tight">Kipmay</span>
            <span className="text-sm font-bold text-primary">AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          </Link>

          {/* Nav tabs */}
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  active
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="pill"
                    className="absolute inset-0 rounded-full gradient-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            to="/contact"
            className="ml-2 px-4 py-1.5 rounded-full text-xs font-semibold gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* ── Mobile: top bar ── */}
      <div className="md:hidden flex items-center justify-between px-4 h-14 bg-background/90 backdrop-blur-xl border-b border-border pointer-events-auto">
        <Link to="/" className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-foreground">Kipmay</span>
          <span className="text-sm font-bold text-primary">AI</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile: dropdown ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4 pt-2 pointer-events-auto"
          >
            {/* Tab-style buttons grid */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`text-center px-2 py-2 rounded-lg text-xs font-medium transition-all duration-150 ${
                      active
                        ? "gradient-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-2 rounded-lg gradient-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;