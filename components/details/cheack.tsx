import Image from 'next/image'
import React from 'react'
import type { City } from '@/lib/cities'

export default function Cheack({ city }: { city: City }) {
    return (
        <div className="w-full min-w-0">
            <div className='max-w-7xl m-auto w-full min-w-0 mb-6 mt-10'>
                <div className='w-full max-w-[767px] bg-[#E5E7EB] h-[2px]'></div>
            </div>
            <div className=' max-w-7xl m-auto w-full min-w-0 flex gap-[86px] max-md:flex-col max-md:gap-6  '>

                <div>
                    <h1 className='font-bold text-[18px] leading-7 tracking-[0%]'>Includes</h1>
                </div>
                <div className='flex flex-col gap-3 '>
                    {city.includes.map((item, idx) => (
                      <span key={idx} className='flex gap-2'>
                        <Image
                          src={item.kind === 'check' ? '/icon/Check.svg' : '/icon/X.svg'}
                          width={24}
                          height={24}
                          alt='?'
                        />
                        <p className='font-medium text-[16px] leading-6 tracking-[0%]'>{item.text}</p>
                      </span>
                    ))}
                </div>
            </div>
            <div className='max-w-7xl m-auto mb-6 mt-10'>
                <div className='w-full max-w-[767px] bg-[#E5E7EB] h-[2px]'></div>
            </div>
            <div>
                <div className=' max-w-7xl m-auto w-full min-w-0 flex gap-[86px] max-md:flex-col max-md:gap-6  '>

                    <div>
                        <h1 className='font-bold text-[18px] leading-7 tracking-[0%]'>Highlights</h1>
                    </div>
                    <div>
                        <ul className='list-disc flex flex-col gap-3 max-md:pl-4'>
                            {city.highlights.map((h, idx) => (
                              <li key={idx} className='font-medium text-[16px] leading-6 tracking-normal'>
                                {h}
                              </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
             <div className='max-w-7xl m-auto mb-6 mt-10'>
                <div className='w-full max-w-[767px] bg-[#E5E7EB] h-[2px]'></div>
            </div>
        </div>
    )
}
