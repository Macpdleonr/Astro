import { supabase } from "@/supabase"

const ERROR_CODE_ALREADY_EXISTS = '23505'

export const saveNewsLetterEmail = async (email: string) => {

  const {data, error } = await supabase.from('newsletter').insert({email})

  if (error?.code === ERROR_CODE_ALREADY_EXISTS) {
    return {
      duplicated: true,
      success: true,
      message: "Email already subscribed"
    }
  }

  if (error) {

    console.error(error)

    return {
      duplicated: false,
      success: false,
      message: "Error saving email"
    }
  }

  return {
    duplicated: false,
    success: true,
    error: null
  }
}