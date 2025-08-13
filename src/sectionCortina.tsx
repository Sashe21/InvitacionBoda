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
            </div>

            {/* Wax Seal Style Button */}
            <div className="relative">
              {/* Outer glow effect */}
              <div className="absolute inset-0 rounded-full bg-rose-400/30 blur-xl scale-150 animate-pulse"></div>
              
              {/* Main seal button */}
             {/* Outer glow effect (beige difuminado) */}
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#e4e1d8]/40 via-[#f5f3ec]/30 to-[#d9d4c5]/40 blur-xl scale-150 animate-pulse"></div>

{/* Main seal button */}
<button
  onClick={openCurtain}
  className="group relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#e4e1d8] via-[#f5f3ec] to-[#d9d4c5] shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 border-4 border-[#e4e1d8]/70 backdrop-blur-sm"
>
  {/* Inner circle beige más claro */}
  <div className="absolute inset-3 rounded-full bg-[#faf9f5] border-2 border-[#d9d4c5]/60"></div>

  {/* Initials */}
  <div className="absolute inset-0 flex flex-col items-center justify-center">
  
   <span 
  className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#a08c6a] mb-4 drop-shadow-2xl tracking-wide italic"
  style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
>
  AG
</span>

   
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
