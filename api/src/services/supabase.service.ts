import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

const env = process.env;

dotenv.config();

export const SupabaseService = createClient(
  env.SUPABASE_URL as string,
  env.SUPABASE_KEY as string
);
