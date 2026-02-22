import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CollectionCard from '@/components/CollectionCard'
import { sanityFetch } from '@/lib/sanity.client'
import { ALL_COLLECTIONS_QUERY } from '@/lib/sanity.queries'

export const metadata = {
  title: 'Collections - LUXARA',
  description: 'Explore our curated collections of luxury womenswear.',
}

export default async function CollectionsPage() {
  let collections = []

  try {
    collections = await sanityFetch({
      query: ALL_COLLECTIONS_QUERY,
    })
  } catch (error) {
    console.error('Error fetching collections:', error)
  }

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Header */}
        <section className="border-b border-[#2d2d2d] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Collections
            </h1>
            <p className="text-foreground max-w-2xl">
              Discover our seasonal and curated collections, each telling a unique story of artistry, craftsmanship, and contemporary style.
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {collections.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {collections.map((collection) => (
                  <CollectionCard key={collection._id} collection={collection} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-foreground text-lg mb-4">No collections found</p>
                <p className="text-sm text-[#8a8a8a]">Check back soon for new collections</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
