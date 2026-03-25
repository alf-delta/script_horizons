import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://vqoxmbdhkodawlzliuvk.supabase.co";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_tSPEttp_tRGKpKY8WjFeew_8CNDYhnz";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
