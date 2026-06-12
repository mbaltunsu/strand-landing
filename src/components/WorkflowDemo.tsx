import { lazy, Suspense } from 'react'
import SectionHeading from './SectionHeading'

const DemoFlow = lazy(() => import('./flow/DemoFlow'))

/** Skeleton placeholder shown while the React Flow canvas chunk loads. */
function FlowSkeleton() {
  return (
    <div
      className="mt-14 h-[420px] animate-pulse rounded-3xl border-2 border-divider bg-surface sm:h-[480px] lg:h-[540px]"
      aria-hidden="true"
    />
  )
}

export default function WorkflowDemo() {
  return (
    <section id="workflow" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        badge="Live demo"
        badgeTone="teal"
        title="See a Strand run"
        sub="A real canvas — drag the nodes, watch the thread carry one idea through four models."
      />
      <Suspense fallback={<FlowSkeleton />}>
        <DemoFlow />
      </Suspense>
    </section>
  )
}
