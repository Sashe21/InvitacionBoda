import { Church, Building, Clock, MapPin, ExternalLink } from 'lucide-react'

export default function EventsSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-rose-50 to-pink-50">
      
      {/* Decorative background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-1/4 left-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
          <path d="M0 200 Q250 150, 500 200 T1000 200" stroke="currentColor" strokeWidth="2" fill="none" className="text-rose-200" />
          <path d="M0 400 Q250 350, 500 400 T1000 400" stroke="currentColor" strokeWidth="1" fill="none" className="text-pink-200" />
          <path d="M0 600 Q250 550, 500 600 T1000 600" stroke="currentColor" strokeWidth="2" fill="none" className="text-rose-200" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Section Header */}
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
            <span className="italic font-extralight">Detalles</span>
            <br />
            <span className="font-normal">del Evento</span>
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
            Nos encantaría compartir contigo cada momento de este día tan especial.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          
          {/* Religious Ceremony Card */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 text-center border border-rose-100/50 hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-100 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Church className="w-8 h-8 sm:w-10 sm:h-10 text-rose-600 group-hover:rotate-6 transition-transform duration-300" />
            </div>
            
            <h3 
              className="text-xl sm:text-2xl md:text-3xl font-light text-rose-800 mb-4 sm:mb-6 tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ceremonia Religiosa
            </h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-rose-500" />
                <p 
                  className="text-lg sm:text-xl font-medium"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  4:00 PM
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-left max-w-xs mx-auto">
                <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <p 
                  className="text-base sm:text-lg font-light"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Parroquia San José<br />
                  Av. Principal #123, Centro
                </p>
              </div>
              
              <a
                href="https://maps.app.goo.gl/YOUR_CHURCH_LOCATION" // Reemplazar con URL real de Google Maps
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors text-sm sm:text-base font-medium mt-4"
              >
                <ExternalLink className="w-4 h-4" />
                Ver en Google Maps
              </a>
            </div>
          </div>

          {/* Civil Ceremony & Reception Card */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 text-center border border-pink-100/50 hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-pink-100 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Building className="w-8 h-8 sm:w-10 sm:h-10 text-pink-600 group-hover:rotate-6 transition-transform duration-300" />
            </div>
            
            <h3 
              className="text-xl sm:text-2xl md:text-3xl font-light text-pink-800 mb-4 sm:mb-6 tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ceremonia Civil y Recepción
            </h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-pink-500" />
                <p 
                  className="text-lg sm:text-xl font-medium"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  7:00 PM
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-left max-w-xs mx-auto">
                <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <p 
                  className="text-base sm:text-lg font-light"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Salón de Eventos Los Jardines<br />
                  Blvd. de las Rosas #456, Zona Norte
                </p>
              </div>
              
              <a
                href="https://maps.app.goo.gl/YOUR_RECEPTION_LOCATION" // Reemplazar con URL real de Google Maps
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors text-sm sm:text-base font-medium mt-4"
              >
                <ExternalLink className="w-4 h-4" />
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
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
            ¡Esperamos verte ahí para celebrar nuestro amor!
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
