import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Loader2 } from "lucide-react";

type Category = "all" | "warrior" | "amazon" | "sanctuary" | "energy";

const categories = [
  { id: "warrior" as Category, label: "WARRIOR DISCIPLINE", color: "secondary" },
  { id: "amazon" as Category, label: "INNER AMAZON INSIGHTS", color: "accent" },
  { id: "sanctuary" as Category, label: "SANCTUARY PRACTICES", color: "power" },
  { id: "energy" as Category, label: "PURE ENERGY INTEL", color: "primary" },
];


const Journal = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setArticles(data.map(article => ({
        id: article.id,
        title: article.title,
        category: article.category,
        excerpt: article.excerpt,
        readTime: article.read_time,
        image: article.image_url || "/placeholder.svg",
        slug: article.slug,
      })));
    }
    setIsLoading(false);
  };

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
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found.</p>
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {activeCategory === "all" && featuredArticle && (
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
        </>
        )}
      </section>

      <Footer />
      
      <Link
        to="/admin/auth"
        className="fixed bottom-4 left-4 text-[10px] text-muted-foreground/20 opacity-30 pointer-events-auto z-50"
        style={{ color: 'rgba(156, 163, 175, 0.2)' }}
      >
        admin
      </Link>
    </div>
  );
};

export default Journal;
