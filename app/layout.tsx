'use client'
import React from 'react'
import { type PropsWithChildren } from 'react'
import './globals.css'
import { Raleway } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import data from '@/components/data/data.json'
import PageTransition from '../components/PageTransition'
import { usePathname } from 'next/navigation'
import IsHome from '../components/IsHome'
import { motion } from 'framer-motion'
import { type Metadata } from 'next'

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['500']
})

export const metadata: Metadata = {
  title: 'UX/UI Designer Portfolio',
  description: 'Free template for UX/UI Designer Portfolio',
  keywords: 'UX, UI, Designer, Developer, Frontend, Multimedia, Design'
}

export const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { headerTitle, linksHeader, linksFooter, footerTitle } = data.navigation
  const pathname = usePathname()

  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${raleway.className} ${raleway.className} bg-gray-50`}>
        <main className='container mx-auto px-4 md:px-16 lg:px-32 relative'>
          <header className='flex flex-col gap-4 items-center md:flex-row md:justify-between pt-3'>
            <div className='text-lg self-start'>
              <Link href='/'>
                { headerTitle }
                </Link>
            </div>
            <nav className='flex gap-12 text-lg leading-7'>
              {
                linksHeader.map(link => (
                  <>
                    <Link className='relative' key={link.href} href={ link.href }>
                      { link.label}
                      {
                        pathname === link.href &&
                        <motion.span layoutId='navspan' className='absolute left-0 top-full block h-[2px] w-full bg-brand-yellow'/>
                      }
                      </Link>
                  </>
                ))
              }
            </nav>
          </header>
          <PageTransition className='relative top-0'>
            {children}
          </PageTransition>
          <IsHome/>
          <footer className='flex flex-col items-center'>
            <div className='flex justify-center gap-6'>
              {
                linksFooter.map(link => (
                  <a key={link.href} href={ link.href} target='_blank' rel="noreferrer">
                    <Image src={ `images/${link.icon}`} alt={link.label} width={48} height={48} />
                  </a>
                ))
              }
            </div>
            <small className='text-brand-grayMedium text-center text-base mt-4 sm:mt-8 mb-4 sm:mb-20'>
              { footerTitle }
            <br />
            Developed by <a href="https:cristianojeda.com.ar" className='text-brand-grayHigh hover:underline' target='_blank' rel="noreferrer">Cristian Ojeda</a>
            </small>
          </footer>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
