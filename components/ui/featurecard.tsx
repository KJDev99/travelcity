'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureCard() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
      }}
      className='border-[2px] border-neutral-100 w-[305px] rounded-[20px] bg-white'
    >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Image src={'/sec1.png'} className='rounded-[22px]' width={305} height={228} alt='as'/>
        </motion.div>

        <div className='p-4'>
          <motion.h1
            initial={{ opacity: 0, y: 10 }    }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='font-semibold text-[18px] text-[#1E2939] mb-2'
          >
            Samarkand Cultural Heritage Tour
          </motion.h1>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className='font-medium text-[12px] text-[#6A7282]'>From</p>
            <p className='text-[#EA004A] text-[18px] font-bold'>200,000 UZS</p>
          </motion.span>
        </div>
    </motion.div>
  )
}