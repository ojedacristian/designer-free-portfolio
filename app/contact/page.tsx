import React from 'react'
import data from '@/components/data/data.json'

const ContactPage: React.FC = () => {
  const { title, inputName, inputEmail, inputMessage, cta } = data.contact
  return (
    <section className='flex flex-col items-center mt-10 mb-16 sm:mb-36' id='projects'>
        <h1 className='text-5xl font-bold leading-normal'>{title}</h1>
        <span className='bg-brand-yellow w-24 h-1 rounded-sm'></span>
        <form className='flex flex-col text-brand-grayHigh mt-12'>
            <label htmlFor="name" className='text-base mb-2'>{inputName}</label>
            <input type="text" name='name' id='name' className='rounded-lg bg-white mb-6 border border-gray-200 w-80 sm:w-96 h-10 px-4 focus:border-brand-yellow focus:border-2 focus:outline-none' placeholder={inputName} />
            <label htmlFor="email" className='text-base mb-2'>{inputEmail}</label>
            <input type="text" name='email' id='email' className='rounded-lg bg-white mb-6 border border-gray-200 w-80 sm:w-96 h-10 px-4 focus:border-brand-yellow focus:border-2 focus:outline-none' placeholder={inputEmail} />
            <label htmlFor="message" className='text-base mb-2'>{inputMessage}</label>
            <textarea name='message' id='message' className='rounded-lg bg-white mb-6 border border-gray-200 w-80 sm:w-96 h-40 px-4 py-2 resize-none focus:border-brand-yellow focus:border-2 focus:outline-none' placeholder={inputMessage} />
            <button className='bg-brand-yellow px-6 py-2 rounded-lg sm:self-end text-lg'>{cta}</button>
        </form>
    </section>
  )
}

export default ContactPage
