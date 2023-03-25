"use client" // client component

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from "react-icons/io";


interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        page: './',
    },
    {
        label: 'About',
        page: 'about',
    },
    {
        label: 'Projects',
        page: 'projects',
    },
    {
        label: 'Contact',
        page: 'contact',
    },
]


export const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [ navbar, setNavbar ] = useState(false)
  
    return (
        <header className='w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-sky'>
            <div className='justify-between md:items-center md:flex '>
                <div>
                    <div className='flex items-center justify-between py-3'>
                        <Link href='/'>
                            <div className='md:py-6 md:block'>
                                <h1 className='font-bold hover:text-pinky'>KenKay</h1>
                            </div>
                        </Link>
                        
                            
                        
                        <div className='md:hidden'>
                                <button onClick={()=>setNavbar(!navbar)}>
                                    {navbar ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
                                </button>
                            </div>
                    </div>
                
                </div>
                <div>
                    <div className={`flex-l justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ 
                    navbar ? "block" : "hidden" 
                    }`}
                    >
                   <div className='items-center md:flex md:space-x-6 md:space-y-0'>
                    {NAV_ITEMS.map((item, idx) => {
                        return <a key={idx} href={item.page} className='flex space-x-5 hover:text-pinky'>{item.label}</a>
                        /*<Link key={idx} href={item.page} 
                            className='flex space-x-5 hover:text-pinky'>
                                {item.label}
                        </Link>
                        */
                    })}
                    {currentTheme === 'dark' ? (
                        <button type='button' aria-label='light mode' onClick={()=>setTheme('light')}
                        className='bg-slate hover:bg-pinky p-2 rounded-xl'>
                            <RiSunLine size={15} color='pinky'/>
                        </button>
                    ) : (
                        <button type='button' aria-label='dark mode' onClick={()=>setTheme('dark')}
                        className='bg-slate hover:bg-pinky p-2 rounded-xl'>
                            <RiMoonFill size={15}/>
                        </button>
                    
                    )}
                    </div> 
                </div>
                </div>
                
                
            </div>
        </header>
    )
}

export default Navbar