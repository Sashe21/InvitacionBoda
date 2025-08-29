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
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden -mt-1"
        style={{
          background: `
            linear-gradient(180deg, rgba(255, 250, 239, 0.95) 0%, #fffaef 20%, #fffaef 80%, rgba(255, 250, 239, 0.95) 100%),
            radial-gradient(circle at 30% 40%, rgba(26, 56, 95, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(255, 182, 193, 0.08) 0%, transparent 50%)
          `,
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-8 w-32 h-32 bg-gradient-to-br from-rose-200 to-rose-100 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-8 w-40 h-40 bg-gradient-to-br from-[#1a385f]/10 to-rose-100 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className="text-5xl md:text-6xl font-bold text-[#1a385f] mb-6 tracking-tight"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 2px 8px rgba(26, 56, 95, 0.1)",
              }}
            >
              Nuestros Momentos
            </h2>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-rose-300"></div>
              <div className="w-3 h-3 bg-rose-300 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-rose-300 to-rose-300"></div>
            </div>

            <p
              className="text-2xl text-[#1a385f]/80 leading-relaxed max-w-2xl mx-auto"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
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
                  <div className="bg-white p-4 pb-16 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5 opacity-60"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/20 via-transparent to-amber-50/20 opacity-40"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p
                        className="text-[#1a385f] text-lg leading-relaxed transform -rotate-1"
                        style={{
                          fontFamily: "Kalam, cursive",
                          textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                        }}
                      >
                        {image.caption}
                      </p>
                    </div>
                    <div className="absolute -top-2 left-8 w-16 h-6 bg-yellow-100/80 transform rotate-12 shadow-sm border border-yellow-200/50"></div>
                    <div className="absolute -top-2 right-8 w-16 h-6 bg-yellow-100/80 transform -rotate-12 shadow-sm border border-yellow-200/50"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button
                onClick={() => {
                  setLightboxImageIndex(0)
                  setIsLightboxOpen(true)
                }}
                className="bg-[#1a385f] text-white px-8 py-4 rounded-full hover:bg-[#1a385f]/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                <span className="text-xl">Ver todas las fotos</span>
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-24 text-center">
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30"></div>
              <div className="relative p-12">
                <p
                  className="text-3xl text-[#1a385f]/90 leading-relaxed mb-4"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  &qout;Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.&quot;
                </p>
                <p className="text-xl text-[#1a385f]/70" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  — Colosenses 3:14
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors duration-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={() => setLightboxImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-4 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setLightboxImageIndex((prev) => (prev + 1) % galleryImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-4 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="bg-white p-6 pb-20 shadow-2xl max-w-3xl mx-auto">
              <div className="relative w-full h-[60vh] overflow-hidden">
                <Image
                  src={galleryImages[lightboxImageIndex].src || "/placeholder.svg"}
                  alt={galleryImages[lightboxImageIndex].alt}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
              </div>

              <div className="mt-6 text-center">
                <p className="text-[#1a385f] text-2xl" style={{ fontFamily: "Kalam, cursive" }}>
                  {galleryImages[lightboxImageIndex].caption}
                </p>
              </div>
            </div>

            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/80 text-lg">
              {lightboxImageIndex + 1} de {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
