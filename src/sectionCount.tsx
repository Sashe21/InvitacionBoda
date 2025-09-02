"use client"

import { useState, useEffect } from "react"
import { Calendar, Plus } from "lucide-react"

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  const weddingDate = new Date("2026-03-14T16:00:00").getTime()

  useEffect(() => {
    setIsClient(true)
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [weddingDate])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const section = document.getElementById("countdown-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const addToCalendar = () => {
    const startDate = "20260314T160000Z"
    const endDate = "20260315T020000Z"
    const title = "Boda de Abby y Gera"
    const details = "Ceremonia religiosa y recepción - ¡No faltes!"
    const location = "Parroquia San José y Salón Los Jardines"

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`

    window.open(googleCalendarUrl, "_blank")
  }

  return (
    <section
      id="countdown-section"
      className="relative w-full min-h-screen min-h-dvh flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/GF7.jpg')",
        backgroundAttachment: isClient && windowWidth > 768 ? "fixed" : "scroll",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>

      <div className="relative max-w-xs sm:max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-2 sm:px-4 text-center">
        <div
          className={`mb-6 sm:mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic mb-8 sm:mb-10 md:mb-12 hover:scale-105 transition-transform duration-300 cursor-default text-shadow-lg"
            style={{
              fontFamily: "Playfair Display, serif",
              color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Solo faltan:
          </h3>

          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-2xl mx-auto">
              {[
                { label: "DÍAS", value: timeLeft.days },
                { label: "HORAS", value: timeLeft.hours },
                { label: "MINUTOS", value: timeLeft.minutes },
                { label: "SEGUNDOS", value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`transition-all duration-700 delay-${700 + index * 200} hover:scale-110 cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  >
                    <div
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-2 sm:mb-3 md:mb-4 transition-all duration-300 hover:scale-105"
                      style={{
                        fontFamily: "Playfair Display, serif",
                        color: "#FFFFFF",
                        textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
                      }}
                    >
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div
                      className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-90"
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        color: "#FFFFFF",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`mt-8 sm:mt-10 md:mt-12 transition-all duration-1000 delay-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <button
              onClick={addToCalendar}
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white/20 backdrop-blur-sm text-white rounded-full hover:scale-105 hover:shadow-2xl hover:bg-white/30 transition-all duration-300 border border-white/30 active:scale-95"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span
                className="text-sm sm:text-base md:text-lg font-medium tracking-wide"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Agregar al Calendario
              </span>
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
