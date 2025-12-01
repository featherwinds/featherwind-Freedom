import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, LogOut, Plus } from "lucide-react";
import { Session } from "@supabase/supabase-js";
import ArticleForm from "@/components/admin/ArticleForm";
import ArticleList from "@/components/admin/ArticleList";

const AdminDashboard = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check authentication and admin status
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        checkAdminStatus(session.user.id);
      } else {
        navigate("/admin/auth");
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        checkAdminStatus(session.user.id);
      } else {
        navigate("/admin/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminStatus = async (userId: string) => {
    const { data, error } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .eq("role", "admin")
      .maybeSingle();

    if (error) {
      console.error("Error checking admin status:", error);
      setIsAdmin(false);
      return;
    }

    setIsAdmin(!!data);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/auth");
  };

  const handleArticleSaved = () => {
    setShowForm(false);
    setEditingArticle(null);
    toast({
      title: "Success",
      description: "Article saved successfully",
    });
  };

  const handleEdit = (article: any) => {
    setEditingArticle(article);
    setShowForm(true);
  };

  if (isAdmin === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isAdmin === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="text-center space-y-4">
          <h1 className="font-warrior text-3xl text-foreground">Access Denied</h1>
          <p className="text-muted-foreground">You don't have admin permissions.</p>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              to="/journal" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Featherwind Journal
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <h1 className="font-warrior text-2xl text-foreground">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{session?.user?.email}</span>
            <Button onClick={handleSignOut} variant="ghost" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {!showForm ? (
          <>
            <div className="flex items-center justify-between">
              <h2 className="font-warrior text-xl text-foreground">Articles</h2>
              <Button onClick={() => setShowForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                New Article
              </Button>
            </div>
            <ArticleList onEdit={handleEdit} />
          </>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-warrior text-xl text-foreground">
                {editingArticle ? "Edit Article" : "New Article"}
              </h2>
              <Button
                onClick={() => {
                  setShowForm(false);
                  setEditingArticle(null);
                }}
                variant="ghost"
              >
                Cancel
              </Button>
            </div>
            <ArticleForm
              article={editingArticle}
              onSaved={handleArticleSaved}
              onCancel={() => {
                setShowForm(false);
                setEditingArticle(null);
              }}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
