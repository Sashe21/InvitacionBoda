"use client"

import Image from "next/image";
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
import SectionImagen from "../sectionImage";
import SectionMoreInfo from "../sectionMoreInfo";
import SectionHosting from "../sectionHosting"
import SectionRSVP from "../sectionRSVP"

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
        <audio ref={audioRef} src="/music/fake.mp3" loop />
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
      {!curtainOpen && (
      <LetterCurtainSection />
      )}
      
      {/* Main Content */}
      <main>
        <WeddingWelcomeSection />
        <LoveStorySection />
        <SectionImagen />
        <CountdownSection />
        <GodparentsSection />
        <PhotoGallerySection />
        <EventsSection />
        <ItinerarySection />
        <SectionMoreInfo />
        <SectionHosting />
        <SectionRSVP />
        
        {/*<AdditionalInfoSection />*/}
      
      </main>
  
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
    
  )
}
