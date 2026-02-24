"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface ProductImage {
  asset?: {
    url: string;
    alt?: string;
  };
}

interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description?: string;
  price: number;
  salePrice?: number;
  image: ProductImage;
  inStock: boolean;
  category?: {
    name: string;
    slug: {
      current: string;
    };
  };
}

export default function ProductCard({ product }: { product: Product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  return (
    <Link href={`/products/${product.slug.current}`}>
      <div
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-sm bg-[#1a1a1a]">
          <div className="aspect-[3/4] w-full overflow-hidden">
            {product.image?.asset?.url && (
              <Image
                src={product.image.asset.url}
                alt={product.name}
                width={400}
                height={533}
                className="h-full w-full object-cover smooth-transition duration-700 group-hover:scale-105"
                priority={false}
              />
            )}
          </div>

          {/* Overlay Actions */}
          <div
            className={`absolute inset-0 flex items-end justify-between gap-2 bg-black/40 p-4 smooth-transition ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              className="flex items-center gap-2 flex-1 bg-primary text-[#0a0a0a] py-3 px-4 rounded-sm font-medium hover:bg-[#e8d4a0] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic
              }}
            >
              <ShoppingBag size={18} />
              <span className="text-sm">Add</span>
            </button>
            <button
              className="p-3 bg-[#1a1a1a]/80 rounded-sm hover:bg-[#2d2d2d] transition-colors border border-[#2d2d2d]"
              onClick={(e) => {
                e.preventDefault();
                setIsFavorite(!isFavorite);
              }}
            >
              <Heart
                size={18}
                className={
                  isFavorite
                    ? "fill-[#d4af37] text-foreground"
                    : "text-foreground"
                }
              />
            </button>
          </div>

          {/* Sale Badge */}
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-[#ff5555] text-white px-3 py-1 rounded-sm text-xs font-semibold">
              -{discount}%
            </div>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-sm">
              <p className="text-foreground font-semibold">Out of Stock</p>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-2">
          <p className="text-xs uppercase tracking-widest text-foreground">
            {product.category?.name || "Featured"}
          </p>
          <h3 className="font-playfair text-lg font-semibold text-foreground line-clamp-2 group-hover:text-foreground smooth-transition">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 pt-1">
            {product.salePrice ? (
              <>
                <span className="text-sm font-semibold text-foreground">
                  ${product.salePrice.toFixed(2)}
                </span>
                <span className="text-sm line-through text-foreground">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-sm font-semibold text-foreground">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
