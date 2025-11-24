import { Card } from "@/components/ui/card";
import { Moon, Music, Zap, Shield } from "lucide-react";

const EnergyProcess = () => {
  const steps = [
    {
      icon: Moon,
      title: "Lunar Cycle Charging",
      description: "Full to New Moon purging cycles for maximum energetic cleansing and reset.",
      phase: "Phase 01",
    },
    {
      icon: Music,
      title: "Solfeggio Frequencies",
      description: "528Hz (transformation) and 396Hz (liberation) sound frequency infusion.",
      phase: "Phase 02",
    },
    {
      icon: Zap,
      title: "Crystal Amplification",
      description: "High-vibration crystals like Moldavite to accelerate energetic shifts.",
      phase: "Phase 03",
    },
    {
      icon: Shield,
      title: "Intention Sealing",
      description: "Sacred ritual to lock in protective and healing energies permanently.",
      phase: "Phase 04",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-primary animate-glow-pulse" />
            <span className="text-sm font-body font-medium text-primary">Our Unique Protocol</span>
          </div>
          
          <h2 className="font-warrior text-4xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="text-foreground">PURE ENERGY</span>
            <br />
            <span className="text-gradient-cosmic glow-primary">HEALING PROCESS</span>
          </h2>
          
          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every product undergoes our proprietary four-phase energetic engineering protocol. 
            This isn't random—it's precision metaphysics.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group p-8 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-colors">
                    <step.icon className="w-8 h-8 text-primary animate-glow-pulse" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-warrior font-bold text-primary/70 tracking-wider">
                      {step.phase}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                  </div>
                  
                  <h3 className="font-warrior text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border border-primary/30 backdrop-blur-sm">
            <p className="font-body text-lg text-foreground/90 max-w-2xl">
              <span className="font-bold text-primary">Not mass-produced.</span> Each tool carries 
              specific frequencies and intentions designed for protection, transformation, and healing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyProcess;
