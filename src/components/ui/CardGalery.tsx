"use client";

import React, { useRef, useEffect, useState } from "react";

interface GalleryCardProps {
  image: {
    id: number;
    src: string;
    alt: string;
    caption: string;
  };
  index: number;
  onClick: () => void; // Añadida la prop onClick
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, index, onClick }) => {
  const [cardIsVisible, setCardIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
        rootMargin: "0px", // Ajustado para mejor compatibilidad móvil
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      key={image.id}
      className={`group cursor-pointer transition-all duration-1000 hover:scale-105 transform ${
        cardIsVisible
          ? "translate-x-0 translate-y-0 opacity-100 rotate-0 scale-100"
          : "-translate-x-full translate-y-8 opacity-0 -rotate-12 scale-75"
      } ${index % 2 === 0 ? "hover:rotate-2" : "hover:-rotate-2"}`}
      onClick={onClick} // Usando la prop onClick
      style={{
        transitionDelay: cardIsVisible ? `${index * 150}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <div className="bg-white p-3 sm:p-4 pb-12 sm:pb-16 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5 opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/20 via-transparent to-amber-50/20 opacity-40"></div>
        </div>
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg border border-white/50">
            <p
              className="text-[#1a385f] text-sm sm:text-base md:text-lg leading-relaxed text-center font-medium"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                textShadow: "0 1px 3px rgba(26, 56, 95, 0.1)",
                lineHeight: "1.6",
              }}
            >
              {image.caption}
            </p>
            <div className="flex justify-center mt-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-[#1a385f]/30 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="absolute -top-1 sm:-top-2 left-4 sm:left-8 w-8 sm:w-16 h-3 sm:h-6 bg-yellow-100/80 transform rotate-12 shadow-sm border border-yellow-200/50"></div>
        <div className="absolute -top-1 sm:-top-2 right-4 sm:right-8 w-8 sm:w-16 h-3 sm:h-6 bg-yellow-100/80 transform -rotate-12 shadow-sm border border-yellow-200/50"></div>
      </div>
    </div>
  );
};

export default GalleryCard;