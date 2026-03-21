'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { i18n } = useTranslation()

  return (
    <div className='relative bg-[url(/header.png)] bg-center bg-cover bg-no-repeat mt-6'>
      <div className='max-w-7xl m-auto'>
        <div className='pt-[502px] pb-20 relative z-10'>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='font-bold text-[96px] leading-[110px] tracking-[-0.02em] text-white'
          >
            BUKHARA TOUR
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className='mt-4 font-medium text-[18px] leading-[28px] tracking-normal w-[730px] text-white'
          >
            Discover ancient madrasahs, majestic minarets, and vibrant bazaars in one of Central Asia’s most captivating cities. Let history, architecture, and authentic Uzbek hospitality create an unforgettable journey
          </motion.p>
          <Link href={'/tour-city'}>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className='cursor-pointer w-[125px] h-[48px] rounded-[100px] bg-white font-semibold text-[16px] leading-[24px] tracking-normal text-center mt-7'
            >
              Go to Tour
            </motion.button>
          </Link>

        </div>
      </div>

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className='absolute bottom-0 w-full'
        src="/headerdark.png"
        alt=""
      />
    </div>
  )
}