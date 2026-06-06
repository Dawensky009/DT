import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import Services from './components/Services.jsx'
import Skills from './components/Skills.jsx'
import Timeline from './components/Timeline.jsx'
import Projects from './components/Projects.jsx'
import Metrics from './components/Metrics.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Skills />
        <Timeline />
        <Projects />
        <Metrics />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
