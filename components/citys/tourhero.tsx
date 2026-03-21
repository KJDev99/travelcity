import React from 'react'
import Card from '../ui/card'

export default function TourHero() {
    return (
        <div>
            <div className='bg-[url(/tourhero.png)] bg-center bg-cover bg-no-repeat'>
                <div className='max-w-7xl m-auto pb-[81px] pt-[82px]'>
                    <h1 className='font-bold text-[48px] leading-[60px] tracking-[-0.02em] text-white'>
                        Tours by cities
                    </h1>
                    <p className='text-white mt-2'>
                        Popular destinations for tourists
                    </p>
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-5 mt-16 mb-8'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}