"use client"

import { motion } from "framer-motion"
import { MessageCircle, ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/Banner-rebollo.png"
          alt="Nadador em águas abertas"
          fill
          className="object-cover object-[80%_50%] md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-transparent to-[#030712]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/85 via-[#030712]/30 to-transparent" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-40">
        <div className="max-w-3xl">
          {/* Badge — largura livre, fora da restrição de texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-300">Assessoria Especializada em Águas Abertas e Triatlhon</span>
          </motion.div>

          {/* Bloco de texto restrito — h1 e p quebram antes do meio da página em telas grandes */}
          <div className="max-w-full sm:max-w-md lg:max-w-[60%]">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10"
            >
              Seu próximo nível
              <span className="gradient-text text-glow"> começa com o treino certo</span>
            </motion.h1>
          </div>

          {/* CTA Buttons — fora do bloco restrito, largura livre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="https://wa.me/5511996139633?text=Olá Thiago! Quero entender como funciona a assessoria personalizada para águas abertas."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full whatsapp-btn text-white font-semibold text-sm sm:text-base transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Quero falar com o Time
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#metodo"
              className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
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
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
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
