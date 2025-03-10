"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Includes product listings, cart functionality, and checkout process.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity app for managing tasks and projects. Features include drag-and-drop task organization, priority levels, and deadline tracking.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Redux", "Firebase", "Styled Components"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current conditions and forecasts for any location. Uses geolocation and weather APIs for real-time data.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["JavaScript", "API Integration", "CSS Grid", "Chart.js"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills. Features smooth animations and a modern design.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Framer Motion", "Three.js", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 5,
    title: "Recipe Finder",
    description:
      "A recipe finder app that allows users to search for recipes based on ingredients, dietary restrictions, and meal types.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "API Integration", "CSS Modules", "Jest"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "A dashboard for managing and analyzing social media accounts. Includes analytics, post scheduling, and engagement tracking.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "Vuex", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
]

const filterOptions = ["All", "Next.js", "React", "TypeScript", "Tailwind CSS", "API Integration"]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true
    return project.tags.includes(activeFilter)
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary bg-primary/10 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore my recent work and personal projects. Each project is a unique piece of development, designed and
            implemented with care and attention to detail.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filterOptions.map((filter, index) => (
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <Button
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`mb-2 rounded-full px-6 ${
                  activeFilter === filter 
                    ? "shadow-md shadow-primary/20" 
                    : "hover:bg-primary/10 border-2"
                }`}
              >
                {filter}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-card rounded-xl overflow-hidden border shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} project screenshot - ${project.description.substring(0, 50)}...`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={index < 3 ? "eager" : "lazy"}
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-muted px-3 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors duration-300"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors duration-300"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    GitHub <Github className="ml-1 h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            variant="outline" 
            className="rounded-full border-2 hover:bg-primary/10 transition-all duration-300 group px-6"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            View All Projects 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

