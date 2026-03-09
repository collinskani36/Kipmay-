import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Message {
  text: string;
  isAI: boolean;
  delay: number;
}

const messages: Message[] = [
  { text: "Hi, what services do you offer?", isAI: false, delay: 0 },
  { text: "Hello! Welcome 👋 We offer a wide range of services including massage therapy, facials, manicures, pedicures, and more!", isAI: true, delay: 1500 },
  { text: "What are your prices?", isAI: false, delay: 3500 },
  { text: "Our pricing starts from KES 2,000 for basic services. I can send you our full price list! Would you also like to book an appointment?", isAI: true, delay: 5000 },
];

const WhatsAppMockup = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (visibleMessages >= messages.length) return;

    const nextMessage = messages[visibleMessages];
    if (nextMessage.isAI) {
      const typingTimer = setTimeout(() => setShowTyping(true), nextMessage.delay - 1000);
      const messageTimer = setTimeout(() => {
        setShowTyping(false);
        setVisibleMessages((v) => v + 1);
      }, nextMessage.delay);
      return () => {
        clearTimeout(typingTimer);
        clearTimeout(messageTimer);
      };
    } else {
      const timer = setTimeout(() => setVisibleMessages((v) => v + 1), nextMessage.delay);
      return () => clearTimeout(timer);
    }
  }, [visibleMessages]);

  return (
    <div className="relative">
      <div className="absolute -inset-10 gradient-glow opacity-60 blur-3xl" />
      <div className="relative w-[300px] sm:w-[340px] mx-auto">
        <div className="bg-[hsl(0_0%_8%)] rounded-[2.5rem] p-3 border border-border shadow-2xl">
          {/* Status bar */}
          <div className="bg-[hsl(145_65%_25%)] rounded-t-[2rem] px-5 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[hsl(0_0%_100%/0.2)] flex items-center justify-center text-foreground text-xs font-bold">AI</div>
            <div>
              <p className="text-foreground text-sm font-semibold">Chatiffy AI</p>
              <p className="text-[hsl(0_0%_100%/0.7)] text-xs">Online</p>
            </div>
          </div>

          {/* Chat area */}
          <div className="bg-[hsl(0_0%_6%)] min-h-[320px] p-4 space-y-3">
            {messages.slice(0, visibleMessages).map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.isAI ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                    msg.isAI
                      ? "bg-[hsl(145_65%_25%)] text-foreground rounded-tl-sm"
                      : "bg-card text-foreground rounded-tr-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}

            {showTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-[hsl(145_65%_25%)] px-4 py-2 rounded-xl rounded-tl-sm flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </motion.div>
            )}
          </div>

          {/* Input bar */}
          <div className="bg-[hsl(0_0%_8%)] rounded-b-[2rem] px-4 py-3 flex items-center gap-2">
            <div className="flex-1 bg-card rounded-full px-4 py-2 text-muted-foreground text-xs">Type a message...</div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppMockup;
