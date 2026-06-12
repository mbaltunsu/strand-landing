import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'

type Item = {
  q: string
  a: string
}

const ITEMS: Item[] = [
  {
    q: 'What is Strand, exactly?',
    a: 'A node-based canvas where you chain AI models — text, image, video, audio, pixel art, 3D — into one workflow and run it end to end.',
  },
  {
    q: 'Which models can I attach?',
    a: 'Any model with an API: hosted frontier models, open-source checkpoints, or your own fine-tunes. If it generates, it can join the thread.',
  },
  {
    q: 'Do I need to know how to code?',
    a: 'No. Workflows are drawn, not written. Power users can drop in code nodes when they want full control.',
  },
  {
    q: 'How is this different from a prompt tool?',
    a: 'Prompt tools give you one model at a time. Strand orchestrates many — outputs flow downstream as inputs, automatically.',
  },
  {
    q: 'Can my team work on the same canvas?',
    a: 'Yes — shared canvases, comments and roles land with the Team plan.',
  },
  {
    q: 'What happens to my assets?',
    a: 'Every input and output is versioned in your asset library. Export anytime; your work is yours.',
  },
  {
    q: 'When does the beta open?',
    a: "We're onboarding the waitlist in waves through 2026. Early joiners get the Early-bird Studio price locked in.",
  },
  {
    q: 'Is there a free tier?',
    a: 'Forever. Three workflows and the community model library — enough to ship real work.',
  },
]

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: Item
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-divider">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display font-bold text-ink">{item.q}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`shrink-0 text-ink-soft transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        >
          <path
            d="M10 4 V16 M4 10 H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-ink-soft">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const half = Math.ceil(ITEMS.length / 2)
  const leftCol = ITEMS.slice(0, half)
  const rightCol = ITEMS.slice(half)

  function handleToggle(globalIndex: number) {
    setOpenIndex(openIndex === globalIndex ? null : globalIndex)
  }

  return (
    <section id="faq" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        badge="FAQ"
        badgeTone="coral"
        title="Read the FAQs"
        sub="Everything makers ask before pulling the thread."
      />

      <motion.div
        className="mt-14 grid grid-cols-1 gap-x-12 md:grid-cols-2"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div>
          {leftCol.map((item, i) => (
            <AccordionItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
        <div>
          {rightCol.map((item, i) => (
            <AccordionItem
              key={item.q}
              item={item}
              isOpen={openIndex === half + i}
              onToggle={() => handleToggle(half + i)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
