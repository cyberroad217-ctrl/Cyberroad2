import { motion } from "framer-motion";
import { Database, HardDrive, Server, Globe, Shield, Terminal, Activity, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const infraItems = [
  {
    id: "resell-1",
    name: "AI Resell Rights Bundle",
    category: "Resell",
    price: "$497.00",
    icon: <Server className="w-12 h-12" />,
    description: "Massive collection of AI software and tools with full Master Resell Rights (MRR). Problem: Lack of inventory. Solution: Instant digital storefront with 50+ high-demand products.",
    stats: { delivery: "Instant ZIP", products: "50+", license: "MRR/PLR", files: "All Formats" }
  },
  {
    id: "infra-2",
    name: "AI Integration Framework",
    category: "Infrastructure",
    price: "$297.00",
    icon: <Globe className="w-12 h-12" />,
    description: "Robust framework for connecting multiple AI models and data sources. Problem: Fragmented AI tools. Solution: Unified API and logic layer for enterprise-grade AI apps.",
    stats: { delivery: "Instant ZIP", models: "GPT/Claude/LLaMA", license: "Commercial", tech: "Node/Python" }
  },
  {
    id: "data-2",
    name: "Data Pipeline Pro",
    category: "Data",
    price: "$187.00",
    icon: <Database className="w-12 h-12" />,
    description: "Automated data cleaning and ingestion pipeline for AI training. Problem: Dirty data. Solution: Intelligent ETL processes designed for the 2026 AI landscape.",
    stats: { delivery: "Instant ZIP", sources: "Unlimited", license: "Commercial", files: "Scripts + Docs" }
  },
  {
    id: "sec-1",
    name: "AI Security Vault",
    category: "Security",
    price: "$149.00",
    icon: <Shield className="w-12 h-12" />,
    description: "Advanced encryption and privacy layer for AI interactions. Problem: Data leaks. Solution: Local-first security protocols for mental and business data protection.",
    stats: { delivery: "Instant ZIP", encryption: "AES-256+", license: "Commercial", files: "Software + Guide" }
  },
  {
    id: "api-1",
    name: "API Nexus Engine",
    category: "Integration",
    price: "$127.00",
    icon: <Terminal className="w-12 h-12" />,
    description: "Universal AI connector for 1000+ web apps and services. Problem: Siloed apps. Solution: Seamless automation between AI agents and external software.",
    stats: { delivery: "Instant ZIP", apps: "1000+", license: "Commercial", setup: "Drag-and-Drop" }
  },
  {
    id: "deploy-1",
    name: "Global Deployment Suite",
    category: "SaaS",
    price: "$247.00",
    icon: <Activity className="w-12 h-12" />,
    description: "Infrastructure-as-code templates for global AI model scaling. Problem: High server costs. Solution: Optimized serverless deployment for AI micro-SaaS.",
    stats: { delivery: "Instant ZIP", cloud: "AWS/Vercel/Netlify", license: "Commercial", tech: "Terraform/JS" }
  }
];

const STRIPE_LINK = "https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00";

export default function Infrastructure() {
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
              Digital Foundation
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Infrastructure</h1>
            <p className="text-ash-400 text-xl leading-relaxed font-light">
              <strong className="text-white block mb-4 uppercase tracking-wider text-sm">Foundational Software for the AI Economy</strong>
              The foundational software and frameworks required to power your AI ecosystem. Scalable, secure, and delivered instantly as digital assets.
            </p>
            <div className="mt-8 p-4 border border-white/10 bg-white/5 font-mono text-[10px] uppercase tracking-widest text-white/60">
              Disclaimer: All products are digital AI software tools delivered electronically. No physical hardware is sold.
            </div>
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
                  <span className="block mt-4 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    Includes: ZIP File + Setup Guide + Automation Templates + License
                  </span>
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
