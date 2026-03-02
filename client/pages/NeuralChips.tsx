import { motion } from "framer-motion";
import { Cpu, Shield, Zap, Radio, ZapOff, Activity, Binary, Microchip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const chipProducts = [
  {
    id: "auto-1",
    name: "AutoFlow AI Pro",
    category: "Automation",
    price: "$97.00",
    icon: <Cpu className="w-12 h-12" />,
    description: "Complete AI workflow automation suite. Automate lead gen, emails, and CRM with zero code. Problem: Time-consuming manual tasks. Solution: Autopilot workflows for 24/7 business ops.",
    stats: { delivery: "Instant ZIP", files: "Templates + PDF", license: "Commercial", access: "Lifetime" }
  },
  {
    id: "biz-1",
    name: "AI Business Starter Kit",
    category: "Starter Kit",
    price: "$147.00",
    icon: <Shield className="w-12 h-12" />,
    description: "Everything you need to launch an AI-driven agency or SaaS. Problem: Starting from scratch is hard. Solution: Pre-built templates, scripts, and legal docs.",
    stats: { delivery: "Instant ZIP", files: "Scripts + Assets", license: "Commercial", guides: "Included" }
  },
  {
    id: "prompt-1",
    name: "Master Prompt Bundle",
    category: "Engineering",
    price: "$47.00",
    icon: <Binary className="w-12 h-12" />,
    description: "10,000+ high-converting prompts for GPT-4, Midjourney, and Claude. Problem: Low quality AI output. Solution: Expert-engineered prompts for professional results.",
    stats: { delivery: "Instant ZIP", files: "PDF + TXT", license: "Commercial", updates: "Free" }
  },
  {
    id: "content-1",
    name: "ContentGen Matrix",
    category: "Marketing",
    price: "$127.00",
    icon: <Activity className="w-12 h-12" />,
    description: "Scale your content production 100x. Automate video scripts, blog posts, and social ads. Problem: Content burnout. Solution: AI-powered high-volume content factory.",
    stats: { delivery: "Instant ZIP", files: "Workflow + Prompts", license: "Commercial", setup: "10 mins" }
  },
  {
    id: "saas-1",
    name: "SaaS Blueprint X",
    category: "Micro SaaS",
    price: "$197.00",
    icon: <Zap className="w-12 h-12" />,
    description: "Launch your own AI SaaS in days. Includes core codebase and integration guides. Problem: High dev costs. Solution: Ready-to-deploy AI software architecture.",
    stats: { delivery: "Instant ZIP", files: "Code + Docs", license: "Commercial", tech: "NextJS/Node" }
  },
  {
    id: "nocode-1",
    name: "No-Code AI Engine",
    category: "No-Code",
    price: "$89.00",
    icon: <Radio className="w-12 h-12" />,
    description: "Visual builder for AI agents and logic flows. No programming required. Problem: Technical barriers. Solution: Drag-and-drop AI deployment system.",
    stats: { delivery: "Instant ZIP", files: "App Files + Guide", license: "Commercial", support: "Priority" }
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
              AI Automation & Workflows
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Automation</h1>
            <p className="text-ash-400 text-xl leading-relaxed font-light">
              <strong className="text-white block mb-4 uppercase tracking-wider text-sm">Instant Digital AI Solutions for Creators & Entrepreneurs</strong>
              Explore our collection of high-demand AI automation systems and no-code workflow engines. Every product is a 100% digital asset designed for instant deployment and rapid scaling.
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
                  <span className="block mt-4 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    Includes: ZIP File + PDF Guide + Prompt Bundle + License
                  </span>
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
