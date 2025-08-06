"use client"

import { useRef, useState, useEffect } from "react"
import { Heart, Calendar, MapPin, Music, Music2, MicOffIcon as MusicOff, Camera, Phone, Mail, Gift, Clock, Users, Star, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaRing, FaHeart, FaCross, FaInfinity, FaCoins, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"

export default function WeddingInvitation() {
  const [curtainOpen, setCurtainOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showRSVPForm, setShowRSVPForm] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date("August 20, 2025 00:00:00").getTime()
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

  // Auto-change gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const openCurtain = () => {
    setCurtainOpen(true)
    setTimeout(() => {
      toggleMusic()
    }, 1000)
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

  const galleryImages = [
    "/images/couple-2.png",
    "/gallery-4.png",
    "/bride-groom-dance.png",
    "/placeholder-a82po.png",
    "/wedding-bouquet.png",
    "/romantic-sunset-couple.png",
  ]

  const padrinos = [
    { name: "Juan Pérez", role: "Padrino de honor", icon: FaHeart, color: "text-rose-400" },
    { name: "Ana Rodríguez", role: "Padrina de anillos", icon: FaRing, color: "text-yellow-500" },
    { name: "Carlos Medina", role: "Padrino de velación", icon: FaCross, color: "text-blue-500" },
    { name: "Laura Gómez", role: "Padrina de lazo", icon: FaInfinity, color: "text-purple-500" },
    { name: "Pedro Hernández", role: "Padrino de arras", icon: FaCoins, color: "text-orange-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-x-hidden">
      {/* Floating Hearts Animation */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-rose-300/30 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
            size={16 + Math.random() * 8}
          />
        ))}
      </div>

      {/* Enhanced Music Control */}
      <div className="fixed top-5 left-5 z-50">
        <audio ref={audioRef} src="/music/boda.mp3" loop />
        <button
          onClick={toggleMusic}
          className={`flex items-center px-6 py-3 bg-white/90 backdrop-blur-md text-rose-700 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-rose-200 ${
            isPlaying ? 'animate-pulse' : ''
          }`}
        >
          {isPlaying ? (
            <Music className="w-5 h-5 mr-2 animate-spin" />
          ) : (
            <Music2 className="w-5 h-5 mr-2" />
          )}
          <span className="font-medium">{isPlaying ? "♪ Pausar" : "♪ Reproducir"}</span>
        </button>
      </div>

      {/* Enhanced Curtain Effect */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-[3000ms] ease-in-out ${
          curtainOpen ? 'pointer-events-none' : ''
        }`}
      >
        {/* Left Panel */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full cursor-pointer transition-all duration-[3000ms] ease-in-out ${
            curtainOpen ? '-translate-x-full rotate-y-12' : 'hover:scale-105'
          }`}
          style={{
            backgroundImage: `url("/images/AG1.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: curtainOpen ? 'blur(2px)' : 'none',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-rose-900/20"></div>
        </div>

        {/* Right Panel */}
        <div
          className={`absolute top-0 right-0 w-1/2 h-full cursor-pointer transition-all duration-[3000ms] ease-in-out ${
            curtainOpen ? 'translate-x-full -rotate-y-12' : 'hover:scale-105'
          }`}
          style={{
            backgroundImage: `url("/images/AG2.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: curtainOpen ? 'blur(2px)' : 'none',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-rose-900/20"></div>
        </div>

        {/* Enhanced Central Button */}
        {!curtainOpen && (
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="text-center">
              <div className="mb-6">
                <Sparkles className="w-12 h-12 mx-auto text-white animate-pulse mb-4" />
                <h3 className="text-white text-2xl font-serif mb-2">Abby & Gera</h3>
                <p className="text-white/80 text-lg">Te invitan a su boda</p>
              </div>
              <button
                onClick={openCurtain}
                className="group relative px-12 py-6 rounded-full text-2xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white shadow-2xl hover:shadow-rose-500/50 hover:scale-110 transition-all duration-500 border-4 border-white/30"
              >
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></span>
                <span className="relative flex items-center gap-3">
                  <Heart className="w-6 h-6" />
                  Abrir Invitación
                  <Heart className="w-6 h-6" />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-[3000ms] ${
          curtainOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Hero Section with Parallax */}
        <section
          className="relative w-full h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: "url('/images/AG_v2.jpg')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
          
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <div className="mb-12 animate-fade-in-up">
              <div className="flex justify-center mb-8">
                <div className="flex space-x-4">
                  <Heart className="w-8 h-8 text-rose-300 animate-pulse" />
                  <Star className="w-8 h-8 text-yellow-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <Heart className="w-8 h-8 text-rose-300 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
              
              <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 font-serif drop-shadow-2xl animate-fade-in-up">
                ¡Nos Casamos!
              </h1>
              
              <div className="relative">
                <h2 className="text-2xl md:text-4xl text-white font-serif italic mb-4 drop-shadow-lg">
                  LUIS GERARDO RAMOS VILLALVAZO
                </h2>
                <div className="flex items-center justify-center my-6">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-rose-400"></div>
                  <Heart className="w-8 h-8 mx-4 text-rose-400 animate-pulse" />
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
                </div>
                <h2 className="text-2xl md:text-4xl text-white font-serif italic drop-shadow-lg">
                  NORMA ABIGAIL BARRANCO VAZQUEZ
                </h2>
              </div>
            </div>

            <div className="animate-bounce mt-12">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Message Section */}
        <section className="relative py-32 px-6">
          <div className="absolute inset-0 bg-[url('/images/Fondo3.jpg')] bg-cover bg-center bg-fixed"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-transparent to-pink-900/20"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md p-12 md:p-16 rounded-3xl shadow-2xl border border-rose-200/50">
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-8">
                  ✨ Nos Casamos ✨
                </h2>
              </div>
              
              <div className="prose prose-lg md:prose-xl mx-auto text-center">
                <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed mb-8">
                  Después de tantos momentos compartidos, risas infinitas y sueños que crecen juntos,
                  hemos decidido dar este gran paso. Queremos que seas parte de este capítulo tan especial en nuestras vidas.
                </p>
                
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-2xl mb-8">
                  <p className="text-lg text-gray-700 italic mb-4">
                    "El amor no se mira, se siente, y aún más cuando ella está junto a ti."
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-4xl md:text-5xl font-bold text-rose-800 font-cursive">
                    Abby & Gera
                  </p>
                  <p className="text-lg text-gray-600 italic">
                    Con amor y emoción, te invitamos a celebrar con nosotros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Break Section */}
        <section 
          className="relative h-screen bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/Corte.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" />
              <p className="text-2xl md:text-3xl font-serif italic">
                "Dos corazones, una sola historia"
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Countdown Section */}
        <section className="relative py-24 bg-gradient-to-br from-rose-100 via-white to-pink-100">
          <div className="absolute inset-0 bg-[url('/images/Fondo3.jpg')] bg-cover bg-center opacity-10"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <div className="mb-16">
              <Clock className="w-16 h-16 mx-auto text-rose-500 mb-6" />
              <h2 className="text-5xl md:text-6xl font-bold text-rose-800 mb-6 font-serif">
                Cuenta Regresiva
              </h2>
              <p className="text-xl text-gray-700 mb-4">
                ¡Faltan muy pocos días para nuestro gran momento!
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                { label: "Días", value: timeLeft.days, color: "from-rose-400 to-rose-600" },
                { label: "Horas", value: timeLeft.hours, color: "from-pink-400 to-pink-600" },
                { label: "Minutos", value: timeLeft.minutes, color: "from-purple-400 to-purple-600" },
                { label: "Segundos", value: timeLeft.seconds, color: "from-rose-400 to-pink-600" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-2 border-rose-100 hover:border-rose-300 hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                  <div className="relative">
                    <div className="text-4xl md:text-6xl font-extrabold text-rose-700 mb-3 font-mono">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm md:text-lg text-rose-600 font-semibold uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Padrinos Section */}
        <section className="relative py-24 px-6 bg-gradient-to-br from-rose-50 via-white to-pink-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <Users className="w-16 h-16 mx-auto text-rose-500 mb-6" />
              <h2 className="text-5xl md:text-6xl font-bold text-rose-800 font-serif mb-6">
                Nuestros Padrinos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Personas especiales que nos acompañarán en este momento único
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {padrinos.map((padrino, index) => {
                const IconComponent = padrino.icon
                return (
                  <div
                    key={index}
                    className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-500 border-2 border-rose-100 hover:border-rose-300 ${
                      index % 2 === 0 ? 'hover:-translate-y-4' : 'hover:translate-y-4'
                    } hover:scale-105`}
                  >
                    <div className="mb-6">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className={`text-4xl ${padrino.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-rose-700 mb-2">{padrino.name}</h3>
                      <p className="text-sm text-gray-600 font-medium">{padrino.role}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Event Details */}
        <section className="py-24 bg-gradient-to-br from-white via-rose-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <Calendar className="w-16 h-16 mx-auto text-rose-500 mb-6" />
              <h2 className="text-5xl md:text-6xl font-bold text-rose-800 font-serif mb-6">
                Detalles del Evento
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Ceremonia */}
              <Card className="group bg-white/90 backdrop-blur-md border-2 border-rose-200 shadow-2xl hover:shadow-rose-200/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative p-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-rose-800 mb-4 font-serif">Ceremonia Religiosa</h3>
                  </div>
                  <div className="space-y-6 text-gray-700">
                    <div className="flex items-center gap-4 p-4 bg-rose-50 rounded-xl">
                      <Calendar className="w-6 h-6 text-rose-500 flex-shrink-0" />
                      <span className="text-lg font-medium">20 de Agosto, 2025</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-rose-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-rose-500 flex-shrink-0" />
                      <span className="text-lg font-medium">Iglesia San José, Centro</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-rose-50 rounded-xl">
                      <Clock className="w-6 h-6 text-rose-500 flex-shrink-0" />
                      <span className="text-lg font-medium">17:00 hrs - Ceremonia religiosa</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recepción */}
              <Card className="group bg-white/90 backdrop-blur-md border-2 border-rose-200 shadow-2xl hover:shadow-rose-200/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative p-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🎉</span>
                    </div>
                    <h3 className="text-3xl font-bold text-rose-800 mb-4 font-serif">Recepción</h3>
                  </div>
                  <div className="space-y-6 text-gray-700">
                    <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                      <Calendar className="w-6 h-6 text-purple-500 flex-shrink-0" />
                      <span className="text-lg font-medium">20 de Agosto, 2025</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-purple-500 flex-shrink-0" />
                      <span className="text-lg font-medium">Salón de Eventos "Los Jardines"</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                      <Clock className="w-6 h-6 text-purple-500 flex-shrink-0" />
                      <span className="text-lg font-medium">19:00 hrs - Cena y celebración</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Photo Gallery */}
        <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <Camera className="w-16 h-16 mx-auto text-rose-500 mb-6" />
              <h2 className="text-5xl md:text-6xl font-bold text-rose-800 mb-6 font-serif">
                Galería de Recuerdos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Momentos especiales que queremos compartir contigo
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer bg-white p-2"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Recuerdo ${index + 1}`}
                      className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-lg font-semibold mb-1">Recuerdo especial</p>
                        <p className="text-sm opacity-80">Abby & Gera</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Heart className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute inset-0 ring-4 ring-rose-200/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced RSVP Section */}
        <section className="py-24 bg-white/80 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="mb-16">
              <Gift className="w-16 h-16 mx-auto text-rose-500 mb-6" />
              <h2 className="text-5xl md:text-6xl font-bold text-rose-800 mb-6 font-serif">
                Confirma tu Asistencia
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Tu presencia es el regalo más importante para nosotros. Por favor, confirma tu asistencia antes del 1 de agosto.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-8 rounded-3xl shadow-lg">
                <FaWhatsapp className="w-12 h-12 mx-auto text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Envíanos un mensaje</p>
                <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-2">
                  Confirmar por WhatsApp
                </Button>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-3xl shadow-lg">
                <Phone className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Teléfono</h3>
                <p className="text-gray-600 mb-4">Llámanos directamente</p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2">
                  Llamar Ahora
                </Button>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-3xl shadow-lg">
                <Mail className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Envía tu confirmación</p>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6 py-2">
                  Enviar Email
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-8 rounded-3xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">¡No olvides!</h3>
              <p className="text-lg mb-4">Código de vestimenta: Formal / Elegante</p>
              <p className="text-sm opacity-90">
                Para más información, no dudes en contactarnos
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="relative py-16 bg-gradient-to-r from-rose-800 via-pink-800 to-rose-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <div className="mb-8">
              <div className="flex justify-center space-x-4 mb-6">
                <Heart className="w-8 h-8 animate-pulse" />
                <Star className="w-8 h-8 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <Heart className="w-8 h-8 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <p className="text-xl mb-4 font-light">Con todo nuestro amor</p>
              <p className="text-4xl md:text-5xl font-bold font-serif mb-6">Abby & Gera</p>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-300 to-pink-300 mx-auto mb-6"></div>
              <p className="text-lg opacity-90">20 de Agosto, 2025</p>
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <FaInstagram className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
              <FaFacebook className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
              <FaWhatsapp className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
            </div>

            <p className="text-sm opacity-70">
              Hecho con ❤️ para nuestro día especial
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
