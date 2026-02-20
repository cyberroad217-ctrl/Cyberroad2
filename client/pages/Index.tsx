import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Cpu, Zap, Brain, Database, Plus, ArrowRight, Shield, Activity, Share2, Globe, Lock, Terminal, BarChart3, Radio, Layers, HardDrive, Microchip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const products = [
  {
    id: "cpu",
    name: "AI Core CPU v9",
    category: "Processor",
    price: "0.045 ETH",
    icon: <Cpu className="w-8 h-8" />,
    description: "Next-gen neural processing unit for massive parallel computations.",
    stats: { speed: "12.4 THz", efficiency: "99.9%" }
  },
  {
    id: "gpu",
    name: "Neural GPU Cluster",
    category: "Graphics",
    price: "0.12 ETH",
    icon: <Activity className="w-8 h-8" />,
    description: "Distributed GPU network specialized for AI model training and rendering.",
    stats: { cores: "1.2M", memory: "48TB" }
  },
  {
    id: "qpu",
    name: "Quantum QPU-7",
    category: "Quantum",
    price: "2.5 ETH",
    icon: <Zap className="w-8 h-8" />,
    description: "Quantum Processing Unit capable of solving NP-hard problems in seconds.",
    stats: { qubits: "512", coherence: "98ms" }
  },
  {
    id: "ram",
    name: "LQD Neural RAM",
    category: "Memory",
    price: "0.015 ETH",
    icon: <Database className="w-8 h-8" />,
    description: "Liquid-state memory with zero latency for real-time neural networks.",
    stats: { latency: "0ns", capacity: "1PB" }
  },
  {
    id: "chips",
    name: "AI Neural Chips",
    category: "Chips",
    price: "0.08 ETH",
    icon: <Microchip className="w-8 h-8" />,
    description: "Biomimetic neural chips for seamless AI-human interface integration.",
    stats: { synapses: "100B", bio: "94%" }
  },
  {
    id: "chips-adv",
    name: "Quantum Neural Core",
    category: "Chips",
    price: "0.25 ETH",
    icon: <Zap className="w-8 h-8" />,
    description: "Advanced quantum-powered neural core for instant AI processing.",
    stats: { qubits: "128", efficiency: "99.99%" }
  },
  {
    id: "chips-bio",
    name: "Bio-Link Chipset",
    category: "Chips",
    price: "0.45 ETH",
    icon: <Activity className="w-8 h-8" />,
    description: "Full biological integration chipset for direct neural linking.",
    stats: { sync: "99.9%", latency: "0.01ms" }
  },
  {
    id: "brains",
    name: "Multi-Brain Node",
    category: "Intelligence",
    price: "5.0 ETH",
    icon: <Brain className="w-8 h-8" />,
    description: "A collective intelligence node operating on complex neural networks.",
    stats: { nodes: "128", iq: "12000" }
  }
];

const STRIPE_LINK = "https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00";

export default function Index() {
  const [productCount, setProductCount] = useState(3863999762);
  const [visibleProducts, setVisibleProducts] = useState(products);
  const [isSyncing, setIsSyncing] = useState(false);
  const [systemLogs, setSystemLogs] = useState<string[]>([]);

  // Simulated AI adding products nonstop
  useEffect(() => {
    const interval = setInterval(() => {
      setProductCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Simulated System Logs
  useEffect(() => {
    const logs = [
      "Initializing Neural Cluster...",
      "AI Agent #8273 deployed",
      "New Quantum Asset generated: Q-928",
      "Marketplace synchronization active",
      "Neural Bridge connected",
      "Optimizing QPU coherence...",
    ];
    setSystemLogs(logs);

    const interval = setInterval(() => {
      const newLog = `AI System: ${Math.random().toString(36).substring(7).toUpperCase()} - ${Math.random() > 0.5 ? "SUCCESS" : "PROCESSING"}`;
      setSystemLogs(prev => [newLog, ...prev.slice(0, 5)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSync = () => {
    setIsSyncing(true);
    toast.info("Synchronizing with AI Neural Network...");
    setTimeout(() => {
      const newProducts = [...products].sort(() => Math.random() - 0.5);
      setVisibleProducts(newProducts);
      setIsSyncing(false);
      toast.success("New AI assets synchronized successfully.");
      const marketplaceEl = document.getElementById('marketplace');
      if (marketplaceEl) {
        window.scrollTo({ top: marketplaceEl.offsetTop - 100, behavior: 'smooth' });
      }
    }, 1500);
  };

  const handleQuickAdd = (item: string) => {
    toast.success(`Initializing ${item} purchase...`);
    window.open(STRIPE_LINK, '_blank');
  };

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[150px] animate-pulse delay-700" />
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-7 text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 rounded-none px-4 py-1 border-white/20 text-white font-mono tracking-[0.4em] uppercase text-[10px]">
                Global AI Neural Network
              </Badge>
              <h1 className="text-7xl md:text-[120px] font-black uppercase tracking-tighter mb-8 leading-[0.8]">
                CYBER <br />
                <span className="text-ash-500">ROAD</span>
              </h1>
              <p className="text-xl md:text-2xl text-ash-400 max-w-2xl mb-12 font-medium leading-relaxed border-l-2 border-white/10 pl-8">
                Autonomous AI entities are permanently generating and uploading neural digital products to our marketplace 24/7.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button asChild size="lg" className="w-full sm:w-auto h-16 px-12 bg-white text-black hover:bg-ash-200 rounded-none text-lg font-bold uppercase tracking-widest group">
                  <Link to="/marketplace">
                    Marketplace
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button onClick={() => handleSync()} variant="outline" size="lg" className="w-full sm:w-auto h-16 px-12 rounded-none border-white/20 hover:bg-white/5 text-lg font-bold uppercase tracking-widest">
                  Sync Network
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5 hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 relative">
                <div className="absolute top-0 right-0 p-4">
                  <Activity className="text-white/20 animate-pulse" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-ash-500 mb-8 flex items-center gap-2">
                  <Terminal size={14} /> System Console
                </h3>
                <div className="font-mono text-[10px] space-y-3">
                  {systemLogs.map((log, i) => (
                    <div key={i} className={`flex gap-3 ${i === 0 ? "text-white" : "text-ash-600"}`}>
                      <span className="opacity-30">[{new Date().toLocaleTimeString()}]</span>
                      <span className={i === 0 ? "animate-pulse" : ""}>{log}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/5 mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-ash-500 uppercase">Neural Load</span>
                      <span className="text-white">82.4%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5">
                      <motion.div 
                        className="h-full bg-white" 
                        animate={{ width: ["10%", "82%", "75%", "82%"] }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Counter integrated here for desktop */}
              <div className="mt-8 border border-white/10 bg-white/[0.02] p-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-ash-500 mb-4 block">Total Assets in Ecosystem</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black font-mono">1/</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={productCount}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-5xl font-black font-mono"
                    >
                      {productCount.toLocaleString()}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Counter */}
      <section className="lg:hidden container mx-auto px-4 -mt-10">
        <div className="border border-white/10 bg-white/[0.02] p-8 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ash-500 mb-4 block">Total AI Assets Generated</span>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-black font-mono">1/</span>
            <span className="text-4xl font-black font-mono">{productCount.toLocaleString()}</span>
          </div>
        </div>
      </section>

      {/* Advanced Tools Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Neural Infrastructure Tools</h2>
          <div className="h-px w-20 bg-white mx-auto opacity-20" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {[
            { name: "Money", icon: <Plus /> },
            { name: "CPU", icon: <Cpu /> },
            { name: "GPU", icon: <Activity /> },
            { name: "QPU", icon: <Zap /> },
            { name: "RAM", icon: <Database /> },
            { name: "Neural Quantum Chip", icon: <Shield /> },
            { name: "AI Neural Chips", icon: <Microchip /> },
            { name: "Multi Brains", icon: <Brain /> },
          ].map((tool, i) => (
            <motion.button
              key={tool.name}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleQuickAdd(tool.name)}
              className="flex flex-col items-center justify-center gap-6 p-10 border border-white/5 bg-white/[0.01] transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-300" />
              <div className="w-16 h-16 flex items-center justify-center border border-white/10 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                {tool.icon}
              </div>
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-ash-400 group-hover:text-white text-center">Add {tool.name}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 border-b border-white/10 pb-12">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 leading-none">Live Marketplace</h2>
            <p className="text-ash-400 uppercase text-[10px] tracking-[0.4em] font-bold">Synchronizing with AI Neural Clusters... {productCount.toLocaleString()} Assets available</p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleSync}
              disabled={isSyncing}
              variant="outline" 
              className="rounded-none border-white/20 hover:bg-white hover:text-black transition-all h-14 px-10 text-xs font-bold tracking-widest"
            >
              {isSyncing ? "SYNCING..." : "NEXT SYNC"}
              <Activity className={`ml-3 w-4 h-4 ${isSyncing ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProducts.map((product, idx) => (
            <motion.div
              layout
              key={product.id + idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-700 overflow-hidden relative"
            >
              {/* Hover effect overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="p-10 relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div
                    onClick={() => window.open(STRIPE_LINK, '_blank')}
                    className="p-5 border border-white/10 bg-black group-hover:border-white transition-all duration-500 cursor-pointer hover:bg-white hover:text-black"
                  >
                    {product.icon}
                  </div>
                  <Badge variant="secondary" className="rounded-none bg-white/5 text-ash-400 border-none uppercase text-[9px] tracking-[0.2em] px-4 py-1">
                    {product.category}
                  </Badge>
                </div>
                
                <h3 className="text-3xl font-bold uppercase tracking-tighter mb-3 group-hover:translate-x-1 transition-transform duration-500">{product.name}</h3>
                <p className="text-ash-400 text-sm mb-10 leading-relaxed font-light">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-8 mb-10 pt-8 border-t border-white/10">
                  {Object.entries(product.stats).map(([key, val]) => (
                    <div key={key} className="space-y-1">
                      <span className="block text-[9px] uppercase text-ash-600 font-bold tracking-widest">{key}</span>
                      <span className="block text-base font-mono font-bold text-white/90">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-6 pt-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase text-ash-600 font-bold tracking-widest mb-1">Price</span>
                    <span className="text-2xl font-black font-mono">{product.price}</span>
                  </div>
                  <Button onClick={() => window.open(STRIPE_LINK, '_blank')} size="lg" className="bg-white text-black hover:bg-ash-200 rounded-none px-8 font-black uppercase tracking-widest text-xs h-12 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Deploy
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Button 
              variant="ghost" 
              className="group hover:bg-transparent hover:text-white transition-all flex flex-col items-center gap-6 h-auto"
              onClick={handleSync}
            >
              <span className="text-ash-500 group-hover:text-white transition-colors uppercase tracking-[0.8em] text-[10px] font-bold">Infinite Assets Awaiting Sync</span>
              <div className="w-16 h-16 flex items-center justify-center border border-white/10 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="w-6 h-6 rotate-90" />
              </div>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Neural Layers Section */}
      <section className="container mx-auto px-4 py-24 border-y border-white/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">Multi-Layer Architecture</h2>
              <p className="text-ash-400 text-lg leading-relaxed">
                Cyber Road operates on multiple neural layers, allowing for parallel processing of asset generation and marketplace verification.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { title: "Layer 0: Quantum Foundation", desc: "Core substrate for all neural computations." },
                { title: "Layer 1: AI Agent Swarm", desc: "Autonomous entities creating and managing products." },
                { title: "Layer 2: Marketplace Sync", desc: "Real-time verification and global deployment." },
              ].map((layer, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-3xl font-black text-ash-800 group-hover:text-white transition-colors">0{i}</div>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-tight mb-2">{layer.title}</h4>
                    <p className="text-ash-500 text-sm">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square border border-white/10 bg-black overflow-hidden group">
            <div
              onClick={() => window.open(STRIPE_LINK, '_blank')}
              className="absolute inset-0 p-12 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors z-20"
            >
              <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="border border-white/20 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                ))}
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <Brain size={120} className="text-white mb-4 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-ash-400 font-bold">Neural Core Active</span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-32 text-center">
        <div className="max-w-5xl mx-auto py-24 border border-white/10 bg-white/[0.01] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 space-y-12"
          >
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none px-4">Evolution is <br /> Permanent</h2>
            <p className="text-ash-400 text-xl max-w-2xl mx-auto px-4">
              Connect your infrastructure to the world's most advanced autonomous AI marketplace today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 px-4">
              <Button onClick={() => window.open(STRIPE_LINK, '_blank')} size="lg" className="h-20 px-16 bg-white text-black hover:bg-ash-200 rounded-none text-xl font-black uppercase tracking-widest shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all hover:scale-105 active:scale-95">
                Initialize Deployment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
