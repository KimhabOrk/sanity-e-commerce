'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

interface CollectionImage {
  asset?: {
    url: string
    alt?: string
  }
}

interface Collection {
  _id: string
  name: string
  slug: {
    current: string
  }
  description?: string
  image?: CollectionImage
  season?: string
}

export default function CollectionCard({ collection }: { collection: Collection }) {
  const [isHovered, setIsHovered] = useState(false)

  const seasonLabel = collection.season
    ? collection.season.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : ''

  return (
    <Link href={`/collections/${collection.slug.current}`}>
      <div
        className="group relative overflow-hidden rounded-sm cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3]">
          {collection.image?.asset?.url ? (
            <Image
              src={collection.image.asset.url}
              alt={collection.name}
              fill
              className="object-cover smooth-transition duration-700 group-hover:scale-110"
              priority={false}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a]" />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <div className="space-y-3">
              {seasonLabel && (
                <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  {seasonLabel}
                </p>
              )}
              <h3 className="font-display text-2xl font-semibold group-hover:text-[#d4af37] smooth-transition">
                {collection.name}
              </h3>
              {collection.description && (
                <p className="text-sm text-[#e0e0e0] line-clamp-2 max-w-md">
                  {collection.description}
                </p>
              )}
            </div>

            {/* CTA Button */}
            <div
              className={`mt-4 flex items-center gap-2 text-[#d4af37] font-medium smooth-transition ${
                isHovered ? 'translate-x-2' : ''
              }`}
            >
              <span>Explore</span>
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
