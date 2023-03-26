"use client"
import React from 'react'
// import styles from './global.css'

import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  fullname: string,
  email: string,
  subject: string,
  message: string,
};

// const SayHi = () => {
const SayHi = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    /*{
        window.location.href=`mailto:kenani@kenani.dev?subject=${data.subject}&
        body=Hi, my name is ${data.fullname}. ${data.message} (${data.email})`
    }*/

  return (
    <section id='say-hi'>
        <div className='pt-32'>
            <form onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    
                    <label htmlFor='full-name'>
                        Name: 
                    </label>
                    <input {...register('fullname', { required:true })}
                        id='full-name' placeholder='Enter Name' className='contactInput' type='text'></input>
                    {errors.fullname && <span>Please fill in your full name</span>}
                    <label htmlFor='email-add'>
                    Email: 
                    </label>
                    <input {...register('email', { required:true })}
                    id='email-add' placeholder='name@gmail.com' className='contactInput' type='email'></input>
                    {errors.email && <span>Please fill in your email address</span>}
                </div>

                <label htmlFor='subject-line'>
                    Subject: 
                </label>
                <input {...register('subject')}
                id='subject-line' placeholder='Subject' className='contactInput' type='text'></input>
                
                <label htmlFor='enter-message'>
                    Message: 
                </label>
                <textarea {...register('message', { required:true })}
                id='enter-message' placeholder='Say Hi' className='contactInput'></textarea>
                {errors.message && <span>Please write a message</span>}
                <button className='py-5 px-10 rounded-md font-bold text-lg bg-sky dark:bg-pinky hover:bg-slate-400'
                type='submit'>
                    Send
                </button>

            </form>
        </div>
    </section>
  )
}

export default SayHi