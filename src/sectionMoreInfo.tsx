"use client"

import { useEffect, useState } from "react"

export default function SectionMoreInfo() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, 500)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("section-more-info")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section id="section-more-info" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#fffaef" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-px flex-1" style={{ backgroundColor: "#1a385f" }}></div>
            <div className="px-6 flex items-center space-x-6">
              {/* Man silhouette */}
              <div className="text-center">
                <img
                  src="/icons/trajes.svg" // aquí la ruta de tu imagen mujer
                  alt="Mujer"
                  className="w-30 h-30 object-contain"
                />
              </div>
            </div>
            <div className="h-px flex-1" style={{ backgroundColor: "#1a385f" }}></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#1a385f" }}>
            Código de Vestimenta
          </h2>
          <p className="text-lg" style={{ color: "#1a385f" }}>
            Elegante
          </p>
        </div>

        {/* Dress Code Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Women's Dress Code */}
          <div
            className={`bg-white rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              borderColor: "#1a385f",
              transitionDelay: isVisible ? "300ms" : "0ms",
            }}
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <img src="/icons/dress.svg" alt="Mujer" className="w-20 h-20 object-contain" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a385f" }}>
                Mujeres
              </h3>
            </div>

            <div className="space-y-4">
              <div className="border-t pt-4" style={{ borderColor: "#1a385f" }}>
                <p className="font-semibold mb-2 text-center" style={{ color: "#1a385f" }}>
                  Evitar
                </p>
                <div className="flex justify-center space-x-4">
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
                </div>
              </div>

              <div className="mt-4 pt-4 border-t" style={{ borderColor: "#1a385f" }}>
                <p className="text-sm text-center" style={{ color: "#1a385f" }}>
                  La celebración será en la playa, considera calzado cómodo y apropiado para la arena
                </p>
              </div>
            </div>
          </div>

          {/* Men's Dress Code */}
          <div
            className={`bg-white rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              borderColor: "#1a385f",
              transitionDelay: isVisible ? "450ms" : "0ms",
            }}
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <img
                    src="/icons/smokin.svg" // aquí la ruta de tu imagen mujer
                    alt="Mujer"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a385f" }}>
                Hombres
              </h3>
            </div>

            <div className="space-y-4">
              <div className="text-center"></div>

              <div className="border-t pt-4" style={{ borderColor: "#1a385f" }}>
                <p className="font-semibold mb-2 text-center" style={{ color: "#1a385f" }}>
                  Evitar
                </p>
                <div className="flex justify-center space-x-3">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div
          className={`text-center space-y-4 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
        >
          <div className="inline-block bg-white rounded-xl p-6 shadow-md border" style={{ borderColor: "#1a385f" }}>
            <p className="text-xl leading-relaxed font-bold" style={{ color: "#1a385f" }}>
              Amamos a los más pequeños, pero esta historia de amor se baila entre grandes. Respetuosamente, les pedimos
              no llevar niños
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
