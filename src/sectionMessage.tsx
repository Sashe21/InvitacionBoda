export default function SectionMessage() {
  return (
    <section className="relative py-4 px-4 sm:px-6">
      <div className="absolute inset-0 bg-[#fffaef]"></div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#1a385f]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#1a385f]/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#1a385f]/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-[#fffaef]/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-2xl text-center border border-[#1a385f]/20 relative overflow-hidden">
          <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-[#1a385f]/30 rounded-tl-2xl"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-[#1a385f]/30 rounded-tr-2xl"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-[#1a385f]/30 rounded-bl-2xl"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-[#1a385f]/30 rounded-br-2xl"></div>

          {/* Main invitation text */}
          <div className="mb-4">
            <p
              className="text-lg sm:text-xl font-light leading-loose mb-4"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                color: "#1a385f",
              }}
            >
              Entre olas, arena y atardeceres, queremos que sean testigos de nuestro &apos;sí, acepto&apos;.
            </p>

            <p
              className="text-lg sm:text-xl font-light leading-loose mb-4"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                color: "#1a385f",
              }}
            >
              Este día no solo celebra nuestro amor, sino también la alegría de compartirlo con quienes han sido parte
              de nuestra historia.
            </p>

            <p
              className="text-lg sm:text-xl font-light italic leading-loose"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                color: "#1a385f",
              }}
            >
              Prepárense para vivir una tarde mágica, llena de risas, abrazos y momentos que quedarán en el corazón para
              siempre.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
