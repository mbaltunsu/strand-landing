import SvgDefs from './illustrations/SvgDefs'
import Nav from './components/Nav'
import Hero from './components/Hero'
import StatQuote from './components/StatQuote'
import ModelShowcase from './components/ModelShowcase'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <SvgDefs />
      <Nav />
      <main>
        <Hero />
        <StatQuote />
        <ModelShowcase />
        <Features />
        <Pricing />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
