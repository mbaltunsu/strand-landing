import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  type Edge,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import './flow.css'
import { nodeTypes, type DemoNode } from './nodes'

const initialNodes: DemoNode[] = [
  {
    id: 'brief',
    type: 'prompt',
    position: { x: 0, y: 120 },
    data: {
      phase: 'idle',
      title: 'Brief',
      body: 'Poster for a koi-kite festival',
      accent: 'lavender',
    },
  },
  {
    id: 'text',
    type: 'model',
    position: { x: 250, y: 0 },
    data: {
      phase: 'idle',
      title: 'Text model',
      chip: 'script-1',
      body: 'Writes tagline + shot list',
      accent: 'teal',
    },
  },
  {
    id: 'image',
    type: 'model',
    position: { x: 500, y: 120 },
    data: {
      phase: 'idle',
      title: 'Image model',
      chip: 'keyart-xl',
      body: 'Renders the key visual',
      accent: 'purple',
    },
  },
  {
    id: 'upscale',
    type: 'model',
    position: { x: 750, y: 0 },
    data: {
      phase: 'idle',
      title: 'Upscale',
      chip: 'crisp-4x',
      body: '4K, print-ready',
      accent: 'coral',
    },
  },
  {
    id: 'output',
    type: 'output',
    position: { x: 1000, y: 120 },
    data: {
      phase: 'idle',
      title: 'Output',
      caption: 'koi-festival-poster.png',
      accent: 'purple',
    },
  },
]

const initialEdges: Edge[] = [
  { id: 'e1', source: 'brief', target: 'text', type: 'default', animated: true },
  { id: 'e2', source: 'text', target: 'image', type: 'default', animated: true },
  { id: 'e3', source: 'image', target: 'upscale', type: 'default', animated: true },
  { id: 'e4', source: 'upscale', target: 'output', type: 'default', animated: true },
]

const RUN_ORDER = ['brief', 'text', 'image', 'upscale', 'output'] as const
const STEP_MS = 700
const RESET_MS = 2000

const fitViewOptions = { padding: 0.15 }
const proOptions = { hideAttribution: true }

export default function DemoFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState<DemoNode>(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState<Edge>(initialEdges)
  const [running, setRunning] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  // Clear any pending timers on unmount.
  useEffect(() => {
    const pending = timers.current
    return () => pending.forEach(clearTimeout)
  }, [])

  const setPhase = useCallback(
    (id: string, phase: 'idle' | 'running' | 'done') => {
      setNodes((prev) =>
        prev.map((n) =>
          n.id === id ? ({ ...n, data: { ...n.data, phase } } as DemoNode) : n,
        ),
      )
    },
    [setNodes],
  )

  const resetAll = useCallback(() => {
    setNodes((prev) =>
      prev.map((n) => ({ ...n, data: { ...n.data, phase: 'idle' } }) as DemoNode),
    )
  }, [setNodes])

  const run = useCallback(() => {
    if (running) return
    setRunning(true)
    timers.current.forEach(clearTimeout)
    timers.current = []
    resetAll()

    RUN_ORDER.forEach((id, i) => {
      // mark this node running
      timers.current.push(
        setTimeout(() => setPhase(id, 'running'), i * STEP_MS),
      )
      // mark it done as the next one starts
      timers.current.push(
        setTimeout(() => setPhase(id, 'done'), (i + 1) * STEP_MS),
      )
    })

    // after the whole chain finishes, idle everything again
    const total = RUN_ORDER.length * STEP_MS + RESET_MS
    timers.current.push(
      setTimeout(() => {
        resetAll()
        setRunning(false)
      }, total),
    )
  }, [running, resetAll, setPhase])

  return (
    <div
      className="relative mt-14 h-[420px] overflow-hidden rounded-3xl border-2 border-divider bg-surface/60 sm:h-[480px] lg:h-[540px]"
      aria-label="Interactive demo workflow canvas"
    >
      <button
        type="button"
        onClick={run}
        disabled={running}
        className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 font-display text-sm font-bold text-bg transition-colors hover:bg-purple hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        <svg width="11" height="12" viewBox="0 0 11 12" aria-hidden="true">
          <path d="M1 1.2 10 6 1 10.8Z" fill="currentColor" />
        </svg>
        {running ? 'Running…' : 'Run workflow'}
      </button>

      <ReactFlow
        className="strand-flow"
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        fitViewOptions={fitViewOptions}
        onInit={(inst) => {
          let t: ReturnType<typeof setTimeout>
          const refit = () => {
            clearTimeout(t)
            t = setTimeout(() => inst.fitView(fitViewOptions), 150)
          }
          window.addEventListener('resize', refit)
        }}
        proOptions={proOptions}
        minZoom={0.2}
        maxZoom={1.5}
        zoomOnScroll={false}
        preventScrolling={false}
        panOnScroll={false}
        zoomOnPinch
        nodesDraggable
        nodesConnectable={false}
        elementsSelectable
      >
        <Background variant={BackgroundVariant.Dots} gap={22} size={1.5} />
      </ReactFlow>
    </div>
  )
}
