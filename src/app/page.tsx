"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import Image from "next/image";
import { useRef, useState, useEffect } from "react"
import { Heart, Calendar, MapPin, Music, Music2, Camera, Gift, Shirt, Phone, Mail, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaRing, FaHeart, FaCross, FaInfinity, FaCoins, FaWhatsapp } from "react-icons/fa"
import SectionCortina from "../sectionCortina";
import SectionWelcome from "@/sectionWelcome"
import SectionMessage from "../sectionMessage"



import AdditionalInfoSection from "../sectionAdicional";
import "../styles/typography.css";
import "../styles/mobile.css";

const SectionImagen = dynamic(() => import("../sectionImage"), {
  loading: () => <div className="h-96 bg-[#fffaef] animate-pulse" />,
})
const CountdownSection = dynamic(() => import("../sectionCount"), {
  loading: () => <div className="h-screen bg-[#fffaef] animate-pulse" />,
})
const SectionGalery = dynamic(() => import("../sectionGalery"), {
  loading: () => <div className="h-96 bg-[#fffaef] animate-pulse" />,
})
const ItinerarySection = dynamic(() => import("../sectionitinerary"), {
  loading: () => <div className="h-96 bg-[#fffaef] animate-pulse" />,
})
const SectionParents = dynamic(() => import("../sectionParents"), {
  loading: () => <div className="h-96 bg-[#fffaef] animate-pulse" />,
})
const GodparentsSection = dynamic(() => import("../sectionGodparents"), {
  loading: () => <div className="h-96 bg-[#fffaef] animate-pulse" />,
})
const SectionPlaces = dynamic(() => import("../sectionplaces"), {
  loading: () => <div className="h-96 bg-[#fffaef] animate-pulse" />,
})
const SectionMoreInfo = dynamic(() => import("../sectionMoreInfo"), {
  loading: () => <div className="h-96 bg-[#fffaef] animate-pulse" />,
})
const SectionGift = dynamic(() => import("../sectionGift"), {
  loading: () => <div className="h-96 bg-[#fffaef] animate-pulse" />,
})
const SectionHosting = dynamic(() => import("../sectionHosting"), {
  loading: () => <div className="h-96 bg-[#fffaef] animate-pulse" />,
})
const SectionRSVP = dynamic(() => import("../sectionRSVP"), {
  loading: () => <div className="h-96 bg-[#fffaef] animate-pulse" />,
})
const SectionFooter = dynamic(() => import("../sectionFooter"), {
  loading: () => <div className="h-32 bg-[#fffaef] animate-pulse" />,
})

const SectionGallery2 = dynamic(() => import("../sectionGaleryP"), {
  loading: () => <div className="h-32 bg-[#fffaef] animate-pulse" />,
})

export default function WeddingInvitation() {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Main Content */}
       <main className="bg-[#fffaef] overflow-x-hidden">
         <SectionCortina />
      <SectionWelcome />

      <div className="space-y-0">
        <SectionMessage />

        <Suspense fallback={<div className="h-96 bg-[#fffaef] animate-pulse" />}>
          <SectionImagen />
        </Suspense>

        <Suspense fallback={<div className="h-screen bg-[#fffaef] animate-pulse" />}>
          <CountdownSection />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#fffaef] animate-pulse" />}>
          <SectionParents />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#fffaef] animate-pulse" />}>
          <GodparentsSection />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#fffaef] animate-pulse" />}>
          <SectionGallery2 />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#fffaef] animate-pulse" />}>
          <ItinerarySection />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#fffaef] animate-pulse" />}>
          <SectionPlaces />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#fffaef] animate-pulse" />}>
          <SectionMoreInfo />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#fffaef] animate-pulse" />}>
          <SectionGift />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#fffaef] animate-pulse" />}>
          <SectionHosting />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#fffaef] animate-pulse" />}>
          <SectionRSVP />
        </Suspense>

        <Suspense fallback={<div className="h-32 bg-[#fffaef] animate-pulse" />}>
          <SectionFooter />
        </Suspense>

      </div>
    </main>
      </div>
    
  )
}
