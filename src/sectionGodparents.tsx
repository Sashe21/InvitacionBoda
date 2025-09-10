"use client"
import CardGodparents from "@/components/ui/CardGodparents"

export default function SectionGodparents() {
  const godparents = [
    {
      name: "Yurith Zepeda Martínez & Damián Barranco Bernardino",
      image: "/icons/anillos.svg",
      role: "Padrinos de Anillos",
    },
    {
      name: "Candelaria Bernardino Guzman & Lázaro Barranco Benitez",
      image: "/icons/lazo.svg",
      role: "Padrinos de Lazo",
    },
    {
      name: "Mariana Romero Zepeda & David Navarro Reyes",
      image: "/icons/arras.svg",
      role: "Padrinos de Arras",
    },
    {
      name: "Mariela Areli Rivas Vargas & Sebastián Andrés Hernández Flores",
      image: "/icons/biblia.svg",
      role: "Padrinos de Biblia",
    },
    {
      name: "Lenia Priscila Rivas Vargas & William Grajeda Aviña",
      image: "/icons/cojin.svg",
      role: "Padrinos de Cojines",
    },
  ]

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ backgroundColor: "#fffaef" }}>
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-1/4 left-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
          <path
            d="M0 200 Q250 150, 500 200 T1000 200"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            style={{ color: "#1a385f" }}
          />
          <path
            d="M0 400 Q250 350, 500 400 T1000 400"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            style={{ color: "#1a385f" }}
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Godparents Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full opacity-60" style={{ backgroundColor: "#1a385f" }}></div>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#1a385f" }}></div>
              <div className="w-2 h-2 rounded-full opacity-60" style={{ backgroundColor: "#1a385f" }}></div>
            </div>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 tracking-wide"
            style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
          >
            <span className="italic font-extralight">Nuestros Padrinos </span>
            <span className="ml-3 font-normal">{""}</span>
          </h2>

          <div className="flex justify-center mb-4">
            <svg width="120" height="16" viewBox="0 0 120 16" style={{ color: "#1a385f" }} className="opacity-60">
              <path d="M10 8 Q35 5, 60 8 T110 8" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="60" cy="8" r="2" fill="currentColor" />
            </svg>
          </div>

          <p
            className="text-gray-600 italic max-w-2xl mx-auto text-lg font-medium"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Gracias por ser parte de nuestro gran día y acompañarnos en este momento tan especial
          </p>
        </div>

        {/* Godparents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {godparents.map((godparent, index) => (
            <CardGodparents
              key={index}
              name={godparent.name}
              role={godparent.role}
              image={godparent.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
