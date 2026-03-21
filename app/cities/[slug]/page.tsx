import { notFound } from 'next/navigation'
import CityDetailWidget from '@/components/details/city-detail-widget'
import TextSectiona from '@/components/details/text-sectiona'
import Itinerary from '@/components/details/Itinerary'
import Cheack from '@/components/details/cheack'
import Feedbacks from '@/components/details/Feedbacks'
import DetailCard from '@/components/details/detail-card'
import { getCityBySlug } from '@/lib/cities'

export default function CityDetailPage({
  params
}: {
  params: {
    slug: string
  }
}) {
  const city = getCityBySlug(params.slug)
  if (!city) return notFound()

  return (
    <div className="w-full min-w-0 overflow-x-hidden px-4 sm:px-5 md:px-6 lg:px-8">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <CityDetailWidget city={city} />
        <TextSectiona city={city} />
        <Itinerary city={city} />
        <Cheack city={city} />
        <Feedbacks city={city} />
        <DetailCard city={city} />
      </div>
    </div>
  )
}

