"use client"

import { useEffect, useRef, useState } from "react"

export default function GodparentsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [parentsVisible, setParentsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const godparents = [
    {
      name: "Yurith Zepeda Martinez & Damian Barranco Bernardino",
      iconPath: "/icons/anillos.svg", // Using external SVG file path
      role: "Padrinos de Anillos",
      color: "text-blue-800",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      name: "Candelaria Bernardino Guzman & Lazaro Barranco Benitez",
      iconPath: "/icons/lazo.svg", // Using external SVG file path
      role: "Padrinos de Lazo",
      color: "text-blue-700",
      bgColor: "from-blue-100 to-slate-50",
    },
    {
      name: "Mariana Romero Zepeda & David Navarro Reyes",
      iconPath: "/icons/arras.svg", // Using external SVG file path
      role: "Padrinos de Arras",
      color: "text-blue-900",
      bgColor: "from-slate-100 to-blue-50",
    },
    {
      name: "Mariela Areli Rivas Vargas & Sebastian Andres Hernandez Flores",
      iconPath: "/icons/biblia.svg", // Using external SVG file path
      role: "Padrinos de Biblia",
      color: "text-blue-800",
      bgColor: "from-indigo-50 to-blue-50",
    },
    {
      name: "Lenia Priscila Rivas Vargas & Wiliam Grajeda",
      iconPath: "/icons/cojin.svg", // Using external SVG file path
      role: "Padrinos de Cojines",
      color: "text-blue-700",
      bgColor: "from-blue-50 to-slate-50",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setParentsVisible(true)
          setTimeout(() => setIsVisible(true), 150)
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
        {/* Parents Section */}
        <div className="mb-16 sm:mb-20">
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
              <span className="italic font-extralight">Nuestros</span>
              <span className="ml-3 font-normal">Padres</span>
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
                className={`text-lg sm:text-xl font-light mb-4 italic transition-all duration-700 ${
                  parentsVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: "#1a385f",
                  transitionDelay: "600ms",
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
                    className="text-base sm:text-lg font-light text-gray-800"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Felipe de Jesus Ramos Bernabé
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
                    className="text-base sm:text-lg font-light text-gray-800"
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
                className={`text-lg sm:text-xl font-light mb-4 italic transition-all duration-700 ${
                  parentsVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: "#1a385f",
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
                    className="text-base sm:text-lg font-light text-gray-800"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Moises Barranco Bernardino
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
                    className="text-base sm:text-lg font-light text-gray-800"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Norma Lorena Vazquez Leal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Godparents Section */}
        <div>
          {/* Godparents Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full opacity-60" style={{ backgroundColor: "#1a385f" }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#1a385f" }}></div>
                <div className="w-2 h-2 rounded-full opacity-60" style={{ backgroundColor: "#1a385f" }}></div>
              </div>
            </div>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 tracking-wide"
              style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
            >
              <span className="italic font-extralight">Nuestros</span>
              <span className="ml-3 font-normal">Padrinos</span>
            </h2>

            <div className="flex justify-center mb-4">
              <svg width="120" height="16" viewBox="0 0 120 16" style={{ color: "#1a385f" }} className="opacity-60">
                <path d="M10 8 Q35 5, 60 8 T110 8" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="60" cy="8" r="2" fill="currentColor" />
              </svg>
            </div>

            <p
              className="text-3xl text-gray-600 italic font-light max-w-2xl mx-auto"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Gracias por ser parte de nuestro gran día y acompañarnos en este momento tan especial
            </p>
          </div>

          {/* Godparents Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {godparents.map((godparent, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-1000 p-6 text-center border-2 hover:scale-105 transform ${
                  isVisible
                    ? "translate-x-0 translate-y-0 opacity-100 rotate-0 scale-100"
                    : "-translate-x-full translate-y-8 opacity-0 -rotate-12 scale-75"
                }`}
                style={{
                  borderColor: "#1a385f",
                  transitionDelay: `${index * 150}ms`,
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${godparent.bgColor} mb-4 shadow-md transition-all duration-1000 ${
                    isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                  }`}
                  style={{
                    transitionDelay: `${index * 150 + 200}ms`,
                  }}
                >
                  <img
                    src={godparent.iconPath || "/placeholder.svg"}
                    alt={godparent.role}
                    className={`w-6 h-6 sm:w-7 sm:h-7 transition-all duration-700 ${
                      isVisible ? "scale-200" : "scale-0"
                    }`}
                    style={{
                      transitionDelay: `${index * 150 + 400}ms`,
                      filter:
                        "brightness(0) saturate(100%) invert(13%) sepia(44%) saturate(1835%) hue-rotate(202deg) brightness(95%) contrast(95%)", // CSS filter to match blue color
                    }}
                  />
                </div>

                <div className="mb-3">
                  <div
                    className="text-sm sm:text-base font-light leading-relaxed"
                    style={{ fontFamily: "Cormorant Garamond, serif", color: "#1a385f" }}
                  >
                    {godparent.name.split(" & ").map((name, nameIndex) => (
                      <div key={nameIndex} className="flex flex-col items-center">
                        <span className="text-center">{name.trim()}</span>
                        {nameIndex === 0 && (
                          <div className="flex items-center justify-center my-2">
                            <span className="mx-2 font-normal" style={{ color: "#1a385f" }}>
                              {" "}
                              &{" "}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center mb-3">
                  <div
                    className="w-6 h-px bg-gradient-to-r from-transparent to-transparent"
                    style={{ backgroundColor: "#1a385f" }}
                  ></div>
                  <div className="w-1.5 h-1.5 rounded-full mx-2" style={{ backgroundColor: "#1a385f" }}></div>
                  <div
                    className="w-6 h-px bg-gradient-to-l from-transparent to-transparent"
                    style={{ backgroundColor: "#1a385f" }}
                  ></div>
                </div>

                <p
                  className="text-xs sm:text-sm text-gray-600 font-light italic"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {godparent.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
