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
import SectionFooter from "../sectionFooter"

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
        <SectionFooter />
        
        {/*<AdditionalInfoSection />*/}
      
      </main>
      </div>
    
  )
}
