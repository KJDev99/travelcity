import React from 'react'
import TourDetail from '@/components/details/section1'
import TextSectiona from '@/components/details/text-sectiona'
import Itinerary from '@/components/details/Itinerary'
import Cheack from '@/components/details/cheack'
import Feedbacks from '@/components/details/Feedbacks'
import DetailCard from '@/components/details/detail-card'
export default function page() {
    return (
        <div>
            <TourDetail />
            <TextSectiona />
            <Itinerary />
            <Cheack />
            <Feedbacks />
            <DetailCard />
        </div>
    )
}
