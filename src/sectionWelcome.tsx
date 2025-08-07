import { Heart } from 'lucide-react'

export default function WeddingWelcomeSection() {
  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/AG_v2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-rose-300 mx-auto mb-6 animate-pulse drop-shadow-lg" />
          </div>
          
          {/* Main Title with elegant typography */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-8 tracking-wider drop-shadow-2xl">
            <span className="font-extralight italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              ¡Nos
            </span>
            <span className="font-normal ml-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Casamos!
            </span>
          </h1>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-300"></div>
            <div className="w-3 h-3 bg-rose-300 rounded-full mx-4 shadow-lg"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-300"></div>
          </div>
          
          {/* Groom's name */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white mb-6 tracking-widest drop-shadow-lg">
            <span 
              className="font-light uppercase letter-spacing-wide"
              style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                letterSpacing: '0.2em'
              }}
            >
              Luis Gerardo
            </span>
            <br />
            <span 
              className="font-light uppercase"
              style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                letterSpacing: '0.2em'
              }}
            >
              Ramos Villalvazo
            </span>
          </h2>
          
          {/* Elegant ampersand */}
          <div className="my-8">
            <span 
              className="text-6xl md:text-7xl text-rose-300 drop-shadow-lg"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              &
            </span>
          </div>
          
          {/* Bride's name */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white mb-8 tracking-widest drop-shadow-lg">
            <span 
              className="font-light uppercase"
              style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                letterSpacing: '0.2em'
              }}
            >
              Norma Abigail
            </span>
            <br />
            <span 
              className="font-light uppercase"
              style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                letterSpacing: '0.2em'
              }}
            >
              Barranco Vázquez
            </span>
          </h2>
          
          {/* Date with elegant styling */}
          <div className="mt-12">
            <div className="inline-block px-8 py-4 border border-rose-300/50 rounded-lg backdrop-blur-sm bg-white/10">
              <p 
                className="text-xl md:text-2xl text-rose-100 tracking-wider"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                20 de Agosto, 2025
              </p>
            </div>
          </div>
          
          {/* Decorative flourish */}
          <div className="mt-8 flex justify-center">
            <svg width="120" height="20" viewBox="0 0 120 20" className="text-rose-300 opacity-70">
              <path
                d="M10 10 Q30 2, 50 10 T90 10 Q100 8, 110 10"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="drop-shadow-sm"
              />
              <circle cx="60" cy="10" r="2" fill="currentColor" className="drop-shadow-sm" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Google Fonts preload */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Cormorant+Garamond:wght@300;400;500&display=swap" 
        rel="stylesheet" 
      />
    </section>
  )
}
