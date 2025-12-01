import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

// Mock article data - in production, this would come from a CMS or database
const articleData = {
  "daily-stand-morning-rituals": {
    title: "The Daily Stand: Why Warriors Need Morning Rituals",
    category: "WARRIOR DISCIPLINE",
    categoryColor: "secondary",
    date: "November 28, 2024",
    readTime: 8,
    heroImage: "/placeholder.svg",
    content: `
      <p>The alarm goes off. What happens in the next sixty minutes will determine whether you own your day or your day owns you.</p>
      
      <p>This isn't about hustle culture. It's not about forcing yourself to meditate at 4 AM because some entrepreneur on social media said you should. This is about creating the container that allows your power to show up.</p>
      
      <h2>The Biology of Morning Protocol</h2>
      
      <p>Your nervous system wakes up before you do. In the first hour of consciousness, your brain is still transitioning from theta to beta waves—a liminal space where patterns get set for the entire day.</p>
      
      <p>Warriors understand this. They know that discipline isn't about restriction—it's about creating predictable structure so that everything else can flow.</p>
      
      <h2>The Three Non-Negotiables</h2>
      
      <h3>1. Ground Before Screen</h3>
      <p>Your phone can wait. The world's anxiety doesn't need to become yours in the first five minutes of consciousness. Instead:</p>
      <ul>
        <li>Feet on the floor. Three deep breaths.</li>
        <li>Water before coffee. Hydration before stimulation.</li>
        <li>Movement before stillness. Even if it's just stretching.</li>
      </ul>
      
      <h3>2. Create Before Consume</h3>
      <p>Before you let the world tell you what to think about, decide for yourself. Journal. Plan. Set intention. Even five minutes of this reclaims your sovereignty.</p>
      
      <h3>3. Connect to Something Larger</h3>
      <p>Whatever your version of prayer, meditation, or spiritual practice looks like—do it. Not because you "should," but because anchoring to something beyond ego is what separates warriors from mercenaries.</p>
      
      <h2>What About When Life Gets Messy?</h2>
      
      <p>Kids wake up sick. Emergencies happen. Life doesn't care about your perfect morning routine.</p>
      
      <p>This is where the real practice lives: not in executing the ideal ritual, but in maintaining the core structure even when conditions are far from ideal.</p>
      
      <p>Shortened version beats skipped version. Always.</p>
      
      <h2>The Energetic Truth</h2>
      
      <p>Morning rituals aren't about productivity hacks or life optimization. They're about energy sovereignty.</p>
      
      <p>Every day, you're going to face demands, distractions, other people's agendas. A morning ritual is how you remember who you are before the world tries to tell you who you should be.</p>
      
      <p>That's not privilege. That's survival.</p>
    `,
  },
  // Add more articles as needed
};

const JournalArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articleData[slug as keyof typeof articleData] : null;

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
