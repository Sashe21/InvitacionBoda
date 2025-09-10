"use client";

import React from "react";

interface GodparentCardProps {
  godparent: {
    name: string;
    iconPath: string;
    role: string;
    color: string;
    bgColor: string;
  };
  index: number;
  sectionIsVisible: boolean; // Nueva prop para la visibilidad de la sección padre
}

const GodparentCard: React.FC<GodparentCardProps> = ({ godparent, index, sectionIsVisible }) => {
  // Determinar la clase de animación basada en el índice para variedad
  const animationClass = index % 2 === 0 ? "animate-bounce-in-left" : "animate-bounce-in-right";

  return (
    <div
      key={index}
      className={`
        bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border-2
        transform transition-transform duration-300 hover:scale-105 hover:shadow-xl
        ${sectionIsVisible ? animationClass : 'opacity-100'}
      `}
      style={{
        borderColor: "#1a385f",
        animationDelay: sectionIsVisible ? `${index * 150}ms` : '0ms', // Aplicar retraso solo si la sección es visible
      }}
    >
      <div
        className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${godparent.bgColor} mb-4 shadow-md transition-all duration-1000 ${
          sectionIsVisible ? "scale-100 rotate-0" : "scale-100 rotate-0" // Mantener visible si no hay animación
        }`}
        style={{
          transitionDelay: sectionIsVisible ? `${index * 150 + 200}ms` : "0ms",
        }}
      >
        <img
          src={godparent.iconPath || "/placeholder.svg"}
          alt={godparent.role}
          className={`w-6 h-6 sm:w-7 sm:h-7 transition-all duration-700 ${sectionIsVisible ? "scale-200" : "scale-200"}`} // Mantener visible si no hay animación
          style={{
            transitionDelay: sectionIsVisible ? `${index * 150 + 400}ms` : "0ms",
            filter:
              "brightness(0) saturate(100%) invert(13%) sepia(44%) saturate(1835%) hue-rotate(202deg) brightness(95%) contrast(95%)",
          }}
        />
      </div>

      <div className="mb-3">
        <div
          className="text-sm sm:text-base font-light leading-relaxed"
          style={{ fontFamily: "Cormorant Garamond, serif", color: "#1a385f" }}
        >
          {godparent.name.split(" & ").map((name, nameIndex) => (
            <div key={nameIndex} className="flex flex-col items-center">
              <span className="text-center font-semibold text-base">{name.trim()}</span>
              {nameIndex === 0 && (
                <div className="flex items-center justify-center my-2">
                  <span className="mx-2 font-normal" style={{ color: "#1a385f" }}>
                    {" "}
                    &{" "}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mb-3">
        <div
          className="w-6 h-px bg-gradient-to-r from-transparent to-transparent"
          style={{ backgroundColor: "#1a385f" }}
        ></div>
        <div className="w-1.5 h-1.5 rounded-full mx-2" style={{ backgroundColor: "#1a385f" }}></div>
        <div
          className="w-6 h-px bg-gradient-to-l from-transparent to-transparent"
          style={{ backgroundColor: "#1a385f" }}
        ></div>
      </div>

      <p
        className="sm:text-sm italic text-sm font-normal text-[rgba(79,43,9,1)]"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        {godparent.role}
      </p>
    </div>
  );
};

export default GodparentCard;