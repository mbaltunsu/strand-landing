/** Spot artwork for the six model-type cards. Square 200×200, shares global SvgDefs. */

const INK = 'var(--il-ink)'
const PAPER = 'var(--il-paper)'

const cls = 'w-full max-w-[150px] mx-auto'

function Spark({ x, y, s = 1, d = 0, fill = '#8B5CF6' }: { x: number; y: number; s?: number; d?: number; fill?: string }) {
  return (
    <path
      className="il-twinkle" style={{ animationDelay: `${d}s` }}
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0,-6 L1.6,-1.6 L6,0 L1.6,1.6 L0,6 L-1.6,1.6 L-6,0 L-1.6,-1.6 Z" fill={fill} opacity="0.85"
    />
  )
}

export function TextSpot() {
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="A quill writing glowing text.">
      <ellipse cx="100" cy="105" rx="86" ry="74" fill="url(#g-wash-teal)" filter="url(#rough-2)" />
      <g filter="url(#rough)">
        <g transform="translate(58 48) rotate(8)">
          <rect width="86" height="104" rx="6" fill={PAPER} stroke={INK} strokeWidth="2.6" />
          <path d="M12 20 h62 M12 34 h46 M12 48 h56 M12 62 h30" stroke={INK} strokeWidth="2.2" strokeLinecap="round" opacity="0.45" />
          <path d="M12 76 h40" stroke="#8B5CF6" strokeWidth="2.6" strokeLinecap="round" />
        </g>
        {/* quill */}
        <g transform="translate(118 96) rotate(24)">
          <path d="M6 44 C-8 24 0 -8 26 -22 C18 2 16 22 10 40 Z" fill="#9EEDE4" stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M10 40 C12 22 16 2 24 -18" fill="none" stroke={INK} strokeWidth="1.6" />
          <path d="M8 44 L2 56" stroke={INK} strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </g>
      </g>
      <circle cx="104" cy="146" r="4" fill="url(#g-spark)" filter="url(#il-glow)" className="il-twinkle" />
      <Spark x={42} y={48} s={0.8} fill="#0AD0BC" />
      <Spark x={162} y={140} s={0.7} d={1.1} />
    </svg>
  )
}

export function ImageSpot() {
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="A framed landscape painting itself.">
      <ellipse cx="100" cy="102" rx="88" ry="76" fill="url(#g-wash-purple)" filter="url(#rough-2)" />
      <g className="il-float" filter="url(#rough)">
        <g transform="translate(46 46) rotate(-3)">
          <rect width="110" height="92" rx="9" fill={PAPER} stroke={INK} strokeWidth="2.8" />
          <rect x="9" y="9" width="92" height="74" rx="5" fill="url(#g-canvas-sky)" />
          <circle cx="74" cy="32" r="10" fill="#FFB196" stroke={INK} strokeWidth="1.8" />
          <path d="M9 64 L36 36 L54 54 L66 44 L101 72 L101 83 L9 83 Z" fill="#9EEDE4" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M28 22 c3 -4 7 -4 10 0" fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
        </g>
      </g>
      {/* brush */}
      <g filter="url(#rough)" transform="translate(128 124) rotate(40)">
        <path d="M0 0 L4 28" stroke={INK} strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M-2 -2 C0 -10 4 -12 6 -4 C6 0 4 2 0 0 Z" fill="#8B5CF6" stroke={INK} strokeWidth="1.8" />
      </g>
      <Spark x={156} y={52} s={0.9} />
      <Spark x={36} y={146} s={0.7} d={1.3} fill="#0AD0BC" />
    </svg>
  )
}

export function VideoSpot() {
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="A clapperboard with film strip in motion.">
      <ellipse cx="100" cy="104" rx="88" ry="74" fill="url(#g-wash-peach)" filter="url(#rough-2)" />
      <g className="il-float" filter="url(#rough)">
        <g transform="translate(48 56) rotate(-2)">
          <rect y="22" width="104" height="70" rx="7" fill={PAPER} stroke={INK} strokeWidth="2.8" />
          <g transform="rotate(-8 0 22)">
            <rect width="104" height="22" rx="5" fill={INK} />
            <path d="M10 0 l12 22 M34 0 l12 22 M58 0 l12 22 M82 0 l12 22" stroke={PAPER} strokeWidth="5" />
          </g>
          <path d="M40 44 L66 58 L40 72 Z" fill="#FF8A7A" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
        </g>
      </g>
      {/* film strip ribbon */}
      <g filter="url(#rough)">
        <path d="M28 158 C70 146 130 146 172 158" fill="none" stroke={INK} strokeWidth="2.4" />
        <path d="M28 172 C70 160 130 160 172 172" fill="none" stroke={INK} strokeWidth="2.4" />
        <path d="M44 156 l2 13 M76 150 l1 14 M108 149 l0 14 M140 152 l-1 13" stroke={INK} strokeWidth="1.8" opacity="0.7" />
      </g>
      <Spark x={160} y={44} s={0.9} fill="#FF8A7A" />
      <Spark x={40} y={42} s={0.7} d={0.9} />
    </svg>
  )
}

export function AudioSpot() {
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="A waveform flowing through a glowing node.">
      <ellipse cx="100" cy="102" rx="88" ry="74" fill="url(#g-wash-teal)" filter="url(#rough-2)" />
      <g filter="url(#rough)" fill="none" strokeLinecap="round">
        <path d="M22 102 C34 102 36 78 46 78 C58 78 58 126 70 126 C82 126 82 60 96 60 C110 60 110 142 124 142 C136 142 136 84 148 84 C158 84 160 102 178 102" stroke="url(#g-thread)" strokeWidth="3.4" />
        <path d="M40 148 h22 M54 158 h30" stroke={INK} strokeWidth="2" opacity="0.4" />
      </g>
      <circle r="5" fill="url(#g-spark)" filter="url(#il-glow)">
        <animateMotion dur="3.4s" repeatCount="indefinite" path="M22 102 C34 102 36 78 46 78 C58 78 58 126 70 126 C82 126 82 60 96 60 C110 60 110 142 124 142 C136 142 136 84 148 84 C158 84 160 102 178 102" />
      </circle>
      {/* note doodles */}
      <g filter="url(#rough)" stroke={INK} strokeWidth="2.2" strokeLinecap="round" fill="none">
        <path d="M138 44 v18 M138 44 l12 -4 v18" />
        <circle cx="134" cy="64" r="4.5" fill={INK} />
        <circle cx="146" cy="60" r="4.5" fill={INK} />
      </g>
      <Spark x={48} y={46} s={0.8} fill="#0AD0BC" />
      <Spark x={170} y={148} s={0.7} d={1.2} />
    </svg>
  )
}

export function PixelSpot() {
  const px = [
    [2, 0], [3, 0], [4, 0], [1, 1], [5, 1], [0, 2], [6, 2], [0, 3], [2, 3], [4, 3], [6, 3],
    [0, 4], [6, 4], [0, 5], [2, 5], [3, 5], [4, 5], [6, 5],
  ]
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="A pixel-art sprite being placed block by block.">
      <ellipse cx="100" cy="102" rx="88" ry="76" fill="url(#g-wash-purple)" filter="url(#rough-2)" />
      {/* grid paper */}
      <g filter="url(#rough)">
        <rect x="44" y="44" width="112" height="112" rx="8" fill={PAPER} stroke={INK} strokeWidth="2.6" />
        <path d="M44 72 h112 M44 100 h112 M44 128 h112 M72 44 v112 M100 44 v112 M128 44 v112" stroke={INK} strokeWidth="1" opacity="0.18" />
      </g>
      {/* sprite */}
      <g transform="translate(58 62)" className="il-float">
        {px.map(([cx, cy], i) => (
          <rect
            key={i} x={cx * 12} y={cy * 12} width="11" height="11" rx="1.5"
            fill={i % 3 === 0 ? '#8B5CF6' : i % 3 === 1 ? '#0AD0BC' : '#A3A9F5'}
            opacity="0.9"
          />
        ))}
      </g>
      {/* cursor placing a block */}
      <g filter="url(#rough)" className="il-float" style={{ animationDelay: '0.6s' }}>
        <rect x="136" y="136" width="13" height="13" rx="2" fill="#FF8A7A" stroke={INK} strokeWidth="1.8" />
        <path d="M152 152 L166 170 L158 168 L156 176 Z" fill={PAPER} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      </g>
      <Spark x={36} y={50} s={0.8} />
      <Spark x={168} y={60} s={0.7} d={1.4} fill="#0AD0BC" />
    </svg>
  )
}

export function ThreeDSpot() {
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="An isometric cube on a modelling gizmo.">
      <ellipse cx="100" cy="104" rx="88" ry="74" fill="url(#g-wash-peach)" filter="url(#rough-2)" />
      <g className="il-float-deep" filter="url(#rough)">
        {/* cube */}
        <path d="M100 42 L146 68 L146 120 L100 146 L54 120 L54 68 Z" fill="#E9E3FD" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
        <path d="M100 42 L146 68 L100 94 L54 68 Z" fill="#C9F4EF" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M100 94 L100 146 M54 68 L100 94 L146 68" fill="none" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
        {/* wireframe hint */}
        <path d="M77 55 L123 81 M123 55 L77 81" stroke={INK} strokeWidth="1.2" opacity="0.35" fill="none" />
      </g>
      {/* gizmo arrows */}
      <g filter="url(#rough)" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M100 146 L100 178 M95 172 L100 179 L105 172" stroke="#0AD0BC" strokeWidth="2.6" />
        <path d="M146 120 L172 134 M164 134 L173 135 L168 127" stroke="#8B5CF6" strokeWidth="2.6" />
        <path d="M54 120 L28 134 M36 134 L27 135 L32 127" stroke="#FF8A7A" strokeWidth="2.6" />
      </g>
      <Spark x={156} y={42} s={0.9} />
      <Spark x={40} y={52} s={0.7} d={1.1} fill="#0AD0BC" />
    </svg>
  )
}
