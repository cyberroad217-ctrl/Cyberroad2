import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cpu, Zap, Brain, Database, Shield, Activity, Radio, Layers, Globe, Terminal, BarChart3, Download, Mail, ShieldCheck, Microchip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Product } from "@shared/api";

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

const STRIPE_LINK = "https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00";

interface SupabaseProductGridProps {
  category: string;
  fallbackProducts: any[];
}

export default function SupabaseProductGrid({ category, fallbackProducts }: SupabaseProductGridProps) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products?category=${category}`);
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      
      const mapped = data.products.map((p: any) => ({
        ...p,
        icon: getIconByName(p.icon_name || "Zap")
      }));

      setProducts(mapped.length > 0 ? mapped : fallbackProducts);
    } catch (error) {
      console.error("Supabase fetch error:", error);
      setProducts(fallbackProducts);
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = (name: string) => {
    toast.success(`Initializing ${name} purchase...`);
    window.open(STRIPE_LINK, '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, idx) => (
        <motion.div
          key={product.id || idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
        >
          <div className="p-10">
            <div className="flex justify-between items-start mb-10">
              <div
                onClick={() => handlePurchase(product.name)}
                className="p-6 border border-white/10 bg-black group-hover:border-white transition-all duration-500 cursor-pointer"
              >
                {product.icon || (product.icon_name ? getIconByName(product.icon_name) : <Zap className="w-12 h-12" />)}
              </div>
              <Badge variant="secondary" className="rounded-none bg-white/5 text-ash-400 border-none uppercase text-[9px] tracking-[0.2em] px-4 py-1">
                {product.category}
              </Badge>
            </div>

            <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4">{product.name}</h3>
            <p className="text-ash-400 text-sm mb-10 leading-relaxed min-h-[60px]">
              {product.description}
              <span className="block mt-4 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                Includes: {product.includes || "ZIP File + PDF Guide + License"}
              </span>
            </p>

            <div className="space-y-4 mb-10 pt-8 border-t border-white/10">
              {Object.entries(product.stats || {}).map(([key, val]: any) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-[10px] uppercase text-ash-600 font-bold tracking-widest">{key}</span>
                  <span className="text-sm font-mono font-bold text-white">{val}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-6 pt-4">
              <span className="text-2xl font-black font-mono">{product.price}</span>
              <Button
                onClick={() => handlePurchase(product.name)}
                className="bg-white text-black hover:bg-ash-200 rounded-none px-8 font-black uppercase tracking-widest text-xs h-12"
              >
                Get Access
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
