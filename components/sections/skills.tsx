"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Palette, Database, Globe, Layers, Cpu } from "lucide-react"

type Skill = {
  name: string
  level: number
  category: string
}

type SkillCategory = {
  name: string
  icon: React.ReactNode
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "HTML/CSS", level: 95, category: "Frontend" },
      { name: "JavaScript", level: 90, category: "Frontend" },
      { name: "TypeScript", level: 85, category: "Frontend" },
      { name: "React", level: 90, category: "Frontend" },
      { name: "Next.js", level: 85, category: "Frontend" },
    ],
  },
  {
    name: "Design",
    icon: <Palette className="h-6 w-6" />,
    skills: [
      { name: "Figma", level: 80, category: "Design" },
      { name: "Tailwind CSS", level: 90, category: "Design" },
      { name: "Framer Motion", level: 75, category: "Design" },
      { name: "UI/UX", level: 85, category: "Design" },
    ],
  },
  {
    name: "Backend",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: 80, category: "Backend" },
      { name: "Express", level: 75, category: "Backend" },
      { name: "MongoDB", level: 70, category: "Backend" },
      { name: "PostgreSQL", level: 65, category: "Backend" },
    ],
  },
  {
    name: "Other",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: "Git", level: 85, category: "Other" },
      { name: "Docker", level: 70, category: "Other" },
      { name: "AWS", level: 65, category: "Other" },
      { name: "SEO", level: 75, category: "Other" },
    ],
  },
  {
    name: "Architecture",
    icon: <Layers className="h-6 w-6" />,
    skills: [
      { name: "REST API", level: 85, category: "Architecture" },
      { name: "GraphQL", level: 75, category: "Architecture" },
      { name: "Microservices", level: 70, category: "Architecture" },
      { name: "Serverless", level: 80, category: "Architecture" },
    ],
  },
  {
    name: "Performance",
    icon: <Cpu className="h-6 w-6" />,
    skills: [
      { name: "Web Vitals", level: 85, category: "Performance" },
      { name: "Lighthouse", level: 90, category: "Performance" },
      { name: "Optimization", level: 80, category: "Performance" },
      { name: "Caching", level: 75, category: "Performance" },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl translate-y-1/4 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary bg-primary/10 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I've worked with a variety of technologies and tools in the web development ecosystem. Here's an overview of
            my technical skills and proficiency levels.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name} 
              variants={itemVariants} 
              className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-all duration-300 card-hover"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mr-4"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    background: "linear-gradient(to bottom right, rgba(var(--primary), 0.2), rgba(var(--secondary), 0.2))" 
                  }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.4 + categoryIndex * 0.1 + index * 0.05,
                      type: "spring",
                      stiffness: 100,
                      damping: 12,
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="inline-flex flex-wrap justify-center gap-4 p-6 bg-card/50 rounded-xl backdrop-blur-sm border max-w-4xl">
            {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "Git", "Docker", "AWS"].map((tech, index) => (
              <motion.div 
                key={tech}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.2)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

