import Image from 'next/image'
import React from 'react'
interface CardProps {
  title: string
  desc: string
  img: string
  odd?: boolean
}

export const Card: React.FC<CardProps> = ({ title, desc, img, odd = false }) => {
  return (
        <article className={`mt-20 flex rounded-3xl bg-white justify-between ${odd ? 'flex-row-reverse' : ''} items-center w-4/5`}>
            <aside className='px-12'>
                <h3 className='text-brand-grayHigh text-4xl font-bold leading-normal'>{ title }</h3>
                <p className='text-lg font-normal leading-normal text-brand-grayMedium py-6'>{ desc }</p>
                <button className='px-6 py-2 border border-brand-grayHigh leading-normal text-lg rounded-3xl'>View Project</button>
            </aside>
            <Image src={`/images/${img}`} width={496} height={526} alt='project1' className={odd ? 'rounded-s-3xl' : 'rounded-e-3xl'} />
        </article>
  )
}
