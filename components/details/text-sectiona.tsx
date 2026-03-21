import Image from 'next/image'
import React from 'react'
import type { City } from '@/lib/cities'

export default function TextSectiona({ city }: { city: City }) {
    return (
        <div className="w-full min-w-0">
            <div className='max-w-7xl m-auto w-full min-w-0'>
                <div>
                    <h1 className='font-bold mt-10 text-[24px] leading-[32px] tracking-[0px] max-md:text-[18px]'>Description</h1>
                    <p className='text-[#6A7282] font-medium text-[16px] leading-[24px] tracking-[0px] w-full max-w-[847px] mt-6 max-md:text-[14px]'>
                        {city.description}
                    </p>
                </div>
                <div>
                    <h2 className='font-bold mt-10 text-[24px] leading-[32px] tracking-[0px] max-md:text-[18px]'>About this activity</h2>
                    <div>
                        {city.aboutActivity.map((item, idx) => (
                          <div key={idx} className='mt-6 flex   gap-3 items-start'>
                            <Image src={item.iconSrc} width={24} height={24} alt='a' />
                            <span>
                                <h1 className='font-semibold text-[18px] leading-[28px] tracking-[0px]'>
                                  {item.title}
                                </h1>
                                <p className='text-[#6A7282] font-medium text-[16px] leading-[24px] tracking-[0px] mt-2'>
                                  {item.text}
                                </p>
                            </span>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
