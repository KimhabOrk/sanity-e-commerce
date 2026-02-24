"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

type FooterSection = {
  title: string;
  links: { label: string; href: string }[];
};

const footerSections: FooterSection[] = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Collections", href: "/collections" },
      { label: "New Arrivals", href: "/shop?sort=newest" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Creative Director", href: "/company/creative-director" },
      { label: "Responsibilities", href: "/company/responsibility" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Custom Made", href: "/services/custom-made" },
      { label: "Care Guides", href: "/services/care-guides" },
      { label: "Size Guide", href: "/services/size" },
      { label: "Shipping & Return", href: "/services/orders" },
      { label: "Helps & FAQs", href: "/services/helps" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Legal Notes", href: "/legal/notes" },
      { label: "General Sales Conditions", href: "/legal/sales" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
    ],
  },
];

function FooterSection({
  section,
  isOpen,
  onToggle,
  onClose,
}: {
  section: FooterSection;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="border-b border-border md:border-b-0">
      <button
        onClick={onToggle}
        className="md:hidden w-full flex items-center justify-between py-4 text-left"
      >
        <h4 className="font-semibold text-sm md:text-base">{section.title}</h4>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      <h4 className="hidden md:block font-semibold text-sm md:text-base mb-4">
        {section.title}
      </h4>

      <ul
        className={`overflow-hidden transition-all duration-300 md:transition-none md:max-h-none space-y-2 text-sm text-foreground/75 md:space-y-3 ${isOpen ? "max-h-96 md:max-h-none pb-4" : "max-h-0 md:max-h-none"
          }`}
      >
        {section.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onClose}
              className="hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();

  // Close dropdown when pathname changes (navigation occurs)
  useEffect(() => {
    setOpenSection(null);
  }, [pathname]);

  const handleToggle = (sectionTitle: string) => {
    setOpenSection(openSection === sectionTitle ? null : sectionTitle);
  };

  const handleClose = () => {
    setOpenSection(null);
  };

  return (
    <footer className="border-t border-border/50 mt-16 md:mt-24 bg-background/60">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16">
        {/* Main Content */}
        <div className="mb-6 md:mb-12">
          <div className="flex flex-col text-foreground text-start text-balance">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/kho-dark.png?updatedAt=1771854445628"
              width={160}
              height={26}
              alt="Logo"
              className="h-full w-[160px] md:w-32 object-cover mb-2"
            />
            <p className="text-sm md:text-lg">Affordable Luxury Fashion For Bold Modern Women.</p>
          </div>
        </div>

        {/* Footer Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8 mb-6 md:mb-12">
          {footerSections.map((section) => (
            <FooterSection
              key={section.title}
              section={section}
              isOpen={openSection === section.title}
              onToggle={() => handleToggle(section.title)}
              onClose={handleClose}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-4 md:pt-6">
          <div className="flex mx-auto justify-evenly gap-3 items-center mb-4 md:mb-8">
            <Link href="https://facebook.com/kimhaborkofficial">
              <Image
                src="https://ik.imagekit.io/kimhabork/assets/socials/facebook.png?updatedAt=1767797839119"
                width={32}
                height={32}
                alt="Facebook Logo"
                className="object-cover md:w-10 md:h-10"
              />
            </Link>
            <Link href="https://www.instagram.com/kimhabork_official">
              <Image
                src="https://ik.imagekit.io/kimhabork/assets/socials/instagram.png?updatedAt=1767797839255"
                width={32}
                height={32}
                alt="Instagram Logo"
                className="object-cover md:w-10 md:h-10"
              />
            </Link>
            <Link href="https://www.tiktok.com/@kimhabork_official">
              <Image
                src="https://ik.imagekit.io/kimhabork/assets/socials/tiktok.png?updatedAt=1769794402290"
                width={32}
                height={32}
                alt="Tiktok Logo"
                className="object-cover md:w-10 md:h-10"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/kimhab-ork">
              <Image
                src="https://ik.imagekit.io/kimhabork/assets/socials/linkedin.png?updatedAt=1767797838945"
                width={32}
                height={32}
                alt="LinkedIn Logo"
                className="object-cover md:w-10 md:h-10"
              />
            </Link>
          </div>

          {/* Copyright */}
          <div className="pt-4 md:pt-6 text-center mx-auto flex justify-center items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Kimhab Ork. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
