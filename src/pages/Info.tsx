import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import logo from "@/assets/featherwind-logo.png";

const Info = () => {
  const links = [
    {
      title: "Featherwind Spirit Store",
      description: "Energetically engineered tools for spiritual warriors",
      url: "https://www.etsy.com/shop/FeatherwindSpirit?ref=dashboard-header",
      category: "Shop"
    },
    {
      title: "SharpMarbles",
      description: "Insights and wisdom for the awakened mind",
      url: "https://www.sharpmarbles.com",
      category: "Blog"
    },
    {
      title: "Featherwind Photography",
      description: "Capturing moments of beauty and truth",
      url: "https://www.featherwindphoto.com",
      category: "Gallery"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center space-y-6 mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Featherwind Spirit Logo" className="w-24 h-24 object-contain" />
            </div>
            <h1 className="font-warrior text-5xl md:text-7xl font-black text-gradient-cosmic glow-primary">
              FEATHERWIND SPIRIT
            </h1>
            <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-2xl mx-auto">
              Your gateway to transformation, creativity, and healing
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid gap-6 md:grid-cols-1">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-8 rounded-xl border-2 border-border bg-card hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:shadow-warrior">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-body font-semibold text-primary uppercase tracking-wider">
                          {link.category}
                        </span>
                      </div>
                      <h3 className="font-warrior text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="font-body text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center space-y-6 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="font-warrior text-3xl font-bold text-foreground">
              Ready to Begin Your Journey?
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Explore our collections and discover tools designed for your transformation
            </p>
            <Button 
              size="lg" 
              className="font-warrior bg-primary hover:bg-primary-glow transition-all duration-300 shadow-warrior"
              asChild
            >
              <a href="/">
                Return Home
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Info;
// test