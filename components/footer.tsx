"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, Youtube, ArrowUpRight } from "lucide-react"

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Main footer */}
      <div className="bg-gradient-to-br from-[#0c4a6e] via-[#0369a1] to-[#0c4a6e]">
        {/* Wave top */}
        <div className="h-16 overflow-hidden">
          <svg 
            className="w-full h-full"
            viewBox="0 0 1440 60" 
            preserveAspectRatio="none"
          >
            <path
              fill="#061024"
              d="M0,30L48,25C96,20,192,10,288,10C384,10,480,20,576,25C672,30,768,30,864,25C960,20,1056,10,1152,10C1248,10,1344,20,1392,25L1440,30L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C[...]
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <Image
                  src="/logo-rebollo-assessoria"
                  alt="Rebollo Assessoria"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </Link>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/thiagorebollo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#06b6d4] transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://youtube.com/@thiagorebollo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#06b6d4] transition-all duration-300 group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a
                  href="mailto:contato@thiagorebollo.com"
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#06b6d4] transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Navegação</h4>
              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-white/70 hover:text-[#5eead4] transition-colors group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* CTA */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Pronto para Evoluir?</h4>
              <p className="text-white/70 mb-6">
                Entre em contato e descubra como transformar sua natação em águas abertas.
              </p>
              <Link
                href="#contato"
                className="inline-flex items-center gap-2 bg-[#06b6d4] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#14b8a6] transition-colors shadow-lg hover:shadow-[#06b6d4]/25"
              >
                Começar Agora
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
              <p>
                &copy; {currentYear} Thiago Rebollo. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6">
                <Link href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}