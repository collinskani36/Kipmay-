import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  useEffect(() => { document.title = "404 — BotServe"; }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <h1 className="text-8xl font-black text-primary/20 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">Page not found</h2>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="gradient-primary text-primary-foreground font-semibold hover:opacity-90">
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
