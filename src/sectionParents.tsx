"use client"

import { useEffect, useRef, useState } from "react"

export default function SectionParents() {
  const [parentsVisible, setParentsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setParentsVisible(true)
        }
      },
      {
        threshold: 0.05,
        rootMargin: "50px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      style={{ backgroundColor: "#fffaef" }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-1/4 left-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
          <path
            d="M0 200 Q250 150, 500 200 T1000 200"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            style={{ color: "#1a385f" }}
          />
          <path
            d="M0 400 Q250 350, 500 400 T1000 400"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            style={{ color: "#1a385f" }}
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Parents Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-light mb-4 tracking-wide transition-all duration-1000 ${
              parentsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              fontFamily: "Playfair Display, serif",
              color: "#1a385f",
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              transitionDelay: "200ms",
            }}
          >
            <span className="italic font-extralight">Nuestros Padres </span>
            <span className="ml-3 font-normal">{""}</span>
          </h2>

          <div
            className={`flex justify-center transition-all duration-1000 ${
              parentsVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              transitionDelay: "300ms",
            }}
          >
            <svg width="100" height="12" viewBox="0 0 100 12" style={{ color: "#1a385f" }} className="opacity-60">
              <path d="M10 6 Q30 3, 50 6 T90 6" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="50" cy="6" r="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Parents Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Groom's Parents */}
          <div
            className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-1000 p-6 sm:p-8 text-center border-2 hover:scale-105 transform ${
              parentsVisible
                ? "translate-x-0 translate-y-0 opacity-100 rotate-0 scale-100"
                : "-translate-x-full translate-y-8 opacity-0 -rotate-12 scale-75"
            }`}
            style={{
              borderColor: "#1a385f",
              transitionDelay: "400ms",
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <h3
              className={`text-lg sm:text-xl mb-4 italic transition-all duration-700 font-semibold ${
                parentsVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#73410B",
                transitionDelay: "750ms",
              }}
            >
              Padres del Novio
            </h3>

            <div
              className={`space-y-3 transition-all duration-700 ${
                parentsVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div>
                <p
                  className="text-base sm:text-lg text-gray-800 font-medium"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Felipe de Jesús Ramos Bernabé
                </p>
              </div>

              <div className="flex items-center justify-center my-3">
                <div className="w-6 h-px" style={{ backgroundColor: "#1a385f" }}></div>
                <span className="mx-2" style={{ color: "#1a385f" }}>
                  &
                </span>
                <div className="w-6 h-px" style={{ backgroundColor: "#1a385f" }}></div>
              </div>

              <div>
                <p
                  className="text-base sm:text-lg text-gray-800 font-medium"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  María Francisca Villalvazo Villalvazo
                </p>
              </div>
            </div>
          </div>

          {/* Bride's Parents */}
          <div
            className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-1000 p-6 sm:p-8 text-center border-2 hover:scale-105 transform ${
              parentsVisible
                ? "translate-x-0 translate-y-0 opacity-100 rotate-0 scale-100"
                : "translate-x-full translate-y-8 opacity-0 rotate-12 scale-75"
            }`}
            style={{
              borderColor: "#1a385f",
              transitionDelay: "550ms",
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <h3
              className={`text-lg sm:text-xl mb-4 italic transition-all duration-700 font-semibold ${
                parentsVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#73410B",
                transitionDelay: "750ms",
              }}
            >
              Padres de la Novia
            </h3>

            <div
              className={`space-y-3 transition-all duration-700 ${
                parentsVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div>
                <p
                  className="text-base sm:text-lg text-gray-800 font-medium"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Moisés Barranco Bernardino
                </p>
              </div>

              <div className="flex items-center justify-center my-3">
                <div className="w-6 h-px" style={{ backgroundColor: "#1a385f" }}></div>
                <span className="mx-2" style={{ color: "#1a385f" }}>
                  &
                </span>
                <div className="w-6 h-px" style={{ backgroundColor: "#1a385f" }}></div>
              </div>

              <div>
                <p
                  className="text-base sm:text-lg text-gray-800 font-medium"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Norma Lorena Vázquez Leal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
