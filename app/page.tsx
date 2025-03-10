import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"
import LoadingScreen from "@/components/ui/loading-screen"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LoadingScreen />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}

