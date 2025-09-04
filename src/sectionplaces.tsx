"use client"

import { Clock, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function SectionPlaces() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, 500)
        }
      },
      {
        threshold: 0.1,
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
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/images/FP.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Decorative background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-1/4 left-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
          <path d="M0 200 Q250 150, 500 200 T1000 200" stroke="#fffaef" strokeWidth="2" fill="none" />
          <path d="M0 400 Q250 350, 500 400 T1000 400" stroke="#fffaef" strokeWidth="1" fill="none" />
          <path d="M0 600 Q250 550, 500 600 T1000 600" stroke="#fffaef" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-xs sm:max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex items-center gap-1 sm:gap-2">
              <div
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-60"
                style={{ backgroundColor: "#fffaef" }}
              ></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ backgroundColor: "#fffaef" }}></div>
              <div
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-60"
                style={{ backgroundColor: "#fffaef" }}
              ></div>
            </div>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 tracking-wide px-4"
            style={{ fontFamily: "Playfair Display, serif", color: "#fffaef" }}
          >
            <span className="font-normal">Ubicación</span>
          </h2>

          <div className="flex justify-center mb-4 sm:mb-6">
            <svg
              width="100"
              height="16"
              viewBox="0 0 150 20"
              className="sm:w-36 sm:h-5 md:w-40 md:h-5"
              style={{ color: "#fffaef" }}
              opacity="0.6"
            >
              <path d="M10 10 Q40 5, 75 10 T140 10" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="75" cy="10" r="2" fill="currentColor" />
            </svg>
          </div>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 italic font-light max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-4"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#fffaef" }}
          >
            Nuestro viaje de amor nos conduce hasta el mar, donde anhelamos compartir contigo el inicio de nuestra nueva
            vida.
          </p>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 italic font-light max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-4"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#fffaef" }}
          >
            Con el corazón lleno de ilusión, celebraremos nuestra boda en Manzanillo, Colima
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Ceremony Card */}
          <div
            className={`group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-1000 p-4 sm:p-6 md:p-8 text-center hover:scale-105 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{
              borderColor: "#fffaef",
              borderWidth: "1px",
              transitionDelay: isVisible ? "300ms" : "0ms",
            }}
          >
            <div className="w-full max-w-xs sm:max-w-sm mx-auto h-20 sm:h-24 md:h-28 rounded-lg sm:rounded-xl mb-3 sm:mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden">
              <Image
                src="/images/mare3.jpg"
                alt="Beach ceremony setup"
                width={842}
                height={315}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h3
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-3 sm:mb-4 md:mb-6 tracking-wide"
              style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
            >
              Ceremonia
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#1a385f" }} />
                <p
                  className="text-base sm:text-lg md:text-xl font-medium"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "#1a385f" }}
                >
                  5:30 PM
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 sm:gap-3 text-center max-w-xs mx-auto">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: "#1a385f" }} />
                <p
                  className="text-sm sm:text-base md:text-lg font-light"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "#1a385f" }}
                >
                  Mare Jardin de Eventos
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/6M1v5sCy65TjPgnUA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm md:text-base font-medium mt-3 sm:mt-4 hover:opacity-80"
                style={{ color: "#1a385f" }}
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                Ver en Google Maps
              </a>
            </div>
          </div>

          {/* Reception Card */}
          <div
            className={`group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-1000 p-4 sm:p-6 md:p-8 text-center hover:scale-105 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{
              borderColor: "#fffaef",
              borderWidth: "1px",
              transitionDelay: isVisible ? "450ms" : "0ms",
            }}
          >
            <div className="w-full max-w-xs sm:max-w-sm mx-auto h-20 sm:h-24 md:h-28 rounded-lg sm:rounded-xl mb-3 sm:mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden">
              <Image
                src="/images/mare3.jpg"
                alt="Beach reception setup"
                width={842}
                height={315}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h3
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-3 sm:mb-4 md:mb-6 tracking-wide"
              style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
            >
              Recepción
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#1a385f" }} />
                <p
                  className="text-base sm:text-lg md:text-xl font-medium"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "#1a385f" }}
                >
                  7:30 PM
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 sm:gap-3 text-center max-w-xs mx-auto">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: "#1a385f" }} />
                <p
                  className="text-sm sm:text-base md:text-lg font-light"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "#1a385f" }}
                >
                  Mare Jardin de Eventos
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/6M1v5sCy65TjPgnUA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm md:text-base font-medium mt-3 sm:mt-4 hover:opacity-80"
                style={{ color: "#1a385f" }}
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div
              className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-transparent"
              style={{ background: `linear-gradient(to right, transparent, #fffaef, transparent)` }}
            ></div>
            <div className="mx-4 sm:mx-6">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full relative" style={{ backgroundColor: "#fffaef" }}>
                <div className="absolute inset-1 bg-black/20 rounded-full"></div>
              </div>
            </div>
            <div
              className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-transparent"
              style={{ background: `linear-gradient(to left, transparent, #fffaef, transparent)` }}
            ></div>
          </div>

          <p
            className="text-base sm:text-lg md:text-xl italic font-light px-4"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#fffaef" }}
          >
            ¡Esperamos verte ahí para celebrar nuestro amor!
          </p>

          {/* Final decorative flourish */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <svg
              width="80"
              height="20"
              viewBox="0 0 120 30"
              className="sm:w-24 sm:h-6 md:w-30 md:h-8"
              style={{ color: "#fffaef" }}
              opacity="0.5"
            >
              <path d="M10 15 Q30 8, 60 15 T110 15" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="30" cy="15" r="1" fill="currentColor" />
              <circle cx="60" cy="15" r="2" fill="currentColor" />
              <circle cx="90" cy="15" r="1" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
