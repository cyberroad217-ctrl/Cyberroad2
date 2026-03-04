import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Cpu, Zap, Brain, Database, Shield, Activity, Share2, Search, Filter, Microchip, Radio, Layers, Globe, Terminal, BarChart3, Download, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Product, AISyncResponse } from "@shared/api";

const getIconByName = (name: string) => {
  const icons: Record<string, JSX.Element> = {
    Radio: <Radio />,
    Layers: <Layers />,
    Terminal: <Terminal />,
    Globe: <Globe />,
    Brain: <Brain />,
    Zap: <Zap />,
    Activity: <Activity />,
    Database: <Database />,
    Shield: <Shield />,
    ShieldCheck: <ShieldCheck />,
    Mail: <Mail />,
    BarChart3: <BarChart3 />,
    Download: <Download />,
    Microchip: <Microchip />,
    Cpu: <Cpu />
  };
  return icons[name] || <Zap />;
};

const allProducts: Product[] = [
  {
    id: "auto-1",
    name: "Neural Workflow Automator",
    category: "Automation",
    price: "$197.00",
    iconName: "Radio",
    description: "Enterprise-grade AI automation system for complex business processes. Includes autonomous agent scripts and integration logic.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves time-consuming manual data entry and multi-app orchestration.",
    target: "For Agency owners and operations managers.",
    income: "Saves 40+ hours per week through autonomous execution.",
    includes: "Python Scripts, Zapier/Make Blueprints, Deployment Guide PDF.",
    stats: { automation: "99.9%", integration: "Webhooks" }
  },
  {
    id: "biz-1",
    name: "AI Business Starter Kit",
    category: "Starter Kit",
    price: "$297.00",
    iconName: "Layers",
    description: "Complete blueprint for launching an AI-first digital business in 2026. 100% digital software solution.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves the 'zero to one' hurdle for new AI entrepreneurs.",
    target: "For Solo-preneurs and digital builders.",
    income: "Enables instant resale of digital assets with included PLR rights.",
    includes: "Brand Assets, Landing Page Templates, Legal Bundle.",
    stats: { setup: "Fast", license: "Commercial" }
  },
  {
    id: "prompt-1",
    name: "Prompt Engineering Master Bundle",
    category: "Prompts",
    price: "$97.00",
    iconName: "Terminal",
    description: "The ultimate collection of 5,000+ high-converting prompts for LLMs. Optimized for 2026 models.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves poor AI output quality and inconsistent results.",
    target: "For Content creators and AI developers.",
    income: "Drastically reduces content production costs and time.",
    includes: "CSV Prompt Database, GPT Persona Templates, Fine-tuning Guide.",
    stats: { count: "5000+", quality: "Verified" }
  },
  {
    id: "content-1",
    name: "AI Content Generation Engine",
    category: "Content",
    price: "$147.00",
    iconName: "Radio",
    description: "Autonomous engine for generating high-quality blog posts, social media updates, and newsletters.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves the struggle of consistent content creation.",
    target: "For Bloggers and social media managers.",
    income: "Allows scaling content output without increasing headcount.",
    includes: "Content Gen Scripts, Prompt Templates, Scheduling Logic.",
    stats: { capacity: "High", speed: "Instant" }
  },
  {
    id: "saas-1",
    name: "AI SaaS Starter Template",
    category: "SaaS",
    price: "$497.00",
    iconName: "Globe",
    description: "A production-ready Next.js & AI framework for launching subscription-based micro-apps instantly.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves the long development cycles for AI applications.",
    target: "For Developers and SaaS founders.",
    income: "Allows for recurring subscription revenue through Stripe integration.",
    includes: "Source Code, Database Schema, AI API Wrappers.",
    stats: { tech: "Next.js", auth: "Included" }
  },
  {
    id: "nocode-1",
    name: "No-Code AI Workflow System",
    category: "No-Code",
    price: "$127.00",
    iconName: "Activity",
    description: "Visual workflow builder for connecting AI models to your favorite apps without writing code.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves technical barriers to AI adoption for non-coders.",
    target: "For Business owners and non-technical founders.",
    income: "Reduces dependence on expensive development resources.",
    includes: "Workflow Templates, Video Guide, API Connectors.",
    stats: { ease: "High", logic: "Visual" }
  },
  {
    id: "mkt-1",
    name: "AI Marketing Automation Kit",
    category: "Marketing",
    price: "$177.00",
    iconName: "Activity",
    description: "Full-stack marketing automation suite including ad copy gen, lead scoring, and email nurturing.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves high marketing costs and low conversion rates.",
    target: "For eCommerce brands and growth hackers.",
    income: "Increases ROI through personalized AI-driven outreach.",
    includes: "Copy Scripts, Lead Scanners, Funnel Blueprints.",
    stats: { roi: "High", reach: "Global" }
  },
  {
    id: "ecom-1",
    name: "AI eCommerce Automation System",
    category: "eCommerce",
    price: "$397.00",
    iconName: "Database",
    description: "Automate product descriptions, customer support, and inventory forecasting with neural AI.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves scaling issues in manual eCommerce management.",
    target: "For Shopify and Amazon sellers.",
    income: "Maximizes margins by reducing operational overhead.",
    includes: "Shopify Apps Code, Support Bots, Analysis Tools.",
    stats: { sync: "Real-time", scale: "Enterprise" }
  },
  {
    id: "income-1",
    name: "AI Passive Income System",
    category: "Income",
    price: "$247.00",
    iconName: "Zap",
    description: "Deploy autonomous systems that generate and sell digital assets on autopilot.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves the lack of ownable passive revenue streams.",
    target: "For Digital nomads and side hustlers.",
    income: "Generates revenue 24/7 through automated sales funnels.",
    includes: "Asset Gen Scripts, Funnel Code, Traffic Guide.",
    stats: { type: "Passive", engine: "Neural" }
  },
  {
    id: "agent-1",
    name: "AI Agent Deployment Framework",
    category: "Agents",
    price: "$597.00",
    iconName: "Brain",
    description: "Advanced framework for deploying and managing custom AI agents for any business task.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves the complexity of managing multiple AI models.",
    target: "For Tech companies and AI researchers.",
    income: "Reduces labor costs by delegating tasks to autonomous agents.",
    includes: "Agent Core, Memory Modules, Task Handlers.",
    stats: { capacity: "Infinite*", engine: "GPT-Next" }
  },
  {
    id: "bot-1",
    name: "AI Chatbot Deployment Kit",
    category: "Chatbots",
    price: "$87.00",
    iconName: "Mail",
    description: "Deploy professional, multi-lingual AI chatbots for support and sales in minutes.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves poor customer response times and high support load.",
    target: "For Customer service teams and website owners.",
    income: "Increases sales through 24/7 proactive engagement.",
    includes: "Bot Code, Knowledge Base Templates, CSS Themes.",
    stats: { languages: "50+", uptime: "100%" }
  },
  {
    id: "social-1",
    name: "AI Social Media Automation Tool",
    category: "Social",
    price: "$127.00",
    iconName: "Share2",
    description: "Automate your entire social presence from content creation to engagement and DM replies.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves the massive time commitment of social media growth.",
    target: "For Influencers and brand managers.",
    income: "Builds a high-value audience on autopilot.",
    includes: "Engagement Scripts, Video Gen Prompts, DM Bots.",
    stats: { platforms: "All", growth: "Viral" }
  },
  {
    id: "funnel-1",
    name: "AI Funnel Builder System",
    category: "Funnels",
    price: "$297.00",
    iconName: "Layers",
    description: "AI-driven funnel builder that writes your copy and optimizes layouts for maximum conversion.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves low conversion rates and complex tech setups.",
    target: "For Digital marketers and course creators.",
    income: "Converts traffic into customers with optimized AI copy.",
    includes: "Funnel Templates, Copy Prompts, Integration Code.",
    stats: { conv: "Boost", tech: "Modern" }
  },
  {
    id: "data-1",
    name: "AI Data Analysis Toolkit",
    category: "Data",
    price: "$187.00",
    iconName: "BarChart3",
    description: "Powerful AI toolkit for extracting insights, predicting trends, and automating reports.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves data overwhelm and manual spreadsheet analysis.",
    target: "For Data analysts and business strategists.",
    income: "Informs high-stakes decisions with precise AI predictions.",
    includes: "Analysis Scripts, Viz Dashboards, CSV Handlers.",
    stats: { accuracy: "High", types: "Universal" }
  },
  {
    id: "trade-1",
    name: "AI Trading Bot Framework",
    category: "Finance",
    price: "$897.00",
    iconName: "Zap",
    description: "Educational software framework for building and testing AI-driven trading strategies.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves the steep learning curve of algorithmic trading.",
    target: "For Educational purposes and hobbyist traders.",
    income: "Empowers users to build their own trading logic (Educational Only).",
    includes: "Source Code, Backtesting Logic, Strategy Guide.",
    stats: { mode: "Education", tech: "Python/AI" }
  },
  {
    id: "job-1",
    name: "AI Resume & Job Automation Kit",
    category: "Career",
    price: "$67.00",
    iconName: "ShieldCheck",
    description: "Automate your job search, resume optimization, and interview prep with custom AI agents.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves the exhausting manual job application process.",
    target: "For Career seekers and professionals.",
    income: "Saves hundreds of hours in the job search process.",
    includes: "Resume Optimizer, Cover Letter Bot, Interview Sim.",
    stats: { success: "Boost", time: "Saved" }
  },
  {
    id: "dash-1",
    name: "AI Productivity Dashboard",
    category: "Productivity",
    price: "$47.00",
    iconName: "Terminal",
    description: "Centralized AI-powered dashboard for managing tasks, notes, and neural workflows.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves digital fragmentation and task scatter.",
    target: "For Knowledge workers and deep-work enthusiasts.",
    income: "Maximizes personal output through AI task prioritization.",
    includes: "Dashboard Code, Widget Library, Setup Guide.",
    stats: { focus: "99%", flow: "Steady" }
  },
  {
    id: "mono-1",
    name: "AI Website Monetization System",
    category: "Monetization",
    price: "$347.00",
    iconName: "Globe",
    description: "Automated system for maximizing revenue from any website through AI ad placement and affiliate logic.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves low revenue yield from existing web traffic.",
    target: "For Publishers and niche site owners.",
    income: "Increases RPM through dynamic AI revenue optimization.",
    includes: "Ad Logic Code, Affiliate Scripts, Traffic Analysis.",
    stats: { rpm: "Boost", sync: "Auto" }
  },
  {
    id: "resell-p-1",
    name: "AI Digital Resell Rights Bundle",
    category: "Resell",
    price: "$1,497.00",
    iconName: "BarChart3",
    description: "Complete library of high-demand AI digital products with Master Resell Rights (MRR).",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves the lack of ownable products for your own store.",
    target: "For Online store owners and digital resellers.",
    income: "Build an entire business on these ready-to-sell assets.",
    includes: "100+ Digital Tools, Sales Graphics, License Docs.",
    stats: { rights: "MRR", scale: "Instant" }
  },
  {
    id: "saas-m-1",
    name: "Subscription Micro SaaS Template",
    category: "Micro SaaS",
    price: "$397.00",
    iconName: "Layers",
    description: "Lightweight Next.js template optimized for launching AI-powered micro-services.",
    details: "Instant Digital Download (ZIP File) • Includes Software Files + Prompt Bundles + Automation Templates + Commercial License • Delivered instantly after secure Stripe checkout",
    problem: "Solves the overhead of complex SaaS development.",
    target: "For Niche marketers and indie hackers.",
    income: "Generates recurring monthly income with low maintenance.",
    includes: "Framework Code, Stripe Setup, Admin Dash.",
    stats: { overhead: "Low", revenue: "Recurring" }
  }
];

const STRIPE_LINK = "https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00";

export default function Marketplace() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(allProducts);

  const categories = ["All", "Automation", "Starter Kit", "Prompts", "Content", "SaaS", "No-Code", "Marketing", "eCommerce", "Income", "Agents", "Chatbots", "Social", "Funnels", "Data", "Finance", "Career", "Productivity", "Monetization", "Resell", "Micro SaaS"];

  const filteredProducts = visibleProducts.filter(p =>
    (filter === "All" || p.category === filter) &&
    (p.name.toLowerCase().includes(search.toLowerCase()))
  );

  const handleSync = async () => {
    setIsSyncing(true);
    toast.info("Connecting to Neural Clusters for AI-generated assets...");

    try {
      const response = await fetch("/api/ai-sync");
      if (!response.ok) throw new Error("Sync failed");

      const data: AISyncResponse = await response.json();

      // Merge with existing or replace?
      // The requirement suggests "AI agents are generating new assets",
      // so let's prepend them to the list to show "new" content.
      setVisibleProducts(prev => [...data.products, ...prev]);

      setIsSyncing(false);
      toast.success("Marketplace synchronized with Neural Network. New assets deployed.");
    } catch (error) {
      console.error("AI Sync failed:", error);
      toast.error("Network synchronization failed. Falling back to local cache.");
      setIsSyncing(false);
      // Fallback simulation
      setTimeout(() => {
        const synced = [...allProducts].sort(() => Math.random() - 0.5).map(p => ({
          ...p,
          id: Math.random().toString(36).substring(7)
        }));
        setVisibleProducts(synced);
      }, 500);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">AI Software Marketplace</h1>
          <p className="text-ash-400 uppercase text-[10px] tracking-[0.4em] font-bold">Autonomous Digital Asset Exchange</p>
          <p className="text-[9px] text-ash-600 uppercase tracking-widest mt-2 italic font-mono">Disclaimer: All products are digital AI software tools delivered electronically. No physical hardware is sold.</p>
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
                placeholder="Search software..."
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
            <div className="flex flex-col gap-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
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
                <div className="p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div
                      onClick={() => window.open(STRIPE_LINK, '_blank')}
                      className="p-4 border border-white/10 bg-black group-hover:border-white transition-colors cursor-pointer hover:bg-white hover:text-black"
                    >
                      {getIconByName(product.iconName)}
                    </div>
                    <Badge variant="secondary" className="rounded-none bg-white/5 text-ash-400 border-none uppercase text-[9px] tracking-widest">
                      {product.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{product.name}</h3>
                  <p className="text-ash-400 text-xs mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="space-y-4 mb-6 flex-1">
                     <div className="text-[8px] uppercase text-ash-600 font-bold tracking-widest bg-white/5 p-2 border border-white/5 mb-4 leading-relaxed">
                        {product.details}
                     </div>

                     <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                           <span className="block text-[7px] uppercase text-ash-600 font-bold tracking-widest">Problem</span>
                           <span className="block text-[9px] font-medium text-white/70 truncate">{product.problem}</span>
                        </div>
                        <div className="space-y-1">
                           <span className="block text-[7px] uppercase text-ash-600 font-bold tracking-widest">Target</span>
                           <span className="block text-[9px] font-medium text-white/70 truncate">{product.target}</span>
                        </div>
                     </div>

                     <div className="space-y-1">
                        <span className="block text-[7px] uppercase text-ash-600 font-bold tracking-widest">Includes (100% Digital)</span>
                        <span className="block text-[9px] font-medium text-white/70 line-clamp-1">{product.includes}</span>
                     </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-6 border-t border-white/5 pt-4">
                     <Badge variant="outline" className="text-[6px] uppercase tracking-tighter rounded-none border-white/10 py-0 h-3">Instant ZIP</Badge>
                     <Badge variant="outline" className="text-[6px] uppercase tracking-tighter rounded-none border-white/10 py-0 h-3">Commercial License</Badge>
                     <Badge variant="outline" className="text-[6px] uppercase tracking-tighter rounded-none border-white/10 py-0 h-3">PDF Setup Guide</Badge>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <span className="text-lg font-black font-mono">{product.price}</span>
                    <Button onClick={() => window.open(STRIPE_LINK, '_blank')} size="sm" className="bg-white text-black hover:bg-ash-200 rounded-none px-6 font-bold uppercase tracking-widest text-[10px] h-10">
                      Buy
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
