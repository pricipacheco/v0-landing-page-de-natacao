import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'Thiago Rebollo | Assessoria de Natação em Águas Abertas',
  description: 'Assessoria online personalizada para nadadores e triatletas. Treinamento especializado em águas abertas com metodologia própria. Recordista da Travessia Leme ao Pontal.',
  keywords: ['natação águas abertas', 'triathlon', 'assessoria natação', 'travessia', 'treinamento personalizado', 'Thiago Rebollo'],
  authors: [{ name: 'Thiago Rebollo' }],
  openGraph: {
    title: 'Thiago Rebollo | Assessoria de Natação em Águas Abertas',
    description: 'Treinamento personalizado para nadadores e triatletas que querem dominar as águas abertas.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#030712',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-[#030712]">
      <body className={`${inter.variable} font-sans antialiased bg-[#030712] text-white`}>
        {children}
      </body>
    </html>
  )
}
