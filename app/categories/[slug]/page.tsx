'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { sanityFetch } from '@/lib/sanity.client'
import { PRODUCTS_BY_CATEGORY_QUERY, CATEGORY_BY_SLUG_QUERY } from '@/lib/sanity.queries'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface CategoryDetailPageProps {
  params: Promise<{ slug: string }>
}

export default function CategoryDetailPage({ params }: CategoryDetailPageProps) {
  const [category, setCategory] = useState<any>(null)
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCategory = async () => {
      try {
        const { slug } = await params
        const categoryData = await sanityFetch({
          query: CATEGORY_BY_SLUG_QUERY,
          params: { slug },
        })
        setCategory(categoryData)

        if (categoryData) {
          const productsData = await sanityFetch({
            query: PRODUCTS_BY_CATEGORY_QUERY,
            params: { categorySlug: slug },
          })
          setProducts(productsData)
        }
      } catch (error) {
        console.error('Error loading category:', error)
      } finally {
        setLoading(false)
      }
    }

    loadCategory()
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

  if (!category) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-foreground text-lg mb-4">Category not found</p>
            <Link href="/categories" className="text-foreground hover:text-[#e8d4a0] smooth-transition">
              Back to Categories
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-sm border-b border-[#2d2d2d]">
          {category.image?.asset?.url ? (
            <Image
              src={category.image.asset.url}
              alt={category.name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end p-8 md:p-12">
            <div className="space-y-2">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
                {category.name}
              </h1>
              {category.description && (
                <p className="text-[#e0e0e0] max-w-2xl text-lg">
                  {category.description}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12 pb-8 border-b border-[#2d2d2d]">
              <p className="text-foreground">
                Showing {products.length} products
              </p>
              <select className="bg-[#1a1a1a] border border-[#2d2d2d] text-foreground px-4 py-2 rounded-sm focus:outline-none focus:border-[#d4af37] smooth-transition text-sm">
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Sellers</option>
              </select>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-foreground text-lg mb-4">No products in this category</p>
                <Link
                  href="/products"
                  className="text-foreground hover:text-[#e8d4a0] smooth-transition"
                >
                  Browse all products
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
