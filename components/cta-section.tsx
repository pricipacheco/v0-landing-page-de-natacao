"use client"

import { ArrowRight, Waves, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  "Treinos 100% online",
  "Acompanhamento individual",
  "Para nadadores e triatletas",
  "Metodologia comprovada",
]

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0369a1] via-[#0ea5e9] to-[#003060]" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-[#06b6d4]/20 blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#14b8a6]/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-[200%] h-full animate-wave opacity-20"
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-8 glow-accent">
            <Waves className="w-10 h-10 text-[#5eead4]" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para Dominar as{" "}
            <span className="text-[#5eead4]">Águas Abertas?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Não importa se você é nadador ou triatleta, iniciante ou experiente. 
            Juntos vamos desenvolver sua confiança e performance no mar, lagos e rios.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-full"
              >
                <CheckCircle className="w-5 h-5 text-[#5eead4]" />
                {feature}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-white text-[#0369a1] hover:bg-[#f0fdfa] rounded-full px-12 py-7 text-lg font-bold shadow-2xl hover:shadow-[#5eead4]/25 transition-all duration-300 group"
          >
            <Link href="#contato">
              Quero Começar Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
