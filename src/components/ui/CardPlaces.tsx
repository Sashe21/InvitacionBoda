"use client"

import { Clock, MapPin, ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface CardPlaceProps {
  title: string
  time: string
  location: string
  image: string
  mapUrl: string
  index: number
}

export default function CardPlace({ title, time, location, image, mapUrl, index }: CardPlaceProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, index * 200)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentElement = cardRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
      observer.disconnect()
    }
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`group bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-1000 p-4 sm:p-6 md:p-8 text-center hover:scale-105 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        borderColor: "#fffaef",
        borderWidth: "1px",
      }}
    >
      <div className="w-full max-w-xs sm:max-w-sm mx-auto h-20 sm:h-24 md:h-28 rounded-lg sm:rounded-xl mb-3 sm:mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={`${title} setup`}
          width={842}
          height={315}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <h3
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-3 sm:mb-4 md:mb-6 tracking-wide"
        style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
      >
        {title}
      </h3>

      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#1a385f" }} />
          <p
            className="text-base sm:text-lg md:text-xl font-medium"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#1a385f" }}
          >
            {time}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-3 text-center max-w-xs mx-auto">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: "#1a385f" }} />
          <p
            className="text-sm sm:text-base md:text-lg font-light"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#1a385f" }}
          >
            {location}
          </p>
        </div>

        <a
          href={mapUrl}
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
  )
}
