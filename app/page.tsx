import React from 'react'
import Image from 'next/image'

const Home: React.FC = () => {
  return (
    <main className='container mx-auto px-32'>
      <header className='flex justify-between pt-3'>
        <div className='text-lg'>
          Madelyn Torff
        </div>
        <nav className='flex gap-12 text-lg leading-7'>
          <button>About</button>
          <button>Projects</button>
          <button>Contact</button>
        </nav>
      </header>
      <section className='flex justify-between mt-16'>
        <div className='w-1/2 flex flex-col font-bold'>
          <h2 className='text-brand-yellow text-xl'>UI/UX DESIGNER</h2>
          <h1 className='text-6xl mt-3 leading-tight'>Hello, my name is Madelyn Torff</h1>
          <p className='text-gray-700 text-2xl mt-8 font-normal leading-normal'>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
          <div className='mt-8 text-lg flex gap-3'>
            <button className='bg-brand-yellow px-6 py-2 rounded-lg '>Projects</button>
            <button className='px-6 py-2 rounded-lg border-2 border-gray-800'>LinkedIn</button>
          </div>
        </div>

          <Image src='/images/beliakin.png' width={720} height={629} alt='image' className='relative -top-28 -right-28 -z-10 mask bg-brand-yellow' />

      </section>
    </main>
  )
}
export default Home
