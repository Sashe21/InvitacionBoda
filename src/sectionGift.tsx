import { Gift, Heart } from "lucide-react"

export default function SectionGift() {
  return (
    <section className="pt-0 pb-6 sm:pb-8 md:pb-12 px-3 sm:px-4 md:px-6 lg:px-8 bg-[#fffaef]">
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="h-px bg-[#1a385f] flex-1 max-w-12 sm:max-w-16 md:max-w-20"></div>
            <Heart className="mx-3 sm:mx-4 w-5 h-5 sm:w-6 sm:h-6 text-[#1a385f]" />
            <div className="h-px bg-[#1a385f] flex-1 max-w-12 sm:max-w-16 md:max-w-20"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a385f] mb-1 sm:mb-2">Regalos</h2>
          <p className="text-[#1a385f]/70 text-xs sm:text-sm md:text-base px-2 sm:px-4">
            Tu presencia es nuestro mejor regalo, pero si deseas obsequiarnos algo...
          </p>
        </div>

        {/* Gift Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Mesa de Regalos */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#1a385f]/10 hover:border-[#1a385f]/20 transition-all duration-300">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#1a385f]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Gift className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#1a385f]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a385f] mb-2 sm:mb-3">Mesa de Regalos</h3>
              <p className="text-[#1a385f]/70 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed px-1 sm:px-2">
                Hemos preparado una lista de regalos especialmente para ustedes
              </p>
              <button className="bg-[#1a385f] text-[#fffaef] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-[#1a385f]/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Ver Mesa de Regalos
              </button>
            </div>
          </div>

          {/* Lluvia de Sobres */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#1a385f]/10 hover:border-[#1a385f]/20 transition-all duration-300">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#1a385f]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#1a385f]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a385f] mb-2 sm:mb-3">Lluvia de Sobres</h3>
              <p className="text-[#1a385f]/70 text-xs sm:text-sm md:text-base leading-relaxed px-1 sm:px-2">
                En la fiesta habrá un baúl especial donde podrás depositar tu sobre. Tu gesto de amor será muy apreciado
                para comenzar nuestra nueva vida juntos.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="h-px bg-[#1a385f]/30 flex-1 max-w-16 sm:max-w-20"></div>
            <div className="mx-3 sm:mx-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#1a385f] rounded-full"></div>
            <div className="h-px bg-[#1a385f]/30 flex-1 max-w-16 sm:max-w-20"></div>
          </div>
          <p className="text-[#1a385f]/60 text-xs sm:text-sm italic px-2 sm:px-4">
            Lo más importante para nosotros es compartir este día especial contigo
          </p>
        </div>
      </div>
    </section>
  )
}
