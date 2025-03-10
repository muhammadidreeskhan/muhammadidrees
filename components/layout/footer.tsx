"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, ArrowUp, MapPin, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
]

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/muhammadidreeskhan" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-idrees-khan-796558117/" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/happyikhan" },
  { name: "Email", icon: Mail, href: "mailto:contactmuhammadidrees@gmail.com" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  
  return (
    <footer className="bg-background border-t relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-50"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="text-2xl font-bold inline-block">
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Idrees
              </motion.span>
            </Link>
            <p className="text-muted-foreground max-w-md text-base leading-relaxed">
              Crafting digital experiences with creativity and precision. Let's build something amazing together that stands out in the digital landscape.
            </p>
            
            <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 hover:bg-primary/10"
                    aria-label={link.name}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </div>
          
          <nav className="space-y-4 md:space-y-2">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 group flex items-center"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Mail size={15} className="mr-2 text-primary" />
                <a href="mailto:contactmuhammadidrees@gmail.com" className="hover:text-primary transition-colors duration-200">
                  contactmuhammadidrees@gmail.com
                </a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin size={15} className="mr-2 text-primary" />
                <span>Karachi, Pakistan</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Briefcase size={15} className="mr-2 text-primary" />
                <span>Available for remote work</span>
              </li>
            </ul>
            <Link 
              href="/#contact" 
              className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-200 mt-2 block"
            >
              Get in Touch
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Muhammad Idrees. All rights reserved.</p>
          <motion.button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

