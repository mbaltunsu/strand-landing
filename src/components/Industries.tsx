import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import {
  GameSpot, FashionSpot, AdvertSpot, ProductSpot,
  FilmSpot, ConceptArtSpot, MusicSpot, CreatorSpot,
} from '../illustrations/industrySpots'

const MAKERS = [
  { name: 'Game designers', blurb: 'Sprites, tilesets, lore and key art from one canvas.', Art: GameSpot },
  { name: 'Fashion & editorial', blurb: 'Lookbooks and campaign shots before the sample ships.', Art: FashionSpot },
  { name: 'Advertising studios', blurb: 'Concept-to-billboard pipelines for every brief.', Art: AdvertSpot },
  { name: 'Product marketing', blurb: 'Launch visuals in every size, channel and language.', Art: ProductSpot },
  { name: 'Film & animation', blurb: 'Storyboards that animate themselves into pre-vis.', Art: FilmSpot },
  { name: 'Concept artists', blurb: 'Explore fifty directions before lunch, refine one after.', Art: ConceptArtSpot },
  { name: 'Music & audio', blurb: 'Score, foley and cover art cut from the same thread.', Art: MusicSpot },
  { name: 'Content creators', blurb: 'A week of posts from one idea — on schedule.', Art: CreatorSpot },
]

export default function Industries() {
  return (
    <section id="industries" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        badge="Made for every maker"
        badgeTone="coral"
        title="Whatever you make, weave it"
        sub="Strand speaks every creative dialect — pick your craft and pull the thread."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {MAKERS.map(({ name, blurb, Art }, i) => (
          <motion.article
            key={name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.1, ease: 'easeOut' }}
            className="group rounded-2xl bg-surface p-6 text-center shadow-[0_4px_20px_rgba(10,27,46,0.08)] transition-transform duration-300 hover:-translate-y-1.5 dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <div className="transition-transform duration-300 group-hover:scale-[1.06]">
              <Art />
            </div>
            <h3 className="mt-4 font-display text-lg font-black text-ink">
              {name}
              <span className="text-coral">.</span>
            </h3>
            <p className="mt-1.5 text-sm text-ink-soft">{blurb}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
