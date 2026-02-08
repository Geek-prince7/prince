import Navigation from '@/components/Navigation'
import ModernHero from '@/components/ModernHero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-10 w-80 h-80 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-purple-600/20 via-blue-500/10 to-transparent blur-3xl" />
      </div>

      <Navigation />
      {/* Use ModernHero by default; swap to <Hero /> if you prefer the alternate hero. */}
      <ModernHero />

      <div className="space-y-16 md:space-y-20">
        <About />
        <Experience />
        <Skills />
        <section id="projects">
          <Projects />
        </section>
        <Contact />
      </div>

      <Footer />
    </main>
  )
}
