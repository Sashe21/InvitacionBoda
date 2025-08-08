import { MapPin, Gift, Camera, Shirt, ExternalLink, Copy } from 'lucide-react'
import { useState } from 'react'

export default function AdditionalInfoSection() {
  const [copiedText, setCopiedText] = useState('')

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(type)
    setTimeout(() => setCopiedText(''), 2000)
  }

  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        
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
            <span className="italic font-extralight">Información</span>
            <br />
            <span className="font-normal">Importante</span>
          </h2>
          
          <div className="flex justify-center">
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
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Dress Code Card */}
          <div className="bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
                <Shirt className="w-8 h-8 text-rose-600" />
              </div>
              
              <h3 
                className="text-2xl sm:text-3xl font-light text-rose-800 mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Código de Vestimenta
              </h3>
              
              <div className="space-y-3">
                <p 
                  className="text-lg sm:text-xl text-gray-700 font-light"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  <span className="font-medium text-rose-700">Formal / Elegante</span>
                </p>
                <p 
                  className="text-base text-gray-600 italic"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Colores sugeridos: Tonos pasteles, evitar blanco y negro
                </p>
              </div>
            </div>
          </div>

          {/* Hashtag Card */}
          <div className="bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
                <Camera className="w-8 h-8 text-rose-600" />
              </div>
              
              <h3 
                className="text-2xl sm:text-3xl font-light text-rose-800 mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Comparte el Momento
              </h3>
              
              <div className="space-y-4">
                <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
                  <p 
                    className="text-2xl sm:text-3xl font-medium text-rose-700 tracking-wide"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    #AbbyYGera2025
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard('#AbbyYGera2025', 'hashtag')}
                  className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  <span className="text-sm">
                    {copiedText === 'hashtag' ? '¡Copiado!' : 'Copiar hashtag'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Gifts Card */}
          <div className="bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
                <Gift className="w-8 h-8 text-rose-600" />
              </div>
              
              <h3 
                className="text-2xl sm:text-3xl font-light text-rose-800 mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Mesa de Regalos
              </h3>
              
              <div className="space-y-4">
                {/* Liverpool */}
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-4 border border-rose-200">
                  <p 
                    className="text-lg font-medium text-rose-700 mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    Liverpool
                  </p>
                  <p className="text-gray-600 text-sm mb-2">Evento: 51234567</p>
                  <button
                    onClick={() => copyToClipboard('51234567', 'liverpool')}
                    className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors text-sm"
                  >
                    <Copy className="w-3 h-3" />
                    {copiedText === 'liverpool' ? '¡Copiado!' : 'Copiar número'}
                  </button>
                </div>

                {/* Bank Account */}
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-4 border border-rose-200">
                  <p 
                    className="text-lg font-medium text-rose-700 mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    Cuenta Bancaria
                  </p>
                  <p className="text-gray-600 text-sm mb-1">BBVA Bancomer</p>
                  <p className="text-gray-600 text-sm mb-2">1234 5678 9012 3456</p>
                  <button
                    onClick={() => copyToClipboard('1234567890123456', 'bank')}
                    className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors text-sm"
                  >
                    <Copy className="w-3 h-3" />
                    {copiedText === 'bank' ? '¡Copiado!' : 'Copiar cuenta'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
                <MapPin className="w-8 h-8 text-rose-600" />
              </div>
              
              <h3 
                className="text-2xl sm:text-3xl font-light text-rose-800 mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Ubicación
              </h3>
              
              <div className="space-y-4">
                {/* Ceremony */}
                <div className="text-left">
                  <h4 
                    className="text-lg font-medium text-rose-700 mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    Ceremonia Religiosa
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Parroquia San José<br />
                    Av. Principal #123, Centro
                  </p>
                  <p className="text-rose-600 text-sm font-medium mb-3">4:00 PM</p>
                  <a
                    href="https://maps.google.com/?q=Parroquia+San+José"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver en Google Maps
                  </a>
                </div>

                <div className="w-full h-px bg-rose-200"></div>

                {/* Reception */}
                <div className="text-left">
                  <h4 
                    className="text-lg font-medium text-rose-700 mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    Recepción
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Salón de Eventos "Los Jardines"<br />
                    Blvd. de las Rosas #456, Zona Norte
                  </p>
                  <p className="text-rose-600 text-sm font-medium mb-3">7:00 PM</p>
                  <a
                    href="https://maps.google.com/?q=Salón+Los+Jardines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="flex justify-center items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-300"></div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-rose-300 rounded-full opacity-60"></div>
              <div className="w-3 h-3 bg-rose-400 rounded-full opacity-80"></div>
              <div className="w-4 h-4 bg-rose-500 rounded-full"></div>
              <div className="w-3 h-3 bg-rose-400 rounded-full opacity-80"></div>
              <div className="w-2 h-2 bg-rose-300 rounded-full opacity-60"></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-300"></div>
          </div>
          
          <p 
            className="text-lg text-gray-600 italic mt-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Tu presencia es nuestro mejor regalo
          </p>
        </div>
      </div>
    </section>
  )
}
