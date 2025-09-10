"use client"
import { useState, useEffect, useRef } from "react"
import CardGallery2 from "@/components/ui/CardGalery2"

export default function SectionGallery2() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const galleryImages = [
    {
      id: 1,
      src: "/images/GF5.jpg",
      alt: "Romantic beach moment",
      caption: "Con los ojos vendados, comenzó la magia de nuestra historia.",
    },
    {
      id: 2,
      src: "/images/GF6.jpg",
      alt: "Beautiful wedding bouquet",
      caption: "Una sorpresa sencilla, pero llena de amor y promesas.",
    },
    {
      id: 3,
      src: "/images/GF1.jpg",
      alt: "Beach wedding reception",
      caption: 'El "sí" nos unió para siempre en un abrazo eterno.',
    },
    {
      id: 4,
      src: "/images/GF3.jpg",
      alt: "Golden hour beach portrait",
      caption: "El cielo pintó de colores nuestro momento especial.",
    },
    {
      id: 5,
      src: "/images/GF2.jpg",
      alt: "Elegant beach wedding cake",
      caption: "Tus brazos son el lugar donde siempre quiero estar.",
    },
    {
      id: 6,
      src: "/images/GF4.jpg",
      alt: "Bride getting ready",
      caption: "La noche terminó soñando juntos nuestro futuro.",
    },
    {
      id: 7,
      src: "/images/GF7.jpg",
      alt: "Wedding party celebration",
      caption: "Con nuestros seres queridos celebrando nuestro amor",
    },
    {
      id: 8,
      src: "/images/GF8.jpg",
      alt: "Wedding rings with seashells",
      caption: "Anillos que simbolizan nuestro compromiso eterno",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return

      if (e.key === "Escape") {
        setIsLightboxOpen(false)
      } else if (e.key === "ArrowLeft") {
        setLightboxImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
      } else if (e.key === "ArrowRight") {
        setLightboxImageIndex((prev) => (prev + 1) % galleryImages.length)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isLightboxOpen, galleryImages.length])

  return (
    <section
      ref={sectionRef}
      id="gallery-section-2"
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 overflow-hidden -mt-1"
    >
      <div
        className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/GFG4.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/40 z-[2]"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
        <svg className="absolute top-1/4 left-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
          <path d="M0 200 Q250 150, 500 200 T1000 200" stroke="#fffaef" strokeWidth="2" fill="none" />
          <path d="M0 400 Q250 350, 500 400 T1000 400" stroke="#fffaef" strokeWidth="1" fill="none" />
          <path d="M0 600 Q250 550, 500 600 T1000 600" stroke="#fffaef" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-[4]">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2"
            style={{
              fontFamily: "Playfair Display, serif",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
            }}
          >
            Nuestros Momentos
          </h2>

          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
            <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-white"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full"></div>
            <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-l from-transparent via-white to-white"></div>
          </div>

          <p
            className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-2xl mx-auto px-4"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
            }}
          >
            Cada foto cuenta nuestra historia de amor
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
            {galleryImages.slice(0, 6).map((image, index) => (
              <CardGallery2
                key={image.id}
                image={image}
                index={index}
                onImageClick={() => {
                  setLightboxImageIndex(index)
                  setIsLightboxOpen(true)
                }}
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <button
              onClick={() => {
                setLightboxImageIndex(0)
                setIsLightboxOpen(true)
              }}
              className="bg-[#1a385f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#1a385f]/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl touch-manipulation"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              <span className="text-lg sm:text-xl">Ver todas las fotos</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-24 text-center px-2">
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-[#1a385f]/70 backdrop-blur-md rounded-2xl shadow-xl border border-[#1a385f]/30 hover:bg-[#1a385f]/80 transition-all duration-300 hover:scale-105">
              <div className="relative p-6 sm:p-8 md:p-12">
                <p
                  className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed mb-3 sm:mb-4 font-semibold"
                  style={{ fontFamily: "Cormorant Garamond, serif", textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}
                >
                  &quot;Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.&quot;
                </p>
                <p
                  className="text-lg sm:text-xl text-white font-medium opacity-90"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Colonenses 3:14
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-8 sm:-top-12 right-0 text-white/80 hover:text-white transition-colors duration-300 z-10 p-2 touch-manipulation"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={() => setLightboxImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-3 sm:p-4 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10 touch-manipulation"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setLightboxImageIndex((prev) => (prev + 1) % galleryImages.length)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-3 sm:p-4 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10 touch-manipulation"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="bg-white p-3 sm:p-4 md:p-6 pb-12 sm:pb-16 md:pb-20 shadow-2xl max-w-3xl mx-auto">
              <div className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden">
                <img
                  src={galleryImages[lightboxImageIndex].src || "/placeholder.svg"}
                  alt={galleryImages[lightboxImageIndex].alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 sm:mt-6 text-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 mx-4 shadow-lg border border-white/30">
                  <p
                    className="text-[#1a385f] text-lg sm:text-xl md:text-2xl leading-relaxed font-medium"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      textShadow: "0 1px 3px rgba(26, 56, 95, 0.1)",
                      lineHeight: "1.6",
                    }}
                  >
                    {galleryImages[lightboxImageIndex].caption}
                  </p>
                  <div className="flex justify-center mt-3">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#1a385f]/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 sm:-bottom-12 left-1/2 -translate-x-1/2 text-white/80 text-base sm:text-lg">
              {lightboxImageIndex + 1} de {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
