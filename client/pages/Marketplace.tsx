import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Cpu, Zap, Brain, Database, Shield, Activity, Share2, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const allProducts = [
  { id: "cpu-1", name: "AI Core CPU v9", category: "Processor", price: "0.045 ETH", icon: <Cpu />, description: "Neural processing unit.", stats: { speed: "12.4 THz", efficiency: "99.9%" } },
  { id: "gpu-1", name: "Neural GPU Cluster", category: "Graphics", price: "0.12 ETH", icon: <Activity />, description: "Distributed GPU network.", stats: { cores: "1.2M", memory: "48TB" } },
  { id: "qpu-1", name: "Quantum QPU-7", category: "Quantum", price: "2.5 ETH", icon: <Zap />, description: "Quantum Processing Unit.", stats: { qubits: "512", coherence: "98ms" } },
  { id: "ram-1", name: "LQD Neural RAM", category: "Memory", price: "0.015 ETH", icon: <Database />, description: "Liquid-state memory.", stats: { latency: "0ns", capacity: "1PB" } },
  { id: "chips-1", name: "AI Neural Chips", category: "Chips", price: "0.08 ETH", icon: <Shield />, description: "Biomimetic neural chips.", stats: { synapses: "100B", bio: "94%" } },
  { id: "brains-1", name: "Multi-Brain Node", category: "Intelligence", price: "5.0 ETH", icon: <Brain />, description: "Collective intelligence node.", stats: { nodes: "128", iq: "12000" } },
  { id: "cpu-2", name: "AI Core CPU v10", category: "Processor", price: "0.055 ETH", icon: <Cpu />, description: "Next-gen neural CPU.", stats: { speed: "15.8 THz", efficiency: "99.9%" } },
  { id: "gpu-2", name: "Neural GPU v2", category: "Graphics", price: "0.15 ETH", icon: <Activity />, description: "Optimized GPU cluster.", stats: { cores: "2.4M", memory: "96TB" } },
  { id: "qpu-2", name: "Quantum QPU-8", category: "Quantum", price: "3.2 ETH", icon: <Zap />, description: "High-coherence QPU.", stats: { qubits: "1024", coherence: "120ms" } },
];

const STRIPE_LINK = "https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00";

export default function Marketplace() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(allProducts);

  const categories = ["All", "Processor", "Graphics", "Quantum", "Memory", "Chips", "Intelligence"];

  const filteredProducts = visibleProducts.filter(p => 
    (filter === "All" || p.category === filter) &&
    (p.name.toLowerCase().includes(search.toLowerCase()))
  );

  const handleSync = () => {
    setIsSyncing(true);
    toast.info("Fetching new AI generated assets...");
    setTimeout(() => {
      // Shuffle and "generate" new IDs to simulate fresh content
      const synced = [...allProducts].sort(() => Math.random() - 0.5).map(p => ({
        ...p,
        id: Math.random().toString(36).substring(7)
      }));
      setVisibleProducts(synced);
      setIsSyncing(false);
      toast.success("Marketplace synchronized with Neural Network.");
    }, 1200);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">Marketplace</h1>
          <p className="text-ash-400 uppercase text-[10px] tracking-[0.4em] font-bold">Autonomous AI Asset Exchange</p>
        </div>
        <Button onClick={handleSync} disabled={isSyncing} className="bg-white text-black hover:bg-ash-200 rounded-none h-14 px-8 font-bold tracking-widest">
          {isSyncing ? "SYNCING..." : "SYNC NETWORK"}
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-12">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-ash-500 mb-6">Search</h3>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ash-500" />
              <Input 
                placeholder="Search assets..." 
                className="bg-white/[0.02] border-white/10 rounded-none pl-12 h-12 focus:border-white transition-colors"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-ash-500 mb-6 flex items-center gap-2">
              <Filter size={14} /> Categories
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-left px-4 py-3 text-sm font-medium transition-colors border-l-2 ${filter === cat ? "border-white bg-white/5 text-white" : "border-transparent text-ash-500 hover:text-white hover:bg-white/[0.02]"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 border border-white/5 bg-white/[0.01]">
            <h4 className="text-sm font-bold uppercase mb-4">Network Status</h4>
            <div className="flex items-center gap-2 text-[10px] text-green-500 uppercase font-mono mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Fully Operational
            </div>
            <p className="text-xs text-ash-500 leading-relaxed">
              AI Agents are currently generating 4,281 new assets per hour.
            </p>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 border border-white/10 bg-black group-hover:border-white transition-colors">
                      {product.icon}
                    </div>
                    <Badge variant="secondary" className="rounded-none bg-white/5 text-ash-400 border-none uppercase text-[9px] tracking-widest">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{product.name}</h3>
                  <p className="text-ash-400 text-xs mb-6 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <span className="text-lg font-black font-mono">{product.price}</span>
                    <Button onClick={() => window.open(STRIPE_LINK, '_blank')} size="sm" className="bg-white text-black hover:bg-ash-200 rounded-none px-6 font-bold uppercase tracking-widest text-[10px] h-10">
                      Deploy
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center border border-dashed border-white/10">
              <p className="text-ash-500 uppercase tracking-widest text-sm">No assets found in current neural segment</p>
              <Button onClick={() => {setSearch(""); setFilter("All")}} variant="link" className="text-white mt-4 uppercase text-xs font-bold tracking-widest">Clear Filters</Button>
            </div>
          )}

          <div className="mt-20 border-t border-white/10 pt-12 flex justify-center">
             <Button 
                onClick={handleSync} 
                variant="outline" 
                className="rounded-none border-white/20 h-14 px-12 uppercase font-bold tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-all"
              >
                Load Next Neural Segment
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
