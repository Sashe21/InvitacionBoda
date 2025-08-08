'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Church,
  Building,
  Gavel,
  Wine,
  Music,
  Utensils,
  ExternalLink,
  Clock,
  MapPin,
} from 'lucide-react'

export default function ItinerarySection() {
  const itineraryEvents = [
    {
      title: 'Ceremonia Religiosa',
      time: '4:00 PM',
      icon: Church,
      mapLink: 'https://maps.app.goo.gl/church_location',
    },
    {
      title: 'Recepción',
      time: '7:00 PM',
      icon: Building,
      mapLink: 'https://maps.app.goo.gl/reception_location',
    },
    {
      title: 'Ceremonia Civil',
      time: '8:00 PM',
      icon: Gavel,
      mapLink: 'https://maps.app.goo.gl/reception_location',
    },
    { title: 'Brindis', time: '9:00 PM', icon: Wine, mapLink: '' },
    { title: 'Vals', time: '9:30 PM', icon: Music, mapLink: '' },
    { title: 'Cena', time: '10:30 PM', icon: Utensils, mapLink: '' },
  ]

  const [activeEventIndex, setActiveEventIndex] = useState(-1)
  const [progressBarHeight, setProgressBarHeight] = useState(0)
  const eventRefs = useRef<(HTMLDivElement | null)[]>([])
  const timelineContainerRef = useRef<HTMLDivElement | null>(null)

  // Detectar el evento visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let currentActive = -1
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              (entry.target as HTMLElement).dataset.index || '-1'
            )
            if (index > currentActive) {
              currentActive = index
            }
          }
        })
        setActiveEventIndex(currentActive)
      },
      { threshold: 0.5 }
    )

    eventRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      eventRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  // Calcular altura de la barra de progreso
  useEffect(() => {
    if (
      activeEventIndex !== -1 &&
      eventRefs.current[activeEventIndex] &&
      timelineContainerRef.current
    ) {
      const activeElement = eventRefs.current[activeEventIndex]
      const containerRect =
        timelineContainerRef.current.getBoundingClientRect()
      const elementRect = activeElement!.getBoundingClientRect()
      const height =
        elementRect.top - containerRect.top + elementRect.height / 2
      setProgressBarHeight(height)
    } else if (activeEventIndex === -1) {
      setProgressBarHeight(0)
    }
  }, [activeEventIndex])

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-rose-50 to-pink-50">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-1/4 left-0 w-full h-full opacity-10"
          viewBox="0 0 1000 800"
        >
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

      <div className="relative max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-rose-800 mb-6 tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="italic font-extralight">Nuestro</span>
            <br />
            <span className="font-normal">Itinerario</span>
          </h2>
          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 italic font-light max-w-2xl mx-auto"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Cada momento, un recuerdo. Acompáñanos en este día tan especial.
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={timelineContainerRef}
          className="relative flex flex-col items-center max-w-3xl mx-auto py-8"
        >
          {/* Línea vertical */}
          <div className="absolute h-full w-1 bg-rose-200 rounded-full">
            <div
              className="absolute top-0 left-0 w-full bg-rose-500 rounded-full transition-all duration-500 ease-out"
              style={{ height: `${progressBarHeight}px` }}
            ></div>
          </div>

          {itineraryEvents.map((event, index) => {
            const Icon = event.icon
            const isActive = index <= activeEventIndex
            return (
              <div
                key={index}
              ref={(el: HTMLDivElement | null) => {
  eventRefs.current[index] = el
}}

                data-index={index}
                className={`flex items-center w-full my-6 sm:my-8 group ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div
                  className={`w-1/2 p-4 sm:p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 ${
                    index % 2 === 0
                      ? 'pr-8 text-right mr-4'
                      : 'pl-8 text-left ml-4'
                  } ${isActive ? 'border-rose-300' : 'border-rose-100/50'}`}
                >
                  <h3
                    className="text-lg sm:text-xl md:text-2xl font-light text-rose-800 mb-2 tracking-wide"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2 justify-end sm:justify-start">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <p
                      className="text-sm sm:text-base text-gray-600 font-medium"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {event.time}
                    </p>
                  </div>
                  {event.mapLink && (
                    <a
                      href={event.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-rose-600 hover:text-rose-700 transition-colors text-xs sm:text-sm font-medium"
                    >
                      <MapPin className="w-3 h-3" />
                      Ver Mapa
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Icono del evento */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md border-2 transition-colors duration-300 ${
                      isActive
                        ? 'bg-rose-500 border-rose-400 text-white'
                        : 'bg-white border-rose-200 text-gray-400'
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <div className={`w-1/2 ${index % 2 === 0 ? 'ml-4' : 'mr-4'}`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
