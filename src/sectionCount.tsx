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

  // Fecha de la boda: 14 de marzo de 2026
  const weddingDate = new Date("2026-03-14T16:00:00").getTime()

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
      className="relative w-full min-h-screen min-h-dvh flex items-center justify-center px-4 py-8 sm:py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/AG_v2.jpg')" }}
    >
        
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        {/* Wedding Date with Decorative Lines */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="flex-1 max-w-32 sm:max-w-48 h-px bg-gradient-to-r from-transparent via-[#1a385f] to-[#1a385f]"></div>
            <div className="mx-6 sm:mx-8">
              <div className="bg-[#fffaef]/95 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#1a385f]/30 shadow-lg">
                <p
                  className="text-xl sm:text-2xl md:text-3xl font-light tracking-wider"
                  style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
                >
                  14 de Marzo, 2026
                </p>
              </div>
            </div>
            <div className="flex-1 max-w-32 sm:max-w-48 h-px bg-gradient-to-l from-transparent via-[#1a385f] to-[#1a385f]"></div>
          </div>
        </div>

        {/* "Falta" Text */}
        <div className="mb-4 sm:mb-6">
          <h3
  className="text-2xl sm:text-3xl md:text-4xl font-bold italic"
  style={{ fontFamily: "Cormorant Garamond, serif", color: "#FFFFFF" }}
>
  Faltan...
</h3>

          <div className="flex justify-center mt-4">
            <svg width="80" height="12" viewBox="0 0 80 12" className="text-[#1a385f] opacity-60">
              <path d="M10 6 Q25 2, 40 6 T70 6" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="40" cy="6" r="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#fffaef]/95 backdrop-blur-sm rounded-3xl border border-[#1a385f]/20 p-4 sm:p-6 md:p-8">
            <div className="flex items-center justify-center">
              {[
                { label: "Días", value: timeLeft.days },
                { label: "Horas", value: timeLeft.hours },
                { label: "Minutos", value: timeLeft.minutes },
                { label: "Segundos", value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  {/* Time Unit */}
                  <div className="text-center px-3 sm:px-6">
                    <div
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3"
                      style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
                    >
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div
                      className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider opacity-80"
                      style={{ fontFamily: "Cormorant Garamond, serif", color: "#1a385f" }}
                    >
                      {item.label}
                    </div>
                  </div>

                  {/* Elegant Line Separator */}
                  {index < 3 && (
                    <div className="flex flex-col items-center mx-2 sm:mx-4 md:mx-6">
                      <div className="w-px h-8 sm:h-12 md:h-16 bg-gradient-to-b from-transparent via-[#1a385f]/40 to-transparent"></div>
                      <div className="w-2 h-2 bg-[#1a385f]/60 rounded-full my-2"></div>
                      <div className="w-px h-8 sm:h-12 md:h-16 bg-gradient-to-t from-transparent via-[#1a385f]/40 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <button
              onClick={addToCalendar}
              className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#1a385f] to-[#2a4a6f] text-[#fffaef] rounded-full hover:scale-105 transition-all duration-300 border border-[#fffaef]/20"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span
                className="text-base sm:text-lg font-medium tracking-wide"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Agregar al Calendario
              </span>
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
