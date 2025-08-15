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
  const [isVisible, setIsVisible] = useState(false)

  const eventRefs = useRef<(HTMLDivElement | null)[]>([])
  const timelineContainerRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const ticking = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.05, rootMargin: "50px" },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
      ref={sectionRef}
      className="relative pt-0 pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-3 sm:px-4 md:px-6 my-8 sm:my-12 md:my-16"
      style={{
        background: "linear-gradient(135deg, #fffaef 0%, #f8f4e6 50%, #fffaef 100%)",
        boxShadow: "0 -15px 30px -10px rgba(26, 56, 95, 0.15), 0 15px 30px -10px rgba(26, 56, 95, 0.15)",
      }}
    >
      <div className="relative max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: isVisible ? "0ms" : "0ms",
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 tracking-wide"
            style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
          >
            <span className="italic font-extralight">Nuestro Itinerario</span>
            
          </h2>
        </div>

        <div
          ref={timelineContainerRef}
          className="relative flex flex-col items-center max-w-full sm:max-w-2xl md:max-w-3xl mx-auto py-4 sm:py-6 md:py-8"
        >
          <div
            className={`absolute h-full w-0.5 sm:w-1 rounded-full transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            }`}
            style={{
              backgroundColor: "#1a385f40",
              transitionDelay: isVisible ? "200ms" : "0ms",
              transformOrigin: "top",
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
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
                className={`flex items-center w-full my-3 sm:my-4 md:my-6 lg:my-8 group transition-all duration-1000 ${
                  index === 1 ? "flex-row-reverse" : "flex-row"
                } ${
                  isVisible
                    ? "opacity-100 translate-x-0 rotate-0 scale-100"
                    : `opacity-0 ${index === 1 ? "translate-x-8" : "-translate-x-8"} rotate-3 scale-95`
                }`}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 150}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* Card */}
                <div
                  className={`w-1/2 p-3 sm:p-4 md:p-6 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 ${
                    index === 1
                      ? "pl-4 sm:pl-6 md:pl-8 text-left ml-2 sm:ml-3 md:ml-4"
                      : "pr-4 sm:pr-6 md:pr-8 text-right mr-2 sm:mr-3 md:mr-4"
                  }`}
                  style={{
                    backgroundColor: "#fffaef",
                    borderColor: isActive ? "#1a385f60" : "#1a385f20",
                    boxShadow: isActive
                      ? "0 20px 25px -5px rgba(26, 56, 95, 0.15), 0 10px 10px -5px rgba(26, 56, 95, 0.04)"
                      : "0 10px 15px -3px rgba(26, 56, 95, 0.1), 0 4px 6px -2px rgba(26, 56, 95, 0.05)",
                  }}
                >
                  <h3
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-1 sm:mb-2 tracking-wide"
                    style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
                  >
                    {event.title}
                  </h3>
                  <div
                    className={`flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2 ${index === 1 ? "justify-start" : "justify-end"}`}
                  >
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: "#1a385f" }} />
                    <p
                      className="text-xs sm:text-sm md:text-base font-medium"
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
                      className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity text-xs font-medium"
                      style={{ color: "#1a385f" }}
                    >
                      <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Ver Mapa{" "}
                      <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </a>
                  )}
                </div>

                <div
                  className={`relative z-10 flex-shrink-0 transition-all duration-1000 ${
                    isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-45"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${500 + index * 150}ms` : "0ms",
                    transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md border-2 transition-colors duration-300"
                    style={{
                      backgroundColor: isActive ? "#1a385f" : "#fffaef",
                      borderColor: isActive ? "#1a385f" : "#1a385f60",
                      color: isActive ? "#fffaef" : "#1a385f",
                    }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                </div>

                <div className={`w-1/2 ${index === 1 ? "mr-2 sm:mr-3 md:mr-4" : "ml-2 sm:ml-3 md:ml-4"}`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
