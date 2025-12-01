import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Info from "./pages/Info";
import WarriorCollection from "./pages/WarriorCollection";
import SanctuaryCollection from "./pages/SanctuaryCollection";
import Journal from "./pages/Journal";
import JournalArticle from "./pages/JournalArticle";
import AdminAuth from "./pages/AdminAuth";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/info" element={<Info />} />
          <Route path="/warrior-collection" element={<WarriorCollection />} />
          <Route path="/sanctuary-collection" element={<SanctuaryCollection />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalArticle />} />
          <Route path="/admin/auth" element={<AdminAuth />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Link
          to="/admin/auth"
          className="fixed bottom-4 left-4 text-[10px] text-muted-foreground/20 opacity-30 pointer-events-auto z-50"
          style={{ color: 'rgba(156, 163, 175, 0.2)' }}
        >
          admin
        </Link>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
