'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { type NextPage } from 'next'

interface Props {
  children: React.ReactNode
  className?: string
}

const PageTransition: NextPage<Props> = ({ children, className = '' }) => {
  const pathname = usePathname()
  return (
      <motion.div
          className={ className }
          key={pathname}
          initial={{ opacity: 0, x: '-100' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
      >
          {children}
      </motion.div>
  )
}
export default PageTransition
