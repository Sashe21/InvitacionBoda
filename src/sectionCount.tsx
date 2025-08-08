'use client'

import { useState, useEffect } from 'react'
import { Clock, Calendar, Plus } from 'lucide-react'

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Fecha de la boda: 14 de marzo de 2026
  const weddingDate = new Date('2026-03-14T16:00:00').getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [weddingDate])

  const addToCalendar = () => {
    const startDate = '20260314T160000Z'
    const endDate = '20260315T020000Z'
    const title = 'Boda de Abby y Gera'
    const details = 'Ceremonia religiosa y recepción - ¡No faltes!'
    const location = 'Parroquia San José y Salón Los Jardines'
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`
    
    window.open(googleCalendarUrl, '_blank')
  }

  return (
    <section className="relative py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-[url('/images/Fondo3.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-white/70"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        
        {/* Header with Clock Icon */}
        <div className="mb-12 sm:mb-16">
          <Clock className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-rose-600 mb-4 sm:mb-6 animate-pulse" />
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-rose-800 mb-6 sm:mb-8 tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="italic font-extralight">Cuenta</span>
            <span className="ml-3 font-normal">Regresiva</span>
          </h2>
        </div>

        {/* Wedding Date with Decorative Lines */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 max-w-32 sm:max-w-48 h-px bg-gradient-to-r from-transparent via-rose-400 to-rose-400"></div>
            <div className="mx-6 sm:mx-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 border-2 border-rose-300/50 shadow-lg">
                <p 
                  className="text-xl sm:text-2xl md:text-3xl font-light text-rose-800 tracking-wider"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  14 de Marzo, 2026
                </p>
              </div>
            </div>
            <div className="flex-1 max-w-32 sm:max-w-48 h-px bg-gradient-to-l from-transparent via-rose-400 to-rose-400"></div>
          </div>

          {/* Add to Calendar Button */}
          <button
            onClick={addToCalendar}
            className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
          >
            <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span 
              className="text-base sm:text-lg font-medium tracking-wide"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Agregar al Calendario
            </span>
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* "Falta" Text */}
        <div className="mb-8 sm:mb-12">
          <h3 
            className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 italic"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Falta...
          </h3>
          <div className="flex justify-center mt-4">
            <svg width="80" height="12" viewBox="0 0 80 12" className="text-rose-400 opacity-60">
              <path
                d="M10 6 Q25 2, 40 6 T70 6"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="40" cy="6" r="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            { label: "Días", value: timeLeft.days, color: "from-rose-500 to-rose-600" },
            { label: "Horas", value: timeLeft.hours, color: "from-pink-500 to-pink-600" },
            { label: "Minutos", value: timeLeft.minutes, color: "from-rose-400 to-rose-500" },
            { label: "Segundos", value: timeLeft.seconds, color: "from-pink-400 to-pink-500" },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 md:p-8 border border-rose-200 hover:scale-105 hover:-translate-y-2"
            >
              {/* Time Value */}
              <div 
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {item.value.toString().padStart(2, "0")}
              </div>
              
              {/* Separator */}
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-2 sm:mb-3"></div>
              
              {/* Label */}
              <div 
                className="text-xs sm:text-sm md:text-base lg:text-lg text-rose-700 font-medium uppercase tracking-wider"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {item.label}
              </div>
              
              {/* Decorative dots */}
              <div className="flex justify-center mt-2 sm:mt-3 gap-1">
                <div className="w-1 h-1 bg-rose-300 rounded-full opacity-60"></div>
                <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
                <div className="w-1 h-1 bg-rose-300 rounded-full opacity-60"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 sm:mt-16">
          <p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 italic font-light"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            ¡Cada segundo pasa rapido pa que te apures a que nos compres el regale ehhhh!
        
          </p>
          
          {/* Decorative flourish */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-rose-300 rounded-full opacity-60"></div>
              <div className="w-3 h-3 bg-rose-400 rounded-full opacity-80"></div>
              <div className="w-4 h-4 bg-rose-500 rounded-full"></div>
              <div className="w-3 h-3 bg-rose-400 rounded-full opacity-80"></div>
              <div className="w-2 h-2 bg-rose-300 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
