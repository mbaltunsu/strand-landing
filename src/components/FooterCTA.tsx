import { motion } from 'framer-motion'
import Waitlist from './Waitlist'

export default function FooterCTA() {
  return (
    <section id="waitlist" className="relative mx-auto max-w-7xl px-6 py-28">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-black leading-tight text-ink">
          Pull the first thread<span className="text-purple">.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">
          Join the waitlist and be weaving before the beta doors open.
        </p>
        <div className="mt-8 flex justify-center">
          <Waitlist />
        </div>
      </motion.div>
    </section>
  )
}
