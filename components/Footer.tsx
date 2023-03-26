"use client"

import React from 'react'
import { AiOutlineGithub, AiOutlineDribbble, AiOutlineLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl bottom-0'>
      <hr className='w-full h-0.9 mx-auto mt-9 bg-black border-1'></hr>
      <div className='mx-auto p-4 flex flex-col text-center text-neutral-800 md:flex-row md:justify-between'>
        <div className='text-neutral-900 dark:text-neutral-200'>© KenKay </div>
        <div className='flex flex-row items-center justify-center space-x-2 mb-11'>
          <a href='https://linkedin.com/'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='LinkedIn'
          >
            <AiOutlineGithub
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>
          <a href='https://linkedin.com/'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='LinkedIn'
          >
            <AiOutlineDribbble
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>
          <a href='https://linkedin.com/'
            rel='noreferrer noopener'
            target='_blank'
            aria-label='LinkedIn'
          >
            <AiOutlineLinkedin
              className='hover:translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-100'
              size={20}
              />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer