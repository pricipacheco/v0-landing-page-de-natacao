"use client"

import { Award, Target, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#f8fafc] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#06b6d4]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#0369a1]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/thiago-portrait.png"
                alt="Thiago Rebollo - Atleta e Treinador de Águas Abertas"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/60 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0369a1] flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0f172a] text-lg">Thiago Rebollo</p>
                    <p className="text-[#64748b]">Atleta e Treinador Profissional</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#06b6d4] rounded-2xl -z-10 rotate-6" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 border-4 border-[#0369a1]/20 rounded-2xl -z-10 -rotate-6" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 bg-[#0369a1]/10 text-[#0369a1] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
              Sobre Mim
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 leading-tight">
              Dedicado à <span className="gradient-text">Performance</span> em Águas Abertas
            </h2>
            
            <div className="space-y-5 text-lg text-[#475569] leading-relaxed mb-10">
              <p>
                Sou <strong className="text-[#0f172a]">Thiago Rebollo</strong>, atleta profissional e treinador especializado 
                em natação para águas abertas. Minha paixão pelo esporte e anos de 
                experiência competindo me permitiram desenvolver uma metodologia única.
              </p>
              <p>
                Entendo os desafios de nadar no mar: correntes, ondas, navegação e 
                a preparação mental necessária. Meu objetivo é compartilhar esse 
                conhecimento e ajudar você a alcançar seus objetivos.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-5 p-5 bg-white rounded-2xl shadow-lg shadow-[#0369a1]/5 border border-[#e2e8f0] hover:border-[#06b6d4]/50 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0ea5e9] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] text-lg mb-1">
                    Atleta Profissional
                  </h3>
                  <p className="text-[#64748b]">
                    Experiência em competições nacionais e internacionais de águas abertas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-5 bg-white rounded-2xl shadow-lg shadow-[#0369a1]/5 border border-[#e2e8f0] hover:border-[#06b6d4]/50 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#14b8a6] to-[#06b6d4] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] text-lg mb-1">
                    Metodologia Comprovada
                  </h3>
                  <p className="text-[#64748b]">
                    Sistema de treinamento baseado em ciência e experiência prática
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-5 bg-white rounded-2xl shadow-lg shadow-[#0369a1]/5 border border-[#e2e8f0] hover:border-[#06b6d4]/50 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0369a1] to-[#0ea5e9] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] text-lg mb-1">
                    Acompanhamento Individual
                  </h3>
                  <p className="text-[#64748b]">
                    Treinos personalizados e suporte constante para cada aluno
                  </p>
                </div>
              </div>
            </div>

            <Link 
              href="#metodologia"
              className="inline-flex items-center gap-3 text-[#0369a1] font-semibold text-lg hover:text-[#06b6d4] transition-colors group"
            >
              Conhecer minha metodologia
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
