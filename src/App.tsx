import SvgDefs from './illustrations/SvgDefs'
import TrajectoryLine from './components/TrajectoryLine'
import Nav from './components/Nav'
import Hero from './components/Hero'
import StatQuote from './components/StatQuote'
import ModelShowcase from './components/ModelShowcase'
import WorkflowDemo from './components/WorkflowDemo'
import Industries from './components/Industries'
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
      <div className="relative">
        <TrajectoryLine />
        <main className="relative">
          <Hero />
          <StatQuote />
          <ModelShowcase />
          <WorkflowDemo />
          <Industries />
          <Features />
          <Pricing />
          <FAQ />
          <FooterCTA />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
