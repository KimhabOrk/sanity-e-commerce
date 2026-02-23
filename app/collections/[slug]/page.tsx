'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { sanityFetch } from '@/lib/sanity.client'
import { COLLECTION_BY_SLUG_QUERY } from '@/lib/sanity.queries'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

interface CollectionDetailPageProps {
  params: Promise<{ slug: string }>
}

export default function CollectionDetailPage({ params }: CollectionDetailPageProps) {
  const [collection, setCollection] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCollection = async () => {
      try {
        const { slug } = await params
        const data = await sanityFetch({
          query: COLLECTION_BY_SLUG_QUERY,
          params: { slug },
        })
        setCollection(data)
      } catch (error) {
        console.error('Error loading collection:', error)
      } finally {
        setLoading(false)
      }
    }

    loadCollection()
  }, [params])

  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen flex items-center justify-center">
          <div className="text-foreground">Loading...</div>
        </main>
        <Footer />
      </>
    )
  }

  if (!collection) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-foreground text-lg mb-4">Collection not found</p>
            <Link href="/collections" className="text-foreground hover:text-[#e8d4a0] smooth-transition">
              Back to Collections
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const seasonLabel = collection.season
    ? collection.season.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : ''

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        {collection.image?.asset?.url && (
          <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-sm">
            <Image
              src={collection.image.asset.url}
              alt={collection.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <div className="space-y-3">
                {seasonLabel && (
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground font-semibold">
                    {seasonLabel}
                  </p>
                )}
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
                  {collection.name}
                </h1>
              </div>
            </div>
          </section>
        )}

        {/* Collection Info */}
        <section className="border-b border-[#2d2d2d] py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-6">
                {collection.description && (
                  <div>
                    <h2 className="font-semibold text-foreground mb-3 uppercase tracking-widest text-sm">
                      About This Collection
                    </h2>
                    <p className="text-foreground leading-relaxed">
                      {collection.description}
                    </p>
                  </div>
                )}

                {collection.longDescription && (
                  <div className="prose prose-invert max-w-none">
                    <PortableText value={collection.longDescription} />
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-sm p-6 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground font-semibold mb-1">
                      Season
                    </p>
                    <p className="text-foreground font-semibold">{seasonLabel || 'All Season'}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground font-semibold mb-1">
                      Items
                    </p>
                    <p className="text-foreground font-semibold">
                      {collection.products?.length || 0} pieces
                    </p>
                  </div>
                  <button className="w-full bg-primary text-[#0a0a0a] py-3 rounded-sm font-semibold hover:bg-[#e8d4a0] smooth-transition">
                    Shop Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collection Products */}
        {collection.products && collection.products.length > 0 && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-12">
                Featured Pieces
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {collection.products.map((product: any) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
