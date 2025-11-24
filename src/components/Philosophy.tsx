import { Shield, Sparkle, Sword } from "lucide-react";
import { Card } from "@/components/ui/card";

const Philosophy = () => {
  const pillars = [
    {
      icon: Sword,
      title: "The Warrior",
      description: "Resilience, courage, and protective instincts forged from Roman, Native American, and modern soldier wisdom.",
      color: "text-secondary",
      glow: "shadow-secondary/20",
    },
    {
      icon: Sparkle,
      title: "The Inner Amazon",
      description: "Deep intuition, grace, and spiritual connection channeling the divine feminine power within.",
      color: "text-healing",
      glow: "shadow-healing/20",
    },
    {
      icon: Shield,
      title: "The Sanctuary",
      description: "Sacred boundaries and unshakeable inner peace through disciplined energetic sovereignty.",
      color: "text-accent",
      glow: "shadow-accent/20",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-warrior text-4xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="text-foreground">FOR THE MODERN</span>
            <br />
            <span className="text-gradient-cosmic glow-primary">SPIRITUAL WARRIOR</span>
          </h2>
          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We reject fluffy "love and light" spirituality. This is grounded, disciplined, 
            potent energy work for those who value authenticity, strength, and direct action.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <Card 
              key={index}
              className={`p-8 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 ${pillar.glow} hover:shadow-2xl animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <pillar.icon className={`w-12 h-12 ${pillar.color} mb-6 animate-glow-pulse`} />
              <h3 className="font-warrior text-2xl font-bold mb-4 text-foreground">
                {pillar.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-background border border-primary/30 shadow-warrior backdrop-blur-sm">
            <p className="font-body text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
              "The calm eye within the storm. The sword and the feather. 
              Volcanic earth meeting cosmic starlight."
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              We provide the tools—both physical and energetic—for individuals to forge their own 
              path to sovereignty, transmute negativity, and build unshakeable inner peace through strength.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
