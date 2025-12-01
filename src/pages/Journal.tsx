import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

type Category = "all" | "warrior" | "amazon" | "sanctuary" | "energy";

const categories = [
  { id: "warrior" as Category, label: "WARRIOR DISCIPLINE", color: "secondary" },
  { id: "amazon" as Category, label: "INNER AMAZON INSIGHTS", color: "accent" },
  { id: "sanctuary" as Category, label: "SANCTUARY PRACTICES", color: "power" },
  { id: "energy" as Category, label: "PURE ENERGY INTEL", color: "primary" },
];

const articles = [
  {
    id: 1,
    title: "The Daily Stand: Why Warriors Need Morning Rituals",
    category: "warrior",
    excerpt: "Discipline isn't about restriction—it's about creating the container for your power to thrive. Learn the morning protocols that transform chaos into clarity.",
    readTime: 8,
    image: "/placeholder.svg",
    slug: "daily-stand-morning-rituals",
  },
  {
    id: 2,
    title: "Trusting Your Gut When Logic Fails",
    category: "amazon",
    excerpt: "Your intuition isn't mystical—it's intelligence operating faster than conscious thought. Here's how to recognize and act on it.",
    readTime: 6,
    image: "/placeholder.svg",
    slug: "trusting-gut-intuition",
  },
  {
    id: 3,
    title: "Creating Sacred Space in a Chaotic World",
    category: "sanctuary",
    excerpt: "Your sanctuary isn't a place you visit—it's a boundary you maintain. Practical strategies for protecting your peace.",
    readTime: 10,
    image: "/placeholder.svg",
    slug: "sacred-space-chaos",
  },
  {
    id: 4,
    title: "Moon Phases and Human Energy Cycles",
    category: "energy",
    excerpt: "Ancient wisdom meets modern practice: aligning your work, rest, and ritual with lunar rhythms.",
    readTime: 7,
    image: "/placeholder.svg",
    slug: "moon-phases-energy",
  },
  {
    id: 5,
    title: "The Warrior's Rest: Why Recovery Isn't Weakness",
    category: "warrior",
    excerpt: "Rest is not the opposite of discipline—it's the foundation of sustainable strength.",
    readTime: 5,
    image: "/placeholder.svg",
    slug: "warriors-rest-recovery",
  },
  {
    id: 6,
    title: "528 Hz: The Frequency of Transformation",
    category: "energy",
    excerpt: "How Solfeggio frequencies influence cellular healing and emotional release. The science behind the sound.",
    readTime: 9,
    image: "/placeholder.svg",
    slug: "528hz-transformation-frequency",
  },
];

const Journal = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredArticles = activeCategory === "all" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/placeholder.svg)`,
            filter: "brightness(0.3)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        
        <div className="relative z-10 container mx-auto px-4 text-center space-y-6 py-20">
          <h1 className="font-warrior text-5xl md:text-7xl font-bold text-foreground tracking-tight animate-fade-in-up">
            FIELD NOTES FOR THE SPIRITUAL WARRIOR
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Tactics for grounding, insights for intuition, and wisdom for finding peace in the chaos.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-y border-border bg-card/30 backdrop-blur-sm sticky top-[73px] z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={activeCategory === "all" ? "default" : "ghost"}
              onClick={() => setActiveCategory("all")}
              className="font-warrior tracking-wider"
            >
              ALL
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "ghost"}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-warrior tracking-wider transition-all ${
                  activeCategory === cat.id 
                    ? "" 
                    : `hover:text-${cat.color} hover:bg-${cat.color}/10`
                }`}
                style={
                  activeCategory !== cat.id && activeCategory !== "all"
                    ? {
                        color: `hsl(var(--${cat.color}))`,
                      }
                    : undefined
                }
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 space-y-16">
        {/* Featured Article */}
        {activeCategory === "all" && (
          <div className="animate-fade-in">
            <h2 className="font-warrior text-sm tracking-widest text-primary mb-6">FEATURED</h2>
            <Link to={`/journal/${featuredArticle.slug}`}>
              <Card className="group overflow-hidden bg-card hover:shadow-warrior transition-all duration-300 border-border/50">
                <div className="grid md:grid-cols-2 gap-0">
                  <div 
                    className="h-[300px] md:h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${featuredArticle.image})` }}
                  />
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-warrior text-secondary tracking-wider">
                        {categories.find(c => c.id === featuredArticle.category)?.label}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="font-body">{featuredArticle.readTime} min</span>
                      </div>
                    </div>
                    <h3 className="font-warrior text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {featuredArticle.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        )}

        {/* Article Grid */}
        <div>
          <h2 className="font-warrior text-sm tracking-widest text-primary mb-6">
            {activeCategory === "all" ? "ALL ARTICLES" : categories.find(c => c.id === activeCategory)?.label}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Link 
                key={article.id} 
                to={`/journal/${article.slug}`}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="group h-full overflow-hidden bg-card hover:shadow-warrior transition-all duration-300 border-border/50">
                  <div 
                    className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs">
                      <span className="font-warrior text-accent tracking-wider">
                        {categories.find(c => c.id === article.category)?.label}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span className="font-body">{article.readTime} min</span>
                      </div>
                    </div>
                    <h3 className="font-warrior text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Journal;
