import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const IsHome: React.FC = () => {
  const pathname = usePathname()
  return (
    <>
        {
            pathname === '/' &&
            <Image src='/images/beliakin.png' width={720} height={629} alt='image' className='absolute top-0 right-0 -z-10 mask bg-brand-yellow' />
        }
    </>
  )
}
export default IsHome
