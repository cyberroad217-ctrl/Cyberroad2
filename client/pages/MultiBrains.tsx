import { motion } from "framer-motion";
import { Brain, Cpu, Zap, Activity, Shield, Network, ZapOff, Blocks, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const brainNodes = [
  {
    id: "agent-1",
    name: "Autonomous Agent Core",
    category: "Agents",
    price: "$297.00",
    icon: <Brain className="w-12 h-12" />,
    description: "Deployment framework for self-operating AI agents. Problem: Complex setup. Solution: One-click agent deployment for research, sales, or support.",
    stats: { delivery: "Instant ZIP", agents: "Unlimited", license: "Commercial", setup: "5 mins" }
  },
  {
    id: "chat-1",
    name: "Chatbot Mastery Kit",
    category: "Chatbots",
    price: "$149.00",
    icon: <Network className="w-12 h-12" />,
    description: "Complete kit for building and selling custom AI chatbots. Problem: High development costs. Solution: White-label chatbot templates for business clients.",
    stats: { delivery: "Instant ZIP", platforms: "Web/SMS/FB", license: "Commercial", files: "JSON/JS" }
  },
  {
    id: "data-1",
    name: "Neural Data Toolkit",
    category: "Analysis",
    price: "$189.00",
    icon: <Zap className="w-12 h-12" />,
    description: "AI-powered data analysis and visualization system. Problem: Data overwhelm. Solution: Intelligent insights and reporting automation.",
    stats: { delivery: "Instant ZIP", input: "CSV/Excel/SQL", license: "Commercial", reports: "Automated" }
  },
  {
    id: "trade-1",
    name: "Trading Bot Framework",
    category: "Education",
    price: "$497.00",
    icon: <Activity className="w-12 h-12" />,
    description: "Educational software for building AI-driven trading strategies. Problem: Emotional trading. Solution: Logical, data-driven strategy development (Educational Use Only).",
    stats: { delivery: "Instant ZIP", market: "Crypto/Stocks", license: "Commercial", files: "Python/JS" }
  },
  {
    id: "job-1",
    name: "Career Automator v2",
    category: "Career",
    price: "$79.00",
    icon: <Shield className="w-12 h-12" />,
    description: "AI system for resume optimization and job application automation. Problem: Time-consuming job search. Solution: Automated applications and AI-tailored resumes.",
    stats: { delivery: "Instant ZIP", sites: "LinkedIn/Indeed", license: "Personal", files: "DOCX/PDF" }
  },
  {
    id: "dash-1",
    name: "Intelligence Dashboard",
    category: "Productivity",
    price: "$127.00",
    icon: <Blocks className="w-12 h-12" />,
    description: "Unified AI dashboard for managing all your digital workflows and tools. Problem: App fatigue. Solution: Single central intelligence hub for all AI tools.",
    stats: { delivery: "Instant ZIP", integrations: "30+", license: "Commercial", UI: "Customizable" }
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
              AI Agent Systems
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Multi Brains</h1>
            <p className="text-ash-400 text-xl leading-relaxed font-light">
              <strong className="text-white block mb-4 uppercase tracking-wider text-sm">Deploy Autonomous Intelligence in Seconds</strong>
              Connect to our most advanced AI agent frameworks and intelligence kits. These systems are designed for high-performance automation and data-driven decision making.
            </p>
            <div className="mt-8 p-4 border border-white/10 bg-white/5 font-mono text-[10px] uppercase tracking-widest text-white/60">
              Disclaimer: All products are digital AI software tools delivered electronically. No physical hardware is sold.
            </div>
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
                  <span className="block mt-4 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    Includes: ZIP File + PDF Guide + Automation Templates + License
                  </span>
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
