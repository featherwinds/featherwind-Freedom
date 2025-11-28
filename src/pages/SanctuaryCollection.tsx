import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Flower2, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import sanctuaryImage from "@/assets/sanctuary-collection.jpg";

const SanctuaryCollection = () => {
  const products = [
    {
      name: "Rose Quartz Heart Pendant",
      description: "Unconditional love and emotional healing. Opens the heart chakra for deep compassion and self-love.",
      price: "$72",
      crystals: "Rose Quartz • Rhodonite",
      icon: Heart,
    },
    {
      name: "Amethyst Serenity Bracelet",
      description: "Peace and spiritual protection. Calms the mind and creates sacred space for inner healing.",
      price: "$78",
      crystals: "Amethyst • Lepidolite",
      icon: Flower2,
    },
    {
      name: "Sacred Sanctuary Kit",
      description: "Complete emotional healing system. Includes crystals, palo santo, and heart-centered meditation guide.",
      price: "$136",
      crystals: "Rose Quartz • Amethyst • Moonstone",
      icon: Sparkles,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sanctuaryImage})` }}
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

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-healing/10 border border-healing/30 backdrop-blur-sm">
              <Heart className="w-4 h-4 text-healing" />
              <span className="text-sm font-body font-medium text-healing">Rose Quartz • Amethyst</span>
            </div>
            
            <h1 className="font-warrior text-5xl md:text-7xl font-black tracking-tight">
              <span className="text-gradient-cosmic glow-primary">THE SANCTUARY</span>
              <br />
              <span className="text-foreground">COLLECTION</span>
            </h1>

            <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Peace & emotional healing for your sacred inner space.
              <br />
              <span className="text-healing font-semibold">Built for restoration. Engineered for compassion.</span>
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
              SANCTUARY TOOLS
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Each piece blessed with loving intention and infused with healing frequencies for your heart.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card 
                  key={index}
                  className="group overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-healing/50 hover:border-healing transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-full bg-healing/10 border border-healing/30">
                        <IconComponent className="w-6 h-6 text-healing" />
                      </div>
                      <span className="font-warrior text-2xl font-bold text-healing">{product.price}</span>
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
                      className="w-full font-warrior bg-healing hover:bg-healing/90 text-white transition-all duration-300 shadow-warrior"
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
          <div className="mt-20 text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-healing/5 to-background border border-healing/20">
            <h3 className="font-warrior text-3xl md:text-4xl font-black text-foreground">
              READY TO HEAL YOUR HEART?
            </h3>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Every sanctuary tool is infused with loving energy and ready to support your emotional healing journey. 
              Create your sacred space of peace and restoration.
            </p>
            <Button 
              size="lg"
              className="font-warrior text-base px-10 py-6 bg-healing hover:bg-healing/90 text-white transition-all duration-300 shadow-warrior hover:shadow-healing/50"
              asChild
            >
              <a href="https://www.etsy.com/shop/FeatherwindSpirit?ref=dashboard-header" target="_blank" rel="noopener noreferrer">
                Shop Sanctuary Collection
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SanctuaryCollection;
