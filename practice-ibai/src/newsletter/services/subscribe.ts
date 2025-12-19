import { supabase } from "@/supabase"

export const saveNewsLetterEmail = async (email: string) => {

  const {data, error } = await supabase.from('newsletter').insert({email})

  if (error) {
    throw new Error(error.message)
  }

  return data
}