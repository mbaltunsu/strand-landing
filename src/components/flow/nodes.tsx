import { Handle, Position, type NodeProps, type Node } from '@xyflow/react'

/** Lifecycle phase a node can be in while a run plays out. */
export type NodePhase = 'idle' | 'running' | 'done'

type PromptData = {
  phase: NodePhase
  title: string
  body: string
  accent: string
}

type ModelData = {
  phase: NodePhase
  title: string
  chip: string
  body: string
  accent: string
}

type OutputData = {
  phase: NodePhase
  title: string
  caption: string
  accent: string
}

export type PromptNode = Node<PromptData, 'prompt'>
export type ModelNode = Node<ModelData, 'model'>
export type OutputNode = Node<OutputData, 'output'>
export type DemoNode = PromptNode | ModelNode | OutputNode

/** Shared shell: rounded card, accent dot header, phase glow + status badge. */
function NodeShell({
  phase,
  accent,
  children,
}: {
  phase: NodePhase
  accent: string
  children: React.ReactNode
}) {
  return (
    <div
      className="strand-node relative w-[180px] rounded-xl border-2 border-divider bg-surface p-3.5 shadow-sm"
      data-phase={phase}
      style={{ ['--node-accent' as string]: `var(--color-${accent})` }}
    >
      {children}
    </div>
  )
}

/** Tiny status indicator shown top-right while running / when done. */
function StatusBadge({ phase }: { phase: NodePhase }) {
  if (phase === 'running') {
    return (
      <span
        className="strand-spinner absolute right-2.5 top-2.5 size-3 rounded-full border-2"
        style={{ borderColor: 'var(--node-accent)', borderTopColor: 'transparent' }}
        aria-hidden="true"
      />
    )
  }
  if (phase === 'done') {
    return (
      <svg
        className="absolute right-2 top-2"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        aria-hidden="true"
      >
        <circle cx="7" cy="7" r="7" fill="var(--color-teal)" />
        <path
          d="M4 7.2 6.1 9.3 10 4.8"
          fill="none"
          stroke="var(--color-surface)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  return null
}

function HeaderRow({ accent, title }: { accent: string; title: string }) {
  return (
    <div className="flex items-center gap-2 pr-4">
      <span
        className="size-2.5 shrink-0 rounded-full"
        style={{ background: `var(--color-${accent})` }}
        aria-hidden="true"
      />
      <span className="font-display text-sm font-bold leading-tight text-ink">{title}</span>
    </div>
  )
}

export function PromptNodeView({ data }: NodeProps<PromptNode>) {
  return (
    <NodeShell phase={data.phase} accent={data.accent}>
      <StatusBadge phase={data.phase} />
      <div className="flex items-center gap-2 pr-4">
        <span
          className="size-2.5 shrink-0 rounded-full"
          style={{ background: `var(--color-${data.accent})` }}
          aria-hidden="true"
        />
        <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
          <path
            d="M2 11 8.5 4.5l-2-2L1 9l1 2Z"
            fill="none"
            stroke="var(--il-ink)"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          <path d="m8.5 4.5 1.4-1.4 2 2-1.4 1.4" fill="none" stroke="var(--il-ink)" strokeWidth="1.1" strokeLinejoin="round" />
        </svg>
        <span className="font-display text-sm font-bold leading-tight text-ink">{data.title}</span>
      </div>
      <p className="mt-2 text-xs leading-snug text-ink-soft">&ldquo;{data.body}&rdquo;</p>
      <Handle type="source" position={Position.Right} />
    </NodeShell>
  )
}

export function ModelNodeView({ data }: NodeProps<ModelNode>) {
  return (
    <NodeShell phase={data.phase} accent={data.accent}>
      <StatusBadge phase={data.phase} />
      <HeaderRow accent={data.accent} title={data.title} />
      <span className="mt-2 inline-flex rounded-full border border-divider px-2 py-0.5 text-[11px] text-ink-soft">
        {data.chip}
      </span>
      <p className="mt-2 text-xs leading-snug text-ink-soft">{data.body}</p>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </NodeShell>
  )
}

export function OutputNodeView({ data }: NodeProps<OutputNode>) {
  return (
    <NodeShell phase={data.phase} accent={data.accent}>
      <StatusBadge phase={data.phase} />
      <HeaderRow accent={data.accent} title={data.title} />
      {/* generated poster preview */}
      <svg
        className="mt-2 w-full rounded-md"
        viewBox="0 0 152 96"
        role="img"
        aria-label="Generated poster preview"
      >
        <defs>
          <linearGradient id="strand-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#C4B5FD" />
            <stop offset="1" stopColor="#FDD7C2" />
          </linearGradient>
        </defs>
        <rect x="0.8" y="0.8" width="150.4" height="94.4" rx="5" fill="url(#strand-sky)" stroke="var(--il-ink)" strokeWidth="1.4" />
        <circle cx="112" cy="30" r="13" fill="#FFB196" stroke="var(--il-ink)" strokeWidth="1.4" />
        <path d="M1.5 96 V70 L40 50 L74 72 L104 54 L150.5 78 V96 Z" fill="#9EEDE4" stroke="var(--il-ink)" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M1.5 96 V82 L34 66 L66 84 L150.5 88 V96 Z" fill="#FFB196" opacity="0.85" stroke="var(--il-ink)" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
      <p className="mt-2 truncate text-[11px] font-medium text-ink-soft">{data.caption}</p>
      <Handle type="target" position={Position.Left} />
    </NodeShell>
  )
}

export const nodeTypes = {
  prompt: PromptNodeView,
  model: ModelNodeView,
  output: OutputNodeView,
}
