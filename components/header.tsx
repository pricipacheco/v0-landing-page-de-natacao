"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-[#0369a1]/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
            isScrolled ? "bg-[#0369a1]" : "bg-white/20 backdrop-blur-sm"
          )}>
            <Waves className="w-5 h-5 text-white" />
          </div>
          <span
            className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              isScrolled ? "text-[#0f172a]" : "text-white"
            )}
          >
            THIAGO REBOLLO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative group",
                isScrolled ? "text-[#475569] hover:text-[#0369a1]" : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                isScrolled ? "bg-[#06b6d4]" : "bg-[#5eead4]"
              )} />
            </Link>
          ))}
          <Button
            asChild
            className={cn(
              "rounded-full px-6 py-5 font-semibold transition-all duration-300",
              isScrolled
                ? "bg-gradient-to-r from-[#0369a1] to-[#0ea5e9] text-white hover:opacity-90 shadow-lg"
                : "bg-white text-[#0369a1] hover:bg-[#f0fdfa] shadow-lg"
            )}
          >
            <Link href="#contato">Começar Agora</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "md:hidden p-2 rounded-xl transition-colors",
            isScrolled 
              ? "text-[#0f172a] hover:bg-[#f1f5f9]" 
              : "text-white hover:bg-white/10"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#e2e8f0] shadow-xl">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#0f172a] text-lg font-medium py-3 px-4 rounded-xl hover:bg-[#f1f5f9] hover:text-[#0369a1] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              className="rounded-full mt-4 py-6 bg-gradient-to-r from-[#0369a1] to-[#0ea5e9] text-white font-semibold"
            >
              <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                Começar Agora
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
