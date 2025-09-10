"use client"

import { Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import CardGift from "@/components/ui/CardGift"

export default function SectionGift() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setIsClient(true)
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, 200)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative pt-0 pb-6 sm:pb-8 md:pb-12 px-3 sm:px-4 md:px-6 lg:px-8 min-h-screen flex items-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/GG.jpg')",
          backgroundAttachment: isClient && windowWidth > 768 ? "fixed" : "scroll",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto w-full">
        {/* Header */}
        <div
          className={`text-center mb-6 sm:mb-8 md:mb-12 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="h-px bg-[#fffaef] flex-1 max-w-12 sm:max-w-16 md:max-w-20"></div>
            <Heart className="mx-3 sm:mx-4 w-5 h-5 sm:w-6 sm:h-6 text-[#fffaef]" />
            <div className="h-px bg-[#fffaef] flex-1 max-w-12 sm:max-w-16 md:max-w-20"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#fffaef] mb-1 sm:mb-2">Regalos</h2>
          <p className="text-[#fffaef]/80 text-xs sm:text-sm md:text-base px-2 sm:px-4">
            Tu presencia es nuestro mejor regalo, pero si deseas obsequiarnos algo...
          </p>
        </div>

        {/* Gift Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <CardGift type="envelope" index={0} />
          <CardGift type="registry" index={1} />
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="h-px bg-[#fffaef]/50 flex-1 max-w-16 sm:max-w-20"></div>
            <div className="mx-3 sm:mx-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#fffaef] rounded-full"></div>
            <div className="h-px bg-[#fffaef]/50 flex-1 max-w-16 sm:max-w-20"></div>
          </div>
          <p className="text-[#fffaef]/80 text-xs sm:text-sm italic px-2 sm:px-4">
            Lo más importante para nosotros es compartir este día especial contigo
          </p>
        </div>
      </div>
    </section>
  )
}
