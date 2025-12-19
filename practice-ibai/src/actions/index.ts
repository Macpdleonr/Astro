import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  newsletter: defineAction({
    input: z.object({
      email: z.string().email()
    }),
    async handler( {email} ){
      console.log({ email });

      return { 
        success: true,
        message: "Email saved!"
      }
    }
  })
}