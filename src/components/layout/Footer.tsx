import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
              KipmayAI
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Transform your customer support with intelligent WhatsApp bots.
            </p>
            <p className="text-muted-foreground text-sm">Made in Kenya 🇰🇪</p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/how-it-works" className="text-muted-foreground text-sm hover:text-primary transition-colors">How it Works</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground text-sm hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/use-cases" className="text-muted-foreground text-sm hover:text-primary transition-colors">Use Cases</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/how-it-works#faq" className="text-muted-foreground text-sm hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-muted-foreground text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground text-sm hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/data-deletion" className="text-muted-foreground text-sm hover:text-primary transition-colors">Data Deletion</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} KipmayAI. All rights reserved.</p>
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;