"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsFillArrowUpRightCircleFill } from 'react-icons/bs'

const works = [
    {
        name: 'Umkele',
        description: 
        'Website for a biotech start-up interested in sustainable development and next-gen materials.',
        image: '/assets/umkele.png',
        github: 'https://github.com/ken-kay/Umkele',
        link: 'https://umkele.com',
    },
    {
        name: 'BCMS App',
        description: 
        'Simple online learning app for music students',
        image: '/assets/sheet.png',
        github: 'https://github.com/ken-kay/BCMS',
        link: 'https://github.com/ken-kay/BCMS',
    },
    {
        name: 'PSD-to-HTML',
        description: 
        'A responsive website built using a Photoshop template',
        image: '/assets/la.png',
        github: 'https://github.com/ken-kay',
        link: 'https://github.com/ken-kay/PSD-to-HTML',
    },
]

const Works = () => {
  return (
    <section id='works'>
        <h1 className='text-center font-bold text-5xl content-'>Projects</h1>
            <hr className='w-9 h-1 mx-auto my-5 bg-pinky border-0 rounded'></hr>
            <div className='flex flex-col space-y-24'>
                { works.map((works, idx)=>{ return (
                    <div key={idx}>
                        <div className='flex flex-col md:flex-row md:space-x-6 '>
                        <div className='mt-12 md:w-1/2 hover:-translate-y-1'>
                            <Link href={works.link} target='_blank' rel='noreferrer noopener'>
                            <Image 
                            src={works.image}
                            alt=''
                            width={500}
                            height={500}
                            className='rounded-xl shadow-xl hover:opacity-70' 
                            />
                            </Link>
                            
                            </div>
                        <div className='mt-12 md:w-1/2'>
                            <h1 className='text-5xl font-bold mb-6 '>
                                {works.name}
                            </h1>
                            <p className='text-xl leading-8 mb-4 text-neutral-800 dark:text-neutral-300 '>
                                {works.description}
                            </p>
                            <div className='flex flex-row align-bottom space-x-4'>
                                <Link href={works.github} target='_blank' rel='noreferrer noopener'>
                                    <BsGithub 
                                        size={30}
                                        className='hover:-translate-y-1 hover:text-pinky transition-transform cursor-pointer' 
                                    />
                                </Link>
                                <Link href={works.link} target='_blank' rel='noreferrer noopener'>
                                    <BsFillArrowUpRightCircleFill
                                        size={30}
                                        className='hover:-translate-y-1 hover:text-pinky transition-transform cursor-pointer animate-pulse' 
                                    />
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                )
                
                })}
            </div>
    </section>
  )
}

export default Works