import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),

  email: z.string().trim().email("Please enter a valid email"),

  terms: z.boolean().refine((value) => value, {
    message: "You must accept the terms and conditions",
  }),
});

export type SignupFormData = z.infer<typeof signupSchema>;
