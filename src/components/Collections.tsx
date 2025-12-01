import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import warriorImage from "@/assets/warrior-collection.jpg";
import sanctuaryImage from "@/assets/sanctuary-collection.jpg";
import highVibrationImage from "@/assets/high-vibration.jpg";
const Collections = () => {
  const collections = [{
    title: "The Warrior Collection",
    description: "Protection & grounding tools infused with Bloodstone and Obsidian. For those who face their battles head-on.",
    image: warriorImage,
    color: "border-secondary/50 hover:border-secondary",
    textColor: "text-secondary",
    crystals: "Bloodstone • Obsidian"
  }, {
    title: "The Sanctuary Collection",
    description: "Peace & emotional healing with Rose Quartz and Amethyst. Create your sacred space of calm and restoration.",
    image: sanctuaryImage,
    color: "border-healing/50 hover:border-healing",
    textColor: "text-healing",
    crystals: "Rose Quartz • Amethyst"
  }, {
    title: "High-Vibration Tools",
    description: "Rapid transformation with Moldavite-infused products. For those ready to accelerate their spiritual evolution.",
    image: highVibrationImage,
    color: "border-accent/50 hover:border-accent",
    textColor: "text-accent",
    crystals: "Moldavite • Clear Quartz"
  }];
  return <section id="collections" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-warrior text-4xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="text-gradient-cosmic glow-primary">ENERGETICALLY</span>
            <br />
            <span className="text-foreground">ENGINEERED TOOLS</span>
          </h2>
          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-3xl mx-auto">
            Not just products. These are precision instruments for your spiritual transformation.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => {
          const isWarrior = index === 0;
          const isSanctuary = index === 1;
          return <Card key={index} className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-2 ${collection.color} transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in`} style={{
            animationDelay: `${index * 0.2}s`
          }}>
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img src={collection.image} alt={collection.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80"></div>
                
                {/* Crystals Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                  <span className="text-xs font-body font-medium text-muted-foreground">
                    {collection.crystals}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className={`font-warrior text-2xl font-bold ${collection.textColor}`}>
                  {collection.title}
                </h3>
                
                <p className="font-body text-muted-foreground leading-relaxed">
                  {collection.description}
                </p>

                {isWarrior ? <Button variant="ghost" className={`group/btn w-full justify-between font-body font-medium ${collection.textColor} hover:bg-primary/10`} asChild>
                    
                  </Button> : isSanctuary ? <Button variant="ghost" className={`group/btn w-full justify-between font-body font-medium ${collection.textColor} hover:bg-primary/10`} asChild>
                    
                  </Button> : <Button variant="ghost" className={`group/btn w-full justify-between font-body font-medium ${collection.textColor} hover:bg-primary/10`}>
                    Explore Collection
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>}
              </div>
            </Card>;
        })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="font-warrior text-base px-10 py-6 bg-primary hover:bg-primary-glow transition-all duration-300 shadow-warrior hover:shadow-primary/50">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>;
};
export default Collections;