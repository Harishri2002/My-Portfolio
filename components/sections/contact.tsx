"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { EnergyCanvas } from "@/components/three-d/energy-canvas"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Contact</h2>
        <p className="text-lg mb-12 max-w-2xl">
          Have a project in mind or just want to chat? Fill out the form below, and I'll get back to you as soon as
          possible!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          <div className="order-1 lg:order-2 h-[50vh]">
            <EnergyCanvas />
          </div>
        </div>

        {/* Enhanced UI for the "Prefer to connect directly" section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-primary">Prefer to connect directly?</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Mail className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-medium mb-1">Email</h4>
                <p className="text-sm text-muted-foreground">harishribr4@gmail.com</p>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Phone className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-medium mb-1">Phone</h4>
                <p className="text-sm text-muted-foreground">+91 8921875876</p>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <MapPin className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-sm text-muted-foreground">Bangalore, India</p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
            >
              <Link href="/contact">View Full Contact Details</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
