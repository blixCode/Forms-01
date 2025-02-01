// LoginForm.tsx


"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { loginSchema, type LoginFormData } from "@/lib/validations"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    // Add your login logic here
    console.log(data)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="w-[400px] rounded-[20px] overflow-hidden shadow-lg">
        <CardHeader className="bg-purple-700 text-white p-4">
          <motion.h1
            className="text-2xl font-bold text-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Logo
          </motion.h1>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="p-6 space-y-5">
              <h2 className="text-2xl font-semibold text-purple-700 mb-6">Connexion</h2>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-purple-700">E-mail</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Votre adresse électronique"
                        {...field}
                        className="rounded-xl border-2 border-purple-700 focus-visible:ring-purple-700 h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-purple-700">Mot de passe</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Votre mot de passe"
                          {...field}
                          className="rounded-xl border-2 border-purple-700 focus-visible:ring-purple-700 pr-10 h-12"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link href="/forgot-password" className="text-purple-700 hover:underline text-sm block">
                Mot de passe oublié ?
              </Link>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800 rounded-xl h-12 text-base font-medium text-white"
              >
                Valider
              </Button>
              <div className="text-center text-sm">
                <span className="text-gray-600">Vous n'avez pas encore de compte ? </span>
                <Link href="/signup" className="text-purple-700 hover:underline font-medium">
                  Créer un compte
                </Link>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </motion.div>
  )
}

