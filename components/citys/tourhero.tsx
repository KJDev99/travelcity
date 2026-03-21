import React from 'react'
import Card from '../ui/card'
import { cities } from '@/lib/cities'

export default function TourHero() {
    return (
        <div>
            <div className='bg-[url(/tourhero.png)] bg-center bg-cover bg-no-repeat max-md:px-4'>
                <div className='max-w-7xl m-auto pb-[81px] pt-[82px] max-md:pb-10 max-md:pt-14'>
                    <h1 className='font-bold text-[48px] leading-[60px] tracking-[-0.02em] text-white max-md:text-[28px] max-md:leading-[36px]'>
                        Tours by cities
                    </h1>
                    <p className='text-white mt-2 max-md:text-[13px] max-md:leading-[18px]'>
                        Popular destinations for tourists
                    </p>
                </div>
            </div>

           <div className="max-w-7xl m-auto max-md:px-4">
           <div className='flex flex-wrap justify-center gap-5 mt-16 mb-8 max-md:flex-col max-md:w-[330px] max-md:mx-auto'>
                {Array.from({ length: 12 }).map((_, i) => {
                    const city = cities[i % cities.length]
                    return <Card key={`${city.slug}-${i}`} city={city} />
                })}
            </div>
           </div>
        </div>
    )
}