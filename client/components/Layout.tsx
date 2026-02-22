import { Link } from "react-router-dom";
import { Cpu, Zap, Brain, Database, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Marketplace", path: "/marketplace", icon: <ShoppingCart className="w-4 h-4" /> },
    { name: "Neural Chips", path: "/chips", icon: <Cpu className="w-4 h-4" /> },
    { name: "Multi Brains", path: "/brains", icon: <Brain className="w-4 h-4" /> },
    { name: "Quantum", path: "/quantum", icon: <Zap className="w-4 h-4" /> },
    { name: "Infrastructure", path: "/infra", icon: <Database className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-none group-hover:scale-110 transition-transform duration-300">
              <Brain className="text-black w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Cyber Road</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-ash-400 hover:text-white transition-colors flex items-center gap-2"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => window.open("https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00", '_blank')}
              variant="outline"
              className="rounded-none border-white/20 hover:bg-white hover:text-black transition-all duration-300"
            >
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-24 px-4 md:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold border-b border-white/10 pb-4 flex items-center gap-4"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white flex items-center justify-center">
                  <Brain className="text-black w-5 h-5" />
                </div>
                <span className="text-lg font-bold tracking-tighter uppercase">Cyber Road</span>
              </Link>
              <p className="text-ash-400 max-w-sm mb-6 leading-relaxed">
                The world's first AI-driven marketplace for neural quantum assets. 
                Powered by autonomous AI agents creating and deploying digital products nonstop.
              </p>
              <div className="flex gap-4">
                <div
                  onClick={() => window.open("https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00", '_blank')}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  <span className="font-bold text-xs">TW</span>
                </div>
                <div
                  onClick={() => window.open("https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00", '_blank')}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  <span className="font-bold text-xs">DC</span>
                </div>
                <div
                  onClick={() => window.open("https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00", '_blank')}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  <span className="font-bold text-xs">GH</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase mb-6 text-sm tracking-widest text-white">Marketplace</h4>
              <ul className="flex flex-col gap-4 text-sm text-ash-400">
                <Link to="/chips" className="hover:text-white transition-colors cursor-pointer">Neural Chips</Link>
                <Link to="/quantum" className="hover:text-white transition-colors cursor-pointer">Quantum Processors</Link>
                <Link to="/brains" className="hover:text-white transition-colors cursor-pointer">AI Multi-Brains</Link>
                <Link to="/infra" className="hover:text-white transition-colors cursor-pointer">Infrastructure</Link>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase mb-6 text-sm tracking-widest text-white">System</h4>
              <ul className="flex flex-col gap-4 text-sm text-ash-400">
                <li onClick={() => window.open("https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00", '_blank')} className="hover:text-white transition-colors cursor-pointer">Status</li>
                <li onClick={() => window.open("https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00", '_blank')} className="hover:text-white transition-colors cursor-pointer">Documentation</li>
                <li onClick={() => window.open("https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00", '_blank')} className="hover:text-white transition-colors cursor-pointer">API Keys</li>
                <li onClick={() => window.open("https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00", '_blank')} className="hover:text-white transition-colors cursor-pointer">Security</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
            <p className="text-xs text-ash-500 uppercase tracking-tighter">
              &copy; 2024 CYBER ROAD NEURAL SYSTEMS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <span className="text-xs text-ash-500 uppercase tracking-tighter hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="text-xs text-ash-500 uppercase tracking-tighter hover:text-white cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
