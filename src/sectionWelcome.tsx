import { Heart } from "lucide-react"

export default function SectionWelcome() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/AGCount.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <div className="animate-fade-in-up space-y-4 sm:space-y-6 md:space-y-8">
          <div className="mb-2 sm:mb-4">
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#fffaef] mx-auto animate-pulse drop-shadow-lg" />
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-brandley text-[#fffaef] mb-3 sm:mb-4 md:mb-6 tracking-wide drop-shadow-2xl">
            <span className="block sm:inline font-normal">¡Nos</span>
            <span className="block sm:inline sm:ml-3 font-normal">Casamos!</span>
          </h1>

          <div className="flex items-center justify-center my-4 sm:my-6 md:my-8">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#fffaef]"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-[#fffaef] rounded-full mx-2 sm:mx-3 md:mx-4 shadow-lg"></div>
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#fffaef]"></div>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#fffaef] tracking-wider drop-shadow-lg">
              <span className="font-light uppercase block font-serif" style={{ letterSpacing: "0.1em" }}>
                Luis Gerardo
              </span>
              <span className="font-light uppercase block font-serif" style={{ letterSpacing: "0.1em" }}>
                Ramos Villalvazo
              </span>
            </h2>
          </div>

          <div className="my-3 sm:my-4 md:my-6">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#fffaef] drop-shadow-lg font-serif">
              &
            </span>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#fffaef] tracking-wider drop-shadow-lg">
              <span className="font-light uppercase block font-serif" style={{ letterSpacing: "0.1em" }}>
                Norma Abigail
              </span>
              <span className="font-light uppercase block font-serif" style={{ letterSpacing: "0.1em" }}>
                Barranco Vázquez
              </span>
            </h2>
          </div>

          <div className="mt-4 sm:mt-6 md:mt-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-brandley text-[#fffaef] drop-shadow-lg">
              14 de Marzo, 2026
            </p>
          </div>

          <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center">
            <svg
              width="100"
              height="16"
              viewBox="0 0 100 16"
              className="w-16 sm:w-20 md:w-24 lg:w-28 text-[#fffaef] opacity-70"
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
    </section>
  )
}
