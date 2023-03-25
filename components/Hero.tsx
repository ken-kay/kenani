"use client"
import { HiArrowDown } from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const Hero = () => {
  return (
    <section id='home'>
        <div className='flex text-center items-center justify-center sm:py-20 my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-69'>
            <div className='md:w-1/2 md:mt-2'>
                <Image className='rounded-full shadow-2xl' src='/cherry.jpg' alt='cherry blossoms' width={300} height={300}/>
            </div>
            <div className='md:w-3/5 md:mt-2'>
                <h1 className='font-bold text-4xl mt-6 md:text-6xl md:mt-0'>Hi! My name is Kenani</h1>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>
                    I&#39;m a software engineer, blah, blah..
                </p>
                    <Link href='projects'
                    className='text-neutral-100 font-semibold px-6 py-3 bg-pinky hover:bg-teal-300 rounded shadow'
                    >My work</Link>
                
            </div>

            <div className='flex flex-row justify-center'>
                <Link href='about'>
                    <HiArrowDown className='animate-bounce'
                    size={30}/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero