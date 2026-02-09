"use client"

import { useCallback, useRef, useState } from "react"
import { CelebrationView } from "./celebration-view"

export function ValentineCard() {
  const [accepted, setAccepted] = useState(false)
  const [noButtonPos, setNoButtonPos] = useState<{ top: string; left: string } | null>(null)
  const [escapeCount, setEscapeCount] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const escapeMessages = [
    "Ah ah, essaie encore !",
    "Tu ne peux pas dire non !",
    "Pas si vite !",
    "Non non, pas par la !",
    "Tu es sur(e) ?",
    "Impossible de refuser !",
    "Le bouton te fuit !",
  ]

  const moveNoButton = useCallback(() => {
    if (!noButtonRef.current) return

    const btn = noButtonRef.current.getBoundingClientRect()

    const maxX = window.innerWidth - btn.width - 16
    const maxY = window.innerHeight - btn.height - 16

    const newX = Math.max(8, Math.random() * maxX)
    const newY = Math.max(8, Math.random() * maxY)

    setNoButtonPos({
      left: `${newX}px`,
      top: `${newY}px`,
    })
    setEscapeCount((c) => c + 1)
  }, [])

  if (accepted) {
    return <CelebrationView />
  }

  return (
    <>
      <div
        ref={cardRef}
        className="relative w-full max-w-md mx-4 min-h-[380px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-fade-in-up"
        style={{ boxShadow: "0 25px 60px rgba(219, 39, 119, 0.15), 0 8px 24px rgba(0,0,0,0.08)" }}
      >
        {/* Top decorative bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary" />

        <div className="px-8 pt-8 pb-10">
          {/* Heart icon */}
          <div className="flex justify-center mb-4">
            <span className="text-5xl animate-pulse-soft text-primary" aria-hidden="true">
              &#9829;
            </span>
          </div>

          {/* Romantic message */}
          <h1 className="font-dancing text-3xl sm:text-4xl text-center text-card-foreground mb-2 leading-snug">
            Mon coeur...
          </h1>
          <p className="text-center text-muted-foreground text-lg mb-8">
            Veux-tu etre ma Valentine ?
          </p>

          {/* Escape message */}
          {escapeCount > 0 && (
            <p className="text-center text-primary text-sm mb-4 font-medium animate-fade-in-up">
              {escapeMessages[escapeCount % escapeMessages.length]}
            </p>
          )}

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setAccepted(true)}
              className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
            >
              {"Oui"}
            </button>

            {!noButtonPos && (
              <button
                ref={noButtonRef}
                type="button"
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
                className="px-8 py-3 rounded-xl bg-muted text-muted-foreground font-semibold text-lg border border-border transition-all duration-200 hover:scale-105"
              >
                {"Non"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* "Non" button escapes across the entire screen */}
      {noButtonPos && (
        <button
          ref={noButtonRef}
          type="button"
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          onClick={moveNoButton}
          className="fixed z-50 px-8 py-3 rounded-xl bg-card text-muted-foreground font-semibold text-lg border border-border shadow-lg transition-all duration-300 ease-out cursor-pointer"
          style={{
            top: noButtonPos.top,
            left: noButtonPos.left,
          }}
        >
          {"Non"}
        </button>
      )}
    </>
  )
}
