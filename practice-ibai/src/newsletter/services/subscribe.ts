import { supabase } from "@/supabase"

export const saveNewsLetterEmail = async (email: string) => {

  const {data, error } = await supabase.from('newsletter').insert({email})

  if (error) {

    console.error(error)
    
    return {
      success: false,
      message: "Error saving email"
    }
  }

  return {
    success: true,
    error: null
  }
}