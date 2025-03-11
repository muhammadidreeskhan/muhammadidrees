"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CalendarIcon, ArrowRight } from "lucide-react"
import { blogPosts } from "./data"

export default function BlogPage() {
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
      <div className="absolute top-60 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary bg-primary/10 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Latest Articles
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
            Blog & Insights
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our collection of articles covering web development, design, and industry trends.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Development", "Design", "React", "Tutorial", "Trends"].map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                category === "All" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted hover:bg-primary/10 hover:text-primary"
              } transition-colors duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-muted hover:border-primary/20 overflow-hidden rounded-xl backdrop-blur-sm bg-card/90">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {post.category}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <CalendarIcon className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      {post.readTime}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-5">
                    <p className="text-muted-foreground text-sm">{post.description}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:text-secondary transition-colors duration-300">
                      Read More <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button 
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-primary/20 hover:bg-primary/10 transition-all duration-300 text-primary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Load More Articles <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

