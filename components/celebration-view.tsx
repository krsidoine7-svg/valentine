"use client"

import { useEffect, useCallback } from "react"
import confetti from "canvas-confetti"

export function CelebrationView() {
  const triggerConfetti = useCallback(() => {
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }, [])

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff0000", "#ff69b4", "#ff1493", "#db2777"],
    })
    triggerConfetti()
  }, [triggerConfetti])

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full max-w-lg mx-auto text-center p-8 animate-fade-in-up">
      <div className="relative mb-8 transform hover:scale-110 transition-transform duration-300">
        <span className="text-8xl sm:text-9xl block animate-bounce" role="img" aria-label="Heart">
          
        </span>
        <div className="absolute -top-4 -right-4 animate-pulse">
          <span className="text-4xl"></span>
        </div>
      </div>

      <h1 className="font-dancing text-5xl sm:text-6xl text-primary mb-6 drop-shadow-sm">
        Yesssss !
      </h1>
      
      <p className="text-2xl sm:text-3xl font-medium text-foreground mb-4">
        Je savais que tu dirais oui ! 
      </p>
      
      <p className="text-lg text-muted-foreground italic max-w-sm mx-auto leading-relaxed">
        "Chaque seconde passée avec toi est un cadeau précieux. Tu es mon évidence, mon bonheur et mon tout. Je t'aime plus que les mots ne pourront jamais l'exprimer." 
      </p>

      <div className="mt-10 flex gap-2 justify-center">
        {["", "", "", ""].map((emoji, i) => (
          <span
            key={i}
            className="text-3xl animate-bounce"
            style={{ animationDelay: (i * 0.2) + "s" }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  )
}
