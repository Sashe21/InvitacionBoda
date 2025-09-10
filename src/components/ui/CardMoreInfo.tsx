"use client"

import { useEffect, useRef, useState } from "react"

interface CardMoreInfoProps {
  type: "women" | "men"
  index: number
}

export default function CardMoreInfo({ type, index }: CardMoreInfoProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, index * 150)
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

  const isWomen = type === "women"

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ borderColor: "#1a385f" }}
    >
      <div className="text-center mb-6">
        <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
          <div className="text-center">
            <img
              src={isWomen ? "/icons/dress.svg" : "/icons/smokin.svg"}
              alt={isWomen ? "Mujer" : "Hombre"}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a385f" }}>
          {isWomen ? "Mujeres" : "Hombres"}
        </h3>
      </div>

      <div className="space-y-4">
        <div className="border-t pt-4" style={{ borderColor: "#1a385f" }}>
          <p className="font-semibold mb-2 text-center" style={{ color: "#1a385f" }}>
            Evitar
          </p>
          <div className="flex justify-center space-x-4">
            {isWomen ? (
              <>
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full mx-auto mb-1" style={{ backgroundColor: "#07B3E3" }}></div>
                  <span className="text-xs" style={{ color: "#1a385f" }}>
                    Azul
                  </span>
                </div>
                <div className="text-center">
                  <div
                    className="w-8 h-8 rounded-full mx-auto mb-1 bg-white border-2"
                    style={{ borderColor: "#1a385f" }}
                  ></div>
                  <span className="text-xs" style={{ color: "#1a385f" }}>
                    Blanco
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full mx-auto mb-1 bg-amber-100"></div>
                  <span className="text-xs" style={{ color: "#1a385f" }}>
                    Beige
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div
                    className="w-8 h-8 rounded-full mx-auto mb-1 bg-white border-2"
                    style={{ borderColor: "#1a385f" }}
                  ></div>
                  <span className="text-xs" style={{ color: "#1a385f" }}>
                    Blanco
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full mx-auto mb-1 bg-gray-500"></div>
                  <span className="text-xs" style={{ color: "#1a385f" }}>
                    Gris
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full mx-auto mb-1 bg-amber-100"></div>
                  <span className="text-xs" style={{ color: "#1a385f" }}>
                    Beige
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        {isWomen && (
          <div className="mt-4 pt-4 border-t" style={{ borderColor: "#1a385f" }}>
            <p className="text-sm text-center" style={{ color: "#1a385f" }}>
              La celebración será en la playa, considera calzado cómodo y apropiado para la arena
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
