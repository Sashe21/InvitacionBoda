"use client"

import type React from "react"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

export default function SectionGalery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const galleryImages = [
    { id: 1, src: "/images/GF1.jpg", alt: "" },
    { id: 2, src: "/images/GF2.jpg", alt: "Beautiful wedding bouquet" },
    { id: 3, src: "/images/GF3.jpg", alt: "Beach wedding reception" },
    { id: 4, src: "/images/GF4.jpg", alt: "Golden hour beach portrait" },
    { id: 5, src: "/images/GF5.jpg", alt: "Elegant beach wedding cake" },
    { id: 6, src: "/images/GF6.jpg", alt: "Bride getting ready" },
    { id: 7, src: "/images/GF7.jpg", alt: "Wedding party celebration" },
    { id: 8, src: "/images/GF8.jpg", alt: "Wedding rings with seashells" },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }, [galleryImages.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }, [galleryImages.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (selectedImage !== null) {
      // Lightbox navigation
      if (isLeftSwipe) {
        setSelectedImage((selectedImage + 1) % galleryImages.length)
      }
      if (isRightSwipe) {
        setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
      }
    } else {
      // Carousel navigation
      if (isLeftSwipe) {
        nextSlide()
      }
      if (isRightSwipe) {
        prevSlide()
      }
    }
  }

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      if (selectedImage === null) return

      if (direction === "next") {
        setSelectedImage((selectedImage + 1) % galleryImages.length)
      } else {
        setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
      }
    },
    [selectedImage, galleryImages.length],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 })

    const section = document.getElementById("gallery-section")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      switch (e.key) {
        case "ArrowLeft":
          navigateImage("prev")
          break
        case "ArrowRight":
          navigateImage("next")
          break
        case "Escape":
          setSelectedImage(null)
          break
      }
    }

    if (selectedImage !== null) {
      document.addEventListener("keydown", handleKeyPress)
      return () => document.removeEventListener("keydown", handleKeyPress)
    }
  }, [selectedImage, navigateImage])

  return (
    <>
      <section
        id="gallery-section"
        className="py-24 px-4 bg-gradient-to-b from-[#fffaef] to-[#f8f4e3] relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-rose-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-200 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className="text-5xl md:text-6xl font-bold text-[#1a385f] mb-6 tracking-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Nuestros Momentos
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-rose-300"></div>
              <div className="w-3 h-3 bg-rose-300 rounded-full"></div>
              <div className="w-16 h-px bg-rose-300"></div>
            </div>
            <p
              className="text-xl text-[#1a385f]/70 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Cada fotografía cuenta una historia única de amor, alegría y momentos inolvidables
            </p>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Carousel container */}
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              >
                {[...galleryImages, ...galleryImages.slice(0, 3)].map((image, index) => (
                  <div key={`${image.id}-${index}`} className="w-1/3 flex-shrink-0 px-3">
                    <div
                      className="group cursor-pointer"
                      onClick={() => setSelectedImage(index % galleryImages.length)}
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-rose-100">
                        <div className="relative aspect-[4/5]">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="33vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10 border border-rose-100"
            >
              <svg className="w-6 h-6 text-[#1a385f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10 border border-rose-100"
            >
              <svg className="w-6 h-6 text-[#1a385f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex justify-center mt-8 gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-rose-300 w-8" : "bg-[#1a385f]/30 hover:bg-[#1a385f]/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
            <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-rose-100 shadow-lg">
            
              <p
                className="text-2xl text-[#1a385f]/80 leading-relaxed"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.
              </p>
              <p
                className="text-lg text-[#1a385f]/80 leading-relaxed"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Colosenses 3:14
              </p>
            </div>
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-scale-in"
          onClick={() => setSelectedImage(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 text-white/80 hover:text-white transition-colors duration-200 z-10"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>

            {/* Image container */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-auto max-h-[80vh]">
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("prev")
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-4 text-white transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("next")
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-4 text-white transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === selectedImage ? "bg-rose-300 w-8" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
