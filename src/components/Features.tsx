import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { ModelMixingArt, AssetLibraryArt, BatchRunsArt, AutomationArt } from '../illustrations/features'

type Row = {
  title: string
  body: string
  Art: React.ComponentType<{ className?: string }>
  flip: boolean
}

const ROWS: Row[] = [
  {
    title: 'Mix models mid-flow',
    body: 'Route a script through a text model, hand frames to an image model, upscale with a third — every node speaks to the next.',
    Art: ModelMixingArt,
    flip: false,
  },
  {
    title: 'Every run, remembered',
    body: 'Assets, prompts and outputs are versioned on the thread. Rewind any run, branch it, remix it.',
    Art: AssetLibraryArt,
    flip: true,
  },
  {
    title: 'Batch a hundred variations',
    body: 'Fan one workflow out across styles, sizes and seeds. Review side by side, keep the keepers.',
    Art: BatchRunsArt,
    flip: false,
  },
  {
    title: 'Set it. Schedule it',
    body: 'Trigger workflows on a cron or webhook — wake up to fresh assets every morning.',
    Art: AutomationArt,
    flip: true,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        badge="Features"
        badgeTone="purple"
        title="Built for flow, not tab-juggling"
        sub="Everything a multi-model pipeline needs, woven into one canvas."
      />

      <div className="mt-20 flex flex-col gap-24">
        {ROWS.map((row, i) => (
          <motion.div
            key={row.title}
            className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${row.flip ? 'lg:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.05 }}
          >
            {/* Art — shown first on mobile */}
            <div className="w-full lg:w-1/2 order-first lg:order-none">
              <row.Art className="mx-auto w-full max-w-md" />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2">
              <h3 className="font-display text-3xl font-black text-ink">
                {row.title}<span className="text-purple">.</span>
              </h3>
              <p className="mt-4 text-lg text-ink-soft">{row.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
