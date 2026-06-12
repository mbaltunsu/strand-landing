import { useEffect, useState } from 'react'
import { applyTheme, getInitialTheme } from '../lib/theme'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getInitialTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const next = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      type="button"
      aria-label={`Switch to ${next} theme`}
      onClick={() => setTheme(next)}
      className="grid size-10 place-items-center rounded-full border-2 border-divider text-ink transition-colors hover:border-purple"
    >
      {theme === 'light' ? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M14.5 11.5 A6.5 6.5 0 1 1 6.5 3.5 A5.2 5.2 0 0 0 14.5 11.5 Z" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="9" cy="9" r="3.6" />
          <path d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.7 3.7l1.4 1.4M12.9 12.9l1.4 1.4M14.3 3.7l-1.4 1.4M5.1 12.9l-1.4 1.4" />
        </svg>
      )}
    </button>
  )
}
