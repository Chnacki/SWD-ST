// =========================================================
// KONFIGURACJA - wpisz tu dane swojego projektu Supabase
// Supabase Dashboard -> Project Settings -> API
// =========================================================
const SUPABASE_URL = "https://mszoffwbrksiietxevxi.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zem9mZndicmtzaWlldHhldnhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4NDIwMTYsImV4cCI6MjA5ODQxODAxNn0.TuWdUtmCdga4dB1hbLCXEUw8K2D6iWb5T4Z6VqWDriw";

// hasło do panelu admina (apka 3) - zmień na własne
const ADMIN_PASSWORD = "CF300-01";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
