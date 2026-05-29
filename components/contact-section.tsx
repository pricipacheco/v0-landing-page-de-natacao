"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Instagram, MessageCircle, Send, CheckCircle, MapPin } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#f8fafc] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#06b6d4]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#0369a1]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 bg-[#0369a1]/10 text-[#0369a1] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
              Contato
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 leading-tight">
              Vamos <span className="gradient-text">Conversar?</span>
            </h2>
            <p className="text-xl text-[#64748b] leading-relaxed">
              Preencha o formulário e entrarei em contato para entender 
              seus objetivos e explicar como posso ajudar.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left side - Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-[#0c4a6e] to-[#0369a1] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <a
                    href="mailto:contato@thiagorebollo.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#06b6d4] transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">E-mail</p>
                      <p className="font-medium">contato@thiagorebollo.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#06b6d4] transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">WhatsApp</p>
                      <p className="font-medium">+55 (11) 99999-9999</p>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/thiagorebollo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#06b6d4] transition-colors">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Instagram</p>
                      <p className="font-medium">@thiagorebollo</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Atendimento</p>
                      <p className="font-medium">100% Online - Todo Brasil</p>
                    </div>
                  </div>
                </div>

                {/* Decorative wave */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-white/70 text-sm">
                    Respondo todas as mensagens em até 24 horas.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-[#0369a1]/5 border border-[#e2e8f0]">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-[#f0fdfa] flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-[#14b8a6]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-[#64748b]">
                      Entrarei em contato em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-[#0f172a]">
                          Nome completo
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Seu nome"
                          required
                          className="rounded-xl border-[#e2e8f0] focus:border-[#06b6d4] focus:ring-[#06b6d4] py-6"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-[#0f172a]">
                          E-mail
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          required
                          className="rounded-xl border-[#e2e8f0] focus:border-[#06b6d4] focus:ring-[#06b6d4] py-6"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-[#0f172a]">
                          WhatsApp
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          className="rounded-xl border-[#e2e8f0] focus:border-[#06b6d4] focus:ring-[#06b6d4] py-6"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="experience" className="text-sm font-semibold text-[#0f172a]">
                          Experiência
                        </label>
                        <select
                          id="experience"
                          className="flex h-12 w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm focus:border-[#06b6d4] focus:ring-[#06b6d4] focus:outline-none text-[#0f172a]"
                        >
                          <option value="">Selecione...</option>
                          <option value="beginner">Nadador iniciante</option>
                          <option value="intermediate">Nadador intermediário</option>
                          <option value="advanced">Nadador avançado</option>
                          <option value="triathlete">Triatleta</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-[#0f172a]">
                        Conte sobre seus objetivos
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Quais são seus objetivos? Tem alguma prova em vista? Qual sua disponibilidade para treinos?"
                        rows={5}
                        className="rounded-xl border-[#e2e8f0] focus:border-[#06b6d4] focus:ring-[#06b6d4] resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full rounded-full py-7 text-lg font-semibold bg-gradient-to-r from-[#0369a1] to-[#0ea5e9] hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Enviar Mensagem
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
