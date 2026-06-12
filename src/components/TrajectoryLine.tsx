import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Signature scroll companion: a hand-drawn workflow thread that draws itself
 * down the middle of the page as you scroll, a glowing spark riding its tip.
 * Every top-level section is a node — the thread meanders into its ring,
 * lights it up, and flows on. Desktop (lg+) only; static under reduced motion.
 */
export default function TrajectoryLine() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const svg = svgRef.current
    if (!wrap || !svg) return

    let trigger: ScrollTrigger | null = null
    let frame = 0
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const build = () => {
      if (window.innerWidth < 1024) {
        svg.replaceChildren()
        return
      }
      const wrapTop = wrap.getBoundingClientRect().top + window.scrollY
      const width = wrap.clientWidth
      const height = wrap.clientHeight
      const centerX = width / 2

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('main > section[id]'),
      ).filter((s) => s.id !== 'top')
      if (sections.length < 2) return

      const lateral = Math.min(300, width * 0.22)
      const pts = sections.map((s, i) => {
        const top = s.getBoundingClientRect().top + window.scrollY - wrapTop
        return { x: centerX + (i % 2 === 0 ? -lateral : lateral), y: top + 26, id: s.id }
      })

      const start = { x: centerX, y: Math.max(0, pts[0].y - 260) }
      const end = { x: centerX, y: height - 140 }

      let d = `M ${start.x} ${start.y}`
      const segs: string[] = []
      const chain = [...pts, end]
      let prev: { x: number; y: number } = start
      for (const p of chain) {
        const midY = (prev.y + p.y) / 2
        const seg = ` C ${prev.x} ${midY} ${p.x} ${midY} ${p.x} ${p.y}`
        segs.push(seg)
        d += seg
        prev = p
      }

      // cumulative length at each node (endpoint of each segment)
      const ns = 'http://www.w3.org/2000/svg'
      const probe = document.createElementNS(ns, 'path')
      const nodeLens: number[] = []
      let acc = `M ${start.x} ${start.y}`
      for (let i = 0; i < segs.length - 1; i++) {
        acc += segs[i]
        probe.setAttribute('d', acc)
        nodeLens.push(probe.getTotalLength())
      }
      probe.setAttribute('d', d)
      const total = probe.getTotalLength()

      svg.setAttribute('viewBox', `0 0 ${width} ${height}`)
      svg.replaceChildren()

      const el = (tag: string, attrs: Record<string, string>) => {
        const e = document.createElementNS(ns, tag)
        for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v)
        return e
      }

      // vertical thread gradient in user space
      const defs = el('defs', {})
      const grad = el('linearGradient', {
        id: 'traj-g', gradientUnits: 'userSpaceOnUse',
        x1: '0', y1: `${start.y}`, x2: '0', y2: `${height}`,
      })
      grad.append(
        el('stop', { offset: '0%', 'stop-color': '#0AD0BC' }),
        el('stop', { offset: '45%', 'stop-color': '#8B5CF6' }),
        el('stop', { offset: '100%', 'stop-color': '#A3A9F5' }),
      )
      defs.append(grad)
      svg.append(defs)

      const base = el('path', {
        d, fill: 'none', stroke: 'var(--il-ink)', 'stroke-width': '1.6',
        'stroke-dasharray': '3 9', 'stroke-linecap': 'round', opacity: '0.22',
      })
      const prog = el('path', {
        d, fill: 'none', stroke: 'url(#traj-g)', 'stroke-width': '3',
        'stroke-linecap': 'round', opacity: '0.9',
      })
      svg.append(base, prog)

      const rings = pts.map((p, i) => {
        const g = el('g', { class: 'traj-node' })
        g.append(
          el('circle', { cx: `${p.x}`, cy: `${p.y}`, r: '13', class: 'traj-ring' }),
          el('circle', { cx: `${p.x}`, cy: `${p.y}`, r: '4.5', class: 'traj-core' }),
        )
        svg.append(g)
        return { g, len: nodeLens[i] }
      })

      const spark = el('g', { class: 'traj-spark' })
      spark.append(
        el('circle', { r: '14', fill: 'url(#g-spark)', opacity: '0.9' }),
        el('circle', { r: '3.6', fill: '#fff', filter: 'url(#il-glow)' }),
      )
      svg.append(spark)

      const setProgress = (p: number) => {
        const L = total * p
        prog.setAttribute('stroke-dasharray', `${L} ${total}`)
        const pt = probe.getPointAtLength(L)
        spark.setAttribute('transform', `translate(${pt.x} ${pt.y})`)
        for (const r of rings) r.g.classList.toggle('lit', r.len <= L + 6)
      }

      if (reduced) {
        prog.setAttribute('stroke-dasharray', `${total} 0`)
        spark.remove()
        for (const r of rings) r.g.classList.add('lit')
        return
      }

      setProgress(0)
      trigger?.kill()
      trigger = ScrollTrigger.create({
        trigger: wrap,
        start: 'top 70%',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: (self) => setProgress(self.progress),
      })
    }

    const rebuild = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        build()
        ScrollTrigger.refresh()
      })
    }

    // initial build after layout settles (fonts, images, lazy chunks)
    const t = setTimeout(rebuild, 400)
    const ro = new ResizeObserver(rebuild)
    ro.observe(document.body)
    window.addEventListener('resize', rebuild)

    return () => {
      clearTimeout(t)
      cancelAnimationFrame(frame)
      ro.disconnect()
      window.removeEventListener('resize', rebuild)
      trigger?.kill()
    }
  }, [])

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
      <svg ref={svgRef} className="h-full w-full" />
    </div>
  )
}
