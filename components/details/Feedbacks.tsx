import Image from 'next/image'
import React from 'react'
import type { City } from '@/lib/cities'

export default function Feedbacks({ city }: { city: City }) {
    return (
        <div className='max-w-7xl m-auto w-full min-w-0'>
            <h1 className='font-bold text-[24px] leading-8 tracking-normal mt-10 mb-6 max-md:text-[18px]'>Feedbacks</h1>
            {city.feedbacks.map((fb, idx) => {
              const avatarSrc = fb.photos?.[0] || '/person.png'
              const gallery = fb.photos?.slice(1, 4) || []
              return (
                <div
                  key={idx}
                  className={`w-full max-w-[847px] ${idx === 0 ? 'p-5' : 'mt-4 p-5'} rounded-[24px] bg-[#F3F4F6]`}
                >
                  <div className=' flex gap-3'>
                    <Image src={avatarSrc} className='object-cover' width={50} height={50} alt='avatar' />
                    <span>
                        <h1 className='font-semibold text-[#1E2939]'>{fb.name}</h1>
                        <p className='text-[#6A7282] text-[14px]'>{fb.dateText}</p>
                    </span>
                  </div>
                  <p className='text-[#1E2939] mt-4'>{fb.text}</p>

                  {gallery.length > 0 && (
                    <div className='mt-4 flex gap-3'>
                      {gallery.map((src, i) => (
                        <Image
                          key={i}
                          src={src}
                          width={106}
                          height={80}
                          className='rounded-[12px]'
                          alt='feedback photo'
                        />
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            
        </div>
    )
}
