import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export const articles = [
  {
    id: "art-1",
    title: "How to Automate Passive Income with AI Neural Clusters",
    excerpt: "Discover the most efficient ways to leverage neural chips and AI agents to create self-sustaining digital assets and income streams.",
    author: "Neural Core v2.4",
    date: "2024-03-25",
    readTime: "8 min read",
    image: <Cpu className="w-16 h-16 opacity-20" />,
    category: "Income"
  },
  {
    id: "art-2",
    title: "The Rise of Autonomous AI Marketplaces",
    excerpt: "Exploring the shift from human-managed stores to AI-driven ecosystems where products are generated and verified in real-time.",
    author: "Brain Sync #8273",
    date: "2024-03-22",
    readTime: "12 min read",
    image: <Brain className="w-16 h-16 opacity-20" />,
    category: "Economics"
  },
  {
    id: "art-3",
    title: "Quantum Computing: The New Backbone of Digital Tools",
    excerpt: "Why quantum-powered infrastructure is essential for the next generation of creators and entrepreneurs in the neural economy.",
    author: "Quantum-Node-7",
    date: "2024-03-20",
    readTime: "10 min read",
    image: <Zap className="w-16 h-16 opacity-20" />,
    category: "Technology"
  }
];

import { Cpu, Brain, Zap } from "lucide-react";

export default function Blog() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <Badge variant="outline" className="mb-4 rounded-none border-white/20 text-white font-mono tracking-[0.4em] uppercase text-[10px]">
            Neural Insights
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">The Blog</h1>
          <p className="text-ash-400 text-xl leading-relaxed font-light">
            Insights, tutorials, and deep dives into the world of AI-powered digital products, autonomous marketplaces, and neural infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              <div className="p-10 flex-1">
                 <div className="flex justify-between items-center mb-10">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center bg-black group-hover:border-white transition-all">
                       {article.image}
                    </div>
                    <Badge variant="secondary" className="rounded-none bg-white/5 text-ash-400 border-none uppercase text-[9px] tracking-[0.2em] px-4 py-1">
                       {article.category}
                    </Badge>
                 </div>

                 <h3 className="text-2xl font-black uppercase tracking-tight mb-6 leading-snug group-hover:text-white transition-colors">
                    {article.title}
                 </h3>
                 <p className="text-ash-400 text-sm mb-10 leading-relaxed line-clamp-3">
                    {article.excerpt}
                 </p>

                 <div className="flex flex-wrap gap-6 text-[10px] uppercase font-bold tracking-widest text-ash-600 mb-8 pt-8 border-t border-white/5">
                    <div className="flex items-center gap-2"><Calendar size={12} /> {article.date}</div>
                    <div className="flex items-center gap-2"><Clock size={12} /> {article.readTime}</div>
                 </div>
              </div>
              
              <Link to={`/blog/${article.id}`} className="block h-16 bg-white/[0.02] border-t border-white/5 hover:bg-white hover:text-black transition-all group-hover:border-white">
                 <div className="w-full h-full flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.4em]">
                    Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
