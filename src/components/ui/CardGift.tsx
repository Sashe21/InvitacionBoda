"use client"

import { Gift } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface CardGiftProps {
  type: "envelope" | "registry"
  index: number
}

export default function CardGift({ type, index }: CardGiftProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, index * 200)
        }
      },
      { threshold: 0.3, rootMargin: "-50px" },
    )

    const currentElement = cardRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
      observer.disconnect()
    }
  }, [index])

  const isEnvelope = type === "envelope"

  return (
    <div
      ref={cardRef}
      className={`bg-[#fffaef]/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#1a385f]/20 hover:border-[#1a385f]/30 transition-all duration-700 ease-out shadow-xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="text-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#1a385f]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          {isEnvelope ? (
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#1a385f]">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
          ) : (
            <Gift className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#1a385f]" />
          )}
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a385f] mb-2 sm:mb-3">
          {isEnvelope ? "Lluvia de Sobres" : "Mesa de Regalos"}
        </h3>

        {!isEnvelope && <p className="text-[#1a385f]/60 text-xs sm:text-sm font-mono mb-2">Código: MR-3389</p>}

        <p className="text-[#1a385f]/70 text-xs sm:text-sm md:text-base leading-relaxed px-1 sm:px-2 mb-4 sm:mb-5 md:mb-6">
          {isEnvelope
            ? "En nuestra recepción encontrarás un baúl especial donde podrás depositar tu sobre. Tu apoyo en efectivo será un gran gesto de amor para comenzar nuestra vida juntos"
            : "Hemos preparado una lista de regalos especialmente para ustedes"}
        </p>

        {!isEnvelope && (
          <a
            href="https://www.mesaderegalos.lamarina.com.mx/mesa-de-regalos/evento#%C2%A1%20NOS%20CASAMOS%20!%20%20GERA%20&%20ABY/eyJpZEV2ZW50byI6Ik1SLTAwMDAzMzg5IiwiZ3Vlc3QiOjEsImlkQ2x1c3RlciI6MH0="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a385f] text-[#fffaef] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-[#1a385f]/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Mesa de Regalos
          </a>
        )}
      </div>
    </div>
  )
}
