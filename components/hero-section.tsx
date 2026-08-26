"use client"

import { motion } from "framer-motion"
import { MessageCircle, ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-slate-950">
      {/* Animated gradient orbs (opcionais) */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />

      {/* Container: mobile = stacked, md+ = two columns */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch gap-8">
          {/* Texto / Conteúdo (vai ficar embaixo no mobile, à esquerda no desktop) */}
          <div className="w-full md:w-1/2 max-w-xl text-left mx-auto md:mx-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/55 border border-white/20 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm text-slate-200">Assessoria Esportiva</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            >
              <span className="block sm:inline">Seu próximo nível</span>{" "}
              <span className="block sm:inline gradient-text text-glow">começa com o treino certo.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-slate-200 max-w-2xl mb-8 leading-relaxed"
            >
              Assessoria de Natação em Águas Abertas para nadadores e triatletas.
              <span className="text-white font-medium"> Comece a evoluir </span>
              com método, correção técnica e acompanhamento real.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="https://wa.me/5511996139633?text=Olá Thiago! Quero entender como funciona a assessoria personalizada para águas abertas."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full whatsapp-btn text-white font-semibold text-base whitespace-nowrap transition-all duration-300 max-w-max"
              >
                <MessageCircle className="w-5 h-5" />
                Quero um Diagnóstico Gratuito
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="#metodo"
                className="inline-flex items-center gap-2 px-4 py-3 text-slate-200 hover:text-white transition-colors whitespace-nowrap"
              >
                Conhecer Planos
              </a>
            </motion.div>
          </div>

          {/* Imagem (em cima no mobile, à direita no desktop) */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-64 sm:h-80 md:h-[420px] lg:h-[520px] rounded-xl overflow-hidden">
              <Image
                src="/images/banner.assessoria.png"
                alt="Equipe de natação em águas abertas"
                fill
                priority
                unoptimized
                className="object-cover md:object-contain object-center w-full h-full"
              />
              {/* overlay para manter contraste do texto quando imagem for usada como background em telas grandes */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll indicator (fica sobre o container) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 md:mt-12 flex justify-center"
        >
          <a href="#sobre" className="flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors">
            <span className="text-xs uppercase tracking-wider">Saiba mais</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
