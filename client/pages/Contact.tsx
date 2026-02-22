import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Globe, Activity, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message synchronized with support neural nodes.");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div>
              <Badge variant="outline" className="mb-4 rounded-none border-white/20 text-white font-mono tracking-[0.4em] uppercase text-[10px]">
                Support Sync
              </Badge>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">Contact Us</h1>
              <p className="text-ash-400 text-xl leading-relaxed font-light">
                Need technical assistance or have inquiries about our neural digital products? Connect with our team 24/7 via the communication channels below.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-8 group cursor-pointer" onClick={() => window.open("tel:6096910007")}>
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-ash-500 mb-2">Support Phone</h4>
                  <p className="text-xl font-bold tracking-tight">609 691 0007</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-ash-500 mb-2">Email Support</h4>
                  <p className="text-xl font-bold tracking-tight">support@cyberroad.ai</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-ash-500 mb-2">Network Status</h4>
                  <div className="flex items-center gap-2 text-green-500 font-mono text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Operational
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.01] p-12 md:p-16 relative">
             <div className="absolute top-0 right-0 p-8 text-ash-800 opacity-20">
               <Terminal size={120} />
             </div>
             
             <h3 className="text-2xl font-black uppercase tracking-tighter mb-10 relative z-10">Send Message</h3>
             
             <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
               <div className="space-y-2">
                 <label className="text-[10px] uppercase font-bold tracking-widest text-ash-500">Name</label>
                 <input type="text" required className="w-full h-14 bg-white/[0.02] border border-white/10 px-6 font-mono text-white focus:border-white transition-colors outline-none rounded-none" placeholder="IDENTIFY..." />
               </div>
               
               <div className="space-y-2">
                 <label className="text-[10px] uppercase font-bold tracking-widest text-ash-500">Email</label>
                 <input type="email" required className="w-full h-14 bg-white/[0.02] border border-white/10 px-6 font-mono text-white focus:border-white transition-colors outline-none rounded-none" placeholder="CONTACT..." />
               </div>
               
               <div className="space-y-2">
                 <label className="text-[10px] uppercase font-bold tracking-widest text-ash-500">Message</label>
                 <textarea required rows={5} className="w-full bg-white/[0.02] border border-white/10 p-6 font-mono text-white focus:border-white transition-colors outline-none rounded-none resize-none" placeholder="TRANSMISSION CONTENT..." />
               </div>
               
               <Button type="submit" size="lg" className="w-full h-16 bg-white text-black hover:bg-ash-200 rounded-none text-lg font-bold uppercase tracking-widest transition-all">
                 Initialize Sync
               </Button>
             </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
