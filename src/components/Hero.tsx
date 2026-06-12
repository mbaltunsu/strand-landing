import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import HeroIllustration from '../illustrations/HeroIllustration'
import Waitlist from './Waitlist'

const WORDS = [
  { text: 'image models', tone: 'text-purple' },
  { text: 'video models', tone: 'text-coral' },
  { text: '3D assets', tone: 'text-teal' },
  { text: 'pixel art', tone: 'text-lavender' },
  { text: 'every model', tone: 'text-purple' },
]

function CyclingWord() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2800)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="relative inline-grid overflow-visible align-top">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={WORDS[i].text}
          className={`whitespace-nowrap ${WORDS[i].tone}`}
          initial={{ y: '0.9em', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-0.9em', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {WORDS[i].text}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const MICRO = [
  { top: 'COMPOSABLE', bottom: 'NODE WORKFLOWS', cls: 'rotate-[-3deg]' },
  { top: 'MULTI-MODEL', bottom: 'ONE CANVAS', cls: 'translate-y-3 rotate-[2deg]' },
  { top: 'FOR MAKERS', bottom: 'EVERY INDUSTRY', cls: 'rotate-[-1deg]' },
]

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-2 lg:gap-6 lg:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="font-display text-[clamp(2.5rem,5.5vw,3.7rem)] font-black leading-[1.06] text-ink">
          One canvas for
          <br />
          <CyclingWord />
          <span className="text-purple">.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-ink-soft">
          Strand is the AI workflow canvas where creators chain text, image, video,
          audio, pixel-art and 3D models into one flowing pipeline — and watch ideas
          render end to end.
        </p>
        <div className="mt-8">
          <Waitlist id="hero-waitlist" />
        </div>

        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-5">
          {MICRO.map((m) => (
            <div key={m.top} className={`font-display text-[11px] font-black tracking-[0.14em] text-ink-soft ${m.cls}`}>
              <span className="text-purple">{m.top}</span>
              <br />
              {m.bottom}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        className="relative"
      >
        <HeroIllustration className="mx-auto w-full max-w-[640px]" />
      </motion.div>
    </section>
  )
}
