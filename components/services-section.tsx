"use client"

import { Crosshair, Waves, Bike, Check, ArrowRight, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

type Plan = {
  category: string
  icon: LucideIcon
  title: string
  description: ReactNode
  features: string[]
  priceLabel: string
  currency: string
  price: string
  period?: string
  cta: string
  featured?: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    category: "Assessoria",
    icon: Crosshair,
    title: "Natação em Águas Abertas",
    description: (
      <>
        Treinamento {" "}
        <strong className="font-semibold text-white">focado e especializado</strong> para
        quem busca evolução consistente em águas abertas.
      </>
    ),
    features: [
      "Treino individualizado e periodizado",
      "Correção técnica para eliminar erros que atrasam sua evolução",
      "Análise de vídeos",
      "Ajustes constantes de Treino via TrainingPeaks",
      "Suporte via WhatsApp",
      "Orientação pré-prova e análise pós-prova",
      "Feedbacks semanais",
    ],
    priceLabel: "Investimento mensal",
    currency: "R$",
    price: "290",
    period: "/mês",
    cta: "Quero meu diagnóstico",
  },
  {
    category: "Assessoria",
    icon: Waves,
    title: "Natação + Corrida",
    description: (
      <>
        Treinamento periodizado para quem quer evoluir{" "}
        <strong className="font-semibold text-white">com estratégia e resultado</strong>{" "}
        nas duas modalidades.
      </>
    ),
    features: [
      "Treino individualizado e periodizado",
      "Correção técnica para eliminar erros que atrasam sua evolução",
      "Análise de vídeos",
      "Ajustes constantes de Treino via TrainingPeaks",
      "Suporte via WhatsApp",
      "Orientação pré-prova e análise pós-prova",
      "Feedbacks semanais",
    ],
    priceLabel: "Investimento mensal",
    currency: "R$",
    price: "340",
    period: "/mês",
    cta: "Quero evoluir agora",
    featured: true,
    badge: "Mais escolhido pelos atletas",
  },
  {
    category: "Assessoria",
    icon: Bike,
    title: "Triathlon Performance",
    description: (
      <>
        Integração completa para quem busca{" "}
        <strong className="font-semibold text-white">máxima performance</strong> nas
        três modalidades.
      </>
    ),
    features: [
      "Treino individualizado e periodizado",
      "Correção técnica para eliminar erros que atrasam sua evolução",
      "Análise de vídeos",
      "Ajustes constantes de Treino via TrainingPeaks",
      "Suporte via WhatsApp",
      "Orientação pré-prova e análise pós-prova",
      "Feedbacks semanais",
    ],
    priceLabel: "Investimento mensal",
    currency: "R$",
    price: "390",
    period: "/mês",
    cta: "Quero minha melhor versão",
  },
]

function PlanCard({ plan }: { plan: Plan }) {
  const Icon = plan.icon
  const featured = plan.featured

  return (
    <div
      className={`group relative flex flex-col rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 ${
        featured
          ? "border border-[#06b6d4]/70 bg-gradient-to-b from-[#0a2233] to-[#061420] shadow-[0_0_40px_rgba(6,182,212,0.35),inset_0_1px_0_rgba(6,182,212,0.15)] lg:-mt-6 lg:mb-6"
          : "border border-[#164a68] bg-gradient-to-b from-[#0b1826] to-[#070f1a] shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(6,182,212,0.08)] ring-1 ring-inset ring-white/5 hover:border-[#06b6d4]/50 hover:shadow-[0_12px_40px_rgba(6,182,212,0.2)]"
      }`}
    >
      {/* Featured badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-[#06b6d4]/60 bg-[#06121e] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#22d3ee]">
            <Trophy className="h-3.5 w-3.5" />
            {plan.badge}
          </span>
        </div>
      )}

      {/* top glow line */}
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/60 to-transparent transition-opacity duration-500 ${
          featured ? "opacity-100" : "opacity-50 group-hover:opacity-100"
        }`}
      />

      {/* Header: icon + category + title */}
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full border border-[#06b6d4]/20 animate-[spin_18s_linear_infinite]" />
          <div className="absolute -inset-1 rounded-full border border-dashed border-[#06b6d4]/10 animate-[spin_26s_linear_infinite_reverse]" />
          <div
            className={`relative flex h-14 w-14 items-center justify-center rounded-full border bg-[#06121e] transition-shadow duration-500 ${
              featured
                ? "border-[#06b6d4]/60 shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                : "border-[#06b6d4]/40 shadow-[0_0_20px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            }`}
          >
            <Icon className="h-6 w-6 text-[#22d3ee]" strokeWidth={1.5} />
          </div>
        </div>

        <div className="min-w-0 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#06b6d4]">
            {plan.category}
          </p>
          <h3 className="mt-1 text-2xl font-bold leading-tight text-white">
            {plan.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-white/55">{plan.description}</p>

      {/* Divider */}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-[#0e2a3f] via-[#06b6d4]/20 to-transparent" />

      {/* Features */}
      <ul className="mt-6 flex-grow space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-white/70">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#06b6d4]/50 bg-[#06b6d4]/10">
              <Check className="h-2.5 w-2.5 text-[#22d3ee]" strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="mt-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
          {plan.priceLabel}
        </p>
        <div className="mt-1 flex items-end gap-1">
          <span className="text-lg font-semibold text-white/80">{plan.currency}</span>
          <span className="text-5xl font-black leading-none text-white">
            {plan.price}
          </span>
          {plan.period && (
            <span className="mb-1 text-sm font-medium text-white/50">
              {plan.period}
            </span>
          )}
        </div>
      </div>

      {/* CTA */}
      <Button
        asChild
        className={`mt-6 w-full rounded-full py-6 text-base font-semibold transition-all duration-300 ${
          featured
            ? "bg-gradient-to-r from-[#06b6d4] to-[#0ea5e9] text-[#03121c] shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)]"
            : "border border-[#06b6d4]/40 bg-[#06b6d4]/10 text-[#22d3ee] hover:border-[#06b6d4]/70 hover:bg-[#06b6d4]/20"
        }`}
      >
        <Link href="#contato" className="flex items-center justify-center gap-2">
          {plan.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#030712] py-24 lg:py-32"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#06b6d4]/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,#030712_100%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0e2a3f] bg-[#060d17] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#06b6d4]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            Planos de Assessoria
          </span>
          <h2 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            Como você quer{" "}
            <span className="bg-gradient-to-r from-[#22d3ee] to-[#06b6d4] bg-clip-text text-transparent">
              evoluir?
            </span>
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#06b6d4]/60 to-transparent" />
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/60 md:text-lg">
            Três formas de acompanhamento para diferentes objetivos. O método é o
            mesmo:{" "}
            <span className="font-semibold text-[#22d3ee]">resultados reais.</span>
          </p>
        </div>

        {/* Plans grid */}
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
