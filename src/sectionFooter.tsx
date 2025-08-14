import { Heart } from "lucide-react"

export default function SectionFooter() {
  return (
    <footer className="py-16 bg-gradient-to-r from-[#1a385f] via-[#2a4a6f] to-[#1a385f] text-[#fffaef] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="flex justify-center gap-4 mb-6">
          <Heart className="w-8 h-8 animate-pulse text-[#fffaef]" />
          <Heart className="w-10 h-10 animate-pulse text-[#fffaef]" style={{ animationDelay: "0.5s" }} />
          <Heart className="w-8 h-8 animate-pulse text-[#fffaef]" style={{ animationDelay: "1s" }} />
        </div>
        <p className="text-xl mb-4">Con todo nuestro amor</p>
        <p className="text-4xl font-bold font-serif mb-2">Abby & Gera</p>
        <div className="w-24 h-1 bg-[#fffaef]/50 mx-auto mb-4"></div>
        <p className="text-lg opacity-90">14 de Marzo, 2026</p>
        <p className="text-sm mt-2 opacity-80">Luis Gerardo Ramos Villalvazo & Norma Abigail Barranco Vazquez</p>
      </div>
    </footer>
  )
}
