import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - KIMHAB ORK',
  description: 'Get in touch with KIMHAB ORK customer service.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Header */}
        <section className="border-b border-[#2d2d2d] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-foreground max-w-2xl">
              We would love to hear from you. Reach out with any questions or feedback.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Info */}
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'hello@kimhab.com',
                  subtext: 'We reply within 24 hours',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+1 (234) 567-890',
                  subtext: 'Monday - Friday, 10am - 6pm EST',
                },
                {
                  icon: MapPin,
                  title: 'Address',
                  content: '123 Fashion Avenue',
                  subtext: 'New York, NY 10001, USA',
                },
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="text-center space-y-3">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-[#d4af37] flex items-center justify-center">
                        <IconComponent size={24} className="text-foreground" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-foreground font-semibold">{item.content}</p>
                    <p className="text-sm text-foreground">{item.subtext}</p>
                  </div>
                )
              })}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-sm p-8 md:p-12">
                <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#2d2d2d] border border-[#3a3a3a] rounded-sm px-4 py-3 text-foreground placeholder-[#b0b0b0] focus:outline-none focus:border-[#d4af37] smooth-transition"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#2d2d2d] border border-[#3a3a3a] rounded-sm px-4 py-3 text-foreground placeholder-[#b0b0b0] focus:outline-none focus:border-[#d4af37] smooth-transition"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[#2d2d2d] border border-[#3a3a3a] rounded-sm px-4 py-3 text-foreground placeholder-[#b0b0b0] focus:outline-none focus:border-[#d4af37] smooth-transition"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#2d2d2d] border border-[#3a3a3a] rounded-sm px-4 py-3 text-foreground placeholder-[#b0b0b0] focus:outline-none focus:border-[#d4af37] smooth-transition"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-[#2d2d2d] border border-[#3a3a3a] rounded-sm px-4 py-3 text-foreground placeholder-[#b0b0b0] focus:outline-none focus:border-[#d4af37] smooth-transition resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-[#0a0a0a] py-3 px-6 rounded-sm font-semibold hover:bg-[#e8d4a0] smooth-transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
