import { motion } from "framer-motion";
import { Zap, Activity, Cpu, Shield, ZapOff, Radio, Battery, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const quantumUnits = [
  {
    id: "funnel-1",
    name: "Quantum Funnel Builder",
    category: "Funnels",
    price: "$197.00",
    icon: <Zap className="w-12 h-12" />,
    description: "AI-driven high-conversion funnel system. Problem: Low conversion rates. Solution: Real-time AI page optimization and dynamic lead capture.",
    stats: { delivery: "Instant ZIP", conversion: "+45%", license: "Commercial", files: "Templates + PDF" }
  },
  {
    id: "social-1",
    name: "Neural Social Automator",
    category: "Social",
    price: "$89.00",
    icon: <Gauge className="w-12 h-12" />,
    description: "Automate your entire social media presence with AI. Problem: Too much time on socials. Solution: 24/7 automated posting, engagement, and DM management.",
    stats: { delivery: "Instant ZIP", platforms: "All Major", license: "Commercial", setup: "10 mins" }
  },
  {
    id: "ecom-1",
    name: "Entangled eCommerce Kit",
    category: "eCommerce",
    price: "$247.00",
    icon: <Battery className="w-12 h-12" />,
    description: "Complete AI eCommerce automation system. Problem: Scaling a store is hard. Solution: Automated product sourcing, descriptions, and customer support.",
    stats: { delivery: "Instant ZIP", platform: "Shopify/WC", license: "Commercial", files: "Apps + Guide" }
  },
  {
    id: "income-1",
    name: "Passive Income Engine",
    category: "Monetization",
    price: "$159.00",
    icon: <Cpu className="w-12 h-12" />,
    description: "AI systems designed for low-maintenance digital income. Problem: Trading time for money. Solution: Automated digital asset creation and sales systems.",
    stats: { delivery: "Instant ZIP", model: "Auto-Sales", license: "Commercial", access: "Lifetime" }
  },
  {
    id: "web-1",
    name: "AI Web Monetizer",
    category: "Web",
    price: "$127.00",
    icon: <Shield className="w-12 h-12" />,
    description: "Optimize your website's revenue with AI-driven ad and offer placement. Problem: Low RPM. Solution: Neural-network based traffic monetization strategies.",
    stats: { delivery: "Instant ZIP", revenue: "Optimized", license: "Commercial", files: "Scripts + PDF" }
  },
  {
    id: "msaas-1",
    name: "Micro SaaS Template",
    category: "SaaS",
    price: "$197.00",
    icon: <Radio className="w-12 h-12" />,
    description: "The ultimate starter code for a subscription-based AI micro SaaS. Problem: Coding takes too long. Solution: Ready-to-use codebase with Stripe integration.",
    stats: { delivery: "Instant ZIP", tech: "React/Supabase", license: "Commercial", setup: "Instant" }
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
              AI Processing & Tools
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Quantum</h1>
            <p className="text-ash-400 text-xl leading-relaxed font-light">
              <strong className="text-white block mb-4 uppercase tracking-wider text-sm">Next-Generation AI Sales & Content Systems</strong>
              High-performance AI tools and automation units designed for the next generation of digital creators and entrepreneurs.
            </p>
            <div className="mt-8 p-4 border border-white/10 bg-white/5 font-mono text-[10px] uppercase tracking-widest text-white/60">
              Disclaimer: All products are digital AI software tools delivered electronically. No physical hardware is sold.
            </div>
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
                  <span className="block mt-4 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    Includes: ZIP File + PDF Guide + Automation Templates + License
                  </span>
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
                    Get Access
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
