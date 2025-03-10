"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/ui/particle-background"

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return

      const layers = parallaxRef.current.querySelectorAll(".parallax-layer")
      const x = (window.innerWidth - e.pageX * 2) / 100
      const y = (window.innerHeight - e.pageY * 2) / 100

      layers.forEach((layer, index) => {
        const speed = index / 10
        const htmlLayer = layer as HTMLElement
        htmlLayer.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`
      })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <ParticleBackground />

      <div ref={parallaxRef} className="parallax container mx-auto px-4 z-10">
        <div className="parallax-layer" data-depth="0.1">
          <motion.div
            className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="parallax-layer" data-depth="0.2">
          <motion.div
            className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="parallax-layer" data-depth="0.15">
          <motion.div
            className="absolute top-2/3 left-1/4 w-72 h-72 rounded-full bg-accent/15 blur-3xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-xl md:text-2xl font-medium text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                  Hello, I'm
                </h2>
              </motion.div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold reveal-text">Muhammad Idrees</h1>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground reveal-text"
                style={{ animationDelay: "0.2s" }}
              >
                Creative Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
              Let's create something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="group rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 hover:bg-primary/10 transition-all duration-300"
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact Me
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-20 blur-2xl"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                  <motion.div 
                    className="absolute inset-4 rounded-full bg-gradient-to-r from-primary to-secondary opacity-80"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                  <div className="absolute inset-6 rounded-full bg-background flex items-center justify-center backdrop-blur-sm">
                    <svg
                      width="160"
                      height="160"
                      viewBox="0 0 160 160"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-32 h-32 md:w-48 md:h-48"
                    >
                      <path
                        d="M80 20C46.9 20 20 46.9 20 80C20 113.1 46.9 140 80 140C113.1 140 140 113.1 140 80C140 46.9 113.1 20 80 20Z"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="text-primary"
                        strokeDasharray="377"
                        strokeDashoffset="377"
                        style={{
                          animation: "dash 2s 0.5s ease-out forwards"
                        }}
                      />
                      <path
                        d="M50 80L70 100L110 60"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-secondary"
                        strokeDasharray="113"
                        strokeDashoffset="113"
                        style={{
                          animation: "dash 1.5s 2s ease-out forwards"
                        }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

