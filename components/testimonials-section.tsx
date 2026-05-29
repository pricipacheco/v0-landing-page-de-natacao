"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marina Costa",
    role: "Triatleta Amadora",
    content:
      "O Thiago transformou minha relação com a natação em águas abertas. Antes eu tinha medo, hoje é a parte que mais gosto do triathlon. A metodologia é incrível!",
    highlight: "Reduzi 3 minutos na etapa de nado",
  },
  {
    name: "Rafael Mendes",
    role: "Nadador Masters",
    content:
      "Depois de anos nadando só em piscina, decidi encarar minha primeira travessia. Com o acompanhamento do Thiago, completei 5km em mar aberto com confiança.",
    highlight: "Primeira travessia de 5km",
  },
  {
    name: "Carla Rodrigues",
    role: "Triatleta Age Group",
    content:
      "A atenção aos detalhes faz toda diferença. O Thiago analisa cada vídeo, cada treino, e os ajustes são sempre precisos. Minha técnica evoluiu muito.",
    highlight: "Evolução técnica significativa",
  },
  {
    name: "Pedro Almeida",
    role: "Nadador de Águas Abertas",
    content:
      "Treinar online funciona muito bem! As planilhas são detalhadas, o suporte é rápido e a metodologia de navegação me ajudou muito nas provas.",
    highlight: "Navegação muito mais eficiente",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
            O Que Dizem Meus Atletas
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Histórias reais de pessoas que transformaram sua natação em águas 
            abertas com o treinamento personalizado.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-colors"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-accent" />
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Highlight badge */}
              <div className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full mb-6">
                {testimonial.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
