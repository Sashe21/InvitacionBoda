"use client"

import { useEffect, useState } from "react"
import CardMoreInfo from "@/components/ui/CardMoreInfo"

export default function SectionMoreInfo() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, 200)
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
              <div className="text-center">
                <img src="/icons/trajes.svg" alt="Trajes" className="w-30 h-30 object-contain" />
              </div>
            </div>
            <div className="h-px flex-1" style={{ backgroundColor: "#1a385f" }}></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#1a385f" }}>
            Código de Vestimenta
          </h2>
          <p className="text-3xl" style={{ color: "#1a385f" }}>
            Elegante Playero
          </p>
        </div>

        {/* Dress Code Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <CardMoreInfo type="women" index={0} />
          <CardMoreInfo type="men" index={1} />
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
