"use client"

import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from '@/components/ui/use-toast'
import Link from 'next/link'

const formSchema = z.object({
  name: z.string({
    required_error: "Name is required"
  }).min(2, {
    message: "Name must be at least 2 characters.",
  }).max(20, {
    message: "Name must be at most 20 characters"
  }).trim(),
  email: z.string({
    required_error: "Email is required"
  }).trim().email({
    message: "Enter a valid Email"
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters"
  }),
})


export default function Register() {

  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    // const resp = await register(values)
    try {
      const resp = await fetch("/api/register", {
        body: JSON.stringify(values),
        method: "POST"
      })

      if (!resp.ok) return toast({
        variant: "destructive",
        title: "Something went wrong"
      })

      const res = await resp.json()

      if (!res.success) return toast({
        variant: "destructive",
        title: res.error
      })

      toast({
        title: "Success"
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong"
      })
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className='min-h-screen  justify-center items-center flex flex-col gap-4 p-4'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 lg:min-w-[25rem] shadow-md p-8">
          <h2 className='text-2xl font-semibold text-center'>Register</h2>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email'  {...field} />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password'  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="my-4 text-sm">
            {"Already have an account "}<Link className='underline text-blue-700' href="/login">Login</Link>
          </div>
          <Button disabled={loading} type="submit">
            {loading ? <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </> : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
