import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xsqbklcvmnfsmouealwb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzcWJrbGN2bW5mc21vdWVhbHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNTY2OTIsImV4cCI6MjAyMzgzMjY5Mn0.wuyViE3jba6YVMOw3OswHsKhuzgYF97SNl84d1a9ibA";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
