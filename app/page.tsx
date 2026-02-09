import { Suspense } from "react"
import { FloatingHearts } from "@/components/floating-hearts"
import { ValentineCard } from "@/components/valentine-card"
import { HeartClickEffect } from "@/components/heart-click-effect"

export default function Page() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={null}>
        <FloatingHearts />
        <HeartClickEffect />
        <ValentineCard />
      </Suspense>
    </main>
  )
}
