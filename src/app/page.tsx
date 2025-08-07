"use client"

import { useRef, useState, useEffect } from "react"
import { Heart, Calendar, MapPin, Music, Music2, Camera, Gift, Shirt, Phone, Mail, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaRing, FaHeart, FaCross, FaInfinity, FaCoins, FaWhatsapp } from "react-icons/fa"
import WeddingWelcomeSection from "@/sectionWelcome"
import LoveStorySection from "./sectionMessage"
import "../styles/typography.css";

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
    const whatsappUrl = `https://wa.me/5215512345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleMessage = () => {
    const message = "¡Hola Abby y Gera! Felicidades por su boda. Quería enviarles mis mejores deseos para este día tan especial."
    const whatsappUrl = `https://wa.me/5215512345678?text=${encodeURIComponent(message)}`
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
                  20 de Agosto, 2025
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
        
      <main>
      <WeddingWelcomeSection />
      <LoveStorySection />
      </main>

        {/* Message Section */}
        

        {/* Cut Image Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0 bg-[url('/images/Corte.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        </section>

        {/* Countdown Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[url('/images/Fondo3.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-white/70"></div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <div className="mb-12">
              <Clock className="w-12 h-12 mx-auto text-rose-600 mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-6 font-serif">
                Cuenta Regresiva
              </h2>
              <p className="text-xl text-gray-700">
                ¡Faltan muy pocos días para nuestro gran momento!
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: "Días", value: timeLeft.days },
                { label: "Horas", value: timeLeft.hours },
                { label: "Minutos", value: timeLeft.minutes },
                { label: "Segundos", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-rose-200 hover:scale-105"
                >
                  <div className="text-4xl md:text-6xl font-extrabold text-rose-700 mb-3">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm md:text-lg text-rose-600 font-semibold uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Godparents Section */}
        <section className="relative py-24 px-6 bg-gradient-to-br from-rose-50 via-white to-pink-50">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-800 font-serif mb-4">
              Nuestros Padrinos
            </h2>
            <p className="text-xl text-gray-600">
              Gracias por ser parte de nuestro gran día
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {[
              { name: "Juan Pérez", icon: FaHeart, role: "Padrino de honor", color: "text-rose-400" },
              { name: "Ana Rodríguez", icon: FaRing, role: "Padrina de anillos", color: "text-yellow-500" },
              { name: "Carlos Medina", icon: FaCross, role: "Padrino de velación", color: "text-blue-500" },
              { name: "Laura Gómez", icon: FaInfinity, role: "Padrina de lazo", color: "text-purple-500" },
              { name: "Pedro Hernández", icon: FaCoins, role: "Padrino de arras", color: "text-orange-500" },
            ].map((godparent, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-rose-100 ${
                  index % 2 === 0 ? 'transform -translate-y-4' : 'transform translate-y-4'
                } hover:scale-105`}
              >
                <h3 className="text-xl font-semibold text-rose-700 mb-4">{godparent.name}</h3>
                <godparent.icon className={`${godparent.color} text-4xl mx-auto mb-3`} />
                <p className="text-sm text-gray-600 font-medium">{godparent.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Event Details Section */}
        <section className="py-24 bg-gradient-to-br from-white to-rose-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-16 text-center font-serif">
              Detalles del Evento
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-white/90 backdrop-blur-sm border-rose-200 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-rose-800 mb-2">Ceremonia Religiosa</h3>
                  </div>
                  <div className="space-y-6 text-gray-700">
                    <div className="flex items-center gap-4 p-3 bg-rose-50 rounded-lg">
                      <Calendar className="w-6 h-6 text-rose-500" />
                      <span className="text-lg font-medium">20 de Agosto, 2025</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-rose-50 rounded-lg">
                      <Clock className="w-6 h-6 text-rose-500" />
                      <span className="text-lg font-medium">17:00 hrs</span>
                    </div>
                    <div className="flex items-start gap-4 p-3 bg-rose-50 rounded-lg">
                      <MapPin className="w-6 h-6 text-rose-500 mt-1" />
                      <div>
                        <span className="text-lg font-medium block">Iglesia San José</span>
                        <span className="text-gray-600">Av. Principal #123, Centro</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-rose-200 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🎉</span>
                    </div>
                    <h3 className="text-3xl font-bold text-rose-800 mb-2">Recepción</h3>
                  </div>
                  <div className="space-y-6 text-gray-700">
                    <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                      <Calendar className="w-6 h-6 text-purple-500" />
                      <span className="text-lg font-medium">20 de Agosto, 2025</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                      <Clock className="w-6 h-6 text-purple-500" />
                      <span className="text-lg font-medium">19:00 hrs</span>
                    </div>
                    <div className="flex items-start gap-4 p-3 bg-purple-50 rounded-lg">
                      <MapPin className="w-6 h-6 text-purple-500 mt-1" />
                      <div>
                        <span className="text-lg font-medium block">Salón de Eventos &aposLos Jardines$apos</span>
                        <span className="text-gray-600">Calle de la Alegría #456, Zona Norte</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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

        {/* Photo Gallery Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Camera className="w-12 h-12 mx-auto text-rose-500 mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4 font-serif">
                Galería de Recuerdos
              </h2>
              <p className="text-xl text-gray-600">
                Momentos especiales que queremos compartir contigo
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Recuerdo ${index + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-lg font-medium">Momento especial</p>
                      <p className="text-sm opacity-80">Abby & Gera</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 ring-4 ring-white/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
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
                  Para dudas: +52 55 1234-5678
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
