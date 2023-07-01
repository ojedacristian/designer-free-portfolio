import { Card } from '@/components/Card'
import data from '@/components/data/data.json'
import React from 'react'

const Projects: React.FC = () => {
  const { title, projects } = data.projects
  return (
    <section className='flex flex-col items-center mt-10 mb-36' id='projects'>
        <h1 className='text-5xl font-bold leading-normal'>{title}</h1>
        <span className='bg-brand-yellow w-24 h-1 rounded-sm'></span>
        {
            projects.map(({ id, desc, image, name }) => (
                <Card
                    key={id}
                    title={name}
                    desc={desc}
                    img={image}
                />

            ))
        }
    </section>
  )
}

export default Projects
