"use client"

import type React from "react"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    setIsSubmitting(true)

    emailjs
      .sendForm("service_w3lym1a", "template_ntf1ao7", form.current, {
        publicKey: "JdlQJXiOnzPK2sVqs",
      })
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "I'll get back to you as soon as possible.",
          })
          if (form.current) form.current.reset()
        },
        (error) => {
          toast({
            title: "Something went wrong!",
            description: "Please try again later.",
            variant: "destructive",
          })
          console.error(error)
        },
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="user_name">Name</Label>
          <Input id="user_name" name="user_name" required placeholder="Your name" aria-required="true" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="user_email">Email</Label>
          <Input
            id="user_email"
            name="user_email"
            type="email"
            required
            placeholder="Your email address"
            aria-required="true"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required placeholder="Your message" rows={5} aria-required="true" />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
      <Toaster />
    </div>
  )
}
