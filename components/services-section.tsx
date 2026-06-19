"use client"

import { Check, ArrowRight, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    name: "Assessoria Express",
    description: "Para quem busca orientação específica em algum aspecto",
    price: "R$ 199,00 (pagamento único)",
    featured: false,
    icon: Star,
    features: [
      "Sessão ONLINE com Thiago Rebollo",
      "Análise técnica",
      "Correções personalizadas",
      "Dicas de navegação",
      "Orientação de equipamentos",
      "Relatório detalhado",
    ],
  },
  {
    name: "Natação de Águas Abertas",
    description: "Acompanhamento completo e personalizado para seus objetivos",
    price: "R$ 299,90 (mensal)",
    featured: true,
    icon: Zap,
    features: [
      "Planilhas de treino semanais personalizadas",
      "Análise de vídeos",
      "Acompanhamento via WhatsApp",
      "Ajustes de treino conforme feedback",
      "Periodização para suas provas",
      "Suporte para nutrição e equipamentos",
      "Acesso ao grupo de Whatsapp da Rebollo Assessoria",
      "Orientação pré-provas",
      "Acompanhamento do Thiago Rebollo em competições (com estrutura completa)"
    ],
  },
  {
    name: "Triathlon",
    description: "Treinamento completo para atletas de triathlon",
    price: "R$ 399,90 (mensal)",
    featured: false,
    icon: Star,
    features: [
      "Planilhas de treino semanais personalizadas",
      "Análise de vídeos",
      "Acompanhamento via Whatsapp",
      "Ajuste de treino conforme feedback",
      "Periodização para suas provas",
      "Suporte para nutrição e equipamentos",
      "Acesso ao grupo de Whatsapp da Rebollo Assessoria",
      "Orientação pré-provas",
      "Acompanhamento do Thiago Rebollo no IronMan (com estrutura completa)"
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#f8fafc] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#06b6d4]/10 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#0369a1]/10 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 bg-[#0369a1]/10 text-[#0369a1] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
            Serviços
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 leading-tight">
            Escolha o Plano <span className="gradient-text">Ideal</span> para Você
          </h2>
          <p className="text-xl text-[#64748b] leading-relaxed">
            Diferentes formatos de acompanhamento para atender às suas necessidades 
            e objetivos, sempre com foco em resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`relative rounded-3xl p-8 transition-all duration-500 flex flex-col ${
                service.featured
                  ? "bg-gradient-to-br from-[#0c4a6e] via-[#0369a1] to-[#0ea5e9] shadow-2xl shadow-[#0369a1]/30 scale-105 z-10"
                  : "bg-white border-2 border-[#e2e8f0] hover:border-[#06b6d4]/50 hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#06b6d4] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                  service.featured 
                    ? "bg-white/20" 
                    : "bg-gradient-to-br from-[#06b6d4] to-[#0ea5e9]"
                }`}>
                  <service.icon className={`w-7 h-7 ${service.featured ? "text-white" : "text-white"}`} />
                </div>
                
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    service.featured ? "text-white" : "text-[#0f172a]"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`text-base ${
                    service.featured
                      ? "text-white/80"
                      : "text-[#64748b]"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className={`text-3xl font-bold ${
                    service.featured ? "text-white" : "text-[#0f172a]"
                  }`}
                >
                  {service.price}
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        service.featured
                          ? "bg-[#5eead4] text-[#0c4a6e]"
                          : "bg-[#06b6d4]/20 text-[#06b6d4]"
                      }`}
                    >
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span
                      className={`${
                        service.featured
                          ? "text-white/90"
                          : "text-[#475569]"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-full py-6 text-lg font-semibold transition-all duration-300 ${
                  service.featured
                    ? "bg-white text-[#0369a1] hover:bg-[#f0fdfa] shadow-lg"
                    : "bg-gradient-to-r from-[#0369a1] to-[#0ea5e9] text-white hover:opacity-90 shadow-md hover:shadow-lg"
                }`}
              >
                <Link href="#contato" className="flex items-center justify-center gap-2">
                  Contratar agora
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
