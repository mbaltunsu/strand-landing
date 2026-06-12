export default function Footer() {
  return (
    <footer className="bg-[#0A1B2E] text-[#F6F8FF]">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-14">
        {/* Top row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <a href="#top" aria-label="Strand — home" className="flex items-center gap-2">
              <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                <defs>
                  <linearGradient id="footer-g-thread" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#0AD0BC" />
                  </linearGradient>
                </defs>
                <path
                  d="M23 6 C12 4 6 10 9 14 C12 18 22 13 21 19 C20 25 11 26 7 23"
                  fill="none"
                  stroke="url(#footer-g-thread)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="23.5" cy="6.5" r="3" fill="#8B5CF6" />
                <circle cx="7" cy="23" r="2.4" fill="#0AD0BC" />
              </svg>
              <span className="font-display text-xl font-black text-[#F6F8FF]">Strand</span>
            </a>
            <span className="hidden text-[#F6F8FF]/50 sm:inline">—</span>
            <span className="hidden font-body text-sm text-[#F6F8FF]/50 sm:inline">
              Every model. One thread.
            </span>
          </div>

          {/* Tagline on mobile */}
          <p className="font-body text-sm text-[#F6F8FF]/50 sm:hidden">Every model. One thread.</p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* X (Twitter) */}
            <a
              href="#"
              aria-label="Strand on X"
              className="grid size-9 place-items-center rounded-full border border-[#F6F8FF]/30 transition-colors hover:border-[#8B5CF6]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M12.5 2h2.1L9.8 7.4 15.3 14h-3.9l-3.4-4.4L4.1 14H2l5.1-5.8L1.7 2H5.7l3.1 4 3.7-4Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="Strand on LinkedIn"
              className="grid size-9 place-items-center rounded-full border border-[#F6F8FF]/30 transition-colors hover:border-[#8B5CF6]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M4.5 6.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="4.5" cy="4.5" r="0.8" fill="currentColor" />
                <path
                  d="M7.5 11.5V9a1.5 1.5 0 0 1 3 0v2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M7.5 7.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="Strand on YouTube"
              className="grid size-9 place-items-center rounded-full border border-[#F6F8FF]/30 transition-colors hover:border-[#8B5CF6]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1" y="3" width="14" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M6.5 5.5 L11 8 L6.5 10.5 Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#F6F8FF]/15 pt-6">
          <span className="text-sm text-[#F6F8FF]/50">© 2026 Strand</span>
          <nav className="flex gap-6" aria-label="Footer legal links">
            {['Privacy Policy', 'Terms', 'Contact'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-sm text-[#F6F8FF]/50 transition-colors hover:text-[#8B5CF6]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
