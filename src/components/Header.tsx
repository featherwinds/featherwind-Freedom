import { Button } from "@/components/ui/button";
import { Sparkles, ShoppingBag, BookOpen, Camera } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
            <span className="font-warrior text-xl font-bold text-gradient-cosmic group-hover:scale-105 transition-transform">
              FEATHERWIND
            </span>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="font-body font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all"
              asChild
            >
              <a href="https://your-store-link.com" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Store</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="font-body font-medium text-foreground/90 hover:text-accent hover:bg-accent/10 transition-all"
              asChild
            >
              <a href="https://your-blog-link.com" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Blog</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="font-body font-medium text-foreground/90 hover:text-healing hover:bg-healing/10 transition-all"
              asChild
            >
              <a href="https://your-photography-link.com" target="_blank" rel="noopener noreferrer">
                <Camera className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Gallery</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
