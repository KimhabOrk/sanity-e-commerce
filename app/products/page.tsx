import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { sanityFetch } from '@/lib/sanity.client'
import { ALL_PRODUCTS_QUERY } from '@/lib/sanity.queries'

export const metadata = {
  title: 'All Products - LUXARA',
  description: 'Shop our complete collection of premium womenswear.',
}

export default async function ProductsPage() {
  let products = []

  try {
    products = await sanityFetch({
      query: ALL_PRODUCTS_QUERY,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
  }

  return (
    <>
      <Header />
      <main className="bg-[#0a0a0a] min-h-screen">
        {/* Header */}
        <section className="border-b border-[#2d2d2d] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#fafafa] mb-4">
              All Products
            </h1>
            <p className="text-[#b0b0b0] max-w-2xl">
              Explore our complete collection of luxury womenswear, carefully curated to reflect contemporary style and premium quality.
            </p>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-8 border-b border-[#2d2d2d]">
              <div>
                <p className="text-[#b0b0b0]">
                  Showing {products.length} products
                </p>
              </div>
              <div className="flex gap-3">
                <select className="bg-[#1a1a1a] border border-[#2d2d2d] text-[#fafafa] px-4 py-2 rounded-sm focus:outline-none focus:border-[#d4af37] smooth-transition text-sm">
                  <option>Sort by: Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Sellers</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-[#b0b0b0] text-lg mb-4">No products found</p>
                <p className="text-sm text-[#8a8a8a]">Check back soon for new arrivals</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
