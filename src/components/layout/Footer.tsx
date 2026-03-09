import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 sm:px-6 py-5">

      {/* Single row: brand + links + whatsapp */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-1.5 text-sm font-bold text-foreground flex-shrink-0">
          Kipmay<span className="text-primary">AI</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        </Link>

        {/* All links inline */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <Link to="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link>
          <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link to="/use-cases" className="hover:text-primary transition-colors">Use Cases</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms</Link>
          <Link to="/data-deletion" className="hover:text-primary transition-colors">Data Deletion</Link>
        </div>

        {/* Right: WA + copyright */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <p className="text-xs text-muted-foreground/50">© {new Date().getFullYear()} · 🇰🇪</p>
          <a href="https://wa.me/254796911236" target="_blank" rel="noopener noreferrer"
            className="text-primary hover:opacity-70 transition-opacity" aria-label="WhatsApp">
            <MessageCircle size={15} />
          </a>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;