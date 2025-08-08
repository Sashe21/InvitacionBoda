import { Heart } from 'lucide-react'

export default function LoveStorySection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 bg-[url('/images/Fondo3.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-white/50"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md p-6 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2rem] shadow-2xl text-center border border-rose-100/50 relative overflow-hidden">
          
          {/* Decorative corner elements */}
          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 w-8 h-8 sm:w-16 sm:h-16 border-l-2 border-t-2 border-rose-300/30 rounded-tl-2xl"></div>
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 w-8 h-8 sm:w-16 sm:h-16 border-r-2 border-t-2 border-rose-300/30 rounded-tr-2xl"></div>
          <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-8 h-8 sm:w-16 sm:h-16 border-l-2 border-b-2 border-rose-300/30 rounded-bl-2xl"></div>
          <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-16 sm:h-16 border-r-2 border-b-2 border-rose-300/30 rounded-br-2xl"></div>
          
          {/* Hearts decoration */}
          <div className="mb-12">
            <div className="flex justify-center items-center gap-3 mb-8">
              <Heart className="w-6 h-6 text-rose-400 animate-pulse opacity-60" />
              <Heart className="w-8 h-8 text-rose-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
              <Heart className="w-10 h-10 text-rose-600 animate-pulse" style={{ animationDelay: '0.6s' }} />
              <Heart className="w-8 h-8 text-rose-500 animate-pulse" style={{ animationDelay: '0.9s' }} />
              <Heart className="w-6 h-6 text-rose-400 animate-pulse opacity-60" style={{ animationDelay: '1.2s' }} />
            </div>
            
            {/* Elegant title */}
            <h2 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-rose-800 mb-4 tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="italic font-extralight">Porfin</span>
              <span className="mx-2 sm:mx-4 font-normal">Se nos</span>
              <br />
              <span className="italic font-extralight">Casan</span>
              <span className="ml-2 sm:ml-4 font-normal">siiiii</span>
            </h2>
            
            {/* Decorative flourish */}
            <div className="flex justify-center mb-8">
              <svg width="200" height="30" viewBox="0 0 200 30" className="text-rose-400">
                <path
                  d="M20 15 Q60 5, 100 15 T180 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.6"
                />
                <circle cx="50" cy="15" r="2" fill="currentColor" opacity="0.4" />
                <circle cx="100" cy="15" r="3" fill="currentColor" opacity="0.6" />
                <circle cx="150" cy="15" r="2" fill="currentColor" opacity="0.4" />
              </svg>
            </div>
          </div>
          
          {/* Main story text */}
          <div className="max-w-3xl mx-auto mb-12">
            <p 
              className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed mb-6 sm:mb-8"
              style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                lineHeight: '1.8'
              }}
            >
              Todos perdian la esperanza pero un rayo de luz les dijo &quot;YA CASENSE&quot; y asi 
              empiezan esta nueva vida 
            </p>
            
            <p 
              className="text-lg md:text-xl text-gray-600 font-light italic leading-relaxed"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Queremos que seas parte de este capítulo tan especial.
            </p>
          </div>
          
          {/* Elegant divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <div className="mx-6">
              <div className="w-4 h-4 bg-rose-300 rounded-full relative">
                <div className="absolute inset-1 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-rose-300 to-transparent"></div>
          </div>
          
          {/* Names section */}
          <div className="space-y-6">
            <div className="relative">
              <h3 
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-rose-900 tracking-wider"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  letterSpacing: '0.1em'
                }}
              >
                <span className="italic font-extralight">Abby</span>
                <span 
                  className="mx-3 sm:mx-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  &
                </span>
                <span className="italic font-extralight">Gera</span>
              </h3>
            </div>
            
            {/* Final message */}
            <div className="mt-8 pt-6 border-t border-rose-200/50">
              <p 
                className="text-lg md:text-xl text-gray-600 italic font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Con amor y emoción, te invitamos al pachangon que se armara en la playa.
              </p>
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-rose-300 rounded-full opacity-60"></div>
              <div className="w-3 h-3 bg-rose-400 rounded-full opacity-80"></div>
              <div className="w-4 h-4 bg-rose-500 rounded-full"></div>
              <div className="w-3 h-3 bg-rose-400 rounded-full opacity-80"></div>
              <div className="w-2 h-2 bg-rose-300 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        <Heart className="absolute top-1/4 left-1/4 w-4 h-4 text-rose-300 opacity-30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }} />
        <Heart className="absolute top-3/4 right-1/4 w-3 h-3 text-rose-400 opacity-40 animate-bounce" style={{ animationDelay: '4s', animationDuration: '4s' }} />
        <Heart className="absolute top-1/2 left-1/6 w-5 h-5 text-rose-200 opacity-20 animate-bounce" style={{ animationDelay: '6s', animationDuration: '5s' }} />
      </div>
    </section>
  )
}
