'use client'
import Navbar from '@/components/Navbar'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/Footer'
import { Poppins } from 'next/font/google'
import { Metadata } from 'next';


const poppins = Poppins({ subsets: ['devanagari', 'latin', 'latin-ext'], 
weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] })



export const metadata: Metadata = {
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
          <section>

          </section>
          <main>
            
          {children}
          
          </main>
          <Footer />
        </ThemeProvider>
        </body>
    </html>
  )
}
