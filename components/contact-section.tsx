"use client"

import { motion } from "framer-motion"
import { Mail, Instagram, MessageCircle, MapPin, Clock } from "lucide-react"
import Image from "next/image"

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(11) 99613-9633",
    href: "https://wa.me/5511996139633?text=Olá Thiago! Quero saber mais sobre a assessoria personalizada para águas abertas.",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@thiagorebollo",
    href: "https://instagram.com/thiagorebollo",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@thiagorebollo.com",
    href: "mailto:contato@thiagorebollo.com",
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#030712] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-pretty">
            Me chame no WhatsApp para entender seus objetivos e descobrir como
            posso ajudar você a evoluir nas águas abertas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/assessoria.rebollo.png"
                alt="Thiago Rebollo - Assessoria de Natação em Águas Abertas"
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-3xl border border-cyan-500/20" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 md:right-6 glass rounded-2xl p-5 max-w-[280px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7 text-[#030712]" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Até 24h</p>
                  <p className="text-gray-400 text-sm">Respondo todas as mensagens</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-cyan-500/20 rounded-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              Comece sua evolução com um{" "}
              <span className="gradient-text">diagnóstico gratuito</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8 text-pretty">
              Fale diretamente comigo no WhatsApp. Sem formulários, sem espera —
              vamos conversar sobre seus objetivos e montar o melhor caminho para
              sua performance.
            </p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5511996139633?text=Olá Thiago! Quero saber mais sobre a assessoria personalizada para águas abertas."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full whatsapp-btn text-white font-semibold text-lg transition-all duration-300 mb-10"
            >
              <MessageCircle className="w-5 h-5" />
              Conversar no WhatsApp
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Contact info list */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 glass rounded-2xl p-4 hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p className="font-medium text-white">{item.value}</p>
                  </div>
                </a>
              ))}

              {/* Atendimento (no link) */}
              <div className="flex items-center gap-4 glass rounded-2xl p-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Atendimento</p>
                  <p className="font-medium text-white">100% Online - Todo Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
