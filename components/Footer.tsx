"use client"

import React from 'react'
import { FaPinterestP } from "react-icons/fa";
import { SiGumroad, SiDeviantart, SiBuymeacoffee, SiSketchfab } from "react-icons/si";
import { AiOutlineGithub, AiOutlineDribbble, AiOutlineLinkedin, AiOutlineCodepen,
  AiOutlineTwitter, AiOutlineInstagram, AiOutlineBehance, AiOutlineMedium,

} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl bottom-0'>
      <hr className='w-full h-0.9 mx-auto mt-9 bg-black border-1'></hr>
      <div className='mx-auto p-4 flex flex-col text-center text-neutral-800 md:flex-row md:justify-between'>
        <div className='text-neutral-900 dark:text-neutral-200'>© KenKay </div>
        <div className='flex flex-row items-center justify-center space-x-2 mb-11'>
          <a href='https://github.com/ken-kay'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='GitHub'
          >
            <AiOutlineGithub
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>
          
          <a href='https://www.linkedin.com/in/kenani-kenani/'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='LinkedIn'
          >
            <AiOutlineLinkedin
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>

          <a href='https://dribbble.com/_kenani'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='Dribbble'
          >
            <AiOutlineDribbble
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>

          <a href='https://www.behance.net/kenani_'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='Behance'
          >
            <AiOutlineBehance
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>

          

          <a href='https://codepen.io/kenani'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='CodePen'
          >
            <AiOutlineCodepen
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>

          <a href='https://www.buymeacoffee.com/kenani'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='Buy Me a Coffee'
          >
            <SiBuymeacoffee
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>


        {/*  
          <a href='https://kenani.gumroad.com/'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='LinkedIn'
          >
            <SiGumroad
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>
          
          <a href='https://www.pinterest.ca/kenanikay/'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='Pinterest'
          >
            <FaPinterestP
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>

          <a href='https://www.deviantart.com/k9squared'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='LinkedIn'
          >
            <SiDeviantart
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>

          <a href='https://medium.com/@ken_kay'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='LinkedIn'
          >
            <AiOutlineMedium
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>

          <a href='https://sketchfab.com/ken_kay'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='LinkedIn'
          >
            <SiSketchfab
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>

          <a href='https://twitter.com/Kenani_Kay'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='LinkedIn'
          >
            <AiOutlineTwitter
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>
        */}

        
          

        </div>
      </div>
    </footer>
  )
}

export default Footer