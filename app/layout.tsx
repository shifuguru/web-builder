import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web Builder',
  description: 'Interactive website preview tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}