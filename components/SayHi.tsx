"use client"
import React from 'react'
import Image from 'next/image'
// import styles from './global.css'
// import axios from "axios";
/*
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  fullname: string,
  email: string,
  subject: string,
  message: string,
};
*/
const SayHi = () => {

  return (
    <section id='say-hi'>           
        <div>
        <div className='flex text-center items-center justify-center sm:py-20 my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-69'>
            <div className='w-1/2'>
                <Image className='shadow-2xl mx-auto' src='/assets/desk.jpg' alt='laptop' width={500} height={500}/>
            </div>
            <div className='md:w-3/5 md:mt-2'>
                <h1 className='font-bold text-6xl mt-6 w-1/2'>Hello...</h1>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>
                    I am open to freelance, part-time, and full-time work so let me know 
                    what I can help you with by filling out this form:
                </p>
                <a href='https://forms.gle/5AF162wkJsjjH8mh8'>
            <button className='py-5 px-10 rounded-md font-bold text-lg bg-manilla dark:bg-pinky hover:bg-slate-400'
                type='submit'>
                    Contact Form
                </button>
            </a>

           
            </div>          
        </div>

    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 py-5'>
         <h2 className='font-bold text-6xl mt-6 text-center'>CV/Resume:</h2>
         <h3 className='text-2xl mx-auto mt-2 text-center'></h3>
            <h3><ul className='text-xl font-bold w-fit mx-auto px-5 py-5 mb-2'>
                
                <li className='outline outline-2  outline-offset-2 py-1 px-5 my-5 hover:bg-pinky'><a href='https://www.dropbox.com/s/a4nobf7u9vau890/Kenani%20Kenani%20-%20CV.pdf?dl=0'>
                    Curriculum Vitae</a></li>
                </ul>
                </h3>
              </div>
            <div>
                <h1 className='pt-10 font-bold flex flex-col space-y-2 w-fit mx-auto text-4xl'>Send me a message:</h1>
                <h2 className='pt-2 flex flex-col space-y-2 w-fit mx-auto'></h2>
            </div>
        </div>
        <div className='pt-10 flex flex-col space-y-2 w-fit mx-auto'>
            <a href='mailto:kenanikay@gmail.com'>
            <button className='py-5 px-10 rounded-md font-bold text-lg bg-manilla dark:bg-pinky hover:bg-slate-400'
                type='submit'>
                    Say Hi!
                </button>
            </a>
            
        </div>
    
        
    </section>
  )
}

export default SayHi