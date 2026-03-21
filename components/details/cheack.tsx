import Image from 'next/image'
import React from 'react'

export default function Cheack() {
    return (
        <div>
            <div className='max-w-7xl m-auto mb-6 mt-10'>
                <div className='w-[767px] bg-[#E5E7EB] h-[2px]'></div>
            </div>
            <div className=' max-w-7xl m-auto flex gap-[86px]  '>

                <div>
                    <h1 className='font-bold text-[18px] leading-7 tracking-[0%]'>Includes</h1>
                </div>
                <div className='flex flex-col gap-3 '>
                    <span className='flex gap-2'>
                        <Image src={'/icon/Check.svg'} width={24} height={24} alt='?' />
                        <p className='font-medium text-[16px] leading-6 tracking-[0%]'> Professional English-speaking tour guide</p>
                    </span>
                    <span className='flex gap-2'>
                        <Image src={'/icon/Check.svg'} width={24} height={24} alt='?' />
                        <p className='font-medium text-[16px] leading-6 tracking-[0%]'> Comfortable private transport (AC car/minivan)</p>
                    </span>
                    <span className='flex gap-2'>
                        <Image src={'/icon/Check.svg'} width={24} height={24} alt='?' />
                        <p className='font-medium text-[16px] leading-6 tracking-[0%]'> Hotel pick-up & drop-off</p>
                    </span>
                    <span className='flex gap-2'>
                        <Image src={'/icon/Check.svg'} width={24} height={24} alt='?' />
                        <p className='font-medium text-[16px] leading-6 tracking-[0%]'> Entrance fees to major landmarks (Registan, Gur-Emir, Shah-i Zinda, Bibi-Khanum)</p>
                    </span>
                    <span className='flex gap-2'>
                        <Image src={'/icon/x.svg'} width={24} height={24} alt='?' />
                        <p className='font-medium text-[16px] leading-6 tracking-[0%]'> Meals & drinks (lunch/dinner)</p>
                    </span>
                    <span className='flex gap-2'>
                        <Image src={'/icon/x.svg'} width={24} height={24} alt='?' />
                        <p className='font-medium text-[16px] leading-6 tracking-[0%]'> Personal expenses (souvenirs, snacks, etc.)</p>
                    </span>
                </div>
            </div>
            <div className='max-w-7xl m-auto mb-6 mt-10'>
                <div className='w-[767px] bg-[#E5E7EB] h-[2px]'></div>
            </div>
            <div>
                <div className=' max-w-7xl m-auto flex gap-[86px]  '>

                    <div>
                        <h1 className='font-bold text-[18px] leading-7 tracking-[0%]'>Highlights</h1>
                    </div>
                    <div>
                        <ul className='list-disc flex flex-col gap-3'>
                            <li className='font-medium text-[16px] leading-6 tracking-normal'>The iconic Timurid architectural ensemble and heart of ancient Samarkand</li>
                            <li className='font-medium text-[16px] leading-6 tracking-normal'>Resting place of Amir Temur (Tamerlane) and the Timurid dynasty</li>
                            <li className='font-medium text-[16px] leading-6 tracking-normal'>A breathtaking avenue of blue-tiled mausoleums</li>
                            <li className='font-medium text-[16px] leading-6 tracking-normal'>One of the grandest mosques in Central Asia</li>
                        </ul>
                    </div>
                </div>
            </div>
             <div className='max-w-7xl m-auto mb-6 mt-10'>
                <div className='w-[767px] bg-[#E5E7EB] h-[2px]'></div>
            </div>
        </div>
    )
}
