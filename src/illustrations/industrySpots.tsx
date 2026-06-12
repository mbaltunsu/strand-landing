/** Vignette stamps for the industries grid. Square 200×200, shares global SvgDefs. */

const INK = 'var(--il-ink)'
const PAPER = 'var(--il-paper)'

const cls = 'w-full max-w-[130px] mx-auto'

function Spark({ x, y, s = 1, d = 0, fill = '#8B5CF6' }: { x: number; y: number; s?: number; d?: number; fill?: string }) {
  return (
    <path
      className="il-twinkle" style={{ animationDelay: `${d}s` }}
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0,-6 L1.6,-1.6 L6,0 L1.6,1.6 L0,6 L-1.6,1.6 L-6,0 L-1.6,-1.6 Z" fill={fill} opacity="0.85"
    />
  )
}

export function GameSpot() {
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="A game controller with a floating pixel heart.">
      <ellipse cx="100" cy="106" rx="84" ry="70" fill="url(#g-wash-purple)" filter="url(#rough-2)" />
      <g filter="url(#rough)">
        <path d="M58 86 C66 74 134 74 142 86 C158 96 166 130 154 142 C144 152 130 138 124 130 L76 130 C70 138 56 152 46 142 C34 130 42 96 58 86 Z" fill={PAPER} stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
        <path d="M74 96 v20 M64 106 h20" stroke={INK} strokeWidth="3.4" strokeLinecap="round" fill="none" />
        <circle cx="124" cy="98" r="5" fill="#0AD0BC" stroke={INK} strokeWidth="1.8" />
        <circle cx="136" cy="110" r="5" fill="#FF8A7A" stroke={INK} strokeWidth="1.8" />
      </g>
      {/* pixel heart */}
      <g className="il-float" transform="translate(124 38)">
        {[[1, 0], [2, 0], [4, 0], [5, 0], [0, 1], [3, 1], [6, 1], [0, 2], [6, 2], [1, 3], [5, 3], [2, 4], [4, 4], [3, 5]].map(([x, y], i) => (
          <rect key={i} x={x * 6} y={y * 6} width="5.4" height="5.4" rx="1" fill="#8B5CF6" opacity="0.92" />
        ))}
      </g>
      <Spark x={42} y={56} s={0.8} fill="#0AD0BC" />
      <Spark x={168} y={150} s={0.7} d={1.2} />
    </svg>
  )
}

export function FashionSpot() {
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="A dress form lit by a camera flash.">
      <ellipse cx="100" cy="104" rx="84" ry="72" fill="url(#g-wash-peach)" filter="url(#rough-2)" />
      <g filter="url(#rough)">
        {/* dress form */}
        <path d="M84 52 C82 66 78 74 72 80 C64 102 68 124 100 124 C132 124 136 102 128 80 C122 74 118 66 116 52 Z" fill="#E9E3FD" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
        <path d="M84 92 C94 98 106 98 116 92" fill="none" stroke={INK} strokeWidth="1.8" opacity="0.5" />
        <path d="M93 52 h14" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M100 44 v8 M100 124 v22" stroke={INK} strokeWidth="2.6" strokeLinecap="round" fill="none" />
        <path d="M80 152 C88 146 112 146 120 152" fill="none" stroke={INK} strokeWidth="2.8" strokeLinecap="round" />
        <circle cx="100" cy="40" r="4.5" fill={PAPER} stroke={INK} strokeWidth="2.2" />
      </g>
      {/* flash burst */}
      <g stroke="#FFB196" strokeWidth="2.6" strokeLinecap="round" filter="url(#rough)" className="il-twinkle">
        <path d="M152 60 l10 -10 M158 76 h13 M146 48 v-13" fill="none" />
      </g>
      {/* swing tag */}
      <g filter="url(#rough)" className="il-float" style={{ animationDelay: '0.5s' }}>
        <path d="M48 92 L60 84" stroke={INK} strokeWidth="1.8" fill="none" />
        <rect x="34" y="88" width="22" height="14" rx="3" transform="rotate(-12 45 95)" fill="#C9F4EF" stroke={INK} strokeWidth="2" />
      </g>
      <Spark x={160} y={130} s={0.8} d={0.9} />
    </svg>
  )
}

export function AdvertSpot() {
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="A megaphone announcing a billboard poster.">
      <ellipse cx="100" cy="104" rx="84" ry="72" fill="url(#g-wash-teal)" filter="url(#rough-2)" />
      {/* billboard */}
      <g filter="url(#rough)" className="il-float">
        <g transform="translate(92 38) rotate(3)">
          <rect width="76" height="56" rx="6" fill={PAPER} stroke={INK} strokeWidth="2.6" />
          <rect x="6" y="6" width="64" height="34" rx="3" fill="url(#g-canvas-sky)" />
          <circle cx="50" cy="17" r="6" fill="#FFB196" stroke={INK} strokeWidth="1.4" />
          <path d="M6 32 L24 18 L38 30 L48 24 L70 38 L70 40 L6 40 Z" fill="#9EEDE4" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M10 48 h36" stroke={INK} strokeWidth="2.4" strokeLinecap="round" opacity="0.55" />
          <path d="M28 56 v14 M48 56 v14" stroke={INK} strokeWidth="2.4" fill="none" />
        </g>
      </g>
      {/* megaphone */}
      <g filter="url(#rough)">
        <path d="M36 120 L84 100 C92 112 94 124 90 138 L48 144 C40 138 36 130 36 120 Z" fill="#FFE3DC" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
        <path d="M84 100 C96 96 102 116 90 138" fill={PAPER} stroke={INK} strokeWidth="2.6" />
        <path d="M52 144 L58 162 L70 158 L64 142" fill={PAPER} stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M104 104 c8 -2 14 -6 18 -12 M108 118 c8 0 16 -2 22 -6 M108 130 c6 2 12 4 16 8" stroke="#8B5CF6" strokeWidth="2.4" strokeLinecap="round" fill="none" className="il-twinkle" />
      </g>
      <Spark x={36} y={62} s={0.8} fill="#0AD0BC" />
    </svg>
  )
}

export function ProductSpot() {
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="A product bottle rising from an open box with an orbit ring.">
      <ellipse cx="100" cy="106" rx="84" ry="72" fill="url(#g-wash-purple)" filter="url(#rough-2)" />
      {/* orbit */}
      <ellipse cx="100" cy="96" rx="62" ry="20" fill="none" stroke="#8B5CF6" strokeWidth="1.6" strokeDasharray="3 7" filter="url(#rough)" opacity="0.7" />
      {/* bottle */}
      <g filter="url(#rough)" className="il-float">
        <rect x="86" y="56" width="28" height="46" rx="7" fill="#C9F4EF" stroke={INK} strokeWidth="2.6" />
        <rect x="92" y="44" width="16" height="12" rx="3" fill={PAPER} stroke={INK} strokeWidth="2.4" />
        <path d="M92 72 h16" stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M92 80 h12" stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      </g>
      {/* open box */}
      <g filter="url(#rough)">
        <path d="M58 118 L100 132 L142 118 L142 150 L100 164 L58 150 Z" fill={PAPER} stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
        <path d="M100 132 L100 164" stroke={INK} strokeWidth="2.2" fill="none" />
        <path d="M58 118 L48 102 L88 112 L100 132 Z" fill="#E9E3FD" stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M142 118 L152 102 L112 112 L100 132 Z" fill="#E9E3FD" stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      </g>
      <Spark x={152} y={66} s={0.9} />
      <Spark x={46} y={74} s={0.7} d={1.3} fill="#0AD0BC" />
    </svg>
  )
}

export function FilmSpot() {
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="A director's chair beside storyboard frames.">
      <ellipse cx="100" cy="104" rx="84" ry="72" fill="url(#g-wash-peach)" filter="url(#rough-2)" />
      {/* storyboard strip */}
      <g filter="url(#rough)" className="il-float">
        <g transform="translate(96 42) rotate(4)">
          {[0, 1].map((i) => (
            <g key={i} transform={`translate(${i * 38} 0)`}>
              <rect width="34" height="26" rx="3" fill={PAPER} stroke={INK} strokeWidth="2.2" />
              <path d={i === 0 ? 'M4 18 L12 10 L18 16 L24 12 L30 18 L30 21 L4 21 Z' : 'M6 14 a6 6 0 0 1 12 0'} fill="#9EEDE4" stroke={INK} strokeWidth="1.3" strokeLinejoin="round" />
            </g>
          ))}
          <g transform="translate(19 30)">
            <rect width="34" height="26" rx="3" fill={PAPER} stroke={INK} strokeWidth="2.2" />
            <circle cx="12" cy="12" r="5" fill="#FFB196" stroke={INK} strokeWidth="1.3" />
          </g>
        </g>
      </g>
      {/* director's chair */}
      <g filter="url(#rough)" stroke={INK} strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="38" y="88" width="44" height="14" rx="4" fill="#FF8A7A" strokeWidth="2.6" />
        <path d="M40 102 L36 156 M80 102 L84 156 M38 122 L82 146 M82 122 L38 146" strokeWidth="2.6" />
        <path d="M42 88 v-16 M78 88 v-16 M42 74 h36" strokeWidth="2.4" />
      </g>
      <Spark x={156} y={130} s={0.8} d={0.7} />
      <Spark x={30} y={56} s={0.7} d={1.6} fill="#0AD0BC" />
    </svg>
  )
}

export function ConceptArtSpot() {
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="An easel with a half-painted canvas and palette.">
      <ellipse cx="100" cy="104" rx="84" ry="72" fill="url(#g-wash-teal)" filter="url(#rough-2)" />
      {/* easel + canvas */}
      <g filter="url(#rough)">
        <path d="M64 150 L92 56 M136 150 L108 56 M100 150 L100 120" stroke={INK} strokeWidth="2.6" strokeLinecap="round" fill="none" />
        <g transform="translate(64 52) rotate(-2)">
          <rect width="74" height="58" rx="5" fill={PAPER} stroke={INK} strokeWidth="2.6" />
          <path d="M6 36 L26 16 L42 32 L52 24 L68 40 L68 52 L6 52 Z" fill="#9EEDE4" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="52" cy="16" r="7" fill="#FFB196" stroke={INK} strokeWidth="1.6" />
          {/* unfinished sketch half */}
          <path d="M40 31 L52 23 L66 38" fill="none" stroke={INK} strokeWidth="1.4" strokeDasharray="3 3" opacity="0.6" />
        </g>
      </g>
      {/* palette */}
      <g filter="url(#rough)" className="il-float" style={{ animationDelay: '0.6s' }}>
        <path d="M118 128 C140 120 162 130 160 144 C158 158 134 166 120 158 C112 154 112 148 118 144 C122 140 120 132 118 128 Z" fill={PAPER} stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
        <circle cx="136" cy="138" r="4" fill="#8B5CF6" />
        <circle cx="148" cy="142" r="4" fill="#0AD0BC" />
        <circle cx="140" cy="152" r="4" fill="#FF8A7A" />
      </g>
      <Spark x={42} y={60} s={0.8} />
    </svg>
  )
}

export function MusicSpot() {
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="Headphones over piano keys with floating notes.">
      <ellipse cx="100" cy="104" rx="84" ry="72" fill="url(#g-wash-purple)" filter="url(#rough-2)" />
      {/* headphones */}
      <g filter="url(#rough)" fill="none" stroke={INK} strokeWidth="2.8" strokeLinecap="round">
        <path d="M58 96 C58 62 142 62 142 96" />
        <rect x="48" y="92" width="20" height="30" rx="8" fill="#E9E3FD" />
        <rect x="132" y="92" width="20" height="30" rx="8" fill="#E9E3FD" />
      </g>
      {/* keys */}
      <g filter="url(#rough)">
        <rect x="52" y="134" width="96" height="30" rx="5" fill={PAPER} stroke={INK} strokeWidth="2.6" />
        <path d="M68 134 v30 M84 134 v30 M100 134 v30 M116 134 v30 M132 134 v30" stroke={INK} strokeWidth="1.6" opacity="0.6" />
        <rect x="62" y="134" width="10" height="17" rx="2" fill={INK} opacity="0.85" />
        <rect x="94" y="134" width="10" height="17" rx="2" fill={INK} opacity="0.85" />
        <rect x="126" y="134" width="10" height="17" rx="2" fill={INK} opacity="0.85" />
      </g>
      {/* notes */}
      <g filter="url(#rough)" stroke={INK} strokeWidth="2" strokeLinecap="round" fill="none" className="il-float">
        <path d="M160 64 v14 M160 64 l9 -3 v14" />
        <circle cx="157" cy="80" r="3.6" fill={INK} />
        <circle cx="166" cy="77" r="3.6" fill={INK} />
      </g>
      <Spark x={36} y={66} s={0.8} fill="#0AD0BC" />
      <Spark x={170} y={120} s={0.7} d={1.1} />
    </svg>
  )
}

export function CreatorSpot() {
  return (
    <svg viewBox="0 0 200 200" className={cls} role="img" aria-label="A phone on a tripod inside a glowing ring light.">
      <ellipse cx="100" cy="104" rx="84" ry="72" fill="url(#g-wash-teal)" filter="url(#rough-2)" />
      {/* ring light */}
      <circle cx="100" cy="92" r="46" fill="none" stroke="#FFB196" strokeWidth="5" filter="url(#rough)" opacity="0.85" />
      <circle cx="100" cy="92" r="46" fill="none" stroke="#fff" strokeWidth="1.4" strokeDasharray="2 8" className="il-dash-flow" />
      {/* phone */}
      <g filter="url(#rough)" className="il-float">
        <rect x="84" y="64" width="32" height="56" rx="7" fill={PAPER} stroke={INK} strokeWidth="2.6" />
        <rect x="89" y="71" width="22" height="36" rx="3" fill="url(#g-canvas-sky)" />
        <path d="M89 98 L97 88 L104 95 L111 90 L111 107 L89 107 Z" fill="#9EEDE4" stroke={INK} strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="100" cy="114" r="2.4" fill="none" stroke={INK} strokeWidth="1.4" />
      </g>
      {/* tripod */}
      <g filter="url(#rough)" stroke={INK} strokeWidth="2.6" strokeLinecap="round" fill="none">
        <path d="M100 138 v10 M100 148 L80 168 M100 148 L120 168 M100 148 v18" />
      </g>
      {/* heart bubble */}
      <g filter="url(#rough)" className="il-float" style={{ animationDelay: '0.8s' }}>
        <circle cx="152" cy="56" r="13" fill={PAPER} stroke={INK} strokeWidth="2.2" />
        <path d="M146 54 c0 -3 4 -5 6 -2 c2 -3 6 -1 6 2 c0 4 -6 7 -6 7 s-6 -3 -6 -7 Z" fill="#FF8A7A" />
        <path d="M144 66 l-4 5" stroke={INK} strokeWidth="2" />
      </g>
      <Spark x={40} y={140} s={0.8} d={0.6} />
    </svg>
  )
}
