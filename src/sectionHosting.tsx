"use client"

import { useEffect, useRef, useState } from "react"
import CardHosting from "@/components/ui/CardHosting"

const SectionHosting = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, 300)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const accommodations = [
    {
      id: 1,
      name: "Airbnb",
      type: "airbnb",
      description: "Encuentra el alojamiento perfecto para ti",
      link: "https://www.airbnb.com",
      image: "/images/airbnb.jpg",
    },
    {
      id: 2,
      name: "Hotel Marbella",
      phone: "314-333-1102",
      address: "Marbella 7, Playa Azul Salagua, 28218 Manzanillo, Col.",
      locationLink: "https://maps.app.goo.gl/mqiuQHfiZgqd3tBb7",
      image: "/images/hotelM.jpg",
    },
    {
      id: 3,
      name: "Hotel Caracoles",
      phone: "314-334-2303",
      address: "Blvd. Miguel de la Madrid 875, Playa Azul Salagua, 28218 Manzanillo, Col.",
      locationLink: "https://maps.app.goo.gl/5h7KvMozztaVj4Aw7",
      image: "/images/hotelC.jpg",
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: "#fffaef" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDuration: "1200ms",
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a385f" }}>
            Hospedaje
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#1a385f" }}>
            Te ayudamos a encontrar el lugar perfecto para descansar y disfrutar al máximo de nuestra celebración
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <CardHosting key={accommodation.id} accommodation={accommodation} index={index} />
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-base sm:text-lg italic" style={{ color: "#1a385f" }}>
            Reserva con anticipación para garantizar tu lugar
          </p>
          <div
            className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto"
            style={{ borderLeft: `4px solid #1a385f` }}
          >
            <p className="text-base sm:text-lg font-medium mb-2" style={{ color: "#1a385f" }}>
              ¿Necesitas ayuda con tu hospedaje?
            </p>
            <p className="text-base" style={{ color: "#1a385f" }}>
              Si tienes problemas en encontrar un hospedaje manda un mensaje a este contacto{" "}
              <a href="tel:341-134-8420" className="font-bold hover:underline">
                341-134-8420
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHosting
