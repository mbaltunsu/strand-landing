import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { TextSpot, ImageSpot, VideoSpot, AudioSpot, PixelSpot, ThreeDSpot } from '../illustrations/modelSpots'

const MODELS = [
  { name: 'Text models', blurb: 'Scripts, captions, lore, copy — language nodes that feed everything downstream.', Art: TextSpot, tone: 'text-teal' },
  { name: 'Image models', blurb: 'Concepts, key art, product shots. Any diffusion or autoregressive image model.', Art: ImageSpot, tone: 'text-purple' },
  { name: 'Video models', blurb: 'Animate boards into motion. Text-to-video, image-to-video, lip-sync nodes.', Art: VideoSpot, tone: 'text-coral' },
  { name: 'Audio models', blurb: 'Voice-over, foley, soundtrack. Generated in key, timed to your cut.', Art: AudioSpot, tone: 'text-teal' },
  { name: 'Pixel-art models', blurb: 'Sprites, tilesets and animation frames that stay on-grid and on-palette.', Art: PixelSpot, tone: 'text-purple' },
  { name: '3D asset models', blurb: 'Meshes, textures and PBR materials, ready for your engine of choice.', Art: ThreeDSpot, tone: 'text-coral' },
]

export default function ModelShowcase() {
  return (
    <section id="models" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        badge="Model library"
        badgeTone="purple"
        title="Attach any model"
        sub="Every kind of generative model becomes a node on your canvas — drop it in, wire it up, let it flow."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MODELS.map(({ name, blurb, Art, tone }, i) => (
          <motion.article
            key={name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.12, ease: 'easeOut' }}
            className="group rounded-2xl bg-surface p-7 shadow-[0_4px_20px_rgba(10,27,46,0.08)] transition-transform duration-300 hover:-translate-y-1.5 dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <div className="transition-transform duration-300 group-hover:scale-[1.04]">
              <Art />
            </div>
            <h3 className="mt-5 font-display text-xl font-black text-ink">
              {name}
              <span className={tone}>.</span>
            </h3>
            <p className="mt-2 text-ink-soft">{blurb}</p>
            {/* node ports */}
            <div className="mt-4 flex items-center gap-1.5" aria-hidden="true">
              <span className="size-2 rounded-full bg-teal/70" />
              <span className="h-px flex-1 bg-divider" />
              <span className="size-2 rounded-full bg-purple/70" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
