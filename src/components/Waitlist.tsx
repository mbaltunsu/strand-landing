import { useState } from 'react'

export default function Waitlist({ id, compact = false }: { id?: string; compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  if (joined) {
    return (
      <p id={id} className="flex items-center gap-2 font-display text-lg font-bold text-teal" role="status">
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <circle cx="11" cy="11" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M6.5 11.5 L9.5 14.5 L15.5 8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        You're on the thread — we'll be in touch.
      </p>
    )
  }

  return (
    <form
      id={id}
      className={`flex w-full max-w-md flex-col gap-3 sm:flex-row ${compact ? '' : 'sm:items-center'}`}
      onSubmit={(e) => {
        e.preventDefault()
        if (email.includes('@')) setJoined(true)
      }}
    >
      <label className="sr-only" htmlFor={`${id ?? 'waitlist'}-email`}>Email address</label>
      <input
        id={`${id ?? 'waitlist'}-email`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@studio.com"
        className="h-13 flex-1 rounded-lg border-2 border-divider bg-surface px-4 py-3 text-ink placeholder:text-ink-soft/60 outline-none transition focus:border-purple"
      />
      <button
        type="submit"
        className="rounded-lg bg-ink px-7 py-3 font-display font-bold text-bg transition-colors duration-300 hover:bg-purple hover:text-white"
      >
        Join waitlist
      </button>
    </form>
  )
}
