"use client"

import { useState, useEffect, useRef } from "react"
import { Church, Building, Utensils, ExternalLink, Clock, MapPin } from "lucide-react"

export default function ItinerarySection() {
  const itineraryEvents = [
    { title: "Ceremonia", time: "5:30 PM", icon: Church, mapLink: "https://maps.app.goo.gl/6M1v5sCy65TjPgnUA" },
    { title: "Recepción", time: "7:30 PM", icon: Building, mapLink: "https://maps.app.goo.gl/6M1v5sCy65TjPgnUA" },
    { title: "Cena", time: "9:00 PM", icon: Utensils, mapLink: "" },
  ]

  const [activeEventIndex, setActiveEventIndex] = useState(-1)
  const [progressBarHeight, setProgressBarHeight] = useState(0)

  const eventRefs = useRef<(HTMLDivElement | null)[]>([])
  const timelineContainerRef = useRef<HTMLDivElement | null>(null)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineContainerRef.current) return
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const containerTop = timelineContainerRef.current!.getBoundingClientRect().top
          let currentActive = -1
          let newHeight = 0

          eventRefs.current.forEach((el, index) => {
            if (!el) return
            const rect = el.getBoundingClientRect()
            const midpoint = rect.top + rect.height / 2 - containerTop
            if (rect.top < window.innerHeight * 0.5) {
              currentActive = index
              newHeight = midpoint
            }
          })

          setActiveEventIndex(currentActive)
          setProgressBarHeight(newHeight)
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      style={{ background: "linear-gradient(135deg, #fffaef 0%, #f8f4e6 50%, #fffaef 100%)" }}
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wide"
            style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
          >
            <span className="italic font-extralight">Nuestro</span>
            <br />
            <span className="font-normal">Itinerario</span>
          </h2>
          <p
            className="text-lg sm:text-xl md:text-2xl italic font-light max-w-2xl mx-auto"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#1a385f" }}
          >
            Cada momento, un recuerdo. Acompáñanos en este día tan especial.
          </p>
        </div>

        <div ref={timelineContainerRef} className="relative flex flex-col items-center max-w-3xl mx-auto py-8">
          <div className="absolute h-full w-1 rounded-full" style={{ backgroundColor: "#1a385f40" }}>
            <div
              className="absolute top-0 left-0 w-full rounded-full transition-all duration-150 ease-out"
              style={{ height: `${progressBarHeight}px`, backgroundColor: "#1a385f" }}
            />
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
                className={`flex items-center w-full my-6 sm:my-8 group ${index === 1 ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Card */}
                <div
                  className={`w-1/2 p-4 sm:p-6 backdrop-blur-sm rounded-2xl shadow-lg border transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 ${
                    index === 1 ? "pl-8 text-left ml-4" : "pr-8 text-right mr-4"
                  }`}
                  style={{
                    backgroundColor: "#fffaef",
                    borderColor: isActive ? "#1a385f60" : "#1a385f20",
                  }}
                >
                  <h3
                    className="text-lg sm:text-xl md:text-2xl font-light mb-2 tracking-wide"
                    style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
                  >
                    {event.title}
                  </h3>
                  <div className={`flex items-center gap-2 mb-2 ${index === 1 ? "justify-start" : "justify-end"}`}>
                    <Clock className="w-4 h-4" style={{ color: "#1a385f" }} />
                    <p
                      className="text-sm sm:text-base font-medium"
                      style={{ fontFamily: "Cormorant Garamond, serif", color: "#1a385f" }}
                    >
                      {event.time}
                    </p>
                  </div>
                  {event.mapLink && (
                    <a
                      href={event.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity text-xs sm:text-sm font-medium"
                      style={{ color: "#1a385f" }}
                    >
                      <MapPin className="w-3 h-3" /> Ver Mapa <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md border-2 transition-colors duration-300"
                    style={{
                      backgroundColor: isActive ? "#1a385f" : "#fffaef",
                      borderColor: isActive ? "#1a385f" : "#1a385f60",
                      color: isActive ? "#fffaef" : "#1a385f",
                    }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <div className={`w-1/2 ${index === 1 ? "mr-4" : "ml-4"}`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
