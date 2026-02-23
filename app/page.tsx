import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroBanner from '@/components/HeroBanner'
import ProductCard from '@/components/ProductCard'
import CollectionCard from '@/components/CollectionCard'
import { sanityFetch } from '@/lib/sanity.client'
import { FEATURED_PRODUCTS_QUERY, FEATURED_COLLECTIONS_QUERY } from '@/lib/sanity.queries'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { QualityIcon, ReturnIcon, TruckIcon } from '@/components/icons'

export const metadata = {
  title: 'KIMHAB ORK - Premium Womenswear Fashion',
  description: 'Discover curated collections of luxury womenswear featuring premium fabrics and contemporary designs.',
}

export default async function HomePage() {
  let featuredProducts = []
  let featuredCollections = []

  try {
    featuredProducts = await sanityFetch({
      query: FEATURED_PRODUCTS_QUERY,
    })
  } catch (error) {
    console.error('Error fetching featured products:', error)
  }

  try {
    featuredCollections = await sanityFetch({
      query: FEATURED_COLLECTIONS_QUERY,
    })
  } catch (error) {
    console.error('Error fetching featured collections:', error)
  }

  return (
    <>
      <Header />
      <main className="bg-black">
        {/* Hero Banner */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pt-8">
          <HeroBanner
            title="Spring/Summer Collection"
            subtitle="Discover elegance redefined. Premium fabrics and contemporary designs for the modern woman."
            cta={{ text: 'Shop Now', href: '/collections' }}
            image="https://ik.imagekit.io/kimhabork/assets/IMG_20260222_212408.jpg"
          />
        </div>

        {/* Featured Collections */}
        {featuredCollections.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
            <div className="mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Collections
              </h2>
              <div className="w-16 h-1 bg-primary" />
            </div>

            {featuredCollections.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredCollections.map((collection) => (
                  <CollectionCard key={collection._id} collection={collection} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No featured collections available yet.</p>
              </div>
            )}
          </section>
        )}

        {/* Featured Products */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24 border-t border-[#2d2d2d]">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">
                New Arrivals
              </h2>
              <div className="w-16 h-1 bg-primary" />
            </div>
            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 text-foreground font-semibold hover:text-[#e8d4a0] smooth-transition group"
            >
              View All
              <ChevronRight size={20} className="group-hover:translate-x-1 smooth-transition" />
            </Link>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No featured products available yet.</p>
            </div>
          )}

          <Link
            href="/products"
            className="md:hidden flex items-center justify-center gap-2 w-full mt-8 text-foreground font-semibold hover:text-[#e8d4a0] smooth-transition"
          >
            View All Products
            <ChevronRight size={20} />
          </Link>
        </section>

        {/* Features Section */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24 border-t border-[#2d2d2d]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Premium Quality',
                description: 'Handpicked fabrics and meticulous craftsmanship in every piece.',
                icon : <QualityIcon size={32} className='text-foreground w-8 h-8 md:w-10 md:h-10' />
              },
              {
                title: 'Fast Shipping',
                description: 'Free shipping on orders over $200. Ships within 2-3 business days.',
                icon : <TruckIcon size={32} className='text-foreground w-8 h-8 md:w-10 md:h-10' />
              },
              {
                title: '30-Day Returns',
                description: 'Shop with confidence. Easy returns within 30 days of purchase.',
                icon : <ReturnIcon size={32} className='text-foreground w-8 h-8 md:w-10 md:h-10' />
              },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center items-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24 border-t border-[#2d2d2d]">
          <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2d2d2d] p-8 md:p-16">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-2xl space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground font-semibold">
                Exclusive Access
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
                Join Our Inner Circle
              </h2>
              <p className="text-lg text-muted-foreground">
                Subscribe to our newsletter for early access to new collections, exclusive events, and special offers.
              </p>
              <div className="flex flex-col md:flex-row gap-3 pt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#2d2d2d] border border-[#3a3a3a] rounded-sm px-4 py-3 text-foreground placeholder-[#b0b0b0] focus:outline-none focus:border-[#d4af37] smooth-transition"
                />
                <button className="bg-primary text-[#0a0a0a] px-8 py-3 rounded-sm font-semibold hover:bg-[#e8d4a0] smooth-transition whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
