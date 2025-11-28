import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Sword, Mountain, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import warriorImage from "@/assets/warrior-collection.jpg";

const WarriorCollection = () => {
  const products = [
    {
      name: "Obsidian Shield Bracelet",
      description: "Protection against negative energy and psychic attacks. Grounding stone for warriors in battle.",
      price: "$68",
      crystals: "Black Obsidian • Hematite",
      icon: Shield,
    },
    {
      name: "Bloodstone Power Ring",
      description: "Courage and strength amplifier. Ancient warrior stone for facing life's battles with confidence.",
      price: "$84",
      crystals: "Bloodstone • Black Tourmaline",
      icon: Sword,
    },
    {
      name: "Grounding Ritual Kit",
      description: "Complete energetic protection system. Includes crystals, sage, and warrior meditation guide.",
      price: "$124",
      crystals: "Obsidian • Bloodstone • Smoky Quartz",
      icon: Mountain,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${warriorImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in space-y-6 max-w-4xl mx-auto">
            <Link to="/#collections">
              <Button variant="ghost" className="mb-4 font-body">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Collections
              </Button>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-body font-medium text-secondary">Bloodstone • Obsidian</span>
            </div>
            
            <h1 className="font-warrior text-5xl md:text-7xl font-black tracking-tight">
              <span className="text-gradient-cosmic glow-primary">THE WARRIOR</span>
              <br />
              <span className="text-foreground">COLLECTION</span>
            </h1>

            <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Protection & grounding tools for those who face their battles head-on.
              <br />
              <span className="text-secondary font-semibold">Built for strength. Engineered for resilience.</span>
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-warrior text-3xl md:text-5xl font-black mb-4 text-foreground">
              WARRIOR TOOLS
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Each piece charged under the lunar cycle and infused with 528Hz Solfeggio frequencies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card 
                  key={index}
                  className="group overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-secondary/50 hover:border-secondary transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-full bg-secondary/10 border border-secondary/30">
                        <IconComponent className="w-6 h-6 text-secondary" />
                      </div>
                      <span className="font-warrior text-2xl font-bold text-secondary">{product.price}</span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-warrior text-2xl font-bold text-foreground">
                        {product.name}
                      </h3>
                      
                      <div className="px-3 py-1 rounded-full bg-background/80 border border-border inline-block">
                        <span className="text-xs font-body font-medium text-muted-foreground">
                          {product.crystals}
                        </span>
                      </div>

                      <p className="font-body text-muted-foreground leading-relaxed min-h-[80px]">
                        {product.description}
                      </p>
                    </div>

                    <Button 
                      className="w-full font-warrior bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-300 shadow-warrior"
                      asChild
                    >
                      <a href="https://www.etsy.com/shop/FeatherwindSpirit?ref=dashboard-header" target="_blank" rel="noopener noreferrer">
                        View on Etsy
                      </a>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-secondary/5 to-background border border-secondary/20">
            <h3 className="font-warrior text-3xl md:text-4xl font-black text-foreground">
              READY TO CLAIM YOUR POWER?
            </h3>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Every warrior tool is energetically charged and ready to support your spiritual battle. 
              No passive healing—this is active transformation.
            </p>
            <Button 
              size="lg"
              className="font-warrior text-base px-10 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-300 shadow-warrior hover:shadow-secondary/50"
              asChild
            >
              <a href="https://www.etsy.com/shop/FeatherwindSpirit?ref=dashboard-header" target="_blank" rel="noopener noreferrer">
                Shop Warrior Collection
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WarriorCollection;
