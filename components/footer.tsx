"use client"

import Link from "next/link"
import { Instagram, Mail, Waves } from "lucide-react"

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
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold tracking-tight">
                THIAGO REBOLLO
              </span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Assessoria online especializada em natação para águas abertas. 
              Transformando nadadores e triatletas através de metodologia 
              comprovada e acompanhamento personalizado.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/thiagorebollo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@thiagorebollo.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Pronto para Evoluir?</h4>
            <p className="text-primary-foreground/70 mb-6">
              Entre em contato e descubra como a assessoria pode transformar 
              sua natação em águas abertas.
            </p>
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              &copy; {currentYear} Thiago Rebollo. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
