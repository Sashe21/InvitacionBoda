"use client"

import { useState, useRef } from "react"
import { Heart, Play, Pause } from "lucide-react"

export default function SectionCortina() {
  const [curtainOpen, setCurtainOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const openCurtain = () => {
    setCurtainOpen(true)
    if (audioRef.current) {
      // Establecer el volumen a 1 directamente al iniciar la reproducción por interacción del usuario
      audioRef.current.volume = 1; 
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch((error) => {
        console.error("Error al reproducir audio al abrir la cortina:", error)
        setIsPlaying(false)
        // En caso de que falle la reproducción automática (ej. por políticas del navegador),
        // el botón de música seguirá estando disponible para el usuario.
      })
    }
  }

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.volume = 1; // Asegurar volumen 1 al reproducir/reanudar
        audioRef.current.play().then(() => {
          setIsPlaying(true)
        }).catch((error) => {
          console.error("Error al reanudar audio:", error)
          setIsPlaying(false)
        })
      }
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-[3000ms] ease-in-out ${curtainOpen ? "pointer-events-none" : ""}`}
    >
      <audio ref={audioRef} loop preload="auto" playsInline>
        <source src="/music/bodaOF.mp3" type="audio/mpeg" />
        <source src="/music/bodaOF.mp3" type="audio/mpeg" />
      </audio>

      {!curtainOpen && <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>}

      {curtainOpen && (
        <button
          onClick={toggleMusic}
          className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#1a385f] via-[#1a385f]/95 to-[#1a385f]/80 shadow-2xl hover:shadow-[0_20px_40px_rgba(26,56,95,0.4)] transition-all duration-500 hover:scale-110 border-2 sm:border-3 border-[#fffaef]/30 backdrop-blur-md group active:scale-95 pointer-events-auto"
        >
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-[#fffaef]/20 to-[#fffaef]/10 group-hover:from-[#fffaef]/30 group-hover:to-[#fffaef]/15 transition-all duration-300"></div>
          <div className="absolute inset-2 rounded-full border border-[#fffaef]/20 group-hover:border-[#fffaef]/40 transition-all duration-300"></div>

          {isPlaying ? (
            <Pause className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#fffaef] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#fffaef] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-0.5 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" />
          )}

          <div className="absolute inset-0 rounded-full border-2 border-[#fffaef]/20 animate-ping opacity-75"></div>
        </button>
      )}

      {/* Left Triangle Half */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full cursor-pointer transition-all duration-[3000ms] ease-in-out transform-origin-center ${
          curtainOpen ? "-translate-x-full rotate-[-15deg] scale-75 opacity-0" : ""
        }`}
        style={{
          backgroundImage: `url("/images/AG1.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
        onClick={openCurtain}
      ></div>

      {/* Right Triangle Half */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full cursor-pointer transition-all duration-[3000ms] ease-in-out transform-origin-center ${
          curtainOpen ? "translate-x-full rotate-[15deg] scale-75 opacity-0" : ""
        }`}
        style={{
          backgroundImage: `url("/images/AG2.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
        }}
        onClick={openCurtain}
      ></div>

      {/* Central Seal/Button */}
      {!curtainOpen && (
        <div className="absolute inset-0 flex items-center justify-center z-50 px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            {/* Romantic Header */}
            <div className="mb-8 sm:mb-10 md:mb-12 animate-fade-in-up">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#fffaef] mx-auto mb-4 sm:mb-6 animate-pulse drop-shadow-2xl" />
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#fffaef] mb-3 sm:mb-4 drop-shadow-2xl tracking-wide px-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                <span className="italic font-extralight">Abby</span>
                <span className="mx-2 sm:mx-4 text-[#fffaef]">&</span>
                <span className="italic font-extralight">Gera</span>
              </h1>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#fffaef]/20 blur-2xl scale-150 animate-pulse"></div>

              <button
                onClick={openCurtain}
                className="group relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-full bg-gradient-to-br from-[#1a385f] via-[#1a385f]/95 to-[#1a385f]/85 shadow-[0_25px_50px_rgba(26,56,95,0.6)] hover:shadow-[0_35px_70px_rgba(26,56,95,0.8)] transition-all duration-700 hover:scale-105 border-3 sm:border-4 border-[#fffaef]/40 backdrop-blur-sm active:scale-95"
              >
                <div className="absolute inset-2 sm:inset-3 rounded-full bg-gradient-to-br from-[#fffaef] via-[#fffaef]/98 to-[#fffaef]/95 border-2 sm:border-3 border-[#1a385f]/30 shadow-[inset_0_8px_16px_rgba(26,56,95,0.1)]"></div>

                <div className="absolute inset-4 sm:inset-6 rounded-full border-2 border-[#1a385f]/20 group-hover:border-[#1a385f]/40 transition-all duration-500"></div>

                {/* Initials */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a385f] drop-shadow-lg tracking-wider italic group-hover:scale-105 transition-transform duration-500"
                    style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
                  >
                    AG
                  </span>
                </div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#fffaef]/0 via-[#fffaef]/0 to-[#fffaef]/0 group-hover:from-[#fffaef]/5 group-hover:via-[#fffaef]/10 group-hover:to-[#fffaef]/5 transition-all duration-500"></div>

                <div className="absolute -inset-2 rounded-full border border-[#fffaef]/30 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
              </button>

              {/* Instruction text */}
              <p
                className="mt-6 sm:mt-8 text-[#fffaef] text-base sm:text-lg md:text-xl italic drop-shadow-2xl animate-bounce font-medium px-4"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Toca para abrir nuestra invitación
              </p>
            </div>

            {/* ... existing decorative elements ... */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <svg width="100" height="40" viewBox="0 0 100 40" className="text-[#fffaef]/60">
                <path d="M10 20 Q30 10, 50 20 T90 20" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="25" cy="20" r="1" fill="currentColor" />
                <circle cx="50" cy="20" r="1.5" fill="currentColor" />
                <circle cx="75" cy="20" r="1" fill="currentColor" />
              </svg>
            </div>

            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 rotate-180">
              <svg width="100" height="40" viewBox="0 0 100 40" className="text-[#fffaef]/60">
                <path d="M10 20 Q30 10, 50 20 T90 20" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="25" cy="20" r="1" fill="currentColor" />
                <circle cx="50" cy="20" r="1.5" fill="currentColor" />
                <circle cx="75" cy="20" r="1" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* ... existing sparkle effects ... */}
      {!curtainOpen && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          <div
            className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#fffaef]/40 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#fffaef]/50 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#fffaef]/30 rounded-full animate-ping"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#fffaef]/40 rounded-full animate-ping"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      )}
    </div>
  )
}