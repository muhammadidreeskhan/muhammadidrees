"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter, Briefcase } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const ref = useRef<HTMLDivElement>(null)
  // @ts-ignore - Type issue with null refs
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      // For demo purposes, randomly succeed or fail
      const success = Math.random() > 0.2
      setFormStatus(success ? "success" : "error")

      if (success) {
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        // Reset form status after 3 seconds
        setTimeout(() => {
          setFormStatus("idle")
        }, 3000)
      }
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "contactmuhammadidrees@gmail.com",
      link: "mailto:contactmuhammadidrees@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      content: "Karachi, Pakistan",
      link: "https://maps.google.com/?q=Karachi+Pakistan",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Work Status",
      content: "Available for remote work",
      link: "/#contact",
    },
  ]

  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, href: "https://github.com/muhammadidreeskhan" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/muhammad-idrees-khan-796558117/" },
    { name: "Twitter", icon: <Twitter size={20} />, href: "https://x.com/happyikhan" },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-muted/50 to-transparent"></div>
      <div className="absolute -top-24 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary bg-primary/10 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Say Hello
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out to me using the contact form below or
            through any of the provided contact methods.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-xl p-8 border shadow-md h-full backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8 relative inline-block">
                Contact Information
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              </h3>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 mr-4 shadow-sm"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5, 
                        background: "linear-gradient(to bottom right, rgba(var(--primary), 0.2), rgba(var(--secondary), 0.2))"
                      }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-lg">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors relative inline-block group-hover:text-primary"
                        target={info.title === "Location" ? "_blank" : undefined}
                        rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                      >
                        {info.content}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-6 relative inline-block">
                  Connect With Me
                  <span className="absolute -bottom-1 left-0 w-2/3 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full"></span>
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-card border hover:bg-primary/10 transition-colors flex items-center justify-center shadow-sm"
                      aria-label={link.name}
                      whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-xl p-8 border shadow-md backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8 relative inline-block">
                Send Me a Message
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <Label htmlFor="name" className="text-foreground/90 font-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border-muted bg-background/50 focus:border-primary transition-colors"
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <Label htmlFor="email" className="text-foreground/90 font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border-muted bg-background/50 focus:border-primary transition-colors"
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Label htmlFor="subject" className="text-foreground/90 font-medium">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-muted bg-background/50 focus:border-primary transition-colors"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <Label htmlFor="message" className="text-foreground/90 font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[180px] rounded-lg border-muted resize-none bg-background/50 focus:border-primary transition-colors"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : formStatus === "success" ? (
                      <span className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Message Sent!
                      </span>
                    ) : formStatus === "error" ? (
                      <span className="flex items-center">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        Failed to Send
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>

                  {formStatus === "error" && (
                    <p className="text-destructive text-sm mt-2">
                      There was an error sending your message. Please try again later.
                    </p>
                  )}
                  
                  {formStatus === "success" && (
                    <motion.p 
                      className="text-primary text-sm mt-2 flex items-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Thank you for your message! I'll get back to you soon.
                    </motion.p>
                  )}
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

