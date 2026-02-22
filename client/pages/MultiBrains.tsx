import { motion } from "framer-motion";
import { Brain, Cpu, Zap, Activity, Shield, Network, ZapOff, Blocks, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const brainNodes = [
  {
    id: "mb-1",
    name: "Neural Node Alpha",
    category: "Intelligence",
    price: "$1,500.00",
    icon: <Brain className="w-12 h-12" />,
    description: "Primary intelligence node for managing local AI agent swarms.",
    stats: { iq: "4500", nodes: "16", sync: "99.9%" }
  },
  {
    id: "mb-2",
    name: "Collective Cortex",
    category: "Global",
    price: "$4,200.00",
    icon: <Network className="w-12 h-12" />,
    description: "Distributed brain network capable of global-scale pattern recognition.",
    stats: { iq: "18000", nodes: "128", sync: "100%" }
  },
  {
    id: "mb-3",
    name: "Quantum Synapse",
    category: "Advanced",
    price: "$8,500.00",
    icon: <Zap className="w-12 h-12" />,
    description: "Hybrid quantum-neural brain for solving multi-dimensional logic gates.",
    stats: { iq: "52000", nodes: "512", sync: "98.5%" }
  }
];

const STRIPE_LINK = "https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00";

export default function MultiBrains() {
  const handlePurchase = (name: string) => {
    toast.success(`Initializing ${name} purchase...`);
    window.open(STRIPE_LINK, '_blank');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 rounded-none border-white/20 text-white font-mono tracking-[0.4em] uppercase text-[10px]">
              Neural Intelligence
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Multi Brains</h1>
            <p className="text-ash-400 text-xl leading-relaxed font-light">
              Connect to our most advanced collective intelligence nodes. These multi-brain systems operate on deep neural networks to provide unparalleled computational power.
            </p>
          </div>
          <div className="flex-shrink-0">
             <div className="w-32 h-32 border border-white/10 flex items-center justify-center animate-pulse">
                <Brain size={64} className="text-white/20" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brainNodes.map((node, idx) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              <div className="p-10">
                <div className="flex justify-between items-start mb-10">
                  <div 
                    onClick={() => handlePurchase(node.name)}
                    className="p-6 border border-white/10 bg-black group-hover:border-white transition-all duration-500 cursor-pointer hover:bg-white hover:text-black"
                  >
                    {node.icon}
                  </div>
                  <Badge variant="secondary" className="rounded-none bg-white/5 text-ash-400 border-none uppercase text-[9px] tracking-[0.2em] px-4 py-1">
                    {node.category}
                  </Badge>
                </div>

                <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4">{node.name}</h3>
                <p className="text-ash-400 text-sm mb-10 leading-relaxed min-h-[60px]">
                  {node.description}
                </p>

                <div className="space-y-4 mb-10 pt-8 border-t border-white/10">
                  {Object.entries(node.stats).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-[10px] uppercase text-ash-600 font-bold tracking-widest">{key}</span>
                      <span className="text-sm font-mono font-bold text-white">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-6 pt-4">
                  <span className="text-2xl font-black font-mono">{node.price}</span>
                  <Button
                    onClick={() => handlePurchase(node.name)}
                    className="bg-white text-black hover:bg-ash-200 rounded-none px-8 font-black uppercase tracking-widest text-xs h-12"
                  >
                    Buy
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
