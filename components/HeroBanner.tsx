'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface HeroBannerProps {
  title: string
  subtitle?: string
  cta?: {
    text: string
    href: string
  }
  image?: string
}

export default function HeroBanner({ title, subtitle, cta, image }: HeroBannerProps) {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-sm">
      {/* Background Image */}
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a]" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
              New Collection
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>
          </div>

          {subtitle && (
            <p className="text-lg text-[#e0e0e0] max-w-xl mx-auto font-light">
              {subtitle}
            </p>
          )}

          {cta && (
            <div className="pt-4">
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 bg-[#d4af37] text-[#0a0a0a] px-8 py-4 rounded-sm font-semibold hover:bg-[#e8d4a0] smooth-transition group"
              >
                {cta.text}
                <ChevronRight size={20} className="group-hover:translate-x-1 smooth-transition" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
