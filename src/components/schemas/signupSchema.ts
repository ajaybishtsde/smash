import { z } from "zod";

export const signupSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters"),

  lastName: z.string().trim().min(2, "Last name must be at least 2 characters"),

  phoneNumber: z.string().trim().min(7, "Please enter a valid phone number"),

  terms: z.boolean().refine((value) => value === true, {
    message: "Please accept the terms and conditions",
  }),
});

export type SignupFormData = z.infer<typeof signupSchema>;
