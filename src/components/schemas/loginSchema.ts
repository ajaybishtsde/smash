import { z } from "zod";

export const loginSchema = z.object({
  phoneNumber: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number")
    .max(10, "Please enter a valid phone number"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
