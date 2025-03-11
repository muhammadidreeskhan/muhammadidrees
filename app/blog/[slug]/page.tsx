"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, Clock, ArrowLeft, ExternalLink } from "lucide-react"
import { blogPosts } from "../data"

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the blog post with the matching slug
    const foundPost = blogPosts.find((p) => p.slug === slug)
    
    // Simulate loading
    setTimeout(() => {
      setPost(foundPost)
      setLoading(false)
    }, 300)
  }, [slug])

  if (loading) {
    return (
      <div className="py-24 md:py-32 container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <div className="h-8 w-8 rounded-full border-4 border-primary border-r-transparent animate-spin"></div>
          <p className="mt-4 text-muted-foreground">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="py-24 md:py-32 container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog">
            <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground">
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-muted/50 to-transparent"></div>
      <div className="absolute top-60 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
              {post.category}
            </span>
            {post.tags && post.tags.map((tag: string) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
            <div className="flex-grow"></div>
            <button className="flex items-center hover:text-primary transition-colors">
              <ExternalLink className="h-4 w-4 mr-1" />
              Share
            </button>
          </div>
        </motion.div>

        {post.heroImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden">
              <Image 
                src={post.heroImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-8 prose prose-slate dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="p-6 bg-card rounded-xl border mb-6">
                <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="/images/about/profile image.png"
                      alt="Muhammad Idrees Khan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Muhammad Idrees Khan</h4>
                    <p className="text-sm text-muted-foreground">Front-End Developer</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Muhammad specializes in React, Next.js and modern web development. He writes about web technologies, design principles, and industry trends.
                </p>
                <div className="flex gap-2">
                  {/* Social links */}
                </div>
              </div>
              
              <div className="p-6 bg-card rounded-xl border">
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter(p => p.slug !== slug && p.category === post.category)
                    .slice(0, 3)
                    .map(relatedPost => (
                      <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="block group">
                        <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{relatedPost.date}</p>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 