"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Award, Users, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-swimmer.png"
          alt="Nadador em águas abertas"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e]/95 via-[#0369a1]/80 to-[#0369a1]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e] via-transparent to-transparent" />
      </div>
      
      {/* Animated Wave Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-[200%] h-full animate-wave"
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path
            fill="#f8fafc"
            d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
        <svg 
          className="absolute bottom-0 w-[200%] h-full animate-wave-slow opacity-60"
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path
            fill="#f8fafc"
            d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,85.3C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
            <span className="text-white text-sm font-medium">
              Assessoria Online de Natação em Águas Abertas
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1]">
            Conquiste as{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#5eead4]">Águas Abertas</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-[#06b6d4]/30 -skew-x-3" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Treinamento especializado para nadadores e triatletas que querem 
            <span className="text-[#5eead4] font-semibold"> dominar o mar</span>, 
            com metodologia comprovada e acompanhamento individual.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-[#06b6d4] hover:bg-[#14b8a6] text-white rounded-full px-10 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-[#06b6d4]/25 transition-all duration-300 glow-accent"
            >
              <Link href="#contato">Quero Começar Agora</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-white/60 rounded-full px-8 py-7 text-lg font-semibold backdrop-blur-sm"
            >
              <Link href="#metodologia" className="flex items-center gap-3">
                <Play className="w-5 h-5 fill-current" />
                Conhecer Metodologia
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl">
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-[#5eead4]" />
                <span className="text-4xl md:text-5xl font-bold text-white">10+</span>
              </div>
              <p className="text-white/60 text-sm">Anos de Experiência</p>
            </div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-[#5eead4]" />
                <span className="text-4xl md:text-5xl font-bold text-white">500+</span>
              </div>
              <p className="text-white/60 text-sm">Atletas Treinados</p>
            </div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-6 h-6 text-[#5eead4]" />
                <span className="text-4xl md:text-5xl font-bold text-white">100%</span>
              </div>
              <p className="text-white/60 text-sm">Online</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-36 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <Link
            href="#sobre"
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Descubra</span>
            <ChevronDown className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
