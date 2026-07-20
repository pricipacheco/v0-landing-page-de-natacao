"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Compass, GraduationCap, MessageCircle } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    icon: Trophy,
    title: "Recordista Leme ao Pontal",
    description: "Detentor do Recorde geral há 8 anos"
  },
  {
    icon: Compass,
    title: "Canal da Mancha",
    description: "6º melhor marca mundial em de 2021"
  },
  {
    icon: Award,
    title: "Ironman Brasil",
    description: "Participou duas vezes da maior prova de triathlon do país"
  },
  {
    icon: GraduationCap,
    title: "Formação Especializada",
    description: "Formado em Educação Física e Pós-Graduado em Treinamento Desportivo e Triathlon"
  }
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#030712] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
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
                src="/images/Thiago-treinador-rebollo.png"
                alt="Thiago Rebollo - Atleta e Treinador de Águas Abertas"
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-3xl border border-cyan-500/20" />
            </div>
            
            {/* Floating achievement card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 md:right-6 glass rounded-2xl p-5 max-w-[280px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-[#030712]" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Desde 2012</p>
                  <p className="text-gray-400 text-sm">Rebollo Assessoria Esportiva</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-cyan-500/20 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-cyan-500/10 rounded-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Quem é Thiago Rebollo
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Atleta, treinador e<br />
              <span className="gradient-text">referência nacional em Águas Abertas</span>
            </h2>
            
            <div className="space-y-5 text-lg text-gray-400 leading-relaxed mb-10">
              <p>
                Treinador há mais de <span className="text-white font-medium">14 anos</span> e atleta desde a infância, Thiago Rebollo desenvolveu uma metodologia única, 
                construída a partir da combinação entre experiência prática, conhecimento científico e vivência nas principais provas de águas abertas e triathlon do país.
              </p>
              <p>
                Cada treino e estratégia 
                <span className="text-cyan-400 font-medium"> aplicado hoje com seus alunos</span> 
                foi, antes, testado e aperfeiçoado na própria pele.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-4 hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                      <achievement.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-0.5">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a 
              href="https://wa.me/5511996139633?text=Olá Thiago! Vi seu currículo impressionante e quero saber mais sobre a assessoria."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-cyan-400" />
              Conversar com o Time Rebollo
              <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
