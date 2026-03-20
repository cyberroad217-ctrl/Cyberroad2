import { RequestHandler } from "express";
import { supabase } from "../../shared/supabase";
import { PDFParse } from "pdf-parse";
import JSZip from "jszip";
import OpenAI from "openai";
import { Product } from "../../shared/api";

let openai: OpenAI | null = null;

function getOpenAI(): OpenAI {
  if (!openai) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return openai;
}

// Cost modeling constants
const COST_PER_1K_CHARS = 0.015; // Simulated OpenAI TTS HD cost
const STORAGE_COST_PER_GB = 0.02; // Supabase/S3 pricing
const PROCESSING_FEE = 0.50; // Fixed infra fee per book

export const handlePublish: RequestHandler = async (req, res) => {
  try {
    const { name, category, price, pdfBase64, description, target, problem, income, includes } = req.body;

    if (!pdfBase64) {
      return res.status(400).json({ error: "No PDF content provided" });
    }

    console.log(`Starting AI Publishing Engine for: ${name}`);

    // 1. Text Extraction
    const pdfBuffer = Buffer.from(pdfBase64, 'base64');
    const data = await PDFParse(pdfBuffer);
    const text = data.text;
    const charCount = text.length;

    console.log(`Extracted ${charCount} characters. Starting TTS...`);

    // 2. TTS Generation (OpenAI)
    // Chunking text (OpenAI TTS limit is 4096 chars)
    const chunks = text.match(/.{1,4000}/g) || [];
    const audioChunks: Buffer[] = [];

    // Layer 3: Automated TTS pipeline (Chunked processing)
    for (let i = 0; i < chunks.length; i++) {
      console.log(`Generating audio chunk ${i+1}/${chunks.length}...`);
      const response = await getOpenAI().audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: chunks[i],
      });
      const buffer = Buffer.from(await response.arrayBuffer());
      audioChunks.push(buffer);
    }

    const finalAudio = Buffer.concat(audioChunks);

    // 3. ZIP Packaging
    const zip = new JSZip();
    zip.file(`${name.replace(/\s+/g, '_')}_Audiobook.mp3`, finalAudio);
    zip.file("Source_Document.pdf", pdfBuffer);
    zip.file("AI_Prompts_Bundle.txt", `Generated from: ${name}\nOriginal chars: ${charCount}\nProcessing date: ${new Date().toISOString()}`);
    
    const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

    // 4. Cloud Storage Upload (Supabase Storage)
    const fileName = `${Date.now()}_${name.replace(/\s+/g, '_')}.zip`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('products')
      .upload(fileName, zipBuffer, { contentType: 'application/zip' });

    if (uploadError) throw uploadError;

    // Get Public URL
    const { data: urlData } = supabase.storage
      .from('products')
      .getPublicUrl(fileName);

    const downloadUrl = urlData.publicUrl;

    // 5. Database Entry (Supabase DB)
    const product: any = {
      name,
      category,
      price,
      icon_name: "Brain",
      description,
      details: `Instant Digital Download (ZIP File) • ${charCount.toLocaleString()} chars processed • Commercial License`,
      problem,
      target,
      income,
      includes: includes || "MP3 Audiobook + PDF Source + AI Prompts",
      stats: {
        chars: charCount.toString(),
        audio_size: `${(finalAudio.length / 1024 / 1024).toFixed(2)} MB`,
        cost_modeling: "Premium AI Neural Processing"
      },
      download_url: downloadUrl
    };

    const { data: dbData, error: dbError } = await supabase
      .from('products')
      .insert([product])
      .select();

    if (dbError) throw dbError;

    // Layer 4: Monetization + Scaling + Cost Modeling
    const processingCost = (charCount / 1000) * COST_PER_1K_CHARS + PROCESSING_FEE;
    const margin = parseFloat(price.replace('$', '')) - processingCost;

    res.status(200).json({
      success: true,
      product: dbData[0],
      analysis: {
        charCount,
        chunks: chunks.length,
        estimatedCost: `$${processingCost.toFixed(4)}`,
        profitMargin: `$${margin.toFixed(2)}`
      }
    });

  } catch (error: any) {
    console.error("Publishing Engine Error:", error);
    res.status(500).json({ error: error.message });
  }
};

export const handleGetProducts: RequestHandler = async (req, res) => {
  try {
    const { category } = req.query;
    let query = supabase.from('products').select('*');
    
    if (category && category !== 'All') {
      query = query.eq('category', category);
    }
    
    const { data, error } = await query.order('created_at', { ascending: false });
    
    if (error) throw error;
    res.status(200).json({ products: data });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
