import { motion } from "framer-motion";
import { Database, HardDrive, Server, Globe, Shield, Terminal, Activity, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const infraItems = [
  {
    id: "infra-1",
    name: "Neural Datacenter",
    category: "Infrastructure",
    price: "12.0 ETH",
    icon: <Server className="w-12 h-12" />,
    description: "Full-scale neural processing datacenter for massive AI operations.",
    stats: { throughput: "128PB/s", storage: "5000EB", power: "2.4GW" }
  },
  {
    id: "infra-2",
    name: "Global Edge Network",
    category: "Connectivity",
    price: "4.5 ETH",
    icon: <Globe className="w-12 h-12" />,
    description: "Low-latency edge network for distributed AI model deployment.",
    stats: { nodes: "14,500", latency: "0.2ms", availability: "99.999%" }
  },
  {
    id: "infra-3",
    name: "Quantum Storage Array",
    category: "Storage",
    price: "8.0 ETH",
    icon: <Database className="w-12 h-12" />,
    description: "Quantum-entangled storage for instantaneous data access across any distance.",
    stats: { capacity: "Infinite*", speed: "Instant", redundancy: "10x" }
  }
];

const STRIPE_LINK = "https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00";

export default function Infrastructure() {
  const handlePurchase = (name: string) => {
    toast.success(`Initializing ${name} setup...`);
    window.open(STRIPE_LINK, '_blank');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 rounded-none border-white/20 text-white font-mono tracking-[0.4em] uppercase text-[10px]">
              System Core
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Infrastructure</h1>
            <p className="text-ash-400 text-xl leading-relaxed font-light">
              The foundational hardware and networks required to power your neural ecosystem. Scalable, secure, and fully autonomous.
            </p>
          </div>
          <div className="flex-shrink-0">
             <div className="w-32 h-32 border border-white/10 flex items-center justify-center animate-pulse">
                <Database size={64} className="text-white/20" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infraItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              <div className="p-10">
                <div className="flex justify-between items-start mb-10">
                  <div 
                    onClick={() => handlePurchase(item.name)}
                    className="p-6 border border-white/10 bg-black group-hover:border-white transition-all duration-500 cursor-pointer hover:bg-white hover:text-black"
                  >
                    {item.icon}
                  </div>
                  <Badge variant="secondary" className="rounded-none bg-white/5 text-ash-400 border-none uppercase text-[9px] tracking-[0.2em] px-4 py-1">
                    {item.category}
                  </Badge>
                </div>

                <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4">{item.name}</h3>
                <p className="text-ash-400 text-sm mb-10 leading-relaxed min-h-[60px]">
                  {item.description}
                </p>

                <div className="space-y-4 mb-10 pt-8 border-t border-white/10">
                  {Object.entries(item.stats).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-[10px] uppercase text-ash-600 font-bold tracking-widest">{key}</span>
                      <span className="text-sm font-mono font-bold text-white">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-6 pt-4">
                  <span className="text-2xl font-black font-mono">{item.price}</span>
                  <Button 
                    onClick={() => handlePurchase(item.name)}
                    className="bg-white text-black hover:bg-ash-200 rounded-none px-8 font-black uppercase tracking-widest text-xs h-12"
                  >
                    Provision
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
