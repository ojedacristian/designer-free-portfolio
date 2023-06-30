import React from 'react'
import { type PropsWithChildren } from 'react'
import './globals.css'
import { Raleway } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['500']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${raleway.className} ${raleway.className} bg-gray-50`}>
        <main className='container mx-auto px-32'>
          <header className='flex justify-between pt-3'>
            <div className='text-lg'>
              <Link href='/'>Madelyn Torff</Link>
            </div>
            <nav className='flex gap-12 text-lg leading-7'>
              <Link href='/about'>About</Link>
              <Link href='/projects'>Projects</Link>
              <Link href='/contact'>Contact</Link>
            </nav>
          </header>
          {children}
          <footer className='flex flex-col items-center'>
            <div className='flex justify-center gap-6'>
              <Image src='images/instagram-logo.svg' alt='Instagram logo' width={48} height={48} />
              <Image src='images/linkedin-logo.svg' alt='linkedin logo' width={48} height={48} />
              <Image src='images/mail-icon.svg' alt='mail icon' width={48} height={48} />
            </div>
            <small className='text-brand-grayMedium text-base mt-8 mb-20' >Madelyn Torff 2021</small>
          </footer>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
