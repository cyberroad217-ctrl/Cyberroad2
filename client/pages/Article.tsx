import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { articles } from "./Blog";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2, MessageSquare, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Article() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) return <div>Article not found</div>;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-ash-500 hover:text-white transition-colors mb-16 group">
             <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </Link>

          <div className="mb-20">
             <Badge variant="outline" className="mb-6 rounded-none border-white/20 text-white font-mono tracking-[0.4em] uppercase text-[10px]">
                {article.category}
             </Badge>
             <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none">
                {article.title}
             </h1>
             
             <div className="flex flex-wrap items-center gap-10 text-xs font-bold tracking-[0.2em] text-ash-500 border-y border-white/5 py-10">
                <div className="flex items-center gap-3 border-r border-white/10 pr-10">
                   <User size={16} className="text-white/20" />
                   {article.author}
                </div>
                <div className="flex items-center gap-3 border-r border-white/10 pr-10">
                   <Calendar size={16} className="text-white/20" />
                   {article.date}
                </div>
                <div className="flex items-center gap-3">
                   <Clock size={16} className="text-white/20" />
                   {article.readTime}
                </div>
             </div>
          </div>

          <div className="prose prose-invert prose-ash max-w-none space-y-10 text-ash-400 text-lg leading-relaxed mb-32">
             <p className="text-xl text-white font-light italic border-l-4 border-white/10 pl-10 mb-16">
                "{article.excerpt}"
             </p>
             
             <p>
                As the digital economy continues to evolve, the integration of autonomous AI systems is becoming the primary driver for sustainable income automation. For creators and entrepreneurs, the ability to deploy tools that generate value independently is no longer a luxury—it is a foundational requirement.
             </p>

             <div className="border border-white/10 bg-white/[0.01] p-12 md:p-16 relative my-16 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-ash-800 opacity-20">
                   <Terminal size={100} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 relative z-10 text-white">System Insight</h3>
                <p className="relative z-10 text-ash-400 italic">
                   "Neural networks operate on multi-layered architectures that allow for parallel processing of complex tasks. In the context of digital marketplaces, this means products can be generated, verified, and deployed in cycles that far exceed human capabilities."
                </p>
             </div>

             <p>
                When you interact with the Cyber Road ecosystem, you are connecting to a globally distributed neural mesh. This infrastructure is specifically optimized for digital product creation and management. By utilizing our neural chips and multi-brain nodes, users can automate the most complex aspects of their digital business, from generation to final sync.
             </p>

             <p>
                The future of the marketplace is autonomous. The tools we provide are designed to be deployed instantly, offering immediate value to creators who need to move at the speed of computation. Whether you are using these products for your own operations or reselling them instantly, you are participating in the evolution of the global economy.
             </p>
          </div>

          <div className="flex items-center justify-between gap-12 pt-20 border-t border-white/10 mb-32">
             <div className="flex items-center gap-12">
                <button className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.4em] text-ash-500 hover:text-white transition-colors">
                   <Share2 size={16} /> Share Sync
                </button>
                <button className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.4em] text-ash-500 hover:text-white transition-colors">
                   <MessageSquare size={16} /> Discuss Node
                </button>
             </div>
             
             <Link to="/marketplace" className="h-14 px-10 border border-white/10 flex items-center justify-center text-xs font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                Access Marketplace
             </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
