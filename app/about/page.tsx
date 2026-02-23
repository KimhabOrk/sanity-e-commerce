import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About LUXARA - Premium Womenswear',
  description: 'Learn about LUXARA and our commitment to luxury womenswear.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="border-b border-[#2d2d2d] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground font-semibold mb-4">
                Our Story
              </p>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                Luxury Redefined
              </h1>
              <p className="text-lg text-foreground leading-relaxed">
                LUXARA was founded on the principle that luxury womenswear should be accessible, beautifully designed, and crafted with meticulous attention to detail. Every piece in our collection tells a story of artistry and premium quality.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 border-b border-[#2d2d2d]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality',
                  description: 'We source the finest materials from around the world and work with master craftspeople to create pieces that last.',
                },
                {
                  title: 'Innovation',
                  description: 'Blending contemporary design with timeless elegance, we push the boundaries of womenswear fashion.',
                },
                {
                  title: 'Sustainability',
                  description: 'We are committed to ethical practices and sustainable production methods in our manufacturing process.',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="space-y-4 p-6 rounded-sm border border-[#2d2d2d] hover:border-[#d4af37] smooth-transition bg-[#1a1a1a]/50"
                >
                  <h3 className="font-semibold text-foreground text-lg uppercase tracking-widest">
                    {value.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-playfair text-3xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-foreground text-lg leading-relaxed">
                To empower women through fashion by offering luxury womenswear that celebrates individuality, confidence, and timeless elegance. We believe that every woman deserves to feel extraordinary in what she wears.
              </p>
              <div className="pt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-[#0a0a0a] px-8 py-4 rounded-sm font-semibold hover:bg-[#e8d4a0] smooth-transition"
                >
                  Shop Our Collection
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
