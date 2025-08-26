"use client"

import { useState, useEffect } from "react"

export default function SectionMessage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("message-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="message-section" className="relative py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[#fffaef]"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-20 sm:w-32 h-20 sm:h-32 bg-[#1a385f]/5 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? "animate-pulse scale-100" : "scale-75"}`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-24 sm:w-40 h-24 sm:h-40 bg-[#1a385f]/8 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? "animate-pulse scale-100" : "scale-75"}`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-[#1a385f]/3 rounded-full blur-2xl transition-all duration-1000 delay-600 ${isVisible ? "animate-pulse scale-100" : "scale-75"}`}
        ></div>
      </div>

      <div className="relative z-10 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
        <div
          className={`bg-[#fffaef]/95 backdrop-blur-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-2xl text-center border border-[#1a385f]/20 relative overflow-hidden transition-all duration-1000 hover:shadow-3xl hover:scale-[1.02] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            className={`absolute top-2 left-2 w-4 sm:w-6 h-4 sm:h-6 border-l-2 border-t-2 border-[#1a385f]/30 rounded-tl-2xl transition-all duration-700 delay-200 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
          ></div>
          <div
            className={`absolute top-2 right-2 w-4 sm:w-6 h-4 sm:h-6 border-r-2 border-t-2 border-[#1a385f]/30 rounded-tr-2xl transition-all duration-700 delay-400 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
          ></div>
          <div
            className={`absolute bottom-2 left-2 w-4 sm:w-6 h-4 sm:h-6 border-l-2 border-b-2 border-[#1a385f]/30 rounded-bl-2xl transition-all duration-700 delay-600 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
          ></div>
          <div
            className={`absolute bottom-2 right-2 w-4 sm:w-6 h-4 sm:h-6 border-r-2 border-b-2 border-[#1a385f]/30 rounded-br-2xl transition-all duration-700 delay-800 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
          ></div>

          <div className="mb-4">
            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed sm:leading-loose mb-3 sm:mb-4 transition-all duration-1000 delay-300 hover:scale-105 cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                fontFamily: "Cormorant Garamond, serif",
                color: "#1a385f",
              }}
            >
              Entre olas, arena y atardeceres, queremos que sean testigos de nuestro &apos;sí, acepto&apos;.
            </p>

            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed sm:leading-loose mb-3 sm:mb-4 transition-all duration-1000 delay-500 hover:scale-105 cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                fontFamily: "Cormorant Garamond, serif",
                color: "#1a385f",
              }}
            >
              Este día no solo celebra nuestro amor, sino también la alegría de compartirlo con quienes han sido parte
              de nuestra historia.
            </p>

            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed sm:leading-loose transition-all duration-1000 delay-700 hover:scale-105 cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                fontFamily: "Cormorant Garamond, serif",
                color: "#1a385f",
              }}
            >
              Prepárense para vivir una tarde mágica, llena de risas, abrazos y momentos que quedarán en el corazón para
              siempre.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
