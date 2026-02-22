import { motion } from "framer-motion";
import { Cpu, Shield, Zap, Radio, ZapOff, Activity, Binary, Microchip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const chipProducts = [
  {
    id: "nc-1",
    name: "AI Neural Chip v1",
    category: "Neural",
    price: "$80.00",
    icon: <Shield className="w-12 h-12" />,
    description: "Standard biomimetic neural chip for basic AI-human interface integration.",
    stats: { synapses: "100B", bio: "94%", power: "2.5W" }
  },
  {
    id: "nc-2",
    name: "Quantum Neural Core",
    category: "Quantum",
    price: "$250.00",
    icon: <Zap className="w-12 h-12" />,
    description: "High-performance chip with integrated quantum processing for instant decision making.",
    stats: { synapses: "1.2T", bio: "98%", power: "0.8W" }
  },
  {
    id: "nc-3",
    name: "Bio-Synthetic Nexus",
    category: "Biological",
    price: "$420.00",
    icon: <Activity className="w-12 h-12" />,
    description: "Advanced synthetic neural pathway chip that replicates human brain patterns.",
    stats: { synapses: "10T", bio: "99.9%", power: "0.1W" }
  },
  {
    id: "nc-4",
    name: "Edge Neural Link",
    category: "Interface",
    price: "$150.00",
    icon: <Radio className="w-12 h-12" />,
    description: "Long-range wireless neural connection chip for remote drone and swarm control.",
    stats: { synapses: "500B", range: "10km", latency: "0.1ms" }
  },
  {
    id: "nc-5",
    name: "Crypto-Neural Vault",
    category: "Security",
    price: "$330.00",
    icon: <Binary className="w-12 h-12" />,
    description: "Secure neural storage chip with hardware-level encryption for mental data.",
    stats: { security: "AES-1024", capacity: "100PB", bio: "92%" }
  },
  {
    id: "nc-6",
    name: "Hyper-Task Processor",
    category: "Compute",
    price: "$190.00",
    icon: <Cpu className="w-12 h-12" />,
    description: "Multitasking specialist chip designed for parallel neural network executions.",
    stats: { threads: "4096", synapses: "800B", clock: "15.2GHz" }
  }
];

const STRIPE_LINK = "https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00";

export default function NeuralChips() {
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
              Advanced Components
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Neural Chips</h1>
            <p className="text-ash-400 text-xl leading-relaxed font-light">
              <strong className="text-white block mb-4 uppercase tracking-wider text-sm">AI-Powered Digital Products You Can Use or Resell Instantly</strong>
              Explore our collection of high-performance neural chips, designed for seamless integration with AI systems and human interfaces. Every chip is verified by the Cyber Road Neural Network.
            </p>
          </div>
          <div className="flex-shrink-0">
             <div className="w-32 h-32 border border-white/10 flex items-center justify-center animate-pulse">
                <Microchip size={64} className="text-white/20" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chipProducts.map((chip, idx) => (
            <motion.div
              key={chip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              <div className="p-10">
                <div className="flex justify-between items-start mb-10">
                  <div 
                    onClick={() => handlePurchase(chip.name)}
                    className="p-6 border border-white/10 bg-black group-hover:border-white transition-all duration-500 cursor-pointer"
                  >
                    {chip.icon}
                  </div>
                  <Badge variant="secondary" className="rounded-none bg-white/5 text-ash-400 border-none uppercase text-[9px] tracking-[0.2em] px-4 py-1">
                    {chip.category}
                  </Badge>
                </div>

                <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4">{chip.name}</h3>
                <p className="text-ash-400 text-sm mb-10 leading-relaxed min-h-[60px]">
                  {chip.description}
                </p>

                <div className="space-y-4 mb-10 pt-8 border-t border-white/10">
                  {Object.entries(chip.stats).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-[10px] uppercase text-ash-600 font-bold tracking-widest">{key}</span>
                      <span className="text-sm font-mono font-bold text-white">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-6 pt-4">
                  <span className="text-2xl font-black font-mono">{chip.price}</span>
                  <Button
                    onClick={() => handlePurchase(chip.name)}
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
