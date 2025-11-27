import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cosmic-warrior.jpg";
import logo from "@/assets/featherwind-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 crystal-bg">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in-up space-y-8 max-w-4xl mx-auto">
          {/* Brand Name */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-sm">
              <img src={logo} alt="Featherwind Spirit Logo" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-body font-medium text-primary-glow">Pure Energy Healing</span>
            </div>
            
            <h1 className="font-warrior text-6xl md:text-8xl font-black tracking-tight">
              <span className="text-gradient-cosmic glow-primary">
                FEATHERWIND
              </span>
              <br />
              <span className="text-foreground">FREEDOM</span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-4xl font-body font-semibold text-foreground/90">
            Reclaim Your Power.
            <br />
            <span className="text-primary glow-primary">Reclaim Your Peace.</span>
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Energetically engineered tools for the modern spiritual warrior. 
            Fusing ancient wisdom with disciplined healing for rapid transformation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="group font-warrior text-base px-8 py-6 bg-primary hover:bg-primary-glow transition-all duration-300 shadow-warrior hover:shadow-primary/50"
              asChild
            >
              <a href="https://www.etsy.com/shop/FeatherwindSpirit?ref=dashboard-header" target="_blank" rel="noopener noreferrer">
                Explore Collections
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="font-warrior text-base px-8 py-6 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a href="/info">
                Learn Our Process
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm font-body text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse"></div>
              <span>Lunar Cycle Charged</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse"></div>
              <span>528Hz Infused</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-healing animate-glow-pulse"></div>
              <span>High-Vibration Crystals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
