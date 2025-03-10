"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Code, Briefcase, GraduationCap, Award, Github, Linkedin, Twitter } from "lucide-react"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  // @ts-ignore - Type issue with null refs
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/muhammadidreeskhan" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-idrees-khan-796558117/" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/happyikhan" },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-muted/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-muted/50 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary bg-primary/10 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
            My Journey
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/about/profile.jpg" 
                alt="Muhammad Idrees Khan - Front-End Developer" 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-start">
                <h3 className="text-white text-2xl font-bold mb-2">Muhammad Idrees Khan</h3>
                <p className="text-white/80 mb-4">Front-End Developer</p>
                <div className="flex space-x-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary/80 transition-colors duration-300"
                        whileHover={{ scale: 1.1, y: -3 }}
                      >
                        <Icon size={18} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg backdrop-blur-sm"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-secondary/10 rounded-lg backdrop-blur-sm"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Story</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm Muhammad Idrees Khan, a passionate Front-End Developer based in Karachi, Pakistan, specializing in building exceptional digital experiences. With a strong foundation in modern web technologies, I focus on creating responsive, user-friendly applications that combine beautiful design with optimal performance.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My expertise lies in React.js, Next.js, and modern front-end frameworks. I'm dedicated to writing clean, maintainable code and implementing best practices in web development. I enjoy collaborating with teams to transform ideas into reality and am always eager to learn new technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="bg-card/50 p-4 rounded-xl border backdrop-blur-sm">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Education</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  BS in Computer Science<br />
                  University of Karachi
                </p>
              </div>
              
              <div className="bg-card/50 p-4 rounded-xl border backdrop-blur-sm">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Experience</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  5+ Years<br />
                  Front-End Development
                </p>
              </div>
              
              <div className="bg-card/50 p-4 rounded-xl border backdrop-blur-sm">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Specialization</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  React.js, Next.js<br />
                  UI/UX Implementation
                </p>
              </div>
              
              <div className="bg-card/50 p-4 rounded-xl border backdrop-blur-sm">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Focus</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Responsive Design<br />
                  Performance Optimization
                </p>
              </div>
            </div>

            <Button className="group mt-4 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

