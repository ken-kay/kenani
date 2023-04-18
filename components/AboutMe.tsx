"use client"

// import Image from 'next/image'
import React from 'react'



const skills = [
    { skill: 'HTML' },
    { skill: 'CSS' },
    { skill: 'React' },
    { skill: 'Vue' },
    { skill: 'Vanilla JS' },
    { skill: 'TypeScript' },
    { skill: 'Python' },
    { skill: 'Flutter' },
    { skill: 'php' },
    { skill: 'Adobe Suite' },
    { skill: 'Figma' },
]

const AboutMe = () => {
  return (
    <section id='about-me'>
        <div className='my-12 pb-12 md:pt-16 md:pb-40'>
            <h1 className='text-center font-bold text-5xl'>In a nutshell</h1>
            <hr className='w-9 h-1 mx-auto my-5 bg-pinky border-0 rounded'></hr>
            <div className='flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
                        Breaking the ice...
                    </h1>
                    <p>
                        I have my Bachelor&#39;s in Software Engineering and graduated
                        back in 2021. I started working remotely in 2020 during my final
                        year and have continued to build my experience as a remote developer.
                    </p>
                    <p>
                        My hobbies include: art, music, gaming, basketball, 
                        and picking up new skills.
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
                        Skills to pay the bills
                    </h1>
                    <div className='flex flex-wrap flex-row justify-center md:justify-end'>
                        {skills.map((item, idx)=> {
                            return <p key={idx} className='bg-gray-100 px-4 py-2 mr-2 mt-2 text-pinky rounded font-semibold'>{item.skill}</p>
                        })}

                    </div>
                    
                </div>
            </div>
        </div>

    </section>
  )
}

export default AboutMe
