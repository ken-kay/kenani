// "use client"

import { Hero } from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Works from '@/components/Works'


import styles from './global.css'


export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <Hero />
      <AboutMe/>
      <Works/>
      
    </main>
  )
}
