'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='max-w-7xl m-auto flex justify-between items-center mt-6 mb-6'
        >
            <Link href={'/'}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Image src={'/icon/logo.svg'} width={157} height={44} alt='Logo' />
                </motion.div>
            </Link>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex justify-center items-center flex-col'
            >
                <Image src={'/icon/Globe.svg'} width={24} height={24} alt='Globe' />
                <h1>English</h1>
            </motion.div>
        </motion.div>
    )
}