"use client"

import { Award, Target, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary">TR</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Thiago Rebollo
                  </p>
                  <p className="text-foreground font-medium">
                    Atleta e Treinador
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Sobre Mim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
              Dedicado à Performance em Águas Abertas
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou Thiago Rebollo, atleta profissional e treinador especializado 
                em natação para águas abertas. Minha paixão pelo esporte e anos de 
                experiência competindo e treinando me permitiram desenvolver uma 
                metodologia única e eficaz.
              </p>
              <p>
                Entendo os desafios específicos de nadar em ambientes naturais: 
                correntes, ondas, navegação, e a preparação mental necessária. 
                Meu objetivo é compartilhar esse conhecimento e ajudar você a 
                alcançar seus objetivos.
              </p>
            </div>

            {/* Features */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Atleta Profissional
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Experiência em competições nacionais e internacionais de águas abertas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Metodologia Comprovada
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Sistema de treinamento desenvolvido com base em ciência e experiência prática
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Acompanhamento Individual
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Treinos personalizados e suporte constante para cada aluno
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
