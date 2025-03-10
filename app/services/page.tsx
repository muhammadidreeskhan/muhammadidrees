"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brush, Code, Database, Globe, Layout, Search, ShoppingBag, Smartphone, Zap } from "lucide-react"

const services = [
  {
    title: "Custom Web Development",
    description: "Tailored web solutions built with React.js and Next.js to meet your specific needs.",
    icon: Code,
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress websites with responsive designs, plugins, and theme development.",
    icon: Globe,
  },
  {
    title: "Wix Development",
    description: "Professional Wix websites with custom functionality and stunning designs.",
    icon: Layout,
  },
  {
    title: "Webflow Development",
    description: "Creating dynamic, responsive websites using Webflow's powerful platform.",
    icon: Zap,
  },
  {
    title: "Squarespace Development",
    description: "Beautiful Squarespace websites with custom designs and functionality.",
    icon: Layout,
  },
  {
    title: "SEO Optimization",
    description: "Improving your website's visibility and ranking in search engine results.",
    icon: Search,
  },
  {
    title: "Amazon PPC",
    description: "Strategic Amazon advertising campaigns to boost your product visibility and sales.",
    icon: ShoppingBag,
  },
  {
    title: "Logo Design",
    description: "Creative and memorable logo designs that represent your brand identity.",
    icon: Brush,
  },
  {
    title: "Brand Identity",
    description: "Comprehensive branding solutions including visual identity and brand guidelines.",
    icon: Brush,
  },
  {
    title: "Responsive Design",
    description: "Mobile-first websites that work seamlessly across all devices.",
    icon: Smartphone,
  },
  {
    title: "Backend Development",
    description: "Robust server-side solutions using Node.js and modern databases.",
    icon: Database,
  },
  {
    title: "API Development",
    description: "RESTful API design and implementation for your applications.",
    icon: Code,
  },
]

export default function ServicesPage() {
  const ref = useRef<HTMLDivElement>(null)
  // @ts-ignore - Type issue with null refs
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-muted/50 to-transparent"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary bg-primary/10 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            What I Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive solutions tailored to meet your digital needs. From web development to branding, we've got you covered.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col h-full group hover:shadow-lg transition-all duration-300 border-muted hover:border-primary/20 overflow-hidden rounded-xl backdrop-blur-sm bg-card/90">
                <CardHeader>
                  <motion.div 
                    className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ 
                      rotate: 5,
                      scale: 1.1, 
                      background: "linear-gradient(to bottom right, rgba(var(--primary), 0.2), rgba(var(--secondary), 0.2))"
                    }}
                  >
                    <service.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-muted-foreground text-base">{service.description}</CardDescription>
                </CardContent>
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Looking for a custom solution? Let's discuss how I can help you achieve your goals.
          </p>
          <motion.a 
            href="/#contact" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

