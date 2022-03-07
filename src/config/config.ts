import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cgxnuaruwknqjgysuugt.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNneG51YXJ1d2tucWpneXN1dWd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYzMTcxNDQsImV4cCI6MTk2MTg5MzE0NH0.WCaV5nVlAUdqnlyBZpkxDLdjEst33o02sB3m2UVNcRs";
export const supabase = createClient(supabaseUrl, supabaseKey);
