import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Heart } from 'lucide-react'

export const metadata = {
  title: 'Wishlist - LUXARA',
  description: 'Your saved items at LUXARA.',
}

export default function WishlistPage() {
  // Wishlist would be managed via state/context/database
  // This is a placeholder template
  const wishlistItems = []

  return (
    <>
      <Header />
      <main className="bg-[#0a0a0a] min-h-screen">
        {/* Header */}
        <section className="border-b border-[#2d2d2d] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl font-bold text-[#fafafa]">
              Wishlist
            </h1>
            <p className="text-[#b0b0b0] mt-2">
              {wishlistItems.length === 0 ? 'Your wishlist is empty' : `${wishlistItems.length} items saved`}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {wishlistItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Heart size={64} className="text-[#d4af37] mb-4 opacity-50" />
                <h2 className="font-display text-2xl font-bold text-[#fafafa] mb-2">
                  Nothing saved yet
                </h2>
                <p className="text-[#b0b0b0] mb-6">
                  Save your favorite items for later
                </p>
                <Link
                  href="/products"
                  className="bg-[#d4af37] text-[#0a0a0a] px-8 py-3 rounded-sm font-semibold hover:bg-[#e8d4a0] smooth-transition"
                >
                  Browse Collection
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {/* Wishlist items would be rendered here */}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
