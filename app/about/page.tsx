import Image from 'next/image'
import React from 'react'
import data from '@/components/data/data.json'

export const AboutPage: React.FC = () => {
  const { cta, desc, image, title } = data.about
  return (
        <section className='flex items-center mt-10 mb-36'>
            <article className='pr-24'>
                <h1 className='text-5xl font-bold mb-8'>{ title }</h1>
                <p className='text-brand-grayMedium text-2xl font-normal leading-normal'>{ desc }</p>
            <button className='bg-brand-yellow px-6 py-2 rounded-lg text-lg mt-8'>{ cta }</button>
            </article>
            <Image src={`/images/${image}`} width={524} height={524} alt='Profile img' />
        </section>
  )
}

export default AboutPage
