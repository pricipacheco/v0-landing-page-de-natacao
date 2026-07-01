"use client"

import { Activity, Compass, Brain, BarChart3, Check } from "lucide-react"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"

type Pillar = {
  number: string
  icon: LucideIcon
  title: string
  description: string
  results: string[]
  align: "left" | "right"
}

const pillars: Pillar[] = [
  {
    number: "01",
    icon: Activity,
    title: "Análise Técnica",
    description:
      "Avaliação completa da sua técnica através de vídeos e dados para identificar e corrigir pontos de melhoria.",
    results: [
      "Mais eficiência na braçada",
      "Menor gasto energético",
      "Nade mais rápido com menos esforço",
    ],
    align: "left",
  },
  {
    number: "02",
    icon: Compass,
    title: "Navegação e Orientação",
    description:
      "Treinamento focado em leitura do ambiente, posicionamento e navegação eficiente em qualquer condição.",
    results: [
      "Nade mais reto e economize energia",
      "Melhor posicionamento na prova",
      "Mais segurança em águas abertas",
    ],
    align: "right",
  },
  {
    number: "03",
    icon: Brain,
    title: "Preparação Mental",
    description:
      "Desenvolvimento mental para lidar com desafios, pressão, mar agitado e momentos críticos da prova.",
    results: [
      "Mais controle emocional",
      "Confiança para qualquer desafio",
      "Decisões melhores durante a prova",
    ],
    align: "left",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Periodização Inteligente",
    description:
      "Planejamento individualizado que considera seus objetivos, rotina e fases de treino para picos de performance.",
    results: [
      "Treino certo na hora certa",
      "Evolução constante e sustentável",
      "Chegue no pico da sua melhor forma",
    ],
    align: "right",
  },
]

function PillarCard({ pillar }: { pillar: Pillar }) {
  const Icon = pillar.icon
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#0e2a3f] bg-[#060d17]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#06b6d4]/60 hover:bg-[#081420]/90">
      {/* subtle top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start gap-4">
        {/* HUD icon ring */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full border border-[#06b6d4]/20 animate-[spin_16s_linear_infinite]" />
          <div className="absolute -inset-1 rounded-full border border-dashed border-[#06b6d4]/10 animate-[spin_24s_linear_infinite_reverse]" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#06b6d4]/40 bg-[#06121e] shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-shadow duration-500 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            <Icon className="h-6 w-6 text-[#22d3ee]" strokeWidth={1.5} />
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#06b6d4]">
            Pilar {pillar.number}
          </p>
          <h3 className="mt-1 text-lg font-bold uppercase tracking-wide text-white">
            {pillar.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/55">
            {pillar.description}
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="mt-5">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
            Resultados
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-[#0e2a3f] to-transparent" />
        </div>
        <ul className="mt-3 space-y-2">
          {pillar.results.map((result) => (
            <li key={result} className="flex items-center gap-2.5 text-sm text-white/70">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#06b6d4]/50 bg-[#06b6d4]/10">
                <Check className="h-2.5 w-2.5 text-[#22d3ee]" strokeWidth={3} />
              </span>
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function CoreVisual() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[380px] items-center justify-center">
      {/* Outer rotating dashed rings */}
      <div className="absolute inset-0 rounded-full border border-dashed border-[#06b6d4]/15 animate-[spin_40s_linear_infinite]" />
      <div className="absolute inset-[6%] rounded-full border border-[#06b6d4]/10 animate-[spin_30s_linear_infinite_reverse]" />

      {/* Glow halo */}
      <div className="absolute inset-[12%] rounded-full bg-[#06b6d4]/10 blur-2xl" />

      {/* Main circle with swimmer */}
      <div className="relative h-[76%] w-[76%] overflow-hidden rounded-full border border-[#06b6d4]/40 shadow-[0_0_60px_rgba(6,182,212,0.35),inset_0_0_60px_rgba(3,7,18,0.9)]">
        <Image
          src="/images/homem-metodologia.png"
          alt="Nadador em águas abertas"
          fill
          sizes="380px"
          className="object-cover object-center"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/40 via-[#030712]/55 to-[#030712]/85" />

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80">
            Performance
          </p>
          <p className="text-glow bg-gradient-to-b from-white to-[#22d3ee] bg-clip-text text-6xl font-black leading-none text-transparent md:text-7xl">
            360°
          </p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
            Evolução
            <br />
            Contínua
          </p>
        </div>
      </div>

      {/* Pulsing accent dots around the ring */}
      {[
        "left-1/2 top-0 -translate-x-1/2",
        "left-1/2 bottom-0 -translate-x-1/2",
        "left-0 top-1/2 -translate-y-1/2",
        "right-0 top-1/2 -translate-y-1/2",
      ].map((pos, i) => (
        <span
          key={pos}
          className={`absolute h-2.5 w-2.5 rounded-full bg-[#22d3ee] shadow-[0_0_12px_rgba(34,211,238,0.9)] ${pos} animate-pulse`}
          style={{ animationDelay: `${i * 400}ms` }}
        />
      ))}
    </div>
  )
}

export function MethodologySection() {
  return (
    <section
      id="metodologia"
      className="relative overflow-hidden bg-[#030712] py-24 lg:py-32"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06b6d4]/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,#030712_100%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0e2a3f] bg-[#060d17] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#06b6d4]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            Metodologia
          </span>
          <h2 className="text-balance text-4xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            Os 4 Pilares da{" "}
            <span className="bg-gradient-to-r from-[#22d3ee] to-[#06b6d4] bg-clip-text text-transparent">
              Performance
            </span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#06b6d4]/60" />
            <span className="text-sm font-medium uppercase tracking-[0.4em] text-white/70">
              Em Águas Abertas
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#06b6d4]/60" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/60 md:text-lg">
            Uma metodologia completa e integrada para desenvolver técnica,
            estratégia, mentalidade e preparo físico. Tudo que você precisa para{" "}
            <span className="font-semibold text-[#22d3ee]">
              evoluir de verdade.
            </span>
          </p>
        </div>

        {/* Pillars layout */}
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          {/* Left column (Pilar 01 + 03) */}
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            <PillarCard pillar={pillars[0]} />
            <PillarCard pillar={pillars[2]} />
          </div>

          {/* Center core */}
          <div className="order-1 w-full lg:order-2 lg:w-[380px]">
            <CoreVisual />
          </div>

          {/* Right column (Pilar 02 + 04) */}
          <div className="order-3 flex flex-col gap-6">
            <PillarCard pillar={pillars[1]} />
            <PillarCard pillar={pillars[3]} />
          </div>
        </div>
      </div>
    </section>
  )
}
