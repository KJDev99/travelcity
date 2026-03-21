"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Card() {

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const city = {
    name: "Bukhara",
    tours: "20+ tours available",
    image: "/sec1.png",
    size: "305"
  }

  return (
    <Link href={'/city-detail'}>
      <div className="">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-[24px] cursor-pointer group"
          style={{ width: `${city.size}px`, height: "220px" }}
        >
          <Image
            src={city.image}
            alt={city.name}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 transform transition-transform duration-700 group-hover:-translate-y-full">
            <h1 className="text-white text-center font-bold mb-1 text-[24px] leading-[32px]">
              {city.name}
            </h1>

            <p className="text-white text-center font-medium text-[14px] leading-[20px]">
              {city.tours}
            </p>
          </div>

        </motion.div>
      </div>
    </Link>
  )
}