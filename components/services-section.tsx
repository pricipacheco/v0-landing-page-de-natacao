"use client"

import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    name: "Assessoria Individual",
    description: "Acompanhamento completo e personalizado para seus objetivos",
    price: "Sob consulta",
    featured: true,
    features: [
      "Planilhas de treino semanais personalizadas",
      "Análise de vídeo mensal",
      "Acompanhamento via WhatsApp",
      "Ajustes de treino conforme feedback",
      "Periodização para suas provas",
      "Suporte para nutrição e equipamentos",
      "Acesso a conteúdos exclusivos",
    ],
  },
  {
    name: "Consultoria Pontual",
    description: "Para quem busca orientação específica em algum aspecto",
    price: "Sob consulta",
    featured: false,
    features: [
      "Sessão de análise técnica",
      "Correções personalizadas",
      "Dicas de navegação",
      "Orientação de equipamentos",
      "Relatório detalhado",
    ],
  },
  {
    name: "Grupos de Treino",
    description: "Treinos em grupo online com comunidade de atletas",
    price: "Sob consulta",
    featured: false,
    features: [
      "Planilhas semanais de treino",
      "Encontros online quinzenais",
      "Comunidade exclusiva",
      "Desafios mensais",
      "Conteúdos educativos",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
            Escolha o Plano Ideal para Você
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Diferentes formatos de acompanhamento para atender às suas necessidades 
            e objetivos, sempre com foco em resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                service.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-xl scale-105"
                  : "bg-card border-border hover:border-accent/50 hover:shadow-lg"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    service.featured ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`text-sm ${
                    service.featured
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className={`text-2xl font-bold ${
                    service.featured ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {service.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        service.featured
                          ? "bg-accent text-accent-foreground"
                          : "bg-accent/20 text-accent"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span
                      className={`text-sm ${
                        service.featured
                          ? "text-primary-foreground/90"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-full ${
                  service.featured
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <Link href="#contato" className="flex items-center justify-center gap-2">
                  Quero saber mais
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
