import Image from 'next/image'
import React from 'react'

export default function TextSectiona() {
    return (
        <div>
            <div className='max-w-7xl m-auto'>
                <div>
                    <h1 className='font-bold mt-10 text-[24px] leading-[32px] tracking-[0px] '>Description</h1>
                    <p className='text-[#6A7282] font-medium text-[16px] leading-[24px] tracking-[0px] w-[847px] mt-6'>Discover the timeless beauty of one of the world’s oldest cities with the Samarkand Cultural Heritage Tour. This immersive journey takes you through iconic landmarks, breathtaking architecture, and centuries of rich history that shaped the Silk Road. Explore magnificent monuments such as Registan Square, Shah-i-Zinda, and the Gur-e-Amir Mausoleum, each telling its own story of ancient civilizations and cultural brilliance.
                        <br />
                        <br />
                        Guided by local experts, you’ll uncover hidden gems, experience authentic traditions, and gain a deeper understanding of Samarkand’s artistic, spiritual, and architectural legacy. Perfect for history enthusiasts, culture lovers, and curious travelers seeking an unforgettable adventure.</p>
                </div>
                <div>
                    <h2 className='font-bold mt-10 text-[24px] leading-[32px] tracking-[0px] '>About this activity</h2>
                    <div>
                        <div className='mt-6 flex   gap-3 items-start'>
                            <Image src={'/icon/svg1.svg'} width={24} height={24} alt='a' />
                            <span>
                                <h1 className='font-semibold text-[18px] leading-[28px] tracking-[0px]'>Free cancellation</h1>
                                <p className='text-[#6A7282] font-medium text-[16px] leading-[24px] tracking-[0px] mt-2'>Cancel up to 24 hours in advance for a full refund</p>
                            </span>
                        </div>
                        <div className='mt-6 flex   gap-3 items-start'>
                            <Image src={'/icon/svg2.svg'} width={24} height={24} alt='a' />
                            <span>
                                <h1 className='font-semibold text-[18px] leading-[28px] tracking-[0px]'>Host or greeter</h1>
                                <p className='text-[#6A7282] font-medium text-[16px] leading-[24px] tracking-[0px] mt-2'>English, French, Spanish, German, Korean, Japanese, Russian, Chinese</p>
                            </span>
                        </div>
                        <div className='mt-6 flex   gap-3 items-start'>
                            <Image src={'/icon/svg3.svg'} width={24} height={24} alt='a' />
                            <span>
                                <h1 className='font-semibold text-[18px] leading-[28px] tracking-[0px]'>Duration: 2 day / 1ight</h1>
                                <p className='text-[#6A7282] font-medium text-[16px] leading-[24px] tracking-[0px] mt-2'>Check availability to see starting times</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
