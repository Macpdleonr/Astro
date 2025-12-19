import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.BASE_URL
const supabaseKey = import.meta.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey); 