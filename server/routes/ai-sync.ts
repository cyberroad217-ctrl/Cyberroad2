import { RequestHandler } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";
import { Product, AISyncResponse } from "@shared/api";

export const handleAISync: RequestHandler = async (req, res) => {
  const googleKey = process.env.GOOGLE_AI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  if (!googleKey && !openaiKey) {
    console.warn("AI keys missing from environment. Using sample data.");
    return res.status(200).json({
      products: getSampleProducts()
    });
  }

  try {
    let products: Product[] = [];

    if (googleKey) {
      console.log("Using Google AI API for product generation...");
      const genAI = new GoogleGenerativeAI(googleKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Generate 4-8 high-demand 2026 digital AI software products for the Cyber Road marketplace.
      Every product must be a digital download (ZIP file), NOT hardware.
      Return a JSON array of objects with the following structure:
      {
        "id": "string (unique)",
        "name": "string (premium sounding AI product)",
        "category": "string (one of: Automation, SaaS, Marketing, eCommerce, Income, Agents, Chatbots, Social, Funnels, Data, Finance, Career, Productivity, Monetization, Resell, Micro SaaS)",
        "price": "string (e.g. $197.00)",
        "iconName": "string (one of: Radio, Layers, Terminal, Globe, Brain, Zap, Activity, Database, Shield, ShieldCheck, Mail, BarChart3, Download)",
        "description": "string (compelling 1-2 sentence description)",
        "details": "string (short blurb about delivery, license, etc.)",
        "problem": "string (the specific problem it solves)",
        "target": "string (who it's for)",
        "income": "string (the benefit/ROI)",
        "includes": "string (what files are in the ZIP)",
        "stats": { "key1": "val1", "key2": "val2" } (up to 2 specific stats)
      }
      Focus on realism, trust, and Stripe-compliance. Do NOT include hardware claims.`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      // Parse JSON from markdown-wrapped block if necessary
      const jsonStr = text.match(/\[[\s\S]*\]/)?.[0] || text;
      products = JSON.parse(jsonStr);
    } else if (openaiKey) {
      console.log("Using OpenAI API for product generation...");
      const openai = new OpenAI({ apiKey: openaiKey });
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{
          role: "user",
          content: `Generate 4-8 high-demand 2026 digital AI software products for the Cyber Road marketplace. Every product must be a digital download (ZIP file). Return as a JSON array of objects with fields: id, name, category, price, iconName, description, details, problem, target, income, includes, stats.`
        }],
        response_format: { type: "json_object" }
      });
      const content = response.choices[0].message.content || "";
      const data = JSON.parse(content);
      products = data.products || data;
    }

    res.status(200).json({ products });
  } catch (error) {
    console.error("AI Sync failed:", error);
    res.status(500).json({ 
      error: "Internal server error during AI sync",
      products: getSampleProducts() // Provide fallback
    });
  }
};

function getSampleProducts(): Product[] {
  return [
    {
      id: `fallback-${Date.now()}-1`,
      name: "Neural Nexus Core (Lite)",
      category: "Automation",
      price: "$97.00",
      iconName: "Radio",
      description: "A foundational AI automation framework for basic business logic and task delegation.",
      details: "Instant Digital Download (ZIP File) • Includes Software Files + Basic Guide • Commercial License",
      problem: "Solves basic repetition in daily digital tasks.",
      target: "For solo entrepreneurs and small teams.",
      income: "Saves 5-10 hours per week.",
      includes: "JSON templates, Node.js scripts, PDF guide.",
      stats: { "efficiency": "High", "setup": "Fast" }
    },
    {
      id: `fallback-${Date.now()}-2`,
      name: "AI Agent Swarm v1",
      category: "Agents",
      price: "$149.00",
      iconName: "Brain",
      description: "Deploy up to 5 custom AI agents to handle research and content drafting.",
      details: "Instant Digital Download (ZIP File) • Includes Agent Core + Prompt Bundles • Commercial License",
      problem: "Solves the burden of constant research and initial drafting.",
      target: "For content creators and market researchers.",
      income: "Speeds up initial content generation by 300%.",
      includes: "Agent logic files, 50+ prompt templates, training guide.",
      stats: { "capacity": "5 Agents", "engine": "Neural" }
    }
  ];
}
