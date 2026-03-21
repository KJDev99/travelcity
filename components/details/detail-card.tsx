import React from 'react'
import FeatureCard from '../ui/featurecard'

export default function DetailCard() {
    return (
        <div className='max-w-7xl m-auto'>
            <div className='mt-24'>
                <h1 className='font-bold text-[36px] leading-[44px] tracking-[-0.02em]'>You might also like</h1>
                <p className=' font-medium text-[#6A7282] mt-2'>Explore The Uzbekistan`s most iconic cities and hidden gems</p>
            </div>
            <div className='flex justify-center gap-5 mb-8 mt-6'>
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
            </div>
        </div>
    )
}
