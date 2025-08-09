"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function PhotoGallerySection() {
  const galleryImages = [
    "/images/GF1.jpg",
    "/images/GF2.jpg",
    "/images/GF3.jpg",
    "/images/GF4.jpg",
    "/images/GF5.jpg",
    "/images/GF6.jpg",
    "/images/GF7.jpg",
    "/images/GF8.jpg",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const thumbnailContainerRef = useRef<HTMLDivElement>(null)

  const totalImages = galleryImages.length

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when lightbox is open
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    document.body.style.overflow = "" // Restore scrolling
  }

  const goToNextLightbox = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % totalImages)
  }

  const goToPreviousLightbox = () => {
    setLightboxIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages)
  }

  // Scroll thumbnails into view when current image changes
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const thumbnailWidth = thumbnailContainerRef.current.children[0]?.clientWidth || 0
      const scrollPosition =
        currentIndex * thumbnailWidth - thumbnailContainerRef.current.clientWidth / 2 + thumbnailWidth / 2
      thumbnailContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [currentIndex])

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-rose-50 to-pink-50">
      {/* Decorative background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-1/4 left-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
          <path
            d="M0 200 Q250 150, 500 200 T1000 200"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-rose-200"
          />
          <path
            d="M0 400 Q250 350, 500 400 T1000 400"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-pink-200"
          />
          <path
            d="M0 600 Q250 550, 500 600 T1000 600"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-rose-200"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-rose-400 rounded-full opacity-60"></div>
              <div className="w-4 h-4 bg-rose-500 rounded-full"></div>
              <div className="w-3 h-3 bg-rose-400 rounded-full opacity-60"></div>
            </div>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-rose-800 mb-6 tracking-wide"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="italic font-extralight">Nuestros</span>
            <br />
            <span className="font-normal">Momentos</span>
          </h2>

          <div className="flex justify-center mb-6">
            <svg width="150" height="20" viewBox="0 0 150 20" className="text-rose-400 opacity-60">
              <path d="M10 10 Q40 5, 75 10 T140 10" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="75" cy="10" r="2" fill="currentColor" />
            </svg>
          </div>

          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 italic font-light max-w-2xl mx-auto"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Un viaje a través de nuestras memorias más preciadas.
          </p>
        </div>

        {/* Main Photo Display */}
        <div className="relative w-full max-w-4xl mx-auto mb-8 sm:mb-12 bg-white rounded-2xl shadow-2xl border border-rose-100/50 overflow-hidden photo-display-frame">
          <div
            className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] cursor-pointer"
            onClick={() => openLightbox(currentIndex)}
          >
            <Image
              src={galleryImages[currentIndex] || "/placeholder.svg"}
              alt={`Momento ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out hover:scale-105"
              priority // Prioritize loading for the main image
            />
            {/* Overlay for text/interaction hint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-lg font-medium" style={{ fontFamily: "Playfair Display, serif" }}>
                Haz clic para ver en grande
              </p>
            </div>
          </div>

          {/* Navigation Arrows for Main Display */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-rose-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-rose-600" />
          </button>
        </div>

        {/* Thumbnails */}
        <div ref={thumbnailContainerRef} className="flex justify-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 relative rounded-lg overflow-hidden cursor-pointer shadow-md transition-all duration-300 ${
                index === currentIndex ? "ring-4 ring-rose-500 scale-105" : "ring-2 ring-gray-300 hover:ring-rose-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <div className="mx-6">
              <div className="w-4 h-4 bg-rose-300 rounded-full relative">
                <div className="absolute inset-1 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-rose-300 to-transparent"></div>
          </div>

          <p
            className="text-lg sm:text-xl text-gray-600 italic font-light"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            ¡Cada foto, un tesoro de nuestro amor!
          </p>

          {/* Final decorative flourish */}
          <div className="flex justify-center mt-6">
            <svg width="120" height="30" viewBox="0 0 120 30" className="text-rose-400 opacity-50">
              <path d="M10 15 Q30 8, 60 15 T110 15" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="30" cy="15" r="1" fill="currentColor" />
              <circle cx="60" cy="15" r="2" fill="currentColor" />
              <circle cx="90" cy="15" r="1" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center">
            <Image
              src={galleryImages[lightboxIndex] || "/placeholder.svg"}
              alt={`Momento ${lightboxIndex + 1}`}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />

            {/* Lightbox Navigation Arrows */}
            <button
              onClick={goToPreviousLightbox}
              className="absolute left-4 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={goToNextLightbox}
              className="absolute right-4 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
