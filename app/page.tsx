import React from 'react'
import Image from 'next/image'
import { Card } from '../components/Card'

const Home: React.FC = () => {
  return (
    <>
      <section className='mt-16'>
        <div className='w-1/2 flex flex-col font-bold'>
          <h2 className='text-brand-yellow text-xl'>UI/UX DESIGNER</h2>
          <h1 className='text-6xl mt-3 leading-tight'>Hello, my name is Madelyn Torff</h1>
          <p className='text-gray-700 text-2xl mt-8 font-normal leading-normal'>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
          <div className='mt-8 text-lg flex gap-3'>
            <button className='bg-brand-yellow px-6 py-2 rounded-lg'>Projects</button>
            <button className='px-6 py-2 rounded-lg border-2 border-gray-800'>LinkedIn</button>
          </div>
        </div>
      </section>
      <Image src='/images/beliakin.png' width={720} height={629} alt='image' className='absolute top-0 right-0 -z-10 mask bg-brand-yellow' />
      <section className='mt-64 flex flex-col items-center mb-36'>
        <h1 className='text-5xl font-bold leading-normal'>Projects</h1>
        <span className='bg-brand-yellow w-24 h-1 rounded-sm'></span>
        <Card
          title='Project Name'
          desc='I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.'
          img='project1.png'
        />
        <Card
          title='Project Name'
          desc='What was your role, your deliverables, if the project was personal, freelancing.'
          img='project2.png'
          odd={true}
        />
        <Card
          title='Project Name'
          desc='You can also add in this description the type of the project, if it was for web, mobile, electron.'
          img='project3.png'
        />
      </section>
    </>

  )
}
export default Home
