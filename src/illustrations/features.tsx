/** Feature-row artwork. Shares global defs from SvgDefs (g-thread, rough, washes, il-* classes). */

const INK = 'var(--il-ink)'
const PAPER = 'var(--il-paper)'

const frame = 'w-full max-w-[460px] mx-auto'

function MiniNode({ x, y, tone, children }: { x: number; y: number; tone: string; children?: React.ReactNode }) {
  return (
    <g filter="url(#rough)">
      <circle cx={x} cy={y} r="24" fill={PAPER} stroke={INK} strokeWidth="2.6" />
      <circle cx={x} cy={y} r="19" fill="none" stroke={tone} strokeWidth="1.4" strokeDasharray="3 4" />
      <g stroke={INK} strokeWidth="2" strokeLinecap="round" fill="none">{children}</g>
    </g>
  )
}

export function ModelMixingArt() {
  const threads = [
    'M86 96 C160 96 200 160 254 168 C310 176 330 170 384 170',
    'M86 170 C150 170 210 178 254 172 C320 164 340 172 384 172',
    'M86 244 C160 244 204 184 254 176 C312 168 332 174 384 174',
  ]
  return (
    <svg viewBox="0 0 480 340" className={frame} role="img" aria-label="Three model nodes braid their outputs into one stream.">
      <ellipse cx="240" cy="170" rx="210" ry="130" fill="url(#g-wash-purple)" opacity="0.55" filter="url(#rough-2)" />
      {threads.map((d, i) => (
        <g key={i} fill="none">
          <path d={d} stroke="url(#g-thread)" strokeWidth="3" strokeLinecap="round" opacity="0.85" filter="url(#rough)" />
          <circle r="4" fill="url(#g-spark)" filter="url(#il-glow)">
            <animateMotion dur={`${3 + i * 0.8}s`} repeatCount="indefinite" path={d} />
          </circle>
        </g>
      ))}
      <MiniNode x={62} y={96} tone="#0AD0BC">
        <path d="M52 104 C56 94 62 88 72 86 C66 92 64 100 60 104 Z" fill="#9EEDE4" />
      </MiniNode>
      <MiniNode x={62} y={170} tone="#8B5CF6">
        <rect x="50" y="163" width="24" height="16" rx="3" fill="#E9E3FD" />
        <circle cx="62" cy="171" r="4" fill={PAPER} />
      </MiniNode>
      <MiniNode x={62} y={244} tone="#FF8A7A">
        <rect x="50" y="236" width="24" height="17" rx="3" fill="#FFE3DC" />
        <path d="M59 240 l7 4.5 l-7 4.5 Z" fill="#FF8A7A" strokeWidth="1.4" />
      </MiniNode>
      {/* output chip */}
      <g className="il-float" filter="url(#rough)">
        <rect x="384" y="138" width="76" height="68" rx="10" fill={PAPER} stroke={INK} strokeWidth="2.8" />
        <rect x="392" y="146" width="60" height="40" rx="5" fill="url(#g-canvas-sky)" />
        <circle cx="434" cy="158" r="6" fill="#FFB196" stroke={INK} strokeWidth="1.4" />
        <path d="M392 178 L408 162 L420 174 L430 166 L452 186 L392 186 Z" fill="#9EEDE4" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M400 196 h44" stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </g>
      <path className="il-twinkle" transform="translate(440 110)" d="M0,-6 L1.6,-1.6 L6,0 L1.6,1.6 L0,6 L-1.6,1.6 L-6,0 L-1.6,-1.6 Z" fill="#8B5CF6" opacity="0.8" />
      <path className="il-twinkle" transform="translate(120 36) scale(0.8)" style={{ animationDelay: '1.2s' }} d="M0,-6 L1.6,-1.6 L6,0 L1.6,1.6 L0,6 L-1.6,1.6 L-6,0 L-1.6,-1.6 Z" fill="#0AD0BC" opacity="0.8" />
    </svg>
  )
}

export function AssetLibraryArt() {
  return (
    <svg viewBox="0 0 480 340" className={frame} role="img" aria-label="A versioned thread of runs — cards stacked on a timeline with a rewind loop.">
      <ellipse cx="240" cy="180" rx="210" ry="125" fill="url(#g-wash-teal)" opacity="0.6" filter="url(#rough-2)" />
      {/* timeline thread */}
      <g fill="none" filter="url(#rough)">
        <path d="M40 262 C140 252 340 252 440 262" stroke="url(#g-thread)" strokeWidth="3" strokeLinecap="round" />
        {[92, 178, 264, 350].map((x, i) => (
          <circle key={x} cx={x} cy={256 - (i % 2)} r="6" fill={PAPER} stroke="#8B5CF6" strokeWidth="2.4" />
        ))}
        <circle cx="404" cy="258" r="7" fill="#8B5CF6" stroke={PAPER} strokeWidth="2" className="il-twinkle" />
      </g>
      {/* stacked version cards */}
      {[
        { x: 150, y: 96, r: -6, v: 'v12' },
        { x: 196, y: 84, r: 3, v: 'v13' },
        { x: 246, y: 76, r: -2, v: 'v14' },
      ].map((c, i) => (
        <g key={c.v} className="il-float" style={{ animationDelay: `${i * 0.7}s` }} filter="url(#rough)">
          <g transform={`translate(${c.x} ${c.y}) rotate(${c.r})`}>
            <rect width="92" height="112" rx="9" fill={PAPER} stroke={INK} strokeWidth="2.6" />
            <rect x="8" y="8" width="76" height="56" rx="5" fill="url(#g-canvas-sky)" />
            <path d={`M8 ${44 + i * 4} L30 ${26 + i * 4} L46 ${40 + i * 2} L60 ${30 + i * 3} L84 ${50} L84 64 L8 64 Z`} fill="#9EEDE4" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M10 78 h52" stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <path d="M10 90 h34" stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
            <text x="62" y="98" fontFamily="Lato, sans-serif" fontWeight="900" fontSize="13" fill="#8B5CF6">{c.v}</text>
          </g>
        </g>
      ))}
      {/* rewind loop arrow */}
      <g fill="none" stroke="#FF8A7A" strokeWidth="2.6" strokeLinecap="round" filter="url(#rough)">
        <path d="M120 210 C96 196 96 160 124 148" />
        <path d="M118 156 L126 146 L130 158" strokeLinejoin="round" />
      </g>
      <path className="il-twinkle" transform="translate(372 96)" d="M0,-6 L1.6,-1.6 L6,0 L1.6,1.6 L0,6 L-1.6,1.6 L-6,0 L-1.6,-1.6 Z" fill="#0AD0BC" opacity="0.8" />
    </svg>
  )
}

export function BatchRunsArt() {
  const cells = [0, 1, 2, 3, 4, 5]
  return (
    <svg viewBox="0 0 480 340" className={frame} role="img" aria-label="One node fans out into a grid of six variations; the keepers get checkmarks.">
      <ellipse cx="250" cy="170" rx="215" ry="130" fill="url(#g-wash-peach)" opacity="0.6" filter="url(#rough-2)" />
      <MiniNode x={64} y={170} tone="#8B5CF6">
        <rect x="52" y="163" width="24" height="16" rx="3" fill="#E9E3FD" />
        <circle cx="64" cy="171" r="4" fill={PAPER} />
      </MiniNode>
      {cells.map((i) => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const x = 200 + col * 92
        const y = 64 + row * 112
        const d = `M88 170 C140 ${130 + row * 80} 160 ${y + 40} ${x} ${y + 40}`
        const keep = i === 1 || i === 5
        return (
          <g key={i}>
            <path d={d} fill="none" stroke="url(#g-thread)" strokeWidth="2.2" strokeLinecap="round" opacity="0.6" filter="url(#rough)" />
            <circle r="3" fill="url(#g-spark)" filter="url(#il-glow)">
              <animateMotion dur={`${2.8 + i * 0.45}s`} repeatCount="indefinite" path={d} />
            </circle>
            <g className="il-float" style={{ animationDelay: `${i * 0.4}s` }} filter="url(#rough)">
              <rect x={x} y={y} width="76" height="82" rx="8" fill={PAPER} stroke={INK} strokeWidth="2.4" />
              <rect x={x + 7} y={y + 7} width="62" height="48" rx="4" fill="url(#g-canvas-sky)" />
              <circle cx={x + 18 + (i % 3) * 14} cy={y + 20} r="5" fill="#FFB196" stroke={INK} strokeWidth="1.2" />
              <path d={`M${x + 7} ${y + 42} L${x + 24} ${y + 26 + (i % 2) * 6} L${x + 40} ${y + 38} L${x + 52} ${y + 30} L${x + 69} ${y + 46} L${x + 69} ${y + 55} L${x + 7} ${y + 55} Z`} fill="#9EEDE4" stroke={INK} strokeWidth="1.3" strokeLinejoin="round" />
              {keep ? (
                <g>
                  <circle cx={x + 64} cy={y + 70} r="9" fill="#0AD0BC" opacity="0.9" />
                  <path d={`M${x + 59.5} ${y + 70} l3 3.4 l6 -7`} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              ) : (
                <path d={`M${x + 10} ${y + 70} h28`} stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              )}
            </g>
          </g>
        )
      })}
    </svg>
  )
}

export function AutomationArt() {
  return (
    <svg viewBox="0 0 480 340" className={frame} role="img" aria-label="A clock wired to a workflow node delivers a fresh stack of assets at sunrise.">
      <ellipse cx="240" cy="175" rx="215" ry="130" fill="url(#g-wash-purple)" opacity="0.5" filter="url(#rough-2)" />
      {/* sunrise */}
      <g filter="url(#rough)">
        <path d="M330 120 a38 38 0 0 1 76 0 Z" fill="#FFB196" stroke={INK} strokeWidth="2.4" />
        <path d="M368 64 v12 M326 78 l8 8 M410 78 l-8 8" stroke={INK} strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M312 122 h112" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      </g>
      {/* clock */}
      <g className="il-float" filter="url(#rough)">
        <circle cx="92" cy="110" r="36" fill={PAPER} stroke={INK} strokeWidth="2.8" />
        <circle cx="92" cy="110" r="29" fill="none" stroke="#8B5CF6" strokeWidth="1.4" strokeDasharray="3 5" />
        <path d="M92 110 L92 90 M92 110 L106 116" stroke={INK} strokeWidth="2.6" strokeLinecap="round" fill="none" />
        <path d="M66 80 L56 70 M118 80 L128 70" stroke={INK} strokeWidth="2.6" strokeLinecap="round" fill="none" />
        <circle cx="92" cy="110" r="3" fill="#8B5CF6" />
      </g>
      {/* wire to node */}
      <path d="M104 148 C130 196 160 216 198 220" fill="none" stroke="url(#g-thread)" strokeWidth="3" strokeLinecap="round" filter="url(#rough)" />
      <circle r="4" fill="url(#g-spark)" filter="url(#il-glow)">
        <animateMotion dur="3.2s" repeatCount="indefinite" path="M104 148 C130 196 160 216 198 220" />
      </circle>
      <MiniNode x={222} y={222} tone="#0AD0BC">
        <path d="M212 214 l8 8 l-8 8 M226 230 h8" />
      </MiniNode>
      {/* wire to output stack */}
      <path d="M246 220 C290 214 310 200 338 196" fill="none" stroke="url(#g-thread)" strokeWidth="3" strokeLinecap="round" filter="url(#rough)" />
      <circle r="4" fill="url(#g-spark)" filter="url(#il-glow)">
        <animateMotion dur="2.6s" begin="-1.2s" repeatCount="indefinite" path="M246 220 C290 214 310 200 338 196" />
      </circle>
      {/* output stack */}
      <g className="il-float" style={{ animationDelay: '0.8s' }} filter="url(#rough)">
        <g transform="translate(338 158) rotate(3)">
          <rect x="10" y="14" width="84" height="64" rx="8" fill={PAPER} stroke={INK} strokeWidth="2" opacity="0.55" />
          <rect x="5" y="7" width="84" height="64" rx="8" fill={PAPER} stroke={INK} strokeWidth="2.2" opacity="0.75" />
          <rect x="0" y="0" width="84" height="64" rx="8" fill={PAPER} stroke={INK} strokeWidth="2.6" />
          <rect x="7" y="7" width="70" height="38" rx="4" fill="url(#g-canvas-sky)" />
          <path d="M7 34 L26 18 L40 30 L52 22 L77 42 L77 45 L7 45 Z" fill="#9EEDE4" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M10 54 h44" stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </g>
      </g>
      <path className="il-twinkle" transform="translate(430 150)" d="M0,-6 L1.6,-1.6 L6,0 L1.6,1.6 L0,6 L-1.6,1.6 L-6,0 L-1.6,-1.6 Z" fill="#8B5CF6" opacity="0.8" />
      <path className="il-twinkle" transform="translate(160 280) scale(0.8)" style={{ animationDelay: '1.4s' }} d="M0,-6 L1.6,-1.6 L6,0 L1.6,1.6 L0,6 L-1.6,1.6 L-6,0 L-1.6,-1.6 Z" fill="#0AD0BC" opacity="0.8" />
      {/* ground squiggle */}
      <path d="M60 296 C160 290 320 290 420 296" fill="none" stroke={INK} strokeWidth="2.2" strokeLinecap="round" opacity="0.5" filter="url(#rough)" />
    </svg>
  )
}
