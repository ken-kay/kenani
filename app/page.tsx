// "use client"
import { Poppins } from 'next/font/google'

import { Hero } from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Works from '@/components/Works'
import Footer from '@/components/Footer'

//import styles from './global.css'

const poppins = Poppins({ subsets: ['devanagari', 'latin', 'latin-ext'], 
weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] })


export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <Hero />
      <AboutMe/>
      <Works/>
      
    </main>
  )
}
