'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface FooterMenu {
  title: string
  items: string[]
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Close dropdowns on route change
  useEffect(() => {
    setOpenMenu(null)
  }, [pathname])

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const menus: FooterMenu[] = [
    {
      title: 'Shop',
      items: ['New Arrivals', 'Collections', 'Categories', 'Sale', 'Trending']
    },
    {
      title: 'Help',
      items: ['Contact Us', 'Shipping Info', 'Returns', 'FAQ', 'Size Guide']
    }
  ]

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu)
  }

  return (
    <footer className="border-t border-[#2d2d2d] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Grid - 4 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* Brand - Always visible */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-[#d4af37]">LUXARA</h3>
            <p className="text-sm text-[#b0b0b0]">
              Premium womenswear featuring curated collections of luxury fashion with contemporary designs and timeless elegance.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[#b0b0b0] hover:text-[#ee1a4e] smooth-transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-[#b0b0b0] hover:text-[#ee1a4e] smooth-transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-[#b0b0b0] hover:text-[#ee1a4e] smooth-transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Menu - Dropdown on mobile, normal on desktop */}
          <div className="space-y-2">
            {isMobile ? (
              <button
                onClick={() => toggleMenu('shop')}
                className="w-full flex items-center justify-between font-semibold text-[#fafafa] uppercase tracking-widest text-sm py-3 px-4 hover:border-[#ee1a4e] smooth-transition"
              >
                Shop
                <ChevronDown
                  size={18}
                  className={`smooth-transition ${openMenu === 'shop' ? 'rotate-180' : ''}`}
                />
              </button>
            ) : (
              <h4 className="font-semibold text-[#fafafa] uppercase tracking-widest text-sm">
                Shop
              </h4>
            )}
            
            <ul
              className={`space-y-2 overflow-hidden smooth-transition ${
                isMobile && openMenu !== 'shop' ? 'max-h-0' : 'max-h-96'
              } ${isMobile ? 'md:max-h-96' : ''}`}
            >
              {menus[0].items.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[#b0b0b0] hover:text-[#ee1a4e] smooth-transition block"
                    onClick={() => isMobile && setOpenMenu(null)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Menu - Dropdown on mobile, normal on desktop */}
          <div className="space-y-2">
            {isMobile ? (
              <button
                onClick={() => toggleMenu('help')}
                className="w-full flex items-center justify-between font-semibold text-[#fafafa] uppercase tracking-widest text-sm py-3 px-4 hover:border-[#ee1a4e] smooth-transition"
              >
                Help
                <ChevronDown
                  size={18}
                  className={`smooth-transition ${openMenu === 'help' ? 'rotate-180' : ''}`}
                />
              </button>
            ) : (
              <h4 className="font-semibold text-[#fafafa] uppercase tracking-widest text-sm">
                Help
              </h4>
            )}
            
            <ul
              className={`space-y-2 overflow-hidden smooth-transition ${
                isMobile && openMenu !== 'help' ? 'max-h-0' : 'max-h-96'
              } ${isMobile ? 'md:max-h-96' : ''}`}
            >
              {menus[1].items.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[#b0b0b0] hover:text-[#ee1a4e] smooth-transition block"
                    onClick={() => isMobile && setOpenMenu(null)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Dropdown on mobile, normal on desktop */}
          <div className="space-y-4">
            {isMobile ? (
              <button
                onClick={() => toggleMenu('contact')}
                className="w-full flex items-center justify-between font-semibold text-[#fafafa] uppercase tracking-widest text-sm py-3 px-4 hover:text-[#ee1a4e] smooth-transition"
              >
                Contact
                <ChevronDown
                  size={18}
                  className={`smooth-transition ${openMenu === 'contact' ? 'rotate-180' : ''}`}
                />
              </button>
            ) : (
              <h4 className="font-semibold text-[#fafafa] uppercase tracking-widest text-sm">
                Contact
              </h4>
            )}
            
            <ul
              className={`space-y-3 text-sm text-[#b0b0b0] overflow-hidden smooth-transition ${
                isMobile && openMenu !== 'contact' ? 'max-h-0' : 'max-h-96'
              } ${isMobile ? 'md:max-h-96' : ''}`}
            >
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#ee1a4e] flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@luxara.com" className="hover:text-white smooth-transition">
                  hello@luxara.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#ee1a4e] flex-shrink-0 mt-0.5" />
                <a href="tel:+1234567890" className="hover:text-white smooth-transition">
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
            <div className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#1a1a1a] border border-[#2d2d2d] rounded-sm px-4 py-3 text-[#fafafa] placeholder-[#b0b0b0] focus:outline-none focus:border-[#ee1a4e] text-sm smooth-transition"
              />
              <button className="bg-[#ee1a4e] text-white px-6 py-3 rounded-sm font-semibold hover:bg-[#e8d4a0] smooth-transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-[#b0b0b0]">
          <p>&copy; {currentYear} LUXARA. All rights reserved.</p>
          <div className="flex gap-6 flex-wrap justify-center md:justify-end">
            <Link href="#" className="hover:text-[#ee1a4e] smooth-transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#ee1a4e] smooth-transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#ee1a4e] smooth-transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
