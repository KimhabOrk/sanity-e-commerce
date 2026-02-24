"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    { label: "New Arrivals", href: "/products?sort=new" },
    { label: "Collections", href: "/collections" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#2d2d2d] bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-18 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <Image
              src="/logo-dark.png"
              alt="Kimhab Ork"
              width={140}
              height={28}
              priority
              className="h-8 w-full object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-widest text-foreground smooth-transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              className="p-2 text-foreground hover:text-foreground smooth-transition"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="p-2 text-foreground hover:text-foreground smooth-transition hidden md:block"
              aria-label="Wishlist"
            >
              <Heart size={20} />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-foreground hover:text-foreground smooth-transition"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[#0a0a0a] text-xs flex items-center justify-center font-semibold">
                0
              </span>
            </Link>

            {/* Mobile Menu */}
            <button
              className="md:hidden p-2 text-foreground hover:text-foreground smooth-transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-[#2d2d2d] py-4">
            <input
              type="search"
              placeholder="Search products, collections..."
              className="w-full bg-[#1a1a1a] border border-[#2d2d2d] rounded-sm px-4 py-3 text-foreground placeholder-[#b0b0b0] focus:outline-none focus:border-[#d4af37] smooth-transition"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-[#2d2d2d] md:hidden py-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm uppercase tracking-widest text-foreground py-2 hover:text-foreground smooth-transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-[#2d2d2d] my-3" />
            {utilityItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm uppercase tracking-widest text-foreground py-2 hover:text-foreground smooth-transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
