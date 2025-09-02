"use client"

import { Heart } from "lucide-react"
import { useEffect, useState } from "react"

export default function SectionWelcome() {
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

    const section = document.getElementById("welcome-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="welcome-section"
      className="relative w-full min-h-screen min-h-dvh flex items-center justify-center px-4 py-8 sm:py-12 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/images/AGCount.jpg')",
        backgroundAttachment: "fixed", // Added parallax effect for desktop
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <div
          className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-2 sm:mb-4">
            <Heart
              className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-rose-300 mx-auto drop-shadow-lg transition-all duration-700 ${isVisible ? "animate-pulse scale-100" : "scale-75"}`}
            />
          </div>

          <h1
            className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-4 sm:mb-6 tracking-wide drop-shadow-2xl leading-tight transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span
              className="block sm:inline font-extralight italic hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              ¡Nos
            </span>
            <span
              className="block sm:inline sm:ml-3 font-normal hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Casamos!
            </span>
          </h1>

          <div
            className={`flex items-center justify-center my-4 sm:my-6 md:my-8 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
          >
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#1a385f] animate-pulse"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1a385f] rounded-full mx-3 sm:mx-4 shadow-lg animate-bounce"></div>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#1a385f] animate-pulse"></div>
          </div>

          <div
            className={`space-y-1 sm:space-y-2 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
          >
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white tracking-wider drop-shadow-lg leading-relaxed group cursor-default">
              <span
                className="font-light uppercase block hover:text-[#1a385f] transition-colors duration-300"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  letterSpacing: "0.15em",
                }}
              >
                Luis Gerardo
              </span>
              <span
                className="font-light uppercase block hover:text-[#1a385f] transition-colors duration-300"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  letterSpacing: "0.15em",
                }}
              >
                Ramos Villalvazo
              </span>
            </h2>
          </div>

          <div
            className={`my-3 sm:my-4 md:my-6 flex justify-center transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-12"}`}
          >
            <span
              className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-rose-300 drop-shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-default inline-block"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              &
            </span>
          </div>

          <div
            className={`space-y-1 sm:space-y-2 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
          >
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white tracking-wider drop-shadow-lg leading-relaxed group cursor-default">
              <span
                className="font-light uppercase block hover:text-[#1a385f] transition-colors duration-300"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  letterSpacing: "0.15em",
                }}
              >
                Norma Abigail
              </span>
              <span
                className="font-light uppercase block hover:text-[#1a385f] transition-colors duration-300"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  letterSpacing: "0.15em",
                }}
              >
                Barranco Vázquez
              </span>
            </h2>
          </div>

          <div
            className={`mt-4 sm:mt-6 md:mt-8 flex justify-center transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          >
            <svg
              width="100"
              height="16"
              viewBox="0 0 100 16"
              className="w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 text-[#1a385f] opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <path
                d="M8 8 Q25 2, 50 8 T92 8"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="drop-shadow-sm"
              />
              <circle cx="50" cy="8" r="1.5" fill="currentColor" className="drop-shadow-sm animate-pulse" />
            </svg>
          </div>
        </div>
      </div>

      {/* Google Fonts preload */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Cormorant+Garamond:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
    </section>
  )
}
