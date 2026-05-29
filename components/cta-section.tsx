"use client"

import { ArrowRight, Waves } from "lucide-react"
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
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute -bottom-1/2 -right-1/4 w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            className="text-white"
            d="M44.5,-76.8C57.8,-69.2,68.7,-56.9,76.4,-42.8C84.1,-28.8,88.6,-14.4,88.4,-0.1C88.3,14.2,83.6,28.3,75.7,40.6C67.9,52.8,56.9,63.1,43.9,70.2C30.9,77.3,15.4,81.2,0.3,80.7C-14.8,80.2,-29.6,75.4,-43.3,68.4C-57,61.3,-69.6,52.1,-77.2,39.7C-84.7,27.2,-87.2,11.6,-86.2,-3.6C-85.1,-18.8,-80.6,-33.5,-72.2,-45.7C-63.9,-57.9,-51.7,-67.4,-38.2,-74.9C-24.7,-82.3,-9.8,-87.6,3.5,-93.3C16.8,-99,31.1,-84.4,44.5,-76.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-8">
            <Waves className="w-8 h-8 text-accent" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
            Pronto para Dominar as Águas Abertas?
          </h2>

          {/* Description */}
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Não importa se você é nadador ou triatleta, iniciante ou experiente. 
            Juntos vamos desenvolver sua confiança e performance no mar, lagos e rios.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {feature}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 rounded-full px-10 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all group"
          >
            <Link href="#contato">
              Quero Começar Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
