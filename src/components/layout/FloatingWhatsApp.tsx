import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/254796911236"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-lg shadow-primary/25 hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="text-primary-foreground" />
  </a>
);

export default FloatingWhatsApp;
