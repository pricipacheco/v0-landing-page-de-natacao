"use client"

import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marina Costa",
    role: "Triatleta Amadora",
    image: "aluna.assessoria.png",
    rating: 5,
    achievement: "Completou seu primeiro Ironman 70.3",
  },
  {
    name: "Ricardo Mendes",
    role: "Nadador Masters",
    image: "danilo.monteiro.png",
    rating: 5,
    achievement: "Pódio na Travessia dos Fortes",
  },
  {
    name: "Fernanda Lima",
    role: "Triatleta Elite",
    image: "aluno.evolucao.png",
    rating: 5,
    achievement: "Qualificação para o Mundial",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230369a1' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 bg-[#0369a1]/10 text-[#0369a1] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 leading-tight">
            O que Dizem os <span className="gradient-text">Atletas</span>
          </h2>
          <p className="text-xl text-[#64748b] leading-relaxed">
            Histórias reais de transformação e conquistas de quem já 
            treinou com nossa metodologia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-gradient-to-br from-[#f8fafc] to-white rounded-3xl p-8 border-2 border-[#e2e8f0] hover:border-[#06b6d4] transition-all duration-500 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={`/images/${testimonial.image}`}
                  alt={testimonial.name}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#06b6d4] text-[#06b6d4]" />
                ))}
              </div>
              
              {/* Achievement badge */}
              <div className="bg-[#f0fdfa] border border-[#14b8a6]/20 rounded-xl px-4 py-3 mb-6">
                <p className="text-[#0d9488] text-sm font-semibold">
                  {testimonial.achievement}
                </p>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0369a1] to-[#06b6d4] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[#0f172a] truncate">{testimonial.name}</p>
                  <p className="text-[#64748b] text-sm truncate">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
