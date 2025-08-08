import { Heart, Gem, Cross, Infinity, Coins, Users } from 'lucide-react'

export default function GodparentsSection() {
  const godparents = [
    { 
      name: "Juan Pérez", 
      icon: Heart, 
      role: "Padrino de Honor", 
      color: "text-rose-500",
      bgColor: "from-rose-100 to-rose-50"
    },
    { 
      name: "Ana Rodríguez", 
      icon: Gem, 
      role: "Padrina de Anillos", 
      color: "text-amber-500",
      bgColor: "from-amber-100 to-amber-50"
    },
    { 
      name: "Carlos Medina", 
      icon: Cross, 
      role: "Padrino de Velación", 
      color: "text-blue-500",
      bgColor: "from-blue-100 to-blue-50"
    },
    { 
      name: "Laura Gómez", 
      icon: Infinity, 
      role: "Padrina de Lazo", 
      color: "text-purple-500",
      bgColor: "from-purple-100 to-purple-50"
    },
    { 
      name: "Pedro Hernández", 
      icon: Coins, 
      role: "Padrino de Arras", 
      color: "text-orange-500",
      bgColor: "from-orange-100 to-orange-50"
    },
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-rose-50 via-white to-pink-50">
      
      {/* Decorative background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-1/4 left-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
          <path d="M0 200 Q250 150, 500 200 T1000 200" stroke="currentColor" strokeWidth="2" fill="none" className="text-rose-300" />
          <path d="M0 400 Q250 350, 500 400 T1000 400" stroke="currentColor" strokeWidth="1" fill="none" className="text-pink-300" />
          <path d="M0 600 Q250 550, 500 600 T1000 600" stroke="currentColor" strokeWidth="2" fill="none" className="text-rose-300" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Parents Section */}
        <div className="mb-20 sm:mb-24">
          {/* Parents Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-rose-500 animate-pulse" />
            </div>
            
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-rose-800 mb-6 tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="italic font-extralight">Nuestros</span>
              <span className="ml-3 font-normal">Padres</span>
            </h2>
            
            <div className="flex justify-center mb-6">
              <svg width="120" height="16" viewBox="0 0 120 16" className="text-rose-400 opacity-60">
                <path
                  d="M10 8 Q35 4, 60 8 T110 8"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <circle cx="60" cy="8" r="1.5" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Parents Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            
            {/* Groom's Parents */}
            <div className="relative">
              {/* Decorative corner flourish */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-rose-300/40 rounded-tl-2xl"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-rose-300/40 rounded-tr-2xl"></div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 sm:p-8 text-center border border-rose-100/50 hover:scale-105">
                
                {/* Groom's name header */}
                <div className="mb-6">
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl font-light text-rose-700 mb-3 italic"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Padres del Novio
                  </h3>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
                    <div className="w-2 h-2 bg-rose-300 rounded-full mx-3"></div>
                    <div className="w-12 h-px bg-gradient-to-l from-transparent via-rose-300 to-transparent"></div>
                  </div>
                </div>
                
                {/* Parents names */}
                <div className="space-y-4">
                  <div>
                    <p 
                      className="text-lg sm:text-xl md:text-2xl font-light text-gray-800 tracking-wide"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Sr. Roberto Ramos García
                    </p>
                    <p 
                      className="text-sm sm:text-base text-gray-600 italic"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Padre
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center my-4">
                    <div className="w-8 h-px bg-rose-200"></div>
                    <span 
                      className="mx-3 text-rose-400 text-lg"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      &
                    </span>
                    <div className="w-8 h-px bg-rose-200"></div>
                  </div>
                  
                  <div>
                    <p 
                      className="text-lg sm:text-xl md:text-2xl font-light text-gray-800 tracking-wide"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Sra. María Elena Villalvazo López
                    </p>
                    <p 
                      className="text-sm sm:text-base text-gray-600 italic"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Madre
                    </p>
                  </div>
                </div>
                
                {/* Decorative bottom element */}
                <div className="flex justify-center mt-6 gap-1">
                  <div className="w-1 h-1 bg-rose-300 rounded-full opacity-60"></div>
                  <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-rose-300 rounded-full opacity-60"></div>
                </div>
              </div>
              
              {/* Bottom decorative corner flourish */}
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-rose-300/40 rounded-bl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-rose-300/40 rounded-br-2xl"></div>
            </div>

            {/* Bride's Parents */}
            <div className="relative">
              {/* Decorative corner flourish */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-pink-300/40 rounded-tl-2xl"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-pink-300/40 rounded-tr-2xl"></div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 sm:p-8 text-center border border-pink-100/50 hover:scale-105">
                
                {/* Bride's name header */}
                <div className="mb-6">
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl font-light text-pink-700 mb-3 italic"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Padres de la Novia
                  </h3>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
                    <div className="w-2 h-2 bg-pink-300 rounded-full mx-3"></div>
                    <div className="w-12 h-px bg-gradient-to-l from-transparent via-pink-300 to-transparent"></div>
                  </div>
                </div>
                
                {/* Parents names */}
                <div className="space-y-4">
                  <div>
                    <p 
                      className="text-lg sm:text-xl md:text-2xl font-light text-gray-800 tracking-wide"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Sr. José Luis Barranco Morales
                    </p>
                    <p 
                      className="text-sm sm:text-base text-gray-600 italic"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Padre
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center my-4">
                    <div className="w-8 h-px bg-pink-200"></div>
                    <span 
                      className="mx-3 text-pink-400 text-lg"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      &
                    </span>
                    <div className="w-8 h-px bg-pink-200"></div>
                  </div>
                  
                  <div>
                    <p 
                      className="text-lg sm:text-xl md:text-2xl font-light text-gray-800 tracking-wide"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Sra. Carmen Vázquez Hernández
                    </p>
                    <p 
                      className="text-sm sm:text-base text-gray-600 italic"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Madre
                    </p>
                  </div>
                </div>
                
                {/* Decorative bottom element */}
                <div className="flex justify-center mt-6 gap-1">
                  <div className="w-1 h-1 bg-pink-300 rounded-full opacity-60"></div>
                  <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-pink-300 rounded-full opacity-60"></div>
                </div>
              </div>
              
              {/* Bottom decorative corner flourish */}
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-pink-300/40 rounded-bl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-pink-300/40 rounded-br-2xl"></div>
            </div>
          </div>

          {/* Connecting line between parents and godparents */}
          <div className="flex justify-center mt-12 sm:mt-16">
            <div className="flex items-center">
              <div className="w-20 sm:w-32 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-300"></div>
              <div className="mx-4 sm:mx-6">
                <div className="w-4 h-4 bg-rose-300 rounded-full relative">
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                  <div className="absolute inset-2 bg-rose-300 rounded-full"></div>
                </div>
              </div>
              <div className="w-20 sm:w-32 h-px bg-gradient-to-l from-transparent via-rose-300 to-rose-300"></div>
            </div>
          </div>
        </div>

        {/* Godparents Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-rose-400 rounded-full opacity-60"></div>
              <div className="w-4 h-4 bg-rose-500 rounded-full"></div>
              <div className="w-3 h-3 bg-rose-400 rounded-full opacity-60"></div>
            </div>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-rose-800 mb-6 tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="italic font-extralight">Nuestros</span>
            <br />
            <span className="font-normal">Padrinos</span>
          </h2>
          
          <div className="flex justify-center mb-6">
            <svg width="150" height="20" viewBox="0 0 150 20" className="text-rose-400 opacity-60">
              <path
                d="M10 10 Q40 5, 75 10 T140 10"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="75" cy="10" r="2" fill="currentColor" />
            </svg>
          </div>
          
          <p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 italic font-light max-w-2xl mx-auto"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Gracias por ser parte de nuestro gran día y acompañarnos en este momento tan especial
          </p>
        </div>

        {/* Godparents Grid with Connecting Lines */}
        <div className="relative">
          
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Horizontal connecting lines */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-300/40 to-transparent transform -translate-y-1/2"></div>
            
            {/* Vertical connecting lines */}
            <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-rose-300/30 to-transparent"></div>
            <div className="absolute top-0 left-2/5 w-px h-full bg-gradient-to-b from-transparent via-rose-300/30 to-transparent"></div>
            <div className="absolute top-0 left-3/5 w-px h-full bg-gradient-to-b from-transparent via-rose-300/30 to-transparent"></div>
            <div className="absolute top-0 left-4/5 w-px h-full bg-gradient-to-b from-transparent via-rose-300/30 to-transparent"></div>
          </div>

          {/* Godparents Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {godparents.map((godparent, index) => (
              <div
                key={index}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 text-center border border-rose-100/50 hover:scale-105 hover:-translate-y-2 ${
                  index % 2 === 0 ? 'lg:transform lg:-translate-y-4' : 'lg:transform lg:translate-y-4'
                }`}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-rose-200/50 rounded-tl-lg"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-rose-200/50 rounded-tr-lg"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-rose-200/50 rounded-bl-lg"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-rose-200/50 rounded-bl-lg"></div>
                
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${godparent.bgColor} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <godparent.icon className={`${godparent.color} w-8 h-8 sm:w-10 sm:h-10 group-hover:rotate-12 transition-transform duration-300`} />
                </div>
                
                {/* Name */}
                <h3 
                  className="text-lg sm:text-xl md:text-2xl font-light text-rose-800 mb-3 sm:mb-4 tracking-wide"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {godparent.name}
                </h3>
                
                {/* Decorative separator */}
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
                  <div className="w-2 h-2 bg-rose-300 rounded-full mx-2"></div>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent via-rose-300 to-transparent"></div>
                </div>
                
                {/* Role */}
                <p 
                  className="text-sm sm:text-base text-gray-600 font-light italic tracking-wide"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {godparent.role}
                </p>
                
                {/* Bottom decorative dots */}
                <div className="flex justify-center mt-4 gap-1">
                  <div className="w-1 h-1 bg-rose-300 rounded-full opacity-60"></div>
                  <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-rose-300 rounded-full opacity-60"></div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-rose-100/0 to-pink-100/0 group-hover:from-rose-100/20 group-hover:to-pink-100/20 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <div className="mx-6">
              <div className="w-4 h-4 bg-rose-300 rounded-full relative">
                <div className="absolute inset-1 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-rose-300 to-transparent"></div>
          </div>
          
          <p 
            className="text-lg sm:text-xl text-gray-600 italic font-light"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Con amor y gratitud infinita
          </p>
          
          {/* Final decorative flourish */}
          <div className="flex justify-center mt-6">
            <svg width="120" height="30" viewBox="0 0 120 30" className="text-rose-400 opacity-50">
              <path
                d="M10 15 Q30 8, 60 15 T110 15"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="30" cy="15" r="1" fill="currentColor" />
              <circle cx="60" cy="15" r="2" fill="currentColor" />
              <circle cx="90" cy="15" r="1" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
