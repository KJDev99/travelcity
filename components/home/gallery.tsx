'use client' // agar Next.js 13+ App Router ishlatayotgan bo‘lsangiz

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

// Parent konteyner uchun variantlar (tepadan tushish + stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.12,     // har bir rasm 0.12 soniya kechikib chiqadi
    },
  },
}

// Har bir rasm (image wrapper) uchun variant
const imageVariants = {
  hidden: {
    opacity: 0,
    y: -60,           // tepadan -60px yuqoridan boshlanadi
  },
  visible: {
    opacity: 1,
    y: 0,             // o‘z joyiga tushadi
    transition: {
      type: 'spring',   // tabiiyroq, yumshoq harakat
      stiffness: 100,
      damping: 15,
      duration: 0.7,
    },
  },
}

export default function Gallery() {
  return (
    <div className="max-w-[1280px] mx-auto mt-16 mb-16 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-[36px] font-bold">Gallery</h1>
        <p className="font-medium text-[#6A7282] mt-2">
          Discover moments from every journey
        </p>
      </div>

      <motion.div
        className="flex flex-col md:flex-row gap-5 mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Birinchi ustun */}
        <motion.div className="flex flex-col gap-5" variants={imageVariants}>
          <div className="flex gap-5">
            <motion.div
              className="w-[256px] h-[256px] rounded-[20px] overflow-hidden"
              variants={imageVariants}
            >
              <Image
                src="/sec2.png"
                className="w-full h-full object-cover"
                width={256}
                height={256}
                alt="gallery image 1"
              />
            </motion.div>
            <motion.div
              className="w-[256px] h-[256px] rounded-[20px] overflow-hidden"
              variants={imageVariants}
            >
              <Image
                src="/sec2.png"
                className="w-full h-full object-cover"
                width={256}
                height={256}
                alt="gallery image 2"
              />
            </motion.div>
          </div>

          <motion.div
            className="w-[532px] h-[400px] rounded-[20px] overflow-hidden"
            variants={imageVariants}
          >
            <Image
              src="/sec2.png"
              className="w-full h-full object-cover"
              width={532}
              height={400}
              alt="gallery image 3"
            />
          </motion.div>
        </motion.div>

        {/* Ikkinchi ustun */}
        <motion.div className="flex flex-col gap-5" variants={imageVariants}>
          <motion.div
            className="w-[305px] h-[328px] rounded-[20px] overflow-hidden"
            variants={imageVariants}
          >
            <Image
              src="/sec2.png"
              className="w-full h-full object-cover"
              width={305}
              height={328}
              alt="gallery image 4"
            />
          </motion.div>

          <motion.div
            className="w-[305px] h-[328px] rounded-[20px] overflow-hidden"
            variants={imageVariants}
          >
            <Image
              src="/sec2.png"
              className="w-full h-full object-cover"
              width={305}
              height={328}
              alt="gallery image 5"
            />
          </motion.div>
        </motion.div>

        {/* Uchinchi ustun */}
        <motion.div className="flex flex-col gap-5" variants={imageVariants}>
          <motion.div
            className="w-[403px] h-[222px] rounded-[20px] overflow-hidden"
            variants={imageVariants}
          >
            <Image
              src="/sec2.png"
              className="w-full h-full object-cover"
              width={403}
              height={222}
              alt="gallery image 6"
            />
          </motion.div>

          <div className="flex gap-5">
            <motion.div
              className="w-[191.5px] h-[191.5px] rounded-[20px] overflow-hidden"
              variants={imageVariants}
            >
              <Image
                src="/sec2.png"
                className="w-full h-full object-cover"
                width={191}
                height={191}
                alt="gallery image 7"
              />
            </motion.div>
            <motion.div
              className="w-[191.5px] h-[191.5px] rounded-[20px] overflow-hidden"
              variants={imageVariants}
            >
              <Image
                src="/sec2.png"
                className="w-full h-full object-cover"
                width={191}
                height={191}
                alt="gallery image 8"
              />
            </motion.div>
          </div>

          <motion.div
            className="w-[403px] h-[222px] rounded-[20px] overflow-hidden"
            variants={imageVariants}
          >
            <Image
              src="/sec2.png"
              className="w-full h-full object-cover"
              width={403}
              height={222}
              alt="gallery image 9"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}