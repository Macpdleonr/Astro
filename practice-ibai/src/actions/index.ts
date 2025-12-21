import { saveNewsLetterEmail } from "@/newsletter/services/subscribe";
import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  newsletter: defineAction({
    input: z.object({
      email: z.string().email('Sorry, that email is not valid.'),
    }),
    async handler( {email} ){

      const { success, duplicated, error }= await saveNewsLetterEmail(email)

      if (!success) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error ?? 'Error saving email'
        })
      }
      
      if (duplicated) {
        return {
          success: true,
          message:  'This email is already subscribed to the newsletter.'
        }
      }

      return { 
        success: true,
        message: "Email saved!"
      }
    }
  })
}