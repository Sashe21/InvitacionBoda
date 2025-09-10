"use client"

import { MapPin, Phone, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface Accommodation {
  id: number
  name: string
  type?: string
  description?: string
  link?: string
  phone?: string
  address?: string
  locationLink?: string
  image: string
}

interface CardHostingProps {
  accommodation: Accommodation
  index: number
}

const CardHosting = ({ accommodation, index }: CardHostingProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, index * 150) // Staggered delay based on index
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px",
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
      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all ease-out transform hover:-translate-y-1 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{
        borderTop: `4px solid #1a385f`,
        transitionDuration: "800ms",
      }}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56">
        <Image src={accommodation.image || "/placeholder.svg"} alt={accommodation.name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-6">
        {accommodation.type === "airbnb" ? (
          <>
            {/* Airbnb Option */}
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "#1a385f" }}>
              {accommodation.name}
            </h3>
            <p className="text-base mb-4" style={{ color: "#1a385f" }}>
              {accommodation.description}
            </p>
            <a
              href={accommodation.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#1a385f" }}
            >
              <span>Explorar Airbnb</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </>
        ) : (
          <>
            {/* Hotel Options */}
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "#1a385f" }}>
              {accommodation.name}
            </h3>

            {/* Phone */}
            <div className="flex items-center mb-3">
              <Phone className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: "#1a385f" }} />
              <a href={`tel:${accommodation.phone}`} className="text-base hover:underline" style={{ color: "#1a385f" }}>
                {accommodation.phone}
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start mb-4">
              <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: "#1a385f" }} />
              <span className="text-base leading-relaxed" style={{ color: "#1a385f" }}>
                {accommodation.address}
              </span>
            </div>

            {/* Location Link */}
            {accommodation.locationLink && (
              <a
                href={accommodation.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
                style={{ backgroundColor: "#1a385f" }}
              >
                <MapPin className="w-4 h-4 mr-2" />
                <span>Ver Ubicación</span>
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default CardHosting
