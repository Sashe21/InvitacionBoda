"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function SectionGalery() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  const galleryImages = [
    { id: 1, src: "/images/GF5.jpg", alt: "Romantic beach moment", caption: "Nuestro primer baile..." },
    { id: 2, src: "/images/GF6.jpg", alt: "Beautiful wedding bouquet", caption: "Flores para mi amor" },
    { id: 3, src: "/images/GF1.jpg", alt: "Beach wedding reception", caption: "Celebrando juntos" },
    { id: 4, src: "/images/GF3.jpg", alt: "Golden hour beach portrait", caption: "Atardecer perfecto" },
    { id: 5, src: "/images/GF2.jpg", alt: "Elegant beach wedding cake", caption: "Dulce momento" },
    { id: 6, src: "/images/GF4.jpg", alt: "Bride getting ready", caption: "Preparándome para ti" },
    { id: 7, src: "/images/GF7.jpg", alt: "Wedding party celebration", caption: "Con nuestros seres queridos" },
    { id: 8, src: "/images/GF8.jpg", alt: "Wedding rings with seashells", caption: "Para toda la vida" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 })

    const section = document.getElementById("gallery-section")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section
        id="gallery-section"
        className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative overflow-hidden -mt-1"
        style={{
          background: `
            linear-gradient(180deg, rgba(255, 250, 239, 0.95) 0%, #fffaef 20%, #fffaef 80%, rgba(255, 250, 239, 0.95) 100%),
            radial-gradient(circle at 30% 40%, rgba(26, 56, 95, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(255, 182, 193, 0.08) 0%, transparent 50%)
          `,
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-8 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-br from-rose-200 to-rose-100 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-8 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-br from-[#1a385f]/10 to-rose-100 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div
            className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a385f] mb-4 sm:mb-6 tracking-tight px-2"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 2px 8px rgba(26, 56, 95, 0.1)",
              }}
            >
              Nuestros Momentos
            </h2>

            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-[#1a385f] to-[#1a385f]"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#1a385f] rounded-full"></div>
              <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-l from-transparent via-[#1a385f] to-[#1a385f]"></div>
            </div>

            <p
              className="text-lg sm:text-xl md:text-2xl text-[#1a385f]/80 leading-relaxed max-w-2xl mx-auto px-4"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
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
                <div
                  key={image.id}
                  className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                    index % 2 === 0 ? "rotate-1 hover:rotate-2" : "-rotate-1 hover:-rotate-2"
                  }`}
                  onClick={() => {
                    setLightboxImageIndex(index)
                    setIsLightboxOpen(true)
                  }}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="bg-white p-3 sm:p-4 pb-12 sm:pb-16 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5 opacity-60"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/20 via-transparent to-amber-50/20 opacity-40"></div>
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <p
                        className="text-[#1a385f] text-sm sm:text-base md:text-lg leading-relaxed transform -rotate-1"
                        style={{
                          fontFamily: "Kalam, cursive",
                          textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                        }}
                      >
                        {image.caption}
                      </p>
                    </div>
                    <div className="absolute -top-1 sm:-top-2 left-4 sm:left-8 w-8 sm:w-16 h-3 sm:h-6 bg-yellow-100/80 transform rotate-12 shadow-sm border border-yellow-200/50"></div>
                    <div className="absolute -top-1 sm:-top-2 right-4 sm:right-8 w-8 sm:w-16 h-3 sm:h-6 bg-yellow-100/80 transform -rotate-12 shadow-sm border border-yellow-200/50"></div>
                  </div>
                </div>
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
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-white/30"></div>
              <div className="relative p-6 sm:p-8 md:p-12">
                <p
                  className="text-xl sm:text-2xl md:text-3xl text-[#1a385f]/90 leading-relaxed mb-3 sm:mb-4 font-semibold"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  &quot;Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.&quot;
                </p>
                <p className="text-lg sm:text-xl text-[#1a385f]/70 text-[rgba(79,43,9,1)] font-medium" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                   Colosenses 3:14
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <Image
                  src={galleryImages[lightboxImageIndex].src || "/placeholder.svg"}
                  alt={galleryImages[lightboxImageIndex].alt}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
              </div>

              <div className="mt-4 sm:mt-6 text-center">
                <p
                  className="text-[#1a385f] text-lg sm:text-xl md:text-2xl px-2"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  {galleryImages[lightboxImageIndex].caption}
                </p>
              </div>
            </div>

            <div className="absolute -bottom-8 sm:-bottom-12 left-1/2 -translate-x-1/2 text-white/80 text-base sm:text-lg">
              {lightboxImageIndex + 1} de {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
