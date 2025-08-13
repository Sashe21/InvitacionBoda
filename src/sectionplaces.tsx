import { Clock, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function SectionPlaces() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6" style={{ backgroundColor: "#fffaef" }}>
      {/* Decorative background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-1/4 left-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
          <path d="M0 200 Q250 150, 500 200 T1000 200" stroke="#1a385f" strokeWidth="2" fill="none" />
          <path d="M0 400 Q250 350, 500 400 T1000 400" stroke="#1a385f" strokeWidth="1" fill="none" />
          <path d="M0 600 Q250 550, 500 600 T1000 600" stroke="#1a385f" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full opacity-60" style={{ backgroundColor: "#1a385f" }}></div>
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#1a385f" }}></div>
              <div className="w-3 h-3 rounded-full opacity-60" style={{ backgroundColor: "#1a385f" }}></div>
            </div>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wide"
            style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
          >

            <span className="font-normal">Ubicaciones</span>
          </h2>

          <div className="flex justify-center mb-6">
            <svg width="150" height="20" viewBox="0 0 150 20" style={{ color: "#1a385f" }} className="opacity-60">
              <path d="M10 10 Q40 5, 75 10 T140 10" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="75" cy="10" r="2" fill="currentColor" />
            </svg>
          </div>

          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 italic font-light max-w-2xl mx-auto"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Nos encantaría compartir contigo cada momento de este día tan especial.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Ceremony Card */}
          <div
            className="group bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 text-center hover:scale-105"
            style={{ borderColor: "#1a385f", borderWidth: "1px" }}
          >
            <div className="w-full max-w-sm mx-auto h-24 sm:h-28 rounded-xl mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden">
              <Image
                src="/images/mare3.jpg"
                alt="Beach ceremony setup"
                width={842}
                height={315}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h3
              className="text-xl sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6 tracking-wide"
              style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
            >
              Ceremonia
            </h3>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5" style={{ color: "#1a385f" }} />
                <p className="text-lg sm:text-xl font-medium" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  5:30 PM
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 text-center max-w-xs mx-auto">
                <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: "#1a385f" }} />
                <p className="text-base sm:text-lg font-light" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Mare Jardin de Eventos
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/6M1v5sCy65TjPgnUA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors text-sm sm:text-base font-medium mt-4 hover:opacity-80"
                style={{ color: "#1a385f" }}
              >
                <ExternalLink className="w-4 h-4" />
                Ver en Google Maps
              </a>
            </div>
          </div>

          {/* Reception Card */}
          <div
            className="group bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 text-center hover:scale-105"
            style={{ borderColor: "#1a385f", borderWidth: "1px" }}
          >
            <div className="w-full max-w-sm mx-auto h-24 sm:h-28 rounded-xl mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden">
              <Image
                src="/images/mare3.jpg"
                alt="Beach reception setup"
                width={842}
                height={315}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h3
              className="text-xl sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6 tracking-wide"
              style={{ fontFamily: "Playfair Display, serif", color: "#1a385f" }}
            >
              Recepción
            </h3>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5" style={{ color: "#1a385f" }} />
                <p className="text-lg sm:text-xl font-medium" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  7:30 PM
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 text-center max-w-xs mx-auto">
                <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: "#1a385f" }} />
                <p className="text-base sm:text-lg font-light" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Mare Jardin de Eventos
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/6M1v5sCy65TjPgnUA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors text-sm sm:text-base font-medium mt-4 hover:opacity-80"
                style={{ color: "#1a385f" }}
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
            <div
              className="w-20 h-px bg-gradient-to-r from-transparent to-transparent"
              style={{ background: `linear-gradient(to right, transparent, #1a385f, transparent)` }}
            ></div>
            <div className="mx-6">
              <div className="w-4 h-4 rounded-full relative" style={{ backgroundColor: "#1a385f" }}>
                <div className="absolute inset-1 bg-white rounded-full"></div>
              </div>
            </div>
            <div
              className="w-20 h-px bg-gradient-to-l from-transparent to-transparent"
              style={{ background: `linear-gradient(to left, transparent, #1a385f, transparent)` }}
            ></div>
          </div>

          <p
            className="text-lg sm:text-xl text-gray-600 italic font-light"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            ¡Esperamos verte ahí para celebrar nuestro amor!
          </p>

          {/* Final decorative flourish */}
          <div className="flex justify-center mt-6">
            <svg width="120" height="30" viewBox="0 0 120 30" style={{ color: "#1a385f" }} className="opacity-50">
              <path d="M10 15 Q30 8, 60 15 T110 15" stroke="currentColor" strokeWidth="1" fill="none" />
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
