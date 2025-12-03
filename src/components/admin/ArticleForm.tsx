import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { z } from "zod";

const articleSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200, "Title must be less than 200 characters"),
  category: z.enum(["warrior", "amazon", "sanctuary", "energy"], { required_error: "Category is required" }),
  excerpt: z.string().trim().min(1, "Excerpt is required").max(500, "Excerpt must be less than 500 characters"),
  content: z.string().trim().min(1, "Content is required").max(50000, "Content must be less than 50000 characters"),
  readTime: z.coerce.number().int().min(1, "Read time must be at least 1 minute").max(120, "Read time must be less than 120 minutes"),
  imageUrl: z.string().url("Invalid URL format").max(500, "URL too long").optional().or(z.literal("")),
});

const categories = [
  { value: "warrior", label: "WARRIOR DISCIPLINE" },
  { value: "amazon", label: "INNER AMAZON INSIGHTS" },
  { value: "sanctuary", label: "SANCTUARY PRACTICES" },
  { value: "energy", label: "PURE ENERGY INTEL" },
];

interface ArticleFormProps {
  article?: any;
  onSaved: () => void;
  onCancel: () => void;
}

type FieldErrors = {
  title?: string;
  category?: string;
  excerpt?: string;
  content?: string;
  readTime?: string;
  imageUrl?: string;
};

const ArticleForm = ({ article, onSaved, onCancel }: ArticleFormProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [readTime, setReadTime] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [published, setPublished] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const { toast } = useToast();

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setCategory(article.category);
      setExcerpt(article.excerpt);
      setContent(article.content);
      setReadTime(article.read_time.toString());
      setImageUrl(article.image_url || "");
      setPublished(article.published);
    }
  }, [article]);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate with zod
    const result = articleSchema.safeParse({
      title,
      category,
      excerpt,
      content,
      readTime,
      imageUrl: imageUrl || undefined,
    });

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FieldErrors;
        if (field) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    try {
      const slug = article?.slug || generateSlug(title);
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) throw new Error("Not authenticated");

      const articleData = {
        title,
        slug,
        category,
        excerpt,
        content,
        read_time: parseInt(readTime),
        image_url: imageUrl || null,
        author_id: user.id,
        published,
      };

      if (article) {
        const { error } = await supabase
          .from("articles")
          .update(articleData)
          .eq("id", article.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("articles")
          .insert([articleData]);

        if (error) throw error;
      }

      onSaved();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title) setErrors((prev) => ({ ...prev, title: undefined }));
              }}
              disabled={isLoading}
              className={errors.title ? "border-destructive" : ""}
            />
            {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select 
              value={category} 
              onValueChange={(val) => {
                setCategory(val);
                if (errors.category) setErrors((prev) => ({ ...prev, category: undefined }));
              }} 
              disabled={isLoading}
            >
              <SelectTrigger className={errors.category ? "border-destructive" : ""}>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && <p className="text-sm text-destructive">{errors.category}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => {
                setExcerpt(e.target.value);
                if (errors.excerpt) setErrors((prev) => ({ ...prev, excerpt: undefined }));
              }}
              disabled={isLoading}
              rows={3}
              className={errors.excerpt ? "border-destructive" : ""}
            />
            {errors.excerpt && <p className="text-sm text-destructive">{errors.excerpt}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="readTime">Read Time (minutes)</Label>
            <Input
              id="readTime"
              type="number"
              value={readTime}
              onChange={(e) => {
                setReadTime(e.target.value);
                if (errors.readTime) setErrors((prev) => ({ ...prev, readTime: undefined }));
              }}
              min="1"
              disabled={isLoading}
              className={errors.readTime ? "border-destructive" : ""}
            />
            {errors.readTime && <p className="text-sm text-destructive">{errors.readTime}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageUrl">Image URL (optional)</Label>
            <Input
              id="imageUrl"
              type="url"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
                if (errors.imageUrl) setErrors((prev) => ({ ...prev, imageUrl: undefined }));
              }}
              disabled={isLoading}
              placeholder="/placeholder.svg"
              className={errors.imageUrl ? "border-destructive" : ""}
            />
            {errors.imageUrl && <p className="text-sm text-destructive">{errors.imageUrl}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Full Content (HTML supported)</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                if (errors.content) setErrors((prev) => ({ ...prev, content: undefined }));
              }}
              disabled={isLoading}
              rows={15}
              className={`font-mono text-sm ${errors.content ? "border-destructive" : ""}`}
            />
            {errors.content && <p className="text-sm text-destructive">{errors.content}</p>}
          </div>

          <div className="flex items-center gap-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {article ? "Update Article" : "Create Article"}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel} disabled={isLoading}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ArticleForm;
