import React from "react"
import type { Metadata } from 'next'
import { Dancing_Script, Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _dancing = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing' })

export const metadata: Metadata = {
  title: 'Saint-Valentin',
  description: 'Une petite surprise pour la Saint-Valentin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${_inter.variable} ${_dancing.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
