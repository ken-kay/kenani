"use client"

import AboutMe from '@/components/AboutMe'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
            <Image className='rounded-md relative overflow-hidden bg-no-repeat bg-cover' src='/assets/nuts.jpg' alt='cherry blossoms' width={1000} height={500}/>
            <AboutMe/>
        </main>
    )
}