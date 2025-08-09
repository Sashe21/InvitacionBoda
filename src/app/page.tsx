"use client"

import { useRef, useState, useEffect } from "react"
import { Heart, Calendar, MapPin, Music, Music2, Camera, Gift, Shirt, Phone, Mail, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaRing, FaHeart, FaCross, FaInfinity, FaCoins, FaWhatsapp } from "react-icons/fa"
import LetterCurtainSection from "../sectionCortina";
import WeddingWelcomeSection from "@/sectionWelcome"
import LoveStorySection from "../sectionMessage"
import CountdownSection from "../sectionCount";
import GodparentsSection from "../sectionGodparents";
import EventsSection from "../sectionplaces";
import ItinerarySection from "../sectionitinerary";
import PhotoGallerySection from "../sectionGalery"

import AdditionalInfoSection from "../sectionAdicional";
import "../styles/typography.css";
import "../styles/mobile.css";

export default function WeddingInvitation() {
  const [curtainOpen, setCurtainOpen] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date("August 20, 2025 17:00:00").getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now
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
  }, [])

  const openCurtain = () => {
    setCurtainOpen(true)
    toggleMusic()
  }

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error("No se pudo reproducir la música:", err))
    }
  }

  const handleRSVP = () => {
    const message = "¡Hola! Confirmo mi asistencia a la boda de Abby y Gera el 20 de agosto de 2025. ¡No me la perdería por nada!"
    const whatsappUrl = `https://wa.me/523411348420?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleMessage = () => {
    const message = "¡Hola Abby y Gera! Felicidades por su boda. Quería enviarles mis mejores deseos para este día tan especial."
    const whatsappUrl = `https://wa.me/523411348420?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const galleryImages = [
    "/romantic-couple-engagement.png",
    "/laughing-couple-outdoors.png",
    "/romantic-sunset-silhouette.png",
    "/couple-walking-beach-sunset.png",
    "/romantic-dance.png",
    "/elegant-formal-couple.png",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Music Control Button */}
      <div className="fixed top-5 left-5 z-50">
        <audio ref={audioRef} src="/music/boda.mp3" loop />
        <button
          onClick={toggleMusic}
          className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-rose-700 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 border border-rose-200"
        >
          {isPlaying ? (
            <Music className="w-5 h-5 mr-2 animate-pulse" />
          ) : (
            <Music2 className="w-5 h-5 mr-2" />
          )}
          {isPlaying ? "Pausar" : "Reproducir"}
        </button>
      </div>
 

      
      {/* Curtain Effect */}
      <div className={`fixed inset-0 z-40 transition-transform duration-[2500ms] ease-in-out ${curtainOpen ? 'pointer-events-none' : ''}`}>
        {/* Left Half */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full cursor-pointer transition-transform duration-[2500ms] ease-in-out ${
            curtainOpen ? '-translate-x-full' : ''
          }`}
          style={{
            backgroundImage: `url("/images/AG1.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Right Half */}
        <div
          className={`absolute top-0 right-0 w-1/2 h-full cursor-pointer transition-transform duration-[2500ms] ease-in-out ${
            curtainOpen ? 'translate-x-full' : ''
          }`}
          style={{
            backgroundImage: `url("/images/AG2.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Central Button */}
        {!curtainOpen && (
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="text-center">
              <div className="mb-8">
                <Heart className="w-16 h-16 text-white mx-auto mb-4 animate-pulse drop-shadow-lg" />
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-2 drop-shadow-lg">
                  Abby & Gera
                </h1>
                <p className="text-xl text-white/90 drop-shadow-md">
                  20 de Agosto, 2028
                </p>
              </div>
              <button
                onClick={openCurtain}
                className="group relative px-12 py-4 rounded-full text-xl font-semibold bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white shadow-2xl hover:scale-105 hover:shadow-rose-800/50 transition-all duration-300 border-2 border-white/20"
              >
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Abrir Invitación
                  <Heart className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
      

      {/* Main Content */}
      <div className={`transition-opacity duration-[2500ms] ${curtainOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      {curtainOpen && (
      <main>
      <LetterCurtainSection />  
      <WeddingWelcomeSection />
      <LoveStorySection />
      <CountdownSection />
      <GodparentsSection />
      <EventsSection />
      <ItinerarySection />
      <PhotoGallerySection />

      <AdditionalInfoSection />


      </main>
      )}

        
        

        {/* Cut Image Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0 bg-[url('/images/Corte.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        </section>

       

      
        {/* Dress Code & Gifts Section */}
        <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-white/95 backdrop-blur-sm border-rose-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10 text-center">
                  <Shirt className="w-16 h-16 mx-auto text-rose-500 mb-6" />
                  <h3 className="text-3xl font-bold text-rose-800 mb-6">Código de Vestimenta</h3>
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg"><strong>Formal/Elegante</strong></p>
                    <p>Sugerimos colores en tonos pasteles, evitando el blanco y negro total.</p>
                    <div className="flex justify-center gap-4 mt-6">
                      <div className="w-8 h-8 bg-rose-200 rounded-full"></div>
                      <div className="w-8 h-8 bg-pink-200 rounded-full"></div>
                      <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
                      <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border-rose-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10 text-center">
                  <Gift className="w-16 h-16 mx-auto text-rose-500 mb-6" />
                  <h3 className="text-3xl font-bold text-rose-800 mb-6">Mesa de Regalos</h3>
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg">Tu presencia es nuestro mejor regalo</p>
                    <p>Si deseas obsequiarnos algo, tenemos mesa de regalos en:</p>
                    <div className="space-y-2 mt-4">
                      <p className="font-semibold">Liverpool - Evento: 12345</p>
                      <p className="font-semibold">Palacio de Hierro - Evento: 67890</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        

        {/* RSVP Section */}
        <section className="py-24 bg-gradient-to-br from-rose-100 to-pink-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-rose-200">
              <Heart className="w-16 h-16 mx-auto text-rose-500 mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-8 font-serif">
                Confirma tu Asistencia
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Tu presencia es el regalo más importante para nosotros. Por favor, confirma tu asistencia 
                antes del <strong>15 de agosto</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  onClick={handleRSVP}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Confirmar Asistencia
                </Button>
                <Button
                  onClick={handleMessage}
                  variant="outline"
                  className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-10 py-4 text-lg rounded-full hover:border-rose-400 transition-all duration-300 flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  Enviar Mensaje
                </Button>
              </div>
              
              <div className="mt-8 p-4 bg-rose-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Para dudas: +52 341 134 8420
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-gradient-to-r from-rose-800 via-pink-800 to-rose-800 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div className="flex justify-center gap-4 mb-6">
              <Heart className="w-8 h-8 animate-pulse" />
              <Heart className="w-10 h-10 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Heart className="w-8 h-8 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <p className="text-xl mb-4">Con todo nuestro amor</p>
            <p className="text-4xl font-bold font-serif mb-2">Abby & Gera</p>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-4"></div>
            <p className="text-lg opacity-90">20 de Agosto, 2025</p>
            <p className="text-sm mt-2 opacity-80">
              Luis Gerardo Ramos Villalvazo & Norma Abigail Barranco Vazquez
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
