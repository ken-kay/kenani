//import { Heading } from 'chakra-ui'
import React from 'react'
// import styles from './global.css'

/*
const SayHi = () => {
  return (
    <div className='pt-32 max-w-lg'>
    <form className='container text-center'>
        <h1 className='text-4xl'>Say Hi</h1>
        <div className='email block flex-row w-full'>
            <label htmlFor='frm-email'>
                Email:
            </label>
            <input
            className='bg-slate-400'
                id='frm-email'
                type={'email'}
                name='email'
                autoComplete='email'
                required
                
                />
        </div>

        <div className='name flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:left md:p-4 md:space-y-0 md:space-x-10'>
            <div className='md:w-1/2'>
                <label htmlFor='frm-first'>
                    First Name: 
                </label>
                <input 
                className='bg-slate-300'
                    id='frm-first'
                    type={'text'}
                    name='first'
                    autoComplete='given-name'
                    required
                />
            </div>
            <div className='md:w-1/2'>
                <label htmlFor='frm-last'>
                    Last Name:
                </label>
                <input
                className='bg-slate-200'
                    id='frm-last'
                    type={'text'}
                    name='last'
                    autoComplete='family-name'
                    required
                />
            </div>
        </div>
        <div className='message block '>
            <label htmlFor='frm-message'>
                Message:
            </label>
            <textarea id='frm-message' rows={6} name='message'
            className='bg-slate-100'
            ></textarea>
        </div>
        <div className='button block'>
            <button type='submit'
            className='px-4 py-2 bg-pinky rounded-xl text-center'
            >Send</button>
        </div>
    </form>
    </div>
  )
}

export default SayHi
*/

import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

const SayHi = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div id='contact'>
        <div className='pt-32'>
            <form onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    
                    <label htmlFor='full-name'>
                    Name: 
                    </label>
                    <input {...register('name')}
                    id='full-name' placeholder='Enter Name' className='contactInput' type='text'/>
                    
                    <label htmlFor='email-add'>
                    Email: 
                    </label>
                    <input {...register('email')}
                    id='email-add' placeholder='name@gmail.com' className='contactInput' type='email'/>
                </div>

                <label htmlFor='subject-line'>
                    Subject: 
                </label>
                <input {...register('subject')}
                id='subject-line' placeholder='Subject' className='contactInput' type='text'/>
                
                <label htmlFor='enter-message'>
                    Message: 
                </label>
                <textarea {...register('message')}
                id='enter-message' placeholder='Say Hi' className='contactInput' />
                <button className='py-5 px-10 rounded-md font-bold text-lg bg-sky dark:bg-pinky hover:bg-slate-400'
                type='button'>
                    Send
                </button>

            </form>
        </div>
    </div>
  )
}

export default SayHi