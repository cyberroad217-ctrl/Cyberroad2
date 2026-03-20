import { RequestHandler } from "express";
import { supabase } from "../../shared/supabase";
import JSZip from "jszip";
import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Product categories and templates for diverse generation
const PRODUCT_CATEGORIES = ["Automation", "Agents", "Funnels", "Infrastructure"];
const PRODUCT_TEMPLATES = {
  Automation: [
    "Email Campaign Automation System",
    "Social Media Post Scheduler",
    "Data Pipeline Automation",
    "Customer Support Bot",
    "Lead Generation Funnel",
  ],
  Agents: [
    "Customer Service AI Agent",
    "Sales Pipeline AI Assistant",
    "Content Creator Agent",
    "Code Review Agent",
    "Data Analysis Agent",
  ],
  Funnels: [
    "E-commerce Conversion Funnel",
    "SaaS Onboarding Funnel",
    "Affiliate Sales Funnel",
    "Webinar Funnel",
    "Free Trial to Paid Funnel",
  ],
  Infrastructure: [
    "Scalable Database Architecture",
    "Microservices Infrastructure",
    "CDN Optimization Strategy",
    "API Gateway Solution",
    "Cloud Cost Optimization",
  ],
};

const ICON_NAMES = ["Brain", "Zap", "Cpu", "Network", "BarChart3", "Cog", "Workflow"];

interface GeneratedProduct {
  name: string;
  category: string;
  price: string;
  icon_name: string;
  description: string;
  details: string;
  problem: string;
  target: string;
  income: string;
  includes: string;
  stats: {
    chars?: string;
    audio_size?: string;
    cost_modeling: string;
  };
  download_url?: string;
  generate_audio: boolean;
}

// Cost modeling constants
const COST_PER_1K_CHARS = 0.015;
const STORAGE_COST_PER_GB = 0.02;
const PROCESSING_FEE = 0.50;

let openai: OpenAI | null = null;
let genAI: any = null;

function getOpenAI(): OpenAI {
  if (!openai) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return openai;
}

function getGenAI() {
  if (!genAI && process.env.GOOGLE_AI_API_KEY) {
    genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
  }
  return genAI;
}

// Generate diverse product using AI
async function generateProductMetadata(
  category: string,
  templateName: string
): Promise<Partial<GeneratedProduct>> {
  try {
    const genAI = getGenAI();
    if (!genAI) {
      // Fallback if Gemini not available
      return generateProductMetadataFallback(category, templateName);
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Create a detailed product description for a digital product in the "${category}" category based on this template: "${templateName}".

Return ONLY a JSON object with these fields (NO markdown, NO code blocks):
{
  "name": "Product name (unique, max 50 chars)",
  "description": "1-2 sentence description",
  "details": "Detailed features and benefits",
  "problem": "Problem it solves",
  "target": "Target audience",
  "income": "Expected income/ROI",
  "includes": "What's included",
  "price": "Price in format $XX or $XX.XX"
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return {
        name: parsed.name,
        description: parsed.description,
        details: parsed.details,
        problem: parsed.problem,
        target: parsed.target,
        income: parsed.income,
        includes: parsed.includes,
        price: parsed.price || "$99.00",
      };
    }
  } catch (error) {
    console.warn("Gemini generation failed, using fallback:", error);
  }

  return generateProductMetadataFallback(category, templateName);
}

function generateProductMetadataFallback(
  category: string,
  templateName: string
): Partial<GeneratedProduct> {
  return {
    name: templateName,
    description: `Professional ${category.toLowerCase()} solution designed to streamline operations`,
    details: `Complete implementation package including setup, configuration, and optimization guides`,
    problem: `Businesses struggle with complex ${category.toLowerCase()} workflows`,
    target: "Professional teams and enterprises",
    income: "3-5x return on investment",
    includes: "Complete system setup, training materials, and ongoing support",
    price: `$${Math.floor(Math.random() * 200) + 99}.00`,
  };
}

// Generate TTS audio for product
async function generateProductAudio(productName: string, description: string): Promise<Buffer> {
  const text = `${productName}. ${description}. This product includes professional implementation support and comprehensive documentation.`;

  const chunks = text.match(/.{1,4000}/g) || [];
  const audioChunks: Buffer[] = [];

  for (let i = 0; i < chunks.length; i++) {
    try {
      const response = await getOpenAI().audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: chunks[i],
      });
      const buffer = Buffer.from(await response.arrayBuffer());
      audioChunks.push(buffer);
    } catch (error) {
      console.warn(`Failed to generate audio chunk ${i}:`, error);
    }
  }

  return audioChunks.length > 0 ? Buffer.concat(audioChunks) : Buffer.alloc(0);
}

// Create ZIP package for product
async function createProductPackage(product: GeneratedProduct, audioBuffer?: Buffer): Promise<Buffer> {
  const zip = new JSZip();

  // Add product metadata
  const metadata = {
    name: product.name,
    category: product.category,
    description: product.description,
    details: product.details,
    problem: product.problem,
    target: product.target,
    income: product.income,
    includes: product.includes,
    generatedAt: new Date().toISOString(),
    pricing: product.price,
  };

  zip.file("product.json", JSON.stringify(metadata, null, 2));
  zip.file("README.txt", `Product: ${product.name}\nCategory: ${product.category}\n\n${product.details}`);

  // Add audio if available
  if (audioBuffer && audioBuffer.length > 0) {
    zip.file(`${product.name.replace(/\s+/g, "_")}_Overview.mp3`, audioBuffer);
  }

  return await zip.generateAsync({ type: "nodebuffer" });
}

// Main agent loop handler
export const handleAgentLoop: RequestHandler = async (req, res) => {
  try {
    const { count = 5, generateAudio = false } = req.body || req.query;
    const productCount = Math.min(parseInt(count as string) || 5, 20);

    console.log(`🤖 Starting AI Agent loop to generate ${productCount} products...`);

    const generatedProducts = [];

    for (let i = 0; i < productCount; i++) {
      const category = PRODUCT_CATEGORIES[i % PRODUCT_CATEGORIES.length];
      const templates = PRODUCT_TEMPLATES[category as keyof typeof PRODUCT_TEMPLATES];
      const template = templates[i % templates.length];
      const iconName = ICON_NAMES[i % ICON_NAMES.length];

      console.log(`Generating product ${i + 1}/${productCount}: ${template}`);

      // Generate product metadata
      const metadata = await generateProductMetadata(category, template);

      const product: GeneratedProduct = {
        name: metadata.name || template,
        category,
        price: metadata.price || "$99.00",
        icon_name: iconName,
        description: metadata.description || "",
        details: metadata.details || "",
        problem: metadata.problem || "",
        target: metadata.target || "",
        income: metadata.income || "",
        includes: metadata.includes || "",
        stats: {
          cost_modeling: "Premium AI Neural Processing",
        },
        generate_audio: generateAudio && i % 3 === 0, // Generate audio for every 3rd product
      };

      // Generate audio for subset of products
      let zipBuffer = Buffer.alloc(0);
      if (product.generate_audio) {
        console.log(`  Generating audio for ${product.name}...`);
        try {
          const audioBuffer = await generateProductAudio(product.name, product.description);
          zipBuffer = await createProductPackage(product, audioBuffer);
          product.stats.audio_size = `${(audioBuffer.length / 1024 / 1024).toFixed(2)} MB`;
        } catch (error) {
          console.warn(`Audio generation failed for ${product.name}:`, error);
          zipBuffer = await createProductPackage(product);
        }
      } else {
        zipBuffer = await createProductPackage(product);
      }

      // Upload to Supabase Storage
      const fileName = `${Date.now()}_${product.name.replace(/\s+/g, "_")}.zip`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("products")
        .upload(fileName, zipBuffer, { contentType: "application/zip" });

      if (uploadError) {
        console.warn(`Failed to upload ${product.name}:`, uploadError);
        continue;
      }

      // Get public URL
      const { data: urlData } = supabase.storage.from("products").getPublicUrl(fileName);
      product.download_url = urlData.publicUrl;

      // Insert into database
      const { data: dbData, error: dbError } = await supabase
        .from("products")
        .insert([
          {
            name: product.name,
            category: product.category,
            price: product.price,
            icon_name: product.icon_name,
            description: product.description,
            details: product.details,
            problem: product.problem,
            target: product.target,
            income: product.income,
            includes: product.includes,
            stats: product.stats,
            download_url: product.download_url,
          },
        ])
        .select();

      if (dbError) {
        console.warn(`Failed to save product to database:`, dbError);
        continue;
      }

      generatedProducts.push(dbData?.[0] || product);
      console.log(`✓ Successfully created: ${product.name}`);
    }

    res.status(200).json({
      success: true,
      message: `AI Agent generated ${generatedProducts.length} products`,
      productsGenerated: generatedProducts.length,
      products: generatedProducts,
    });
  } catch (error: any) {
    console.error("Agent Loop Error:", error);
    res.status(500).json({ error: error.message });
  }
};

// Trigger agent loop on schedule
export async function startAgentLoopScheduler() {
  console.log("🕐 Starting AI Agent loop scheduler...");

  // Run every 30 minutes
  setInterval(async () => {
    try {
      console.log("⏰ Agent loop scheduled run triggered");
      // Fetch from own endpoint to trigger generation
      const response = await fetch("http://localhost:3001/api/agent-loop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count: 3, generateAudio: false }),
      });

      if (!response.ok) {
        console.warn(`Agent loop failed: ${response.statusText}`);
      }
    } catch (error) {
      console.warn("Agent loop scheduler error:", error);
    }
  }, 30 * 60 * 1000); // 30 minutes
}
