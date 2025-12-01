import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, Loader2 } from "lucide-react";

const categoryColors: Record<string, string> = {
  warrior: "secondary",
  amazon: "accent",
  sanctuary: "power",
  energy: "primary",
};

const categoryLabels: Record<string, string> = {
  warrior: "WARRIOR DISCIPLINE",
  amazon: "INNER AMAZON INSIGHTS",
  sanctuary: "SANCTUARY PRACTICES",
  energy: "PURE ENERGY INTEL",
};

const JournalArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchArticle(slug);
    }
  }, [slug]);

  const fetchArticle = async (articleSlug: string) => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", articleSlug)
      .eq("published", true)
      .maybeSingle();

    if (!error && data) {
      setArticle({
        title: data.title,
        category: categoryLabels[data.category] || data.category.toUpperCase(),
        categoryColor: categoryColors[data.category] || "primary",
        date: new Date(data.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        readTime: data.read_time,
        heroImage: data.image_url || "/placeholder.svg",
        content: data.content,
      });
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-warrior text-4xl text-foreground mb-4">Article Not Found</h1>
          <Link to="/journal">
            <Button variant="outline">Back to Journal</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${article.heroImage})`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 -mt-32 relative z-10 max-w-4xl">
        {/* Back Button */}
        <Link to="/journal">
          <Button 
            variant="ghost" 
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Journal
          </Button>
        </Link>

        {/* Article Header */}
        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12 space-y-6 shadow-warrior mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span 
              className="font-warrior tracking-wider"
              style={{ color: `hsl(var(--${article.categoryColor}))` }}
            >
              {article.category}
            </span>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="font-body">{article.date}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="font-body">{article.readTime} min read</span>
            </div>
          </div>
          
          <h1 className="font-warrior text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {article.title}
          </h1>
        </div>

        {/* Article Body */}
        <div 
          className="prose prose-invert prose-lg max-w-none mb-16"
          style={{
            color: "hsl(var(--muted-foreground))",
          }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Author Bio */}
        <div className="bg-card/50 border border-border/50 rounded-lg p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div 
              className="w-24 h-24 rounded-full bg-muted flex-shrink-0"
              style={{
                backgroundImage: "url(/placeholder.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="space-y-3">
              <h3 className="font-warrior text-xl text-foreground">James Bunker</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Disabled veteran of the 82nd Airborne and founder of Featherwind Freedom. 
                Sharing the tools and tactics used to navigate the journey from battleground to sanctuary. 
                A daily work in progress.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Custom Prose Styles */}
      <style>{`
        .prose h2 {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.875rem;
          font-weight: 700;
          color: hsl(var(--foreground));
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
        }
        
        .prose h3 {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        
        .prose p {
          font-family: 'Inter', sans-serif;
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: hsl(var(--muted-foreground));
        }
        
        .prose ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        
        .prose li {
          font-family: 'Inter', sans-serif;
          margin-bottom: 0.5rem;
          color: hsl(var(--muted-foreground));
        }
        
        .prose strong {
          color: hsl(var(--foreground));
          font-weight: 600;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default JournalArticle;
