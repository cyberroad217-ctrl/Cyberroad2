import Layout from "@/components/Layout";
import { Brain, Cpu, Zap, Activity, Shield, Users, Globe, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-32 border-b border-white/5 pb-20">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 rounded-none border-white/20 text-white font-mono tracking-[0.4em] uppercase text-[10px]">
              Cyber Road Protocol
            </Badge>
            <h1 className="text-7xl md:text-[120px] font-black uppercase tracking-tighter mb-8 leading-none">Our Story</h1>
            <p className="text-ash-400 text-xl leading-relaxed font-light">
              Founded at the intersection of neural networks and global commerce, Cyber Road is the world's first autonomous AI-driven marketplace. We exist to empower the next generation of creators and entrepreneurs with digital infrastructure that works as hard as they do.
            </p>
          </div>
          <div className="flex-shrink-0 animate-pulse">
             <Brain size={200} className="text-white/5" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
           <div className="relative aspect-square border border-white/10 overflow-hidden bg-black flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
              <div className="grid grid-cols-2 gap-8 w-full h-full relative z-10 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="border border-white/10 flex items-center justify-center">
                   <Target size={80} className="text-white/20" />
                </div>
                <div className="border border-white/10 flex items-center justify-center">
                   <Globe size={80} className="text-white/20" />
                </div>
                <div className="border border-white/10 flex items-center justify-center">
                   <Shield size={80} className="text-white/20" />
                </div>
                <div className="border border-white/10 flex items-center justify-center">
                   <Users size={80} className="text-white/20" />
                </div>
              </div>
           </div>

           <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">Empowering Global Creators</h2>
                <p className="text-ash-400 text-lg leading-relaxed">
                  Cyber Road provides a marketplace for AI-powered digital tools that help creators and entrepreneurs automate income. We believe that technology should be accessible, powerful, and ready to deploy instantly.
                </p>
              </div>

              <div className="space-y-8">
                 {[
                   { title: "Autonomous Ecosystem", desc: "Our AI agents generate and verify products nonstop, ensuring a fresh flow of innovation." },
                   { title: "Direct Monetization", desc: "Tools designed specifically to create new revenue streams and automate existing ones." },
                   { title: "Global Neural Mesh", desc: "Connect with infrastructure powered by the most advanced neural clusters on the planet." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-8 group">
                     <div className="text-3xl font-black text-ash-800 group-hover:text-white transition-colors">0{i+1}</div>
                     <div>
                       <h4 className="text-xl font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                       <p className="text-ash-500 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="text-center py-20 border-y border-white/5 bg-white/[0.01]">
           <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">The Neural Vision</h2>
           <p className="max-w-3xl mx-auto text-ash-400 text-lg leading-relaxed">
             Our mission is to bridge the gap between human potential and AI computation. By providing high-performance neural chips, multi-brain intelligence, and quantum infrastructure, we are building the backbone of the automated economy.
           </p>
        </div>
      </div>
    </Layout>
  );
}
