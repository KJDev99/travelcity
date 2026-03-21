import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaPinterestP, FaTelegramPlane } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='bg-[#1E2939] pt-6'>
            <div className='max-w-7xl m-auto'>
                <div className='flex justify-between items-center'>
                    <Image src={'/icon/footerlogo.svg'} width={120} height={44} alt='as' />
                    <div className='flex gap-6'>
                        <a className='font-semibold text-[18px] leading-[28px] tracking-[0%] text-[#D1D5DC]' href="">Tashkent</a>
                        <a className='font-semibold text-[18px] leading-[28px] tracking-[0%] text-[#D1D5DC]' href="">Bukhara</a>
                        <a className='font-semibold text-[18px] leading-[28px] tracking-[0%] text-[#D1D5DC]' href="">Samarkand</a>
                        <a className='font-semibold text-[18px] leading-[28px] tracking-[0%] text-[#D1D5DC]' href="">Shahrisabz</a>
                        <a className='font-semibold text-[18px] leading-[28px] tracking-[0%] text-[#D1D5DC]' href="">Termez</a>
                        <a className='font-semibold text-[18px] leading-[28px] tracking-[0%] text-[#D1D5DC]' href="">Khorezm</a>
                    </div>
                        <a className='font-semibold text-[18px] leading-[28px] tracking-[0%] text-[#D1D5DC]' href="">+998 91 001-00-00</a>
                </div>
                <div className='flex justify-between items-center mt-4.75 pb-6'>
                    <h1 className=' font-normal text-[14px] leading-[100%] tracking-normal text-white '>© 2026 - Designed with in Tashkent</h1>
                    <div className='flex gap-4 text-[#99A1AF]'>
                        <FaTelegramPlane  size={24}/>
                        <FaPinterestP  size={24}/>
                        <FaInstagram size={24} />
                        <FaFacebook  size={24}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
