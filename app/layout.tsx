'use client'
import Navbar from '@/components/Navbar'
import './globals.css'
import { ThemeProvider } from 'next-themes'


//import Link from 'next/link'


export const metadata = {
  title: 'Kenani',
  description: 'kenani.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar />
          <main>
          {children}
          </main>
          <footer>
          </footer>
        </ThemeProvider>
        </body>
    </html>
  )
}
