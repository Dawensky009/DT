import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Journey from './components/Journey.jsx'
import Banner from './components/Banner.jsx'
import Work from './components/Work.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Journey />
        <Banner />
        <Work />
      </main>
      <Footer />
    </>
  )
}
