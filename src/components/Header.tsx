import { Button } from "@/components/ui/button";
import { ShoppingBag, BookOpen, Camera } from "lucide-react";
import logo from "@/assets/featherwind-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Featherwind Spirit Logo" className="w-8 h-8 object-contain" />
            <span className="font-warrior text-xl font-bold text-gradient-cosmic group-hover:scale-105 transition-transform">
              Featherwind Spirit
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
              <a href="/journal">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Journal</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="font-body font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all"
              asChild
            >
              <a href="https://www.etsy.com/shop/FeatherwindSpirit?ref=dashboard-header" target="_blank" rel="noopener noreferrer">
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
              <a href="https://www.sharpmarbles.com" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">SharpMarbles</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="font-body font-medium text-foreground/90 hover:text-healing hover:bg-healing/10 transition-all"
              asChild
            >
              <a href="https://www.featherwindphoto.com" target="_blank" rel="noopener noreferrer">
                <Camera className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Photographics</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="font-body font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all"
              asChild
            >
              <a href="/info">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Information</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
