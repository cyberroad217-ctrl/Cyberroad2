import { createClient } from "@supabase/supabase-js";

// Detection for server-side vs client-side
const isServer = typeof window === 'undefined';
const supabaseUrl = isServer
  ? (process.env.SUPABASE_URL || "")
  : ((import.meta as any).env.VITE_SUPABASE_URL || "");

const supabaseAnonKey = isServer
  ? (process.env.SUPABASE_ANON_KEY || "")
  : ((import.meta as any).env.VITE_SUPABASE_ANON_KEY || "");

// Create client with fallback empty credentials during build
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-key"
);
