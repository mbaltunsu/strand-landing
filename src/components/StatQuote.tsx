import { motion } from 'framer-motion'

export default function StatQuote() {
  return (
    <section id="stat" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="font-display font-black text-[clamp(1.6rem,3.5vw,2.6rem)] leading-tight text-ink">
          Creative teams already juggle{' '}
          <span className="text-purple">7+ AI tools</span>{' '}
          to ship a single campaign.
        </p>
        <p className="mt-3 font-body text-ink-soft">— the multi-model reality, 2026</p>
      </motion.div>

      <motion.div
        className="mx-auto mt-12 max-w-xl rounded-2xl bg-surface p-8 shadow-[0_4px_20px_rgba(10,27,46,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        <div className="flex items-start gap-4">
          <div className="size-10 shrink-0 rounded-full bg-purple/15 font-display text-sm font-bold text-purple grid place-items-center">
            MO
          </div>
          <div>
            <p className="font-body font-bold text-ink">Maya Okafor, Creative Director @ Halftone Studio</p>
            <p className="mt-2 text-ink-soft">
              "Strand turned our scattered prompts into one pipeline. We storyboard, render and cut a teaser in a single afternoon."
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
