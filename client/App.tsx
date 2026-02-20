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
          <Route path="/brains" element={<PlaceholderPage title="Multi Brains" />} />
          <Route path="/quantum" element={<PlaceholderPage title="Quantum Units" />} />
          <Route path="/infra" element={<PlaceholderPage title="Infrastructure" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
