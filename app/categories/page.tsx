'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { sanityFetch } from '@/lib/sanity.client'
import { ALL_CATEGORIES_QUERY } from '@/lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'

export default function CategoriesPage() {
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await sanityFetch({
          query: ALL_CATEGORIES_QUERY,
        })
        setCategories(data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      } finally {
        setLoading(false)
      }
    }

    loadCategories()
  }, [])

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Header */}
        <section className="border-b border-[#2d2d2d] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Categories
            </h1>
            <p className="text-foreground max-w-2xl">
              Browse our expertly curated categories to find exactly what you're looking for.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="flex justify-center py-12">
                <p className="text-foreground">Loading categories...</p>
              </div>
            ) : categories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/categories/${category.slug.current}`}
                    className="group relative overflow-hidden rounded-sm cursor-pointer"
                  >
                    <div className="relative h-80 w-full overflow-hidden bg-[#1a1a1a]">
                      {category.image?.asset?.url ? (
                        <Image
                          src={category.image.asset.url}
                          alt={category.name}
                          fill
                          className="object-cover group-hover:scale-105 smooth-transition duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a]" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="font-playfair text-2xl font-bold text-white group-hover:text-foreground smooth-transition">
                        {category.name}
                      </h3>
                      {category.description && (
                        <p className="text-sm text-[#e0e0e0] mt-2 line-clamp-2">
                          {category.description}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-foreground font-semibold mt-4 group-hover:translate-x-2 smooth-transition">
                        <span>Shop</span>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-foreground text-lg mb-4">No categories found</p>
                <p className="text-sm text-[#8a8a8a]">Check back soon</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
