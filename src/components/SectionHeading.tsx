import { motion } from 'framer-motion'

type Props = {
  badge: string
  badgeTone?: 'teal' | 'purple' | 'coral'
  title: string
  sub?: string
}

const tones = {
  teal: 'border-teal text-ink',
  purple: 'border-purple text-ink',
  coral: 'border-coral text-ink',
}

/** qvery-style centered section header: badge pill → H2 with purple trailing dot → subheading */
export default function SectionHeading({ badge, badgeTone = 'teal', title, sub }: Props) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <span className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-1.5 font-display text-sm font-bold ${tones[badgeTone]}`}>
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <circle cx="7" cy="7" r="3" fill="currentColor" className={badgeTone === 'purple' ? 'text-purple' : badgeTone === 'coral' ? 'text-coral' : 'text-teal'} />
          <circle cx="7" cy="7" r="6" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" className={badgeTone === 'purple' ? 'text-purple' : badgeTone === 'coral' ? 'text-coral' : 'text-teal'} />
        </svg>
        {badge}
      </span>
      <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-black leading-tight text-ink">
        {title}
        <span className="text-purple">.</span>
      </h2>
      {sub && <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">{sub}</p>}
    </motion.div>
  )
}
