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
    title: "Real Estate Funnel CRM",
    description:
      "A comprehensive CRM system for real estate agents to manage leads, track conversions, and optimize their sales funnel process.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "CRM", "Real Estate", "Tailwind CSS"],
    demoUrl: "https://real-estate-funnel-crm.vercel.app/",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Healthcard Haven",
    description:
      "A digital health card management platform that allows users to store, access, and share their health information securely.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Healthcare", "Authentication", "API Integration"],
    demoUrl: "https://healthcard-haven.vercel.app/",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Invoice & Stock Sync",
    description:
      "An integrated system for managing invoices and inventory, providing real-time synchronization between sales and stock levels.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Inventory Management", "Invoicing", "Database"],
    demoUrl: "https://invoice-stock-sync.vercel.app/",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 4,
    title: "CareFlow Optimizer",
    description:
      "A healthcare workflow optimization tool designed to improve patient care processes and staff efficiency in medical facilities.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Healthcare", "Workflow", "Dashboard"],
    demoUrl: "https://careflow-optimizer.vercel.app/",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 5,
    title: "Service Swap",
    description:
      "A platform for users to exchange services and skills, creating a community marketplace for talent and expertise.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Marketplace", "Authentication", "API Integration"],
    demoUrl: "https://service-swap-rose.vercel.app/",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "Voice Prompt Reformulator",
    description:
      "An AI-powered tool that helps users refine and optimize voice prompts for better interaction with voice assistants and systems.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "AI", "Voice Processing", "Natural Language"],
    demoUrl: "https://voice-prompt-reformulator.vercel.app/",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 7,
    title: "Eco Linker",
    description:
      "A platform connecting eco-friendly businesses and consumers, promoting sustainable products and services.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Sustainability", "Marketplace", "API Integration"],
    demoUrl: "https://eco-linker.vercel.app/",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 8,
    title: "Mirbat Explorer",
    description:
      "An interactive guide and exploration tool for the historical city of Mirbat, showcasing its culture, landmarks, and heritage.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Tourism", "Interactive Maps", "Cultural Heritage"],
    demoUrl: "https://mirbat-explorer.vercel.app/",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 9,
    title: "Basic Calculator",
    description:
      "A clean, functional calculator web application with a modern interface and responsive design.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "JavaScript", "CSS", "Web Tools"],
    demoUrl: "https://basic-calculator-rust-theta.vercel.app/",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 10,
    title: "Treawell Visibility Builder",
    description:
      "A tool for businesses to enhance their online visibility, manage their digital presence, and track performance metrics.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "SEO", "Analytics", "Business Tools"],
    demoUrl: "https://treawell-visibility-builder.vercel.app/",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 11,
    title: "EDSP Solution",
    description:
      "An educational digital service platform providing tools and resources for remote learning and educational management.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Education", "E-Learning", "Dashboard"],
    demoUrl: "https://edsp-solution.vercel.app/",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 12,
    title: "3Plex Aero Synergy",
    description:
      "An aerospace industry solution for managing complex workflows, maintenance schedules, and operational efficiency.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Aerospace", "Workflow Management", "Dashboard"],
    demoUrl: "https://3plex-aero-synergy.vercel.app/",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 13,
    title: "Tutor Map Connector",
    description:
      "A platform connecting students with tutors based on location, subject expertise, and availability.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Education", "Mapping", "Matching Algorithm"],
    demoUrl: "https://tutor-map-connector.vercel.app/",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 14,
    title: "Business ERP System",
    description:
      "A comprehensive enterprise resource planning system for businesses to manage operations, finances, and resources.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "ERP", "Business Management", "Dashboard"],
    demoUrl: "https://business-erpsystem.vercel.app/",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 15,
    title: "WhatsApp Business Solution",
    description:
      "A platform for businesses to leverage WhatsApp for customer communication, support, and marketing campaigns.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "WhatsApp API", "Business Communication", "CRM"],
    demoUrl: "https://whatsappbusiness.vercel.app/",
    githubUrl: "https://github.com",
    featured: false,
  },
]

const filterOptions = ["All", "Next.js", "React", "Healthcare", "Business Management", "Education", "API Integration"]

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

