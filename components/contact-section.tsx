"use client"

import { motion } from "framer-motion"
import { MessageCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

const WHATSAPP_LINK =
  "https://wa.me/5511996139633?text=Olá Thiago! Quero saber mais sobre a assessoria personalizada para águas abertas."

export function ContactSection() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#061024] py-24 lg:py-32"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-[#06b6d4]/10 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-[500px] w-[500px] rounded-full bg-[#0b3a6b]/40 blur-[150px]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-1 ring-inset ring-white/5">
              <Image
                src="/images/contato-rebollo.png"
                alt="Thiago Rebollo orientando atletas na piscina, em águas abertas e comemorando com a equipe"
                width={1080}
                height={1080}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* soft cyan edge glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#06b6d4]/20" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#06b6d4]/40 bg-[#06b6d4]/5 px-4 py-2">
              <MessageCircle className="h-4 w-4 text-[#22d3ee]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7dd3e8]">
                Fale diretamente com Thiago
              </span>
            </div>

            {/* Title */}
            <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Sua evolução começa com uma{" "}
              <span className="text-[#22d3ee]">conversa.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-slate-300 md:text-lg">
              Conte diretamente para o Thiago quais são seus objetivos. Em poucos
              minutos você receberá uma{" "}
              <span className="text-[#22d3ee]">orientação personalizada</span>{" "}
              para entender qual é o melhor caminho para evoluir nas águas abertas
              ou no triathlon.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-[#25a75c] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(37,167,92,0.35)] transition-all duration-300 hover:bg-[#22c55e] hover:shadow-[0_12px_40px_rgba(37,167,92,0.5)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <MessageCircle className="h-5 w-5" />
              </span>
              Quero Evoluir com o Thiago
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
