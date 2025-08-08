'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

export default function LetterCurtainSection() {
  const [curtainOpen, setCurtainOpen] = useState(false)

  const openCurtain = () => {
    setCurtainOpen(true)
  }

  return (
    <div className={`fixed inset-0 z-40 transition-all duration-[3000ms] ease-in-out ${curtainOpen ? 'pointer-events-none' : ''}`}>
     

      {/* Left Triangle Half */}
<div
  className={`absolute top-0 left-0 w-1/2 h-full cursor-pointer transition-all duration-[3000ms] ease-in-out transform-origin-center ${
    curtainOpen ? '-translate-x-full rotate-[-15deg] scale-75 opacity-0' : ''
  }`}
  style={{
    backgroundImage: `url("/images/AG1.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center right',
  }}
  onClick={openCurtain}
>
  {/* Fondo semitransparente negro */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Decorative border */}
  <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-rose-300/50 via-white/30 to-rose-300/50"></div>

  {/* Vintage paper texture overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/10 via-transparent to-rose-100/10"></div>
</div>

{/* Right Triangle Half */}
<div
  className={`absolute top-0 right-0 w-1/2 h-full cursor-pointer transition-all duration-[3000ms] ease-in-out transform-origin-center ${
    curtainOpen ? 'translate-x-full rotate-[15deg] scale-75 opacity-0' : ''
  }`}
  style={{
    backgroundImage: `url("/images/AG2.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center left',
  }}
  onClick={openCurtain}
>
  {/* Fondo semitransparente negro */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Decorative border */}
  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-rose-300/50 via-white/30 to-rose-300/50"></div>

  {/* Vintage paper texture overlay */}
  <div className="absolute inset-0 bg-gradient-to-bl from-amber-50/10 via-transparent to-rose-100/10"></div>
</div>

      {/* Central Seal/Button */}
      {!curtainOpen && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="text-center">
            
            {/* Romantic Header */}
            <div className="mb-12 animate-fade-in-up">
              <Heart className="w-12 h-12 text-rose-300 mx-auto mb-6 animate-pulse drop-shadow-lg" />
              <h1 
                className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-4 drop-shadow-2xl tracking-wide"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                <span className="italic font-extralight">Abby</span>
                <span className="mx-4 text-rose-300">&</span>
                <span className="italic font-extralight">Gera</span>
              </h1>
              <p 
                className="text-lg md:text-xl text-white/90 drop-shadow-lg tracking-wider"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                20 de Agosto, 2025
              </p>
            </div>

            {/* Wax Seal Style Button */}
            <div className="relative">
              {/* Outer glow effect */}
              <div className="absolute inset-0 rounded-full bg-rose-400/30 blur-xl scale-150 animate-pulse"></div>
              
              {/* Main seal button */}
              <button
                onClick={openCurtain}
                className="group relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-rose-400 via-rose-500 to-rose-600 shadow-2xl hover:shadow-rose-500/50 transition-all duration-500 hover:scale-110 border-4 border-white/20 backdrop-blur-sm"
              >
                {/* Inner circle with texture */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-rose-300/50 to-rose-700/50 border-2 border-white/30"></div>
                
                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span 
                    className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-wider"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    AG
                  </span>
                </div>
                
                {/* Decorative elements around the seal */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/20 transition-all duration-300"></div>
              </button>
              
              {/* Instruction text */}
              <p 
                className="mt-8 text-white/80 text-lg md:text-xl italic drop-shadow-lg animate-bounce"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Toca para abrir nuestra invitación
              </p>
            </div>

            {/* Decorative flourishes */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <svg width="100" height="40" viewBox="0 0 100 40" className="text-white/40">
                <path
                  d="M10 20 Q30 10, 50 20 T90 20"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <circle cx="25" cy="20" r="1" fill="currentColor" />
                <circle cx="50" cy="20" r="1.5" fill="currentColor" />
                <circle cx="75" cy="20" r="1" fill="currentColor" />
              </svg>
            </div>
            
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 rotate-180">
              <svg width="100" height="40" viewBox="0 0 100 40" className="text-white/40">
                <path
                  d="M10 20 Q30 10, 50 20 T90 20"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <circle cx="25" cy="20" r="1" fill="currentColor" />
                <circle cx="50" cy="20" r="1.5" fill="currentColor" />
                <circle cx="75" cy="20" r="1" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Floating particles effect */}
      {!curtainOpen && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-rose-300/40 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-rose-200/30 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
        </div>
      )}
    </div>
  )
}
