"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseDown = () => setCursorVariant("click")
    const mouseUp = () => setCursorVariant("default")

    const handleLinkHover = () => setCursorVariant("hover")
    const handleLinkLeave = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mousedown", mouseDown)
    window.addEventListener("mouseup", mouseUp)

    // Add hover effect to all links and buttons
    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover)
      link.addEventListener("mouseleave", handleLinkLeave)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mousedown", mouseDown)
      window.removeEventListener("mouseup", mouseUp)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover)
        link.removeEventListener("mouseleave", handleLinkLeave)
      })
    }
  }, [])

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = "none"

    document.documentElement.classList.add("custom-cursor-active")

    return () => {
      document.body.style.cursor = "auto"
      document.documentElement.classList.remove("custom-cursor-active")
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1.5,
    },
    click: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 0.8,
    },
  }

  // Only show custom cursor on desktop
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={variants}
        animate={cursorVariant}
        transition={{ 
          type: "tween", 
          ease: "backOut", 
          duration: 0.05 
        }}
      />
      <motion.div
        className="cursor-outline"
        variants={variants}
        animate={cursorVariant}
        transition={{ 
          type: "tween", 
          ease: "backOut", 
          duration: 0.08 
        }}
      />
    </>
  )
}

