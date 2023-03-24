// "use client"
import { Poppins } from 'next/font/google'
//import styles from './global.css'

const poppins = Poppins({ subsets: ['devanagari', 'latin', 'latin-ext'], 
weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] })


export default function Home() {
  return (
    <main>
      <h1 className='text-bold text-2xl'>
        Home
        
      </h1>

    </main>
  )
}
