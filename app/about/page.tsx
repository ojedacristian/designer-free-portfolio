import Image from 'next/image'
import React from 'react'

export const About: React.FC = () => {
  return (
        <section className='flex items-center mt-10 mb-36'>
            <article className='pr-24'>
                <h1 className='text-5xl font-bold mb-8'>About me</h1>
                <p className='text-brand-grayMedium text-2xl font-normal leading-normal'>Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.</p>
            <button className='bg-brand-yellow px-6 py-2 rounded-lg text-lg mt-8'>Resume</button>
            </article>
            <Image src='/images/aboutimg.png' width={524} height={524} />
        </section>
  )
}

export default About
