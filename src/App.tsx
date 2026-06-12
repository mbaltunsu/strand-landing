import SvgDefs from './illustrations/SvgDefs'
import Nav from './components/Nav'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <SvgDefs />
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
