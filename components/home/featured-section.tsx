'use client'

import React from 'react'
import FeatureCard from '../ui/featurecard'
import { motion } from 'framer-motion'

// Sample data array
const tours = [
  { title: "Samarkand Cultural Heritage Tour", price: "200,000 UZS", image: "/sec1.png" },
  { title: "Bukhara Historical Tour", price: "180,000 UZS", image: "/sec2.png" },
  { title: "Khiva Ancient City Tour", price: "220,000 UZS", image: "/sec3.png" },
  { title: "Fergana Valley Tour", price: "250,000 UZS", image: "/sec4.png" },
  { title: "Tashkent City Highlights", price: "150,000 UZS", image: "/sec5.png" },
  { title: "Nukus Art & Culture Tour", price: "230,000 UZS", image: "/sec6.png" },
  { title: "Shakhrisabz Historical Tour", price: "200,000 UZS", image: "/sec7.png" },
  { title: "Termez Silk Road Tour", price: "210,000 UZS", image: "/sec8.png" },
];

export default function FeaturedSection() {

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <div className='max-w-7xl m-auto mt-[64px]'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className='text-[36px] font-bold'>Featured tours</h1>
        <p className='font-medium text-[#6A7282] mt-2'>
          Explore the Uzbekistan`s most iconic cities and hidden gems
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className='mt-6 grid grid-cols-4 gap-5'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {tours.map((tour, index) => (
          <motion.div key={index} variants={cardVariants}>
            <FeatureCard
              title={tour.title}
              price={tour.price}
              image={tour.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}