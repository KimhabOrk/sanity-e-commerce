import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#2d2d2d] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-[#d4af37]">KIMHAB ORK</h3>
            <p className="text-sm text-[#b0b0b0]">
              Premium womenswear featuring curated collections of luxury fashion with contemporary designs and timeless elegance.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[#b0b0b0] hover:text-[#d4af37] smooth-transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-[#b0b0b0] hover:text-[#d4af37] smooth-transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-[#b0b0b0] hover:text-[#d4af37] smooth-transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#fafafa] uppercase tracking-widest text-sm">
              Shop
            </h4>
            <ul className="space-y-2">
              {['New Arrivals', 'Collections', 'Categories', 'Sale', 'Trending'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[#b0b0b0] hover:text-[#d4af37] smooth-transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#fafafa] uppercase tracking-widest text-sm">
              Help
            </h4>
            <ul className="space-y-2">
              {['Contact Us', 'Shipping Info', 'Returns', 'FAQ', 'Size Guide'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[#b0b0b0] hover:text-[#d4af37] smooth-transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#fafafa] uppercase tracking-widest text-sm">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#b0b0b0]">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#d4af37] flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@kimhab.com" className="hover:text-[#d4af37] smooth-transition">
                  hello@kimhab.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#d4af37] flex-shrink-0 mt-0.5" />
                <a href="tel:+1234567890" className="hover:text-[#d4af37] smooth-transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-b border-[#2d2d2d] py-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-[#fafafa] mb-3">Subscribe to our newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#1a1a1a] border border-[#2d2d2d] rounded-sm px-4 py-3 text-[#fafafa] placeholder-[#b0b0b0] focus:outline-none focus:border-[#d4af37] text-sm smooth-transition"
              />
              <button className="bg-[#d4af37] text-[#0a0a0a] px-6 py-3 rounded-sm font-semibold hover:bg-[#e8d4a0] smooth-transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-[#b0b0b0]">
          <p>&copy; {currentYear} KIMHAB ORK. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#d4af37] smooth-transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#d4af37] smooth-transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#d4af37] smooth-transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
