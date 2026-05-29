"use client"

import { 
  Compass, 
  Activity, 
  Brain, 
  BarChart3,
  ArrowRight
} from "lucide-react"

const methodologyItems = [
  {
    number: "01",
    icon: Activity,
    title: "Análise Técnica",
    description:
      "Avaliação detalhada da sua técnica atual através de vídeos e dados. Identificamos pontos de melhoria específicos para águas abertas.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Navegação e Orientação",
    description:
      "Treinamento focado em orientação, sighting e navegação eficiente. Essencial para economizar energia e tempo em provas.",
  },
  {
    number: "03",
    icon: Brain,
    title: "Preparação Mental",
    description:
      "Desenvolvimento de estratégias mentais para lidar com condições adversas, largadas em grupo e momentos de pressão.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Periodização Inteligente",
    description:
      "Planejamento de treinos adaptado aos seus objetivos, com progressão adequada e picos de performance para suas provas.",
  },
]

export function MethodologySection() {
  return (
    <section id="metodologia" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
            Uma Abordagem Completa para Águas Abertas
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Nadar em águas abertas exige muito mais do que resistência. Minha 
            metodologia aborda todos os aspectos necessários para você performar 
            com confiança e segurança.
          </p>
        </div>

        {/* Methodology Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {methodologyItems.map((item) => (
            <div
              key={item.number}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Number badge */}
              <span className="absolute top-6 right-6 text-5xl font-bold text-muted/20 group-hover:text-accent/20 transition-colors">
                {item.number}
              </span>
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <item.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              
              {/* Hover arrow */}
              <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Saiba mais</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Quer saber como essa metodologia pode ajudar você?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            Agende uma conversa
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
