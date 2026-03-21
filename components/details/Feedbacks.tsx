import Image from 'next/image'
import React from 'react'

export default function Feedbacks() {
    return (
        <div className='max-w-7xl m-auto'>
            <h1 className='font-bold text-[24px] leading-8 tracking-normal mt-10 mb-6'>Feedbacks</h1>
            <div className='w-[847px] p-5 rounded-[24px] bg-[#F3F4F6]'>
                <div className=' flex gap-3'>
                    <Image src={'/person.png'} className='object-cover' width={50} height={50} alt='1' />
                    <span>
                        <h1 className='font-semibold text-[#1E2939]'>Carolina Marks - Australia</h1>
                        <p className='text-[#6A7282] text-[14px]'>January 24, 2026</p>
                    </span>
                </div>
                <p className='text-[#1E2939] mt-4'>The trip exceeded all my expectations! The hospitality, historical landmarks, and vibrant atmosphere made the entire journey unforgettable. I especially enjoyed visiting the ancient sites and learning about their history. Everything was beautifully organized, and I felt completely immersed in the local culture. Truly an experience I’ll cherish for a long time!</p>
            </div>
            <div className='w-[847px] mt-4 p-5 rounded-[24px] bg-[#F3F4F6]'>
                <div className=' flex gap-3'>
                    <Image src={'/person.png'} className='object-cover' width={50} height={50} alt='1' />
                    <span>
                        <h1 className='font-semibold text-[#1E2939]'>Andrey Grigoriy - Russia</h1>
                        <p className='text-[#6A7282] text-[14px]'>January 24, 2026</p>
                    </span>
                </div>
                <p className='text-[#1E2939] mt-4'>An amazing experience from start to finish! The tour was thoughtfully planned, the guide was incredibly knowledgeable, and every destination had its own unique charm. I was especially impressed by the architecture and the rich cultural stories shared throughout the journey. It was one of the most memorable trips I’ve ever taken, and I would gladly visit again!</p>
                <div className='mt-4 flex gap-3'>
                    <Image src={'/sec1.png'} width={106} height={80} className='rounded-[12px]' alt='a'/>
                    <Image src={'/sec1.png'} width={106} height={80} className='rounded-[12px]' alt='a'/>
                    <Image src={'/sec1.png'} width={106} height={80} className='rounded-[12px]' alt='a'/>
                </div>
            </div>
            
        </div>
    )
}
