// Validation.ts

import * as z from "zod"

export const loginSchema = z.object({
  email: z.string().min(1, "L'adresse e-mail est requise").email("L'adresse e-mail n'est pas valide"),
  password: z.string().min(1, "Le mot de passe est requis"),
})

export const signUpSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis").min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(1, "Le nom est requis").min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().min(1, "L'adresse e-mail est requise").email("L'adresse e-mail n'est pas valide"),
  password: z
    .string()
    .min(1, "Le mot de passe est requis")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
    .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
  birthDate: z.string().min(1, "La date de naissance est requise"),
})

export type LoginFormData = z.infer<typeof loginSchema>
export type SignUpFormData = z.infer<typeof signUpSchema>

