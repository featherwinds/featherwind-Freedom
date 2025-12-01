import { Sparkles } from "lucide-react";
const Footer = () => {
  const links = {
    shop: ["Store"],
    about: ["Journal"],
    support: ["FAQ", "Shipping", "Returns", "Care Guide"]
  };
  return <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
              <span className="font-warrior text-xl font-bold text-gradient-cosmic">
                FEATHERWIND
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Reclaim Your Power.
              <br />
              Reclaim Your Peace.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-warrior text-sm font-bold text-foreground mb-4 tracking-wider">
              SHOP
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#collections" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  Store
                </a>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-warrior text-sm font-bold text-foreground mb-4 tracking-wider">
              ABOUT
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/journal" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-warrior text-sm font-bold text-foreground mb-4 tracking-wider">
              SUPPORT
            </h4>
            <ul className="space-y-2">
              {links.support.map((link, index) => <li key={index}>
                  <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © 2026 Featherwind Freedom Federation Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;