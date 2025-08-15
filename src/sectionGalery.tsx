"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function SectionGalery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const section = document.getElementById("gallery-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const galleryImages = [
    {
      id: 1,
      src: "/images/GF1.jpg",
      alt: "Romantic beach moment",
    },
    {
      id: 2,
      src: "/images/GF2.jpg",
      alt: "Beach walk together",
    },
    {
      id: 3,
      src: "/images/GF3.jpg",
      alt: "Joyful moments",
    },
    {
      id: 4,
      src: "/images/GF4.jpg",
      alt: "Special proposal moment",
    },
    {
      id: 5,
      src: "/images/GF5.jpg",
      alt: "Dancing by the ocean",
    },
    {
      id: 6,
      src: "/images/GF6.jpg",
      alt: "Wedding rings",
    },
    {
      id: 7,
      src: "/images/GF7.jpg",
      alt: "Holding hands on the beach",
    },
    {
      id: 8,
      src: "/images/GF8.jpg",
      alt: "Romantic beach picnic",
    },
    {
      id: 9,
      src: "/images/mare2.jpg",
      alt: "Watching the sunset together",
    },
    {
      id: 10,
      src: "/images/mare2.jpg",
      alt: "Beach wedding ceremony",
    },
  ]

  const closeModal = () => setSelectedImage(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(galleryImages.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(galleryImages.length / 3)) % Math.ceil(galleryImages.length / 3))
  }

  const getVisibleImages = () => {
    const imagesPerSlide = 3
    const startIndex = currentIndex * imagesPerSlide
    return galleryImages.slice(startIndex, startIndex + imagesPerSlide)
  }

  return (
    <>
      <section id="gallery-section" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#fffaef" }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="h-px flex-1 max-w-24" style={{ backgroundColor: "#1a385f" }}></div>
              <div
                className={`mx-8 transition-all duration-700 delay-300 ${isVisible ? "scale-100 rotate-0" : "scale-75 rotate-45"}`}
              >
                <svg className="w-10 h-10" style={{ color: "#1a385f" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="h-px flex-1 max-w-24" style={{ backgroundColor: "#1a385f" }}></div>
            </div>

            <h2
              className={`text-4xl sm:text-5xl font-brandley font-bold mb-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ color: "#1a385f" }}
            >
              Nuestro Momento
            </h2>

            <p
              className={`text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ color: "#1a385f" }}
            >
              Momentos especiales que queremos compartir contigo
            </p>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-x-1 active:scale-95"
              style={{ color: "#1a385f" }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 hover:translate-x-1 active:scale-95"
              style={{ color: "#1a385f" }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="overflow-hidden px-12">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="flex gap-6 min-w-full">
                    {galleryImages.slice(slideIndex * 3, slideIndex * 3 + 3).map((image, imageIndex) => (
                      <div
                        key={image.id}
                        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer flex-1 active:scale-95"
                        style={{ backgroundColor: "#ffffff", height: "320px" }}
                        onClick={() => setSelectedImage(slideIndex * 3 + imageIndex)}
                      >
                        <div className="w-full h-full relative">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-white/90 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                              <svg
                                className="w-6 h-6"
                                style={{ color: "#1a385f" }}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 active:scale-90 ${
                    index === currentIndex ? "scale-125 shadow-lg" : "hover:scale-110"
                  }`}
                  style={{
                    backgroundColor: index === currentIndex ? "#1a385f" : "#1a385f50",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full animate-in zoom-in duration-500">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-all duration-200 z-10 hover:scale-110 active:scale-95"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image container */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-square max-w-3xl max-h-[80vh]">
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image caption */}
              <div className="p-6 text-center" style={{ backgroundColor: "#fffaef" }}>
                <p className="text-lg font-medium" style={{ color: "#1a385f" }}>
                  {galleryImages[selectedImage].alt}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all duration-300 hover:scale-110 hover:-translate-x-1 active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all duration-300 hover:scale-110 hover:translate-x-1 active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
