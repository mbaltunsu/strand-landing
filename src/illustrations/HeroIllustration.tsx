const INK = 'var(--il-ink)'
const PAPER = 'var(--il-paper)'

/** Pen tip → model node → output canvas. Pulses travel the full path. */
const THREADS = [
  // text / quill
  'M342 498 C310 460 268 415 250 340 C235 240 460 310 714 268',
  // image / camera
  'M342 498 C340 400 338 300 355 212 C372 130 560 196 714 232',
  // video / film
  'M342 498 C400 380 445 240 485 140 C520 86 622 132 714 182',
  // pixel art
  'M342 498 C450 430 565 280 610 148 C628 104 682 128 714 158',
  // 3d asset
  'M342 498 C460 480 600 416 672 318 C692 296 702 294 712 290',
]

function Star({ x, y, s = 1, delay = 0 }: { x: number; y: number; s?: number; delay?: number }) {
  return (
    <path
      className="il-twinkle"
      style={{ animationDelay: `${delay}s` }}
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0,-7 L1.9,-1.9 L7,0 L1.9,1.9 L0,7 L-1.9,1.9 L-7,0 L-1.9,-1.9 Z"
      fill="#8B5CF6"
      opacity="0.8"
    />
  )
}

function NodeBadge({
  cx, cy, delay, ring, children,
}: { cx: number; cy: number; delay: number; ring: string; children: React.ReactNode }) {
  return (
    <g className="il-float" style={{ animationDelay: `${delay}s` }}>
      <circle cx={cx} cy={cy} r="40" fill={ring} opacity="0.22" filter="url(#il-glow-soft)" />
      <circle className="il-pulse-ring" style={{ animationDelay: `${delay + 0.6}s` }} cx={cx} cy={cy} r="34" fill="none" stroke={ring} strokeWidth="2" />
      <g filter="url(#rough)">
        <circle cx={cx} cy={cy} r="33" fill={PAPER} stroke={INK} strokeWidth="3" />
        <circle cx={cx} cy={cy} r="27" fill="none" stroke={ring} strokeWidth="1.6" strokeDasharray="3 5" strokeLinecap="round" />
      </g>
      <g filter="url(#rough)" stroke={INK} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {children}
      </g>
    </g>
  )
}

export default function HeroIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 920 780"
      className={className}
      role="img"
      aria-label="A maker at a drafting table conducts glowing threads through floating AI model nodes — text, image, video, pixel art and 3D — weaving into one finished canvas."
    >
      {/* ---------- color washes ---------- */}
      <g filter="url(#rough-2)">
        <ellipse cx="265" cy="560" rx="235" ry="155" fill="url(#g-wash-peach)" />
        <ellipse cx="790" cy="205" rx="205" ry="175" fill="url(#g-wash-purple)" />
        <ellipse cx="310" cy="215" rx="195" ry="150" fill="url(#g-wash-teal)" />
        <ellipse cx="640" cy="650" rx="170" ry="90" fill="url(#g-wash-teal)" opacity="0.7" />
      </g>

      {/* ---------- ambient doodles ---------- */}
      <g stroke={INK} fill="none" strokeWidth="2" strokeLinecap="round" filter="url(#rough)" opacity="0.55">
        <path d="M76 138 c14 -6 30 -2 34 10 M84 122 c16 -8 36 -2 42 12" opacity="0.8" />
        <path d="M138 424 h16 M146 416 v16" />
        <path d="M798 84 h16 M806 76 v16" />
        <circle cx="470" cy="330" r="218" strokeDasharray="2 10" opacity="0.5" />
      </g>
      <Star x={210} y={84} s={0.9} delay={0.2} />
      <Star x={528} y={58} s={1.1} delay={1.4} />
      <Star x={846} y={368} s={0.8} delay={0.8} />
      <Star x={640} y={430} s={0.7} delay={2.1} />
      <Star x={64} y={300} s={0.8} delay={1.0} />

      {/* ---------- threads ---------- */}
      <g fill="none">
        {THREADS.map((d, i) => (
          <g key={i}>
            <path d={d} stroke="url(#g-thread)" strokeWidth="3" strokeLinecap="round" opacity="0.85" filter="url(#rough)" />
            <path
              d={d} className="il-dash-flow" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round"
              strokeDasharray="2 22" opacity="0.9"
            />
            <circle r="5" fill="url(#g-spark)" filter="url(#il-glow)">
              <animateMotion dur={`${3.8 + i * 0.7}s`} repeatCount="indefinite" path={d} />
            </circle>
            <circle r="3" fill="#8B5CF6" opacity="0.8">
              <animateMotion dur={`${3.8 + i * 0.7}s`} begin={`${-(1.9 + i * 0.35)}s`} repeatCount="indefinite" path={d} />
            </circle>
          </g>
        ))}
      </g>

      {/* ---------- model nodes ---------- */}
      {/* text — quill */}
      <NodeBadge cx={250} cy={340} delay={0} ring="#0AD0BC">
        <path d="M266 322 C254 320 244 328 239 337 C235 344 237 351 238 353 C245 351 253 346 258 339 C263 332 265 326 266 322 Z" fill="#9EEDE4" />
        <path d="M238 353 C246 344 256 333 264 324" strokeWidth="1.6" />
        <path d="M238 353 L233 360" />
        <circle cx="231" cy="362" r="1.3" fill={INK} stroke="none" />
      </NodeBadge>
      {/* image — camera */}
      <NodeBadge cx={355} cy={212} delay={0.8} ring="#8B5CF6">
        <rect x="338" y="202" width="34" height="24" rx="5" fill="#E9E3FD" />
        <circle cx="355" cy="214" r="7" fill={PAPER} />
        <circle cx="355" cy="214" r="2.4" fill="#8B5CF6" stroke="none" />
        <path d="M346 202 l4 -6 h10 l4 6" />
        <circle cx="367" cy="208" r="1.4" fill={INK} stroke="none" />
      </NodeBadge>
      {/* video — film */}
      <NodeBadge cx={485} cy={140} delay={1.6} ring="#FF8A7A">
        <rect x="468" y="128" width="34" height="25" rx="4" fill="#FFE3DC" />
        <path d="M474 128 v25 M496 128 v25" strokeWidth="1.6" />
        <path d="M468 134 h6 M468 141 h6 M468 148 h6 M496 134 h6 M496 141 h6 M496 148 h6" strokeWidth="1.3" />
        <path d="M481 135 l9 5.5 l-9 5.5 Z" fill="#FF8A7A" strokeWidth="1.6" />
      </NodeBadge>
      {/* pixel art */}
      <NodeBadge cx={610} cy={148} delay={2.4} ring="#A3A9F5">
        <g strokeWidth="1.8">
          <rect x="596" y="134" width="9" height="9" fill="#C9F4EF" />
          <rect x="605" y="134" width="9" height="9" fill="none" />
          <rect x="614" y="134" width="9" height="9" fill="#E9E3FD" />
          <rect x="596" y="143" width="9" height="9" fill="none" />
          <rect x="605" y="143" width="9" height="9" fill="#A3A9F5" />
          <rect x="614" y="143" width="9" height="9" fill="none" />
          <rect x="596" y="152" width="9" height="9" fill="#E9E3FD" />
          <rect x="605" y="152" width="9" height="9" fill="none" />
          <rect x="614" y="152" width="9" height="9" fill="#C9F4EF" />
        </g>
      </NodeBadge>
      {/* 3d asset — iso cube */}
      <NodeBadge cx={672} cy={318} delay={3.2} ring="#0AD0BC">
        <path d="M672 300 L688 309 L688 327 L672 336 L656 327 L656 309 Z" fill="#E9E3FD" />
        <path d="M656 309 L672 318 L688 309 M672 318 L672 336" />
        <path d="M672 300 L688 309 L688 327 L672 336" fill="#C9F4EF" strokeWidth="0" opacity="0.7" />
        <path d="M672 300 L688 309 L688 327 L672 336 L656 327 L656 309 Z" fill="none" />
      </NodeBadge>

      {/* ---------- output canvas ---------- */}
      <g className="il-float-deep">
        <g transform="translate(712 86) rotate(2)">
          <circle className="il-pulse-ring" cx="92" cy="110" r="120" fill="none" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.4" />
          <g filter="url(#rough)">
            {/* hanging loop */}
            <path d="M80 -16 C84 -26 100 -26 104 -16 L96 0 L88 0 Z" fill="none" stroke={INK} strokeWidth="2.2" />
            <rect x="0" y="0" width="184" height="214" rx="14" fill={PAPER} stroke={INK} strokeWidth="3.2" />
            <rect x="7" y="7" width="170" height="200" rx="9" fill="none" stroke={INK} strokeWidth="1.2" opacity="0.35" />
          </g>
          {/* landscape being generated */}
          <g filter="url(#rough)">
            <rect x="16" y="16" width="152" height="182" rx="7" fill="url(#g-canvas-sky)" />
            <circle cx="118" cy="62" r="17" fill="#FFB196" stroke={INK} strokeWidth="2" />
            <path d="M16 142 L52 96 L84 134 L112 104 L152 150 L168 142 L168 198 L16 198 Z" fill="#9EEDE4" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" opacity="0.92" />
            <path d="M16 168 C60 158 120 176 168 164" fill="none" stroke={INK} strokeWidth="2" opacity="0.7" />
            <path d="M58 46 c4 -5 8 -5 12 0 M74 54 c3 -4 7 -4 10 0" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
            {/* pixels dissolving into paint along the left edge */}
            <g strokeWidth="0">
              <rect x="18" y="30" width="10" height="10" fill="#8B5CF6" opacity="0.85" />
              <rect x="30" y="42" width="9" height="9" fill="#0AD0BC" opacity="0.6" />
              <rect x="20" y="58" width="8" height="8" fill="#A3A9F5" opacity="0.75" />
              <rect x="34" y="72" width="7" height="7" fill="#FF8A7A" opacity="0.5" />
              <rect x="22" y="88" width="6" height="6" fill="#8B5CF6" opacity="0.4" />
            </g>
          </g>
          {/* rendering dots */}
          <g fill={INK}>
            <circle className="il-twinkle" cx="76" cy="228" r="3" />
            <circle className="il-twinkle" style={{ animationDelay: '0.4s' }} cx="92" cy="228" r="3" />
            <circle className="il-twinkle" style={{ animationDelay: '0.8s' }} cx="108" cy="228" r="3" />
          </g>
          <Star x={196} y={18} s={1.1} delay={0.5} />
          <Star x={-14} y={64} s={0.8} delay={1.8} />
        </g>
      </g>

      {/* ---------- maker at drafting table ---------- */}
      <g transform="translate(120 470)">
        {/* ground */}
        <g stroke={INK} fill="none" strokeWidth="2.4" strokeLinecap="round" filter="url(#rough)" opacity="0.85">
          <path d="M-16 270 C70 276 220 274 320 268" />
          <path d="M28 282 h14 M70 286 h10 M250 280 h16" strokeWidth="1.8" opacity="0.6" />
        </g>

        {/* drafting table */}
        <g stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#rough)">
          <path d="M66 128 L244 100 L248 111 L70 139 Z" fill={PAPER} />
          <path d="M86 136 L80 264 M232 110 L238 262" strokeWidth="2.8" fill="none" />
          <path d="M70 264 h20 M228 262 h20" strokeWidth="2.4" fill="none" opacity="0.8" />
          <path d="M84 196 L236 184" strokeWidth="2" fill="none" opacity="0.55" />
        </g>
        {/* paper + pen jar on the board */}
        <g filter="url(#rough)">
          <g transform="translate(124 98) rotate(-8.5)">
            <rect width="56" height="40" rx="3" fill={PAPER} stroke={INK} strokeWidth="2" />
            <path d="M9 11 h38 M9 20 h28 M9 29 h34" stroke="#8B5CF6" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
          </g>
          <g transform="translate(204 78) rotate(-8.5)">
            <rect width="16" height="20" rx="2" fill="#C9F4EF" stroke={INK} strokeWidth="2" />
            <path d="M4 0 L1 -12 M11 0 L13 -10" stroke={INK} strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>
        </g>

        {/* stool */}
        <g stroke={INK} strokeWidth="2.8" strokeLinecap="round" filter="url(#rough)">
          <ellipse cx="32" cy="202" rx="27" ry="8" fill={PAPER} />
          <path d="M14 208 L8 266 M50 208 L56 266" fill="none" />
        </g>

        {/* figure */}
        <g filter="url(#rough)">
          {/* legs */}
          <path d="M42 194 C68 200 86 206 96 210 L93 258" fill="none" stroke={INK} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38 198 C60 208 76 216 84 222 L80 258" fill="none" stroke={INK} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* shoes */}
          <path d="M80 258 h17 M93 258 h17" stroke={INK} strokeWidth="3.6" strokeLinecap="round" />
          {/* torso — shirt */}
          <path d="M28 198 C24 156 48 122 90 110 C112 104 124 114 120 132 C114 160 86 184 50 200 Z" fill="#E9E3FD" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          {/* collar tick */}
          <path d="M104 116 c4 4 8 6 12 6" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          {/* back arm resting on board */}
          <path d="M76 136 C92 134 106 126 118 116" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
          <circle cx="120" cy="115" r="4" fill={PAPER} stroke={INK} strokeWidth="2.2" />
          {/* front arm raised, conducting the threads */}
          <path d="M94 122 C120 104 156 76 192 52 C200 46 206 44 210 42" fill="none" stroke={INK} strokeWidth="3.4" strokeLinecap="round" />
          {/* hand + pen */}
          <circle cx="213" cy="39" r="5.5" fill={PAPER} stroke={INK} strokeWidth="2.4" />
          <path d="M216 36 L225 27" stroke={INK} strokeWidth="2.8" strokeLinecap="round" />
          <path d="M223 29 L228 24" stroke="#8B5CF6" strokeWidth="3.6" strokeLinecap="round" />
          {/* head */}
          <circle cx="126" cy="84" r="23" fill={PAPER} stroke={INK} strokeWidth="3" />
          {/* hair */}
          <path d="M105 76 C107 60 126 52 140 62 C150 56 156 66 150 74 C142 66 118 64 105 76 Z" fill={INK} opacity="0.9" />
          {/* face */}
          <circle cx="137" cy="84" r="2" fill={INK} />
          <path d="M138 94 c3 2 7 2 9 -1" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
          <path d="M146 88 c2 1 3 2 4 4" fill="none" stroke="#FF8A7A" strokeWidth="2.4" strokeLinecap="round" opacity="0.6" />
        </g>

        {/* spark at pen tip */}
        <circle cx="227" cy="23" r="7" fill="url(#g-spark)" filter="url(#il-glow)" className="il-twinkle" />
      </g>

      {/* ---------- grain ---------- */}
      <rect x="0" y="0" width="920" height="780" fill={INK} opacity="0.05" filter="url(#il-grain)" pointerEvents="none" />
    </svg>
  )
}
