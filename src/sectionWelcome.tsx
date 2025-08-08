import { Heart } from 'lucide-react'

export default function WeddingWelcomeSection() {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/AG_v2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <div className="animate-fade-in-up space-y-6 sm:space-y-8">
          
          {/* Heart Icon */}
          <div className="mb-2 sm:mb-4">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-rose-300 mx-auto animate-pulse drop-shadow-lg" />
          </div>
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-4 sm:mb-6 tracking-wide drop-shadow-2xl">
            <span className="block sm:inline font-extralight italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              ¡Nos
            </span>
            <span className="block sm:inline sm:ml-3 font-normal" style={{ fontFamily: 'Playfair Display, serif' }}>
              Casamos!
            </span>
          </h1>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center my-6 sm:my-8">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-rose-300"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-rose-300 rounded-full mx-3 sm:mx-4 shadow-lg"></div>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-rose-300"></div>
          </div>
          
          {/* Groom's name */}
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white tracking-wider drop-shadow-lg">
              <span 
                className="font-light uppercase block"
                style={{ 
                  fontFamily: 'Cormorant Garamond, serif',
                  letterSpacing: '0.15em'
                }}
              >
                Luis Gerardo
              </span>
              <span 
                className="font-light uppercase block"
                style={{ 
                  fontFamily: 'Cormorant Garamond, serif',
                  letterSpacing: '0.15em'
                }}
              >
                Ramos Villalvazo
              </span>
            </h2>
          </div>
          
          {/* Elegant ampersand */}
          <div className="my-4 sm:my-6">
            <span 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-rose-300 drop-shadow-lg"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              &
            </span>
          </div>
          
          {/* Bride's name */}
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white tracking-wider drop-shadow-lg">
              <span 
                className="font-light uppercase block"
                style={{ 
                  fontFamily: 'Cormorant Garamond, serif',
                  letterSpacing: '0.15em'
                }}
              >
                Norma Abigail
              </span>
              <span 
                className="font-light uppercase block"
                style={{ 
                  fontFamily: 'Cormorant Garamond, serif',
                  letterSpacing: '0.15em'
                }}
              >
                Barranco Vázquez
              </span>
            </h2>
          </div>
          
          {/* Date with elegant styling */}
          <div className="mt-6 sm:mt-8">
            <div className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 border border-rose-300/50 rounded-lg backdrop-blur-sm bg-white/10">
              <p 
                className="text-sm sm:text-lg md:text-xl lg:text-2xl text-rose-100 tracking-wider"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                20 de Agosto, 2025
              </p>
            </div>
          </div>
          
          {/* Decorative flourish */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <svg 
              width="100" 
              height="16" 
              viewBox="0 0 100 16" 
              className="w-20 sm:w-24 md:w-28 lg:w-32 text-rose-300 opacity-70"
            >
              <path
                d="M8 8 Q25 2, 50 8 T92 8"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="drop-shadow-sm"
              />
              <circle cx="50" cy="8" r="1.5" fill="currentColor" className="drop-shadow-sm" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Google Fonts preload */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Cormorant Garamond:wght@300;400;500&display=swap" 
        rel="stylesheet" 
      />
    </section>
  )
}
