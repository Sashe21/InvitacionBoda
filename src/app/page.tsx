"use client"

import Image from "next/image";
import { useRef, useState, useEffect } from "react"
import { Heart, Calendar, MapPin, Music, Music2, Camera, Gift, Shirt, Phone, Mail, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaRing, FaHeart, FaCross, FaInfinity, FaCoins, FaWhatsapp } from "react-icons/fa"
import SectionCortina from "../sectionCortina";
import SectionWelcome from "@/sectionWelcome"
import SectionMessage from "../sectionMessage"
import CountdownSection from "../sectionCount";
import GodparentsSection from "../sectionGodparents";
import Sectionplaces from "../sectionplaces";
import ItinerarySection from "../sectionitinerary";
import SectionGalery from "../sectionGalery"
import SectionImagen from "../sectionImage";
import SectionMoreInfo from "../sectionMoreInfo";
import SectionHosting from "../sectionHosting"
import SectionRSVP from "../sectionRSVP"
import SectionFooter from "../sectionFooter"
import SectionGift from "../sectionGift"

import AdditionalInfoSection from "../sectionAdicional";
import "../styles/typography.css";
import "../styles/mobile.css";

export default function WeddingInvitation() {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Main Content */}
       <main className="bg-[#fffaef] overflow-x-hidden">
      <SectionCortina />
      <div className="space-y-0">
        <SectionWelcome/>
        <SectionMessage />
        <SectionImagen />
        <CountdownSection />
        <GodparentsSection />
        <SectionGalery />
        <ItinerarySection />
        <Sectionplaces />
        <SectionMoreInfo />
        <SectionGift />
        <SectionHosting />
        <SectionRSVP />
        <SectionFooter />
      </div>
    </main>
      </div>
    
  )
}
