import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  { label: 'Models', href: '#models' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Makers', href: '#industries' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function StrandLogo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`} aria-label="Strand — home">
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <path
          d="M23 6 C12 4 6 10 9 14 C12 18 22 13 21 19 C20 25 11 26 7 23"
          fill="none" stroke="url(#g-thread)" strokeWidth="3" strokeLinecap="round"
        />
        <circle cx="23.5" cy="6.5" r="3" fill="#8B5CF6" />
        <circle cx="7" cy="23" r="2.4" fill="#0AD0BC" />
      </svg>
      <span className="font-display text-xl font-black tracking-tight">Strand</span>
    </a>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-xl bg-surface/95 px-5 py-3 shadow-[0_1px_20px_rgba(10,27,46,0.13)] backdrop-blur dark:shadow-[0_1px_20px_rgba(0,0,0,0.45)]">
        <StrandLogo />

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-display font-bold text-ink transition-colors hover:text-purple">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="#waitlist"
            className="rounded-lg bg-ink px-6 py-2.5 font-display font-bold text-bg transition-colors duration-300 hover:bg-purple hover:text-white"
          >
            Join waitlist
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid size-10 place-items-center rounded-lg text-ink"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M4 4 L18 18 M18 4 L4 18" /> : <path d="M3 6 h16 M3 11 h16 M3 16 h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-xl bg-surface/95 p-4 shadow-[0_8px_30px_rgba(10,27,46,0.15)] backdrop-blur lg:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-display font-bold text-ink hover:bg-bg"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#waitlist"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-ink px-4 py-3 text-center font-display font-bold text-bg"
              >
                Join waitlist
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
