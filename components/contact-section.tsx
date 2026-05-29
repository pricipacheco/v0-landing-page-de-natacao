"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Instagram, MessageCircle, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left side - Info */}
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Contato
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
                Vamos Conversar Sobre Seus Objetivos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Preencha o formulário ou entre em contato diretamente. Terei 
                prazer em conhecer seus objetivos e explicar como posso ajudar 
                você a evoluir nas águas abertas.
              </p>

              {/* Contact methods */}
              <div className="space-y-6">
                <a
                  href="mailto:contato@thiagorebollo.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      E-mail
                    </p>
                    <p className="text-sm text-muted-foreground">
                      contato@thiagorebollo.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <MessageCircle className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      WhatsApp
                    </p>
                    <p className="text-sm text-muted-foreground">
                      +55 (11) 99999-9999
                    </p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/thiagorebollo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Instagram className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      Instagram
                    </p>
                    <p className="text-sm text-muted-foreground">
                      @thiagorebollo
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-muted-foreground">
                    Entrarei em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nome
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Telefone/WhatsApp
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium text-foreground">
                      Experiência com natação
                    </label>
                    <select
                      id="experience"
                      className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Selecione...</option>
                      <option value="beginner">Nadador iniciante</option>
                      <option value="intermediate">Nadador intermediário</option>
                      <option value="advanced">Nadador avançado</option>
                      <option value="triathlete">Triatleta</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Conte sobre seus objetivos
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Quais são seus objetivos? Tem alguma prova em vista?"
                      rows={4}
                      className="rounded-lg resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full py-6 text-base">
                    Enviar Mensagem
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
