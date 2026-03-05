import { createClient } from "@supabase/supabase-js";

// Detection for server-side vs client-side
const supabaseUrl = typeof window !== 'undefined' 
  ? (import.meta as any).env.VITE_SUPABASE_URL 
  : process.env.SUPABASE_URL;

const supabaseAnonKey = typeof window !== 'undefined' 
  ? (import.meta as any).env.VITE_SUPABASE_ANON_KEY 
  : process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(
  supabaseUrl || "",
  supabaseAnonKey || ""
);
