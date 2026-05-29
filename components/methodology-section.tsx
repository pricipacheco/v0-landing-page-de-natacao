"use client"

import { 
  Compass, 
  Activity, 
  Brain, 
  BarChart3
} from "lucide-react"
import Image from "next/image"

const methodologyItems = [
  {
    number: "01",
    icon: Activity,
    title: "Análise Técnica",
    description:
      "Avaliação detalhada da sua técnica através de vídeos e dados. Identificamos pontos de melhoria específicos para águas abertas.",
    color: "from-[#06b6d4] to-[#0ea5e9]"
  },
  {
    number: "02",
    icon: Compass,
    title: "Navegação e Orientação",
    description:
      "Treinamento focado em orientação, sighting e navegação eficiente. Essencial para economizar energia e tempo em provas.",
    color: "from-[#14b8a6] to-[#06b6d4]"
  },
  {
    number: "03",
    icon: Brain,
    title: "Preparação Mental",
    description:
      "Estratégias mentais para lidar com condições adversas, largadas em grupo e momentos de pressão competitiva.",
    color: "from-[#0369a1] to-[#0ea5e9]"
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Periodização Inteligente",
    description:
      "Planejamento adaptado aos seus objetivos, com progressão adequada e picos de performance para suas provas.",
    color: "from-[#0c4a6e] to-[#0369a1]"
  },
]

export function MethodologySection() {
  return (
    <section id="metodologia" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <Image
          src="/images/aerial-swimming.png"
          alt="Natação em águas abertas vista aérea"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a6e]/98 via-[#0369a1]/95 to-[#0c4a6e]/98" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5eead4]" />
            Metodologia
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Abordagem <span className="text-[#5eead4]">Completa</span> para Águas Abertas
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            Nadar em águas abertas exige muito mais do que resistência. Minha 
            metodologia aborda todos os aspectos necessários para você performar 
            com confiança e segurança.
          </p>
        </div>

        {/* Methodology Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {methodologyItems.map((item, index) => (
            <div
              key={item.number}
              className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-[#06b6d4]/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Number badge */}
              <span className="absolute top-6 right-6 text-7xl font-bold text-white/5 group-hover:text-[#06b6d4]/20 transition-colors duration-500">
                {item.number}
              </span>
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed text-lg">
                {item.description}
              </p>
              
              {/* Bottom line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#06b6d4]/0 to-transparent group-hover:via-[#06b6d4] transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "98%", label: "Taxa de Satisfação" },
            { value: "500+", label: "Atletas Atendidos" },
            { value: "50+", label: "Provas Conquistadas" },
            { value: "24/7", label: "Suporte Online" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#5eead4] mb-2">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
