import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

type Feature = string

type Plan = {
  name: string
  price: string
  period: string
  features: Feature[]
  cta: string
  highlight: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Thread',
    price: '$0',
    period: 'forever',
    features: [
      '3 workflows',
      '2 models per flow',
      'Community model library',
      '720p renders',
    ],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Studio',
    price: '$24',
    period: '/month',
    features: [
      'Unlimited workflows',
      'Every model type',
      'Batch runs',
      'Full version history',
      '4K renders',
    ],
    cta: 'Join waitlist',
    highlight: true,
  },
  {
    name: 'Team',
    price: '$79',
    period: '/month',
    features: [
      'Everything in Studio',
      'Shared canvases',
      'Roles & reviews',
      'SSO',
      'Priority render queue',
    ],
    cta: 'Join waitlist',
    highlight: false,
  },
]

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-teal"
    >
      <circle cx="8" cy="8" r="7.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M4.5 8.2 L7 10.7 L11.5 5.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        badge="Pricing"
        badgeTone="teal"
        title="Start free, scale when it flows"
        sub="Simple tiers for solo makers and studios."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`rounded-2xl bg-surface p-8 shadow-[0_4px_20px_rgba(10,27,46,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex flex-col ${
              plan.highlight
                ? 'border-2 border-purple lg:-translate-y-2'
                : 'border border-divider'
            }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-black text-ink">{plan.name}</span>
              {plan.highlight && (
                <span className="rounded-full border-2 border-purple px-3 py-1 text-sm font-display font-bold text-purple">
                  Early bird −40%
                </span>
              )}
            </div>

            <div className="mt-5 flex items-end gap-1">
              <span className="font-display text-5xl font-black text-ink">{plan.price}</span>
              <span className="mb-2 text-ink-soft">{plan.period}</span>
            </div>

            <ul className="mt-6 flex flex-col gap-3 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-ink-soft">
                  <CheckIcon />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#waitlist"
              className={`mt-8 block w-full rounded-lg px-7 py-3 text-center font-display font-bold transition-colors duration-300 ${
                plan.highlight
                  ? 'bg-purple text-white hover:bg-ink'
                  : 'bg-ink text-bg hover:bg-purple hover:text-white'
              }`}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
