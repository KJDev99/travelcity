export type TourItineraryItem = {
  time: string
  title: string
  description: string
}

export type TourIncludeItem = {
  kind: 'check' | 'x'
  text: string
}

export type TourFeedback = {
  name: string
  dateText: string
  text: string
  photos?: string[]
}

export type City = {
  slug: string
  name: string

  // Section1 (booking + gallery)
  tourTitle: string
  reviewsText: string
  durationText: string
  priceFromText: string
  galleryImages: string[]

  // Other sections
  description: string
  aboutActivity: Array<{
    title: string
    text: string
    iconSrc: string
  }>
  itinerary: TourItineraryItem[]
  mapEmbedSrc: string
  includes: TourIncludeItem[]
  highlights: string[]
  feedbacks: TourFeedback[]
}

export const cities: City[] = [
  {
    slug: 'bukhara',
    name: 'Bukhara',
    tourTitle: 'Bukhara Cultural Heritage Tour',
    reviewsText: '120 reviews',
    durationText: '4 days / 3 nights',
    priceFromText: '206,000 UZS',
    galleryImages: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523',
      '/sec1.png',
      '/sec1.png',
      '/sec1.png',
      '/sec1.png'
    ],
    description:
      'Discover the timeless beauty of Bukhara with an immersive journey through iconic monuments, stunning architecture, and stories from the Silk Road.',
    aboutActivity: [
      {
        title: 'Free cancellation',
        text: 'Cancel up to 24 hours in advance for a full refund',
        iconSrc: '/icon/svg1.svg'
      },
      {
        title: 'Host or greeter',
        text: 'English, French, Spanish, German, Korean, Japanese, Russian, Chinese',
        iconSrc: '/icon/svg2.svg'
      },
      {
        title: 'Duration: 2 day / 1 night',
        text: 'Check availability to see starting times',
        iconSrc: '/icon/svg3.svg'
      }
    ],
    itinerary: [
      {
        time: '09:00 — 10:00',
        title: 'Old City Walk',
        description: 'Explore the historic heart of the city and discover key architectural landmarks.'
      },
      {
        time: '10:10 — 11:00',
        title: 'Mausoleum Visit',
        description: 'Visit a famous mausoleum and learn about its cultural heritage.'
      },
      {
        time: '11:10 — 12:00',
        title: 'Craft Bazaar',
        description: 'Stroll through local markets and enjoy traditional flavors.'
      },
      {
        time: '12:10 — 13:00',
        title: 'Lunch Break',
        description: 'Plov and local dishes with a relaxed pace.'
      }
    ],
    mapEmbedSrc:
      'https://maps.google.com/maps?q=bukhara&t=&z=13&ie=UTF8&iwloc=&output=embed',
    includes: [
      { kind: 'check', text: 'Professional English-speaking tour guide' },
      { kind: 'check', text: 'Comfortable private transport (AC car/minivan)' },
      { kind: 'check', text: 'Hotel pick-up & drop-off' },
      { kind: 'check', text: 'Entrance fees to major landmarks' },
      { kind: 'x', text: 'Meals & drinks (lunch/dinner)' },
      { kind: 'x', text: 'Personal expenses (souvenirs, snacks, etc.)' }
    ],
    highlights: [
      'Timeless architecture and historic city streets',
      'Cultural stories behind iconic monuments',
      'A curated experience with local insights',
      'Memorable photo spots across the old town'
    ],
    feedbacks: [
      {
        name: 'Carolina Marks - Australia',
        dateText: 'January 24, 2026',
        text: 'The trip exceeded all my expectations! The hospitality and landmarks made the entire journey unforgettable.',
        photos: ['/person.png', '/sec1.png']
      },
      {
        name: 'Andrey Grigoriy - Russia',
        dateText: 'January 24, 2026',
        text: 'An amazing experience from start to finish! Everything was beautifully organized.',
        photos: ['/sec1.png', '/sec1.png', '/sec1.png']
      }
    ]
  },
  {
    slug: 'samarkand',
    name: 'Samarkand',
    tourTitle: 'Samarkand Cultural Heritage Tour',
    reviewsText: '120 reviews',
    durationText: '4 days / 3 nights',
    priceFromText: '206,000 UZS',
    galleryImages: [
      '/sec1.png',
      '/sec1.png',
      '/sec1.png',
      '/sec1.png'
    ],
    description:
      'Discover Samarkand with a guided journey through monumental squares, blue-tiled mausoleums, and vibrant bazaars.',
    aboutActivity: [
      {
        title: 'Free cancellation',
        text: 'Cancel up to 24 hours in advance for a full refund',
        iconSrc: '/icon/svg1.svg'
      },
      {
        title: 'Host or greeter',
        text: 'English, French, Spanish, German, Korean, Japanese, Russian, Chinese',
        iconSrc: '/icon/svg2.svg'
      },
      {
        title: 'Duration: 2 day / 1 night',
        text: 'Check availability to see starting times',
        iconSrc: '/icon/svg3.svg'
      }
    ],
    itinerary: [
      {
        time: '09:00 — 10:00',
        title: 'Registan Square',
        description: 'Explore the heart of ancient Samarkand.'
      },
      {
        time: '10:10 — 11:00',
        title: 'Gur-Emir Mausoleum',
        description: 'Visit the resting place of Amir Temur and admire its golden interior.'
      },
      {
        time: '11:10 — 12:00',
        title: 'Bibi-Khanym Mosque',
        description: 'Discover a masterpiece of Timurid architecture.'
      },
      {
        time: '12:10 — 13:00',
        title: 'Lunch Break',
        description: 'Plov (Samarkand style) and shashlik.'
      }
    ],
    mapEmbedSrc:
      'https://maps.google.com/maps?q=samarkand&t=&z=13&ie=UTF8&iwloc=&output=embed',
    includes: [
      { kind: 'check', text: 'Professional English-speaking tour guide' },
      { kind: 'check', text: 'Comfortable private transport (AC car/minivan)' },
      { kind: 'check', text: 'Hotel pick-up & drop-off' },
      { kind: 'check', text: 'Entrance fees to major landmarks' },
      { kind: 'x', text: 'Meals & drinks (lunch/dinner)' },
      { kind: 'x', text: 'Personal expenses (souvenirs, snacks, etc.)' }
    ],
    highlights: [
      'Timurid architectural ensemble in the city center',
      'Golden details and iconic domes',
      'Stories behind the Silk Road heritage',
      'A curated route through hidden gems'
    ],
    feedbacks: [
      {
        name: 'Carolina Marks - Australia',
        dateText: 'January 24, 2026',
        text: 'The trip exceeded all my expectations! The hospitality, historical landmarks, and vibrant atmosphere made the entire journey unforgettable.',
        photos: ['/person.png', '/sec1.png']
      },
      {
        name: 'Andrey Grigoriy - Russia',
        dateText: 'January 24, 2026',
        text: 'An amazing experience from start to finish! Everything was beautifully organized.',
        photos: ['/sec1.png', '/sec1.png', '/sec1.png']
      }
    ]
  },
  {
    slug: 'tashkent',
    name: 'Tashkent',
    tourTitle: 'Tashkent City Discovery Tour',
    reviewsText: '90 reviews',
    durationText: '3 days / 2 nights',
    priceFromText: '150,000 UZS',
    galleryImages: ['/sec1.png', '/sec1.png', '/sec1.png'],
    description:
      'Enjoy a comfortable discovery of Tashkent’s modern spirit and historical roots with expert local guidance.',
    aboutActivity: [
      { title: 'Free cancellation', text: 'Cancel up to 24 hours in advance for a full refund', iconSrc: '/icon/svg1.svg' },
      { title: 'Host or greeter', text: 'English, Russian, and Uzbek-speaking hosts', iconSrc: '/icon/svg2.svg' },
      { title: 'Duration: 3 day / 2 nights', text: 'Check availability to see starting times', iconSrc: '/icon/svg3.svg' }
    ],
    itinerary: [
      { time: '09:00 — 10:30', title: 'Old City Highlights', description: 'Visit key historical areas and local landmarks.' },
      { time: '11:00 — 12:30', title: 'Markets & Crafts', description: 'Discover traditional crafts and local tastes.' },
      { time: '12:40 — 13:40', title: 'Lunch Break', description: 'Local cuisine in a relaxed setting.' }
    ],
    mapEmbedSrc:
      'https://maps.google.com/maps?q=tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed',
    includes: [
      { kind: 'check', text: 'Professional English-speaking tour guide' },
      { kind: 'check', text: 'Comfortable private transport (AC car/minivan)' },
      { kind: 'check', text: 'Hotel pick-up & drop-off' },
      { kind: 'check', text: 'Entrance fees to major landmarks' },
      { kind: 'x', text: 'Meals & drinks (lunch/dinner)' },
      { kind: 'x', text: 'Personal expenses (souvenirs, snacks, etc.)' }
    ],
    highlights: [
      'Balanced route between history and modern city life',
      'Friendly guide and smooth transportation',
      'Traditional craft and market experience',
      'Comfortable pacing for all visitors'
    ],
    feedbacks: [
      {
        name: 'Sofia Nguyen - Vietnam',
        dateText: 'February 02, 2026',
        text: 'A great introduction to the city. The guide was very knowledgeable and the schedule felt easy.',
        photos: ['/sec1.png', '/sec1.png', '/sec1.png']
      }
    ]
  }
]

export function getCityBySlug(slug: string): City | undefined {
  const normalized = slug||'tashkent'.toLowerCase()
  return cities.find((c) => c.slug === normalized)
}

