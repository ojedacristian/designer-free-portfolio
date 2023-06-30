import { Card } from '@/components/Card'
import React from 'react'

const Projects: React.FC = () => {
  return (
        <section className='flex flex-col items-center mt-10 mb-36' id='projects'>
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
  )
}

export default Projects
