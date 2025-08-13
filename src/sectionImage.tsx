export default function SectionImagen() {
  return (
    <section
      className="relative w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      style={{ backgroundColor: "#fffaef" }} // fondo beige claro
    >
      <div
        className="relative w-full h-64 sm:h-200 md:h-96 lg:h-[500px] xl:h-[600px] 
                   bg-contain bg-center bg-no-repeat 
                   "
        style={{
          backgroundImage: "url('/images/calendario.jpg')",
        }}
      >
        
      </div>
    </section>
  )
}
