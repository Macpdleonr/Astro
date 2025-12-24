import { supabase } from "@/supabase"

const ERROR_CODE_ALREADY_EXISTS = '23505'

export const saveNewsLetterEmail = async (email: string) => {
  
  // For Works without bd
  return {
    duplicated: false,
    success: true,
    error: null
  }

  // This code never works bc we need to api to supabase
  const { error } = await supabase.from('newsletter').insert({email})

  if (error?.code === ERROR_CODE_ALREADY_EXISTS) {
    return {
      duplicated: true,
      success: true,
      error: null
    }
  }

  if (error) {
    console.error(error)

    return {
      duplicated: false,
      success: false,
      error: "Error saving email"
    }
  }

  return {
    duplicated: false,
    success: true,
    error: null
  }
}
