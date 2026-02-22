import Layout from "@/components/Layout";
import { ShieldCheck, FileText, Lock } from "lucide-react";

const policies = [
  {
    title: "Terms of Service",
    path: "/terms",
    icon: <FileText className="w-12 h-12" />,
    content: [
      "Welcome to Cyber Road. By using our services, you agree to these terms.",
      "All AI-powered digital tools and products remain the intellectual property of Cyber Road unless explicitly stated otherwise.",
      "Users are granted a limited, non-exclusive license to use or resell products purchased through our marketplace.",
      "Unauthorized duplication of the Cyber Road platform or infrastructure is strictly prohibited.",
      "We reserve the right to modify these terms at any time as our AI network evolves."
    ]
  },
  {
    title: "Privacy Policy",
    path: "/privacy",
    icon: <Lock className="w-12 h-12" />,
    content: [
      "Your neural data and personal information are protected by end-to-end hardware encryption.",
      "We collect only the data necessary to provide and improve our marketplace services.",
      "Third-party AI agents may process anonymized data for ecosystem optimization.",
      "Cyber Road never sells your personal data to external entities.",
      "You have the right to request a complete deletion of your account and associated data from our neural clusters."
    ]
  },
  {
    title: "Refund Policy",
    path: "/refund",
    icon: <ShieldCheck className="w-12 h-12" />,
    content: [
      "Cyber Road offers a 7-Day Refund Guarantee on all digital product purchases.",
      "Refund requests must be initiated within 7 days of the transaction date.",
      "To be eligible for a refund, the digital license must not have been fully activated or integrated into a production environment.",
      "Processing of refunds takes 3-5 business days back to the original payment method.",
      "Subscriptions to neural infrastructure services may have different refund conditions as stated during procurement."
    ]
  },
  {
    title: "Delivery Terms",
    path: "/delivery",
    icon: <FileText className="w-12 h-12" />,
    content: [
      "All digital products on Cyber Road are delivered instantly via secure download links.",
      "Upon successful transaction, you will receive an email with your unique neural access keys.",
      "Delivery is performed through our global edge network to ensure zero-latency distribution.",
      "If you do not receive your download link within 60 seconds, please check your network filters or contact support.",
      "Large infrastructure deployments may require up to 5 minutes for full neural cluster synchronization."
    ]
  }
];

export default function LegalPage({ type }: { type: 'terms' | 'privacy' | 'refund' | 'delivery' }) {
  const policy = policies.find(p => p.path === `/${type}`) || policies[0];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto border border-white/10 bg-white/[0.01] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            {policy.icon}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
            {policy.title}
          </h1>

          <div className="space-y-10">
            {policy.content.map((text, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="text-2xl font-black text-ash-800 group-hover:text-white transition-colors">0{i+1}</div>
                <p className="text-ash-400 text-lg leading-relaxed pt-1">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-xs text-ash-600 font-mono uppercase tracking-[0.2em]">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <div className="text-xs text-ash-600 font-mono uppercase tracking-[0.2em]">
              Verified by Neural Core v2.4
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
