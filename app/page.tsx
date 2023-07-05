import React from 'react'
import data from '@/components/data/data.json'
import ProjectsPage from './projects/page'

const Home: React.FC = () => {
  const { subheading, heading, desc, cta1, cta2 } = data.home
  return (
    <>
      <section className='mt-16 mb-64'>
        <div className='w-1/2 flex flex-col font-bold'>
          <h2 className='text-brand-yellow text-xl'>{ subheading }</h2>
          <h1 className='text-6xl mt-3 leading-tight'>{ heading }</h1>
          <p className='text-gray-700 text-2xl mt-8 font-normal leading-normal'>{ desc }</p>
          <div className='mt-8 text-lg flex gap-3'>
            <a href={ cta1.link }>
              <button className='bg-brand-yellow px-6 py-2 rounded-lg'>{ cta1.desc }</button>
            </a>
            <a href={ cta2.link }>
              <button className='px-6 py-2 rounded-lg border-2 border-gray-800'>{ cta2.desc }</button>
            </a>
          </div>
        </div>
      </section>
      <ProjectsPage/>
    </>

  )
}
export default Home
