import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Marketplace from "./pages/Marketplace";
import NeuralChips from "./pages/NeuralChips";
import MultiBrains from "./pages/MultiBrains";
import QuantumUnits from "./pages/QuantumUnits";
import Infrastructure from "./pages/Infrastructure";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LegalPage from "./pages/Legal";
import Blog from "./pages/Blog";
import Article from "./pages/Article";

const queryClient = new QueryClient();

const PlaceholderPage = ({ title }: { title: string }) => (
  <Layout>
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">{title}</h1>
      <p className="text-ash-400 max-w-md mb-8">
        This section is being synchronized with the AI Neural Network. New products are being generated and uploaded in real-time.
      </p>
      <Link to="/" className="inline-flex h-12 items-center justify-center bg-white px-8 text-sm font-bold text-black uppercase tracking-widest hover:bg-ash-200 transition-colors">
        Back to Marketplace
      </Link>
    </div>
  </Layout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/marketplace" element={<Layout><Marketplace /></Layout>} />
          <Route path="/chips" element={<NeuralChips />} />
          <Route path="/brains" element={<MultiBrains />} />
          <Route path="/quantum" element={<QuantumUnits />} />
          <Route path="/infra" element={<Infrastructure />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/refund" element={<LegalPage type="refund" />} />
          <Route path="/delivery" element={<LegalPage type="delivery" />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Article />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
