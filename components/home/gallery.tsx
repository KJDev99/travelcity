'use client'

import Image from 'next/image'
import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const images = [
  { src: '/sec2.png', width: 256, height: 256 },
  { src: '/sec2.png', width: 256, height: 256 },
  { src: '/sec2.png', width: 532, height: 400 },
  { src: '/sec2.png', width: 305, height: 328 },
  { src: '/sec2.png', width: 305, height: 328 },
  { src: '/sec2.png', width: 403, height: 222 },
  { src: '/sec2.png', width: 191, height: 191 },
  { src: '/sec2.png', width: 191, height: 191 },
  { src: '/sec2.png', width: 403, height: 222 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.12 } },
}

const imageVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

function Lightbox({ index, onClose }: { index: number; onClose: () => void }) {
  const [current, setCurrent] = useState(index)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((next: number) => {
    setFading(true)
    setTimeout(() => {
      setCurrent((next + images.length) % images.length)
      setFading(false)
    }, 200)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goTo(current + 1)
      if (e.key === 'ArrowLeft') goTo(current - 1)
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [current, goTo, onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/25 transition"
        >
          <X size={18} className="text-white" />
        </button>

        {/* Counter */}
        <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tracking-widest z-20">
          <span className="text-white font-semibold">{current + 1}</span> / {images.length}
        </p>

        {/* Main content */}
        <div
          className="relative flex items-center justify-center w-full h-full px-20"
          onClick={e => e.stopPropagation()}
        >
          {/* Prev */}
          <button
            onClick={() => goTo(current - 1)}
            className="absolute left-5 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/25 transition backdrop-blur-sm"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          {/* Image — to'liq ekranga yaqin */}
          <div
            className={`transition-opacity duration-200 flex items-center justify-center ${fading ? 'opacity-0' : 'opacity-100'}`}
            style={{ maxWidth: '85vw', maxHeight: '88vh' }}
          >
            <img
              src={images[current].src}
              alt={`gallery ${current + 1}`}
              style={{
                maxWidth: '85vw',
                maxHeight: '88vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 25px 80px rgba(0,0,0,0.8)',
              }}
            />
          </div>

          {/* Next */}
          <button
            onClick={() => goTo(current + 1)}
            className="absolute right-5 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/25 transition backdrop-blur-sm"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const ImgBox = ({ index, className, width, height, alt }: {
    index: number; className?: string; width: number; height: number; alt: string
  }) => (
    <motion.div
      className={`relative rounded-[20px] overflow-hidden cursor-pointer group ${className}`}
      variants={imageVariants}
      onClick={() => setLightboxIndex(index)}
    >
      <Image
        src={images[index].src}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        width={width}
        height={height}
        alt={alt}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
          <ZoomIn size={16} className="text-white" />
        </div>
      </div>
    </motion.div>
  )

  return (
    <>
      <div className="max-w-[1280px] mx-auto mt-16 mb-16 px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-[36px] font-bold max-md:text-[26px]">Gallery</h1>
          <p className="font-medium text-[#6A7282] mt-2 text-[14px] max-md:text-[13px]">
            Discover moments from every journey
          </p>
        </div>

        <motion.div
          className="flex flex-col md:flex-row gap-5 mt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Col 1 */}
          <motion.div className="flex flex-col gap-5" variants={imageVariants}>
            <div className="flex gap-5 max-md:flex-col">
              <ImgBox index={0} className="w-[256px] h-[256px] max-md:w-full max-md:h-[220px]" width={256} height={256} alt="gallery 1" />
              <ImgBox index={1} className="w-[256px] h-[256px] max-md:w-full max-md:h-[220px]" width={256} height={256} alt="gallery 2" />
            </div>
            <ImgBox index={2} className="w-[532px] h-[400px] max-md:w-full max-md:h-[260px]" width={532} height={400} alt="gallery 3" />
          </motion.div>

          {/* Col 2 */}
          <motion.div className="flex flex-col gap-5" variants={imageVariants}>
            <ImgBox index={3} className="w-[305px] h-[328px] max-md:w-full max-md:h-[240px]" width={305} height={328} alt="gallery 4" />
            <ImgBox index={4} className="w-[305px] h-[328px] max-md:w-full max-md:h-[240px]" width={305} height={328} alt="gallery 5" />
          </motion.div>

          {/* Col 3 */}
          <motion.div className="flex flex-col gap-5" variants={imageVariants}>
            <ImgBox index={5} className="w-[403px] h-[222px] max-md:w-full max-md:h-[200px]" width={403} height={222} alt="gallery 6" />
            <div className="flex gap-5 max-md:flex-col">
              <ImgBox index={6} className="w-[191.5px] h-[191.5px] max-md:w-full max-md:h-[190px]" width={191} height={191} alt="gallery 7" />
              <ImgBox index={7} className="w-[191.5px] h-[191.5px] max-md:w-full max-md:h-[190px]" width={191} height={191} alt="gallery 8" />
            </div>
            <ImgBox index={8} className="w-[403px] h-[222px] max-md:w-full max-md:h-[200px]" width={403} height={222} alt="gallery 9" />
          </motion.div>
        </motion.div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </>
  )
}