import { motion } from "framer-motion";
import { Zap, Activity, Cpu, Shield, ZapOff, Radio, Battery, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const quantumUnits = [
  {
    id: "qu-1",
    name: "QPU-7 Neural Core",
    category: "Quantum",
    price: "$2,500.00",
    icon: <Zap className="w-12 h-12" />,
    description: "Standard quantum processing unit for high-speed neural computations.",
    stats: { qubits: "512", coherence: "98ms", error_rate: "0.001%" }
  },
  {
    id: "qu-2",
    name: "Entanglement Driver",
    category: "Hardware",
    price: "$1,200.00",
    icon: <Gauge className="w-12 h-12" />,
    description: "Stabilization hardware for maintaining quantum coherence in neural chips.",
    stats: { stability: "99.9%", range: "Global", power: "500W" }
  },
  {
    id: "qu-3",
    name: "Sub-Zero Coolant",
    category: "System",
    price: "$800.00",
    icon: <Battery className="w-12 h-12" />,
    description: "Liquid-nitrogen based cooling system for quantum processors.",
    stats: { temp: "-273°C", flow: "5L/min", pressure: "12bar" }
  }
];

const STRIPE_LINK = "https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00";

export default function QuantumUnits() {
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
              Quantum Mechanics
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Quantum Units</h1>
            <p className="text-ash-400 text-xl leading-relaxed font-light">
              High-coherence quantum processors and stabilization units designed for the next generation of AI neural networks.
            </p>
          </div>
          <div className="flex-shrink-0">
             <div className="w-32 h-32 border border-white/10 flex items-center justify-center animate-pulse">
                <Zap size={64} className="text-white/20" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quantumUnits.map((unit, idx) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              <div className="p-10">
                <div className="flex justify-between items-start mb-10">
                  <div 
                    onClick={() => handlePurchase(unit.name)}
                    className="p-6 border border-white/10 bg-black group-hover:border-white transition-all duration-500 cursor-pointer hover:bg-white hover:text-black"
                  >
                    {unit.icon}
                  </div>
                  <Badge variant="secondary" className="rounded-none bg-white/5 text-ash-400 border-none uppercase text-[9px] tracking-[0.2em] px-4 py-1">
                    {unit.category}
                  </Badge>
                </div>

                <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4">{unit.name}</h3>
                <p className="text-ash-400 text-sm mb-10 leading-relaxed min-h-[60px]">
                  {unit.description}
                </p>

                <div className="space-y-4 mb-10 pt-8 border-t border-white/10">
                  {Object.entries(unit.stats).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-[10px] uppercase text-ash-600 font-bold tracking-widest">{key}</span>
                      <span className="text-sm font-mono font-bold text-white">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-6 pt-4">
                  <span className="text-2xl font-black font-mono">{unit.price}</span>
                  <Button
                    onClick={() => handlePurchase(unit.name)}
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
