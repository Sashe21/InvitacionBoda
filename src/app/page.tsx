"use client"

import { useState, useEffect } from "react"
import { Heart, Calendar, MapPin, Music, MicOffIcon as MusicOff, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WeddingInvitation() {
  const [curtainOpen, setCurtainOpen] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date("June 5, 2025 00:00:00").getTime()

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
    // Auto-play music would go here
  }

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying)
  }

  const galleryImages = [
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Music Control Button */}
      <Button
        onClick={toggleMusic}
        className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-rose-600 border border-rose-200"
        size="sm"
      >
        {musicPlaying ? <Music className="w-4 h-4" /> : <MusicOff className="w-4 h-4" />}
        <span className="ml-2">{musicPlaying ? "Pausar" : "Música"}</span>
      </Button>

      {/* Curtain Effect */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-[2000ms] ease-in-out ${curtainOpen ? "pointer-events-none" : ""}`}
      >
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 cursor-pointer transition-transform duration-[2000ms] ease-in-out ${curtainOpen ? "-translate-x-full" : ""}`}
          onClick={openCurtain}
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-rose-900/60 flex items-center justify-center">
            <div className="text-white text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 animate-pulse" />
              <p className="text-lg font-light">Haz clic para abrir</p>
            </div>
          </div>
        </div>
        <div
          className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-900 via-rose-800 to-rose-700 cursor-pointer transition-transform duration-[2000ms] ease-in-out ${curtainOpen ? "translate-x-full" : ""}`}
          onClick={openCurtain}
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-rose-900/60 flex items-center justify-center">
            <div className="text-white text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 animate-pulse" />
              <p className="text-lg font-light">Haz clic para abrir</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-[2000ms] ${curtainOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {/* Welcome Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Heart className="w-16 h-16 mx-auto text-rose-500 mb-6 animate-pulse" />
              <h1 className="text-6xl md:text-8xl font-bold text-rose-800 mb-4 font-serif">¡Nos Casamos!</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-8"></div>
            </div>

            <div className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              <p className="mb-4">Queridos familiares y amigos,</p>
              <p className="mb-6">
                Con inmensa alegría en nuestros corazones, queremos invitarte a celebrar el día más importante de
                nuestras vidas.
              </p>
              <p className="text-rose-600 font-semibold">Tu presencia hará que este momento sea aún más especial.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Calendar className="w-6 h-6 text-rose-500" />
                <span className="font-semibold">5 de Junio, 2025</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <MapPin className="w-6 h-6 text-rose-500" />
                <span className="font-semibold">Cancún, México</span>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4 font-serif">Cuenta Regresiva</h2>
            <p className="text-xl text-gray-600 mb-12">Faltan muy pocos días para nuestro gran momento</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { label: "Días", value: timeLeft.days },
                { label: "Horas", value: timeLeft.hours },
                { label: "Minutos", value: timeLeft.minutes },
                { label: "Segundos", value: timeLeft.seconds },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-rose-100 to-pink-100 border-rose-200 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-rose-700 mb-2">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm md:text-base text-rose-600 font-medium uppercase tracking-wide">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-16 text-center font-serif">
              Detalles del Evento
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-white/70 backdrop-blur-sm border-rose-200 shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-rose-800 mb-2">Ceremonia</h3>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-rose-500" />
                      <span>5 de Junio, 2025</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-rose-500" />
                      <span>Playa Delfines, Cancún</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-rose-500 rounded-full mt-1 flex-shrink-0"></div>
                      <span>17:00 hrs - Ceremonia religiosa frente al mar</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-rose-200 shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎉</span>
                    </div>
                    <h3 className="text-2xl font-bold text-rose-800 mb-2">Recepción</h3>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-rose-500" />
                      <span>5 de Junio, 2025</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-rose-500" />
                      <span>Hotel Grand Fiesta, Cancún</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-rose-500 rounded-full mt-1 flex-shrink-0"></div>
                      <span>19:00 hrs - Cena, baile y celebración hasta el amanecer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Camera className="w-12 h-12 mx-auto text-rose-500 mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4 font-serif">Galería de Recuerdos</h2>
              <p className="text-xl text-gray-600">Momentos especiales que queremos compartir contigo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Recuerdo ${index + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Recuerdo especial</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 ring-4 ring-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RSVP Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-8 font-serif">Confirma tu Asistencia</h2>
            <p className="text-xl text-gray-600 mb-12">
              Tu presencia es el regalo más importante para nosotros. Por favor, confirma tu asistencia antes del 1 de
              mayo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                Confirmar Asistencia
              </Button>
              <Button
                variant="outline"
                className="border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-3 text-lg rounded-full"
              >
                Enviar Mensaje
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gradient-to-r from-rose-800 to-pink-800 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <Heart className="w-8 h-8 mx-auto mb-4 animate-pulse" />
            <p className="text-lg mb-2">Con todo nuestro amor</p>
            <p className="text-2xl font-bold font-serif">María & Carlos</p>
            <p className="text-sm mt-4 opacity-80">5 de Junio, 2025 • Cancún, México</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
