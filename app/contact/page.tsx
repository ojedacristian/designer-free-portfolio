import React from 'react'

export const ContactPage: React.FC = () => {
  return (
    <section className='flex flex-col items-center mt-10 mb-36' id='projects'>
            <h1 className='text-5xl font-bold leading-normal'>Contact</h1>
            <span className='bg-brand-yellow w-24 h-1 rounded-sm'></span>
            <form className='flex flex-col text-brand-grayHigh'>
                <label htmlFor="name" className='text-base mb-2'>Name</label>
                <input type="text" name='name' id='name' className='rounded-lg bg-white mb-6 border border-gray-200 w-96 h-10 px-4 focus:border-brand-yellow focus:border-2 focus:outline-none' />
                <label htmlFor="email" className='text-base mb-2'>Email</label>
                <input type="text" name='email' id='email' className='rounded-lg bg-white mb-6 border border-gray-200 w-96 h-10 px-4 focus:border-brand-yellow focus:border-2 focus:outline-none' />
                <label htmlFor="message" className='text-base mb-2'>Message</label>
                <textarea name='message' id='message' className='rounded-lg bg-white mb-6 border border-gray-200 w-96 h-40 px-4 py-2 resize-none focus:border-brand-yellow focus:border-2 focus:outline-none' />
                <button className='bg-brand-yellow px-6 py-2 rounded-lg self-end text-lg'>Send</button>
            </form>
        </section>
  )
}

export default ContactPage
