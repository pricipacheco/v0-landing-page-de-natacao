"use client"

import { motion } from "framer-motion"
import { MessageCircle, ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Imagem lateralizada, com mais respiro para a leitura */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner.assessoria.png"
          alt="Equipe de natação em águas abertas"
          fill
          priority
          unoptimized
          className="object-cover object-[72%_center] md:left-[16%] md:w-[84%] md:object-contain md:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 via-38% to-slate-950/20 via-62% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/35" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-20">
          <div className="w-full lg:w-1/2 max-w-xl text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/55 border border-white/20 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-slate-200">Assessoria Esportiva</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Seu próximo nível
            <br />
            <span className="gradient-text text-glow">começa com o treino certo.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed"
          >
            Assessoria de Natação em Águas Abertas para nadadores e triatletas. 
            <span className="text-white font-medium"> Comece a evoluir </span> 
            com método, correção técnica e acompanhamento real.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-16"
          >
            <a
              href="https://wa.me/5511996139633?text=Olá Thiago! Quero entender como funciona a assessoria personalizada para águas abertas."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-full whatsapp-btn text-white font-semibold text-lg transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Quero um Diagnóstico Gratuito
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#metodo"
              className="flex items-center gap-2 px-6 py-4 text-slate-200 hover:text-white transition-colors"
            >
              Conhecer Planos
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
