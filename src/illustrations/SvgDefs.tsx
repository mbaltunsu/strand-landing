/**
 * Global SVG defs mounted once in App. All illustrations reference these by id.
 * - `rough` / `rough-2`: hand-drawn wobble via turbulence displacement
 * - `il-glow` / `il-glow-soft`: luminous halo for nodes & sparks
 * - `il-grain`: paper grain overlay (apply to a translucent rect on top)
 * - thread + wash gradients shared across artwork
 */
export default function SvgDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
      <defs>
        <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="3" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="rough-2" x="-8%" y="-8%" width="116%" height="116%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="23" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="4.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="il-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="il-glow-soft" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="14" />
        </filter>
        <filter id="il-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.55" intercept="0" />
          </feComponentTransfer>
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>

        <linearGradient id="g-thread" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0AD0BC" />
          <stop offset="55%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A3A9F5" />
        </linearGradient>
        <linearGradient id="g-thread-warm" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF8A7A" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <radialGradient id="g-wash-purple" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#A78BFA" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g-wash-teal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0AD0BC" stopOpacity="0.42" />
          <stop offset="60%" stopColor="#0AD0BC" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#0AD0BC" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g-wash-peach" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB196" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#FFB196" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFB196" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g-spark" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="g-canvas-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#FDD7C2" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#9EEDE4" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  )
}
