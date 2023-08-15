'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface Props {
  href: string
}

export const NavUnderline: React.FC<Props> = ({ href }) => {
  const pathname = usePathname()

  return (
    <>
        {
            pathname === href &&
            <motion.span layoutId='navspan' className='absolute left-0 top-full block h-[2px] w-full bg-brand-yellow'/>
        }
    </>
  )
}
