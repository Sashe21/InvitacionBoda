"use client"

import { useEffect, useRef, useState } from "react"

interface CardGodparentsProps {
  name: string
  role: string
  image: string
  index: number
}

export default function CardGodparents({ name, role, image, index }: CardGodparentsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, index * 150)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px",
      },
    )

    const currentRef = cardRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
    }
  }, [index])

  const nameParts = name.split(" & ")
  const firstName = nameParts[0] || name
  const secondName = nameParts[1] || ""

  return (
    <div
      ref={cardRef}
      className={`
        bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl border-2 hover:scale-105
        transform transition-all duration-1000 p-6 sm:p-8 text-center max-w-sm mx-auto
        ${isVisible ? "translate-y-0 opacity-100 rotate-0 scale-100" : "translate-y-8 opacity-0 rotate-1 scale-75"}
      `}
      style={{
        borderColor: "#1a385f",
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <div className="space-y-4">
        <div className="flex justify-center mb-6">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#1a385f20" }}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Icono de ${role}`}
              className="w-10 h-10"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(11%) sepia(45%) saturate(1352%) hue-rotate(194deg) brightness(95%) contrast(95%)",
              }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <p
            className="text-base sm:text-lg font-medium"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              color: "#374151",
            }}
          >
            {firstName}
          </p>

          {secondName && (
            <>
              <div className="flex items-center justify-center my-3">
                
                <span className="mx-2" style={{ color: "#1a385f" }}>
                  &
                </span>
              
              </div>

              <p
                className="text-base sm:text-lg font-medium"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  color: "#374151",
                }}
              >
                {secondName}
              </p>
            </>
          )}
        </div>

        <div className="flex items-center justify-center space-x-3 py-4">
          <div className="w-8 h-px" style={{ backgroundColor: "#1a385f" }}></div>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#1a385f" }}></div>
          <div className="w-8 h-px" style={{ backgroundColor: "#1a385f" }}></div>
        </div>

        <p
          className="text-sm italic font-semibold tracking-wide"
          style={{
            fontFamily: "Playfair Display, serif",
            color: "#73410B",
          }}
        >
          {role}
        </p>
      </div>
    </div>
  )
}
