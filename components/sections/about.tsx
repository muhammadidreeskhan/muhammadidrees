"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Profile" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-secondary/10 rounded-lg"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
            </div>

            <p className="text-muted-foreground">
              Hello! I'm John Doe, a passionate web developer with over 5 years of experience in creating beautiful,
              functional, and user-centered digital experiences. I am based in New York City, where I work as a senior
              frontend developer.
            </p>

            <p className="text-muted-foreground">
              I believe that great design should not sacrifice functionality and performance. My approach to design is
              minimalistic and focused on user experience. I specialize in building responsive websites, web
              applications, and everything in between.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  B.S. in Computer Science
                  <br />
                  University of Technology
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Experience</h3>
                <p className="text-muted-foreground">
                  5+ Years
                  <br />
                  Frontend Development
                </p>
              </div>
            </div>

            <Button className="group">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

