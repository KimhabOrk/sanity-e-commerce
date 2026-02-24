"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sanityFetch } from "@/lib/sanity.client";
import {
  PRODUCT_BY_SLUG_QUERY,
  ALL_PRODUCTS_QUERY,
} from "@/lib/sanity.queries";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Heart, ShoppingBag, Check, Minus, Plus } from "lucide-react";
import Link from "next/link";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const { slug } = await params;
        const data = await sanityFetch({
          query: PRODUCT_BY_SLUG_QUERY,
          params: { slug },
        });

        if (data) {
          setProduct(data);
          if (data.colors && data.colors.length > 0) {
            setSelectedColor(data.colors[0]._id);
          }
          if (data.sizes && data.sizes.length > 0) {
            setSelectedSize(data.sizes[0]._id);
          }

          // Load related products
          const related = await sanityFetch({
            query: ALL_PRODUCTS_QUERY,
          });
          setRelatedProducts(
            related.filter((p: any) => p._id !== data._id).slice(0, 4),
          );
        }
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [params]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen flex items-center justify-center">
          <div className="text-foreground">Loading...</div>
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-foreground text-lg mb-4">Product not found</p>
            <Link
              href="/products"
              className="text-foreground hover:text-[#e8d4a0] smooth-transition"
            >
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const discount = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  const galleryImages =
    product.gallery && product.gallery.length > 0
      ? [product.image, ...product.gallery]
      : [product.image];

  const currentImage = galleryImages[imageIndex];

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Product Section */}
        <section className="py-12 border-b border-[#2d2d2d]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#1a1a1a]">
                  {currentImage?.asset?.url && (
                    <Image
                      src={currentImage.asset.url}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  )}
                  {discount > 0 && (
                    <div className="absolute top-4 right-4 bg-[#ff5555] text-white px-4 py-2 rounded-sm font-semibold">
                      -{discount}%
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                {galleryImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setImageIndex(idx)}
                        className={`relative aspect-square overflow-hidden rounded-sm border-2 smooth-transition ${
                          imageIndex === idx
                            ? "border-[#d4af37]"
                            : "border-[#2d2d2d] hover:border-[#3a3a3a]"
                        }`}
                      >
                        {img?.asset?.url && (
                          <Image
                            src={img.asset.url}
                            alt={`${product.name} ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-3">
                  {product.category && (
                    <p className="text-xs uppercase tracking-widest text-foreground font-semibold">
                      {product.category.name}
                    </p>
                  )}
                  <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
                    {product.name}
                  </h1>
                </div>

                {/* Price */}
                <div className="flex items-end gap-4">
                  {product.salePrice ? (
                    <>
                      <span className="font-playfair text-3xl font-bold text-foreground">
                        ${product.salePrice.toFixed(2)}
                      </span>
                      <span className="text-xl line-through text-foreground">
                        ${product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="font-playfair text-3xl font-bold text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Description */}
                {product.description && (
                  <p className="text-foreground leading-relaxed">
                    {product.description}
                  </p>
                )}

                {/* Options */}
                <div className="space-y-6 border-t border-b border-[#2d2d2d] py-6">
                  {/* Colors */}
                  {product.colors && product.colors.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-widest">
                        Color
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {product.colors.map((color: any) => (
                          <button
                            key={color._id}
                            onClick={() => setSelectedColor(color._id)}
                            className={`w-10 h-10 rounded-full border-2 smooth-transition hover:scale-110 flex items-center justify-center ${
                              selectedColor === color._id
                                ? "border-[#d4af37] ring-2 ring-[#d4af37]/50"
                                : "border-[#2d2d2d]"
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          >
                            {selectedColor === color._id && (
                              <Check
                                size={16}
                                className="text-white drop-shadow-lg"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sizes */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-widest">
                        Size
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        {product.sizes.map((size: any) => (
                          <button
                            key={size._id}
                            onClick={() => setSelectedSize(size._id)}
                            className={`py-2 px-3 rounded-sm border-2 text-sm font-semibold smooth-transition ${
                              selectedSize === size._id
                                ? "border-[#d4af37] bg-primary text-[#0a0a0a]"
                                : "border-[#2d2d2d] text-foreground hover:border-[#3a3a3a]"
                            }`}
                          >
                            {size.size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity */}
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-widest">
                      Quantity
                    </p>
                    <div className="flex items-center gap-4 w-fit">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 border border-[#2d2d2d] rounded-sm hover:border-[#d4af37] smooth-transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-semibold">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 border border-[#2d2d2d] rounded-sm hover:border-[#d4af37] smooth-transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setAddedToCart(true);
                      setTimeout(() => setAddedToCart(false), 2000);
                    }}
                    className={`w-full py-4 px-6 rounded-sm font-semibold text-lg flex items-center justify-center gap-2 smooth-transition ${
                      addedToCart
                        ? "bg-[#28a745] text-white"
                        : "bg-primary text-[#0a0a0a] hover:bg-[#e8d4a0]"
                    }`}
                    disabled={!product.inStock}
                  >
                    {addedToCart ? (
                      <>
                        <Check size={20} />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={20} />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="w-full py-3 px-6 rounded-sm font-semibold border-2 border-[#2d2d2d] text-foreground hover:border-[#d4af37] hover:text-foreground smooth-transition flex items-center justify-center gap-2"
                  >
                    <Heart
                      size={20}
                      className={isFavorite ? "fill-[#d4af37]" : ""}
                    />
                    {isFavorite ? "Saved" : "Save for Later"}
                  </button>
                </div>

                {/* Materials */}
                {product.materials && product.materials.length > 0 && (
                  <div className="space-y-3 pt-6 border-t border-[#2d2d2d]">
                    <h3 className="font-semibold text-foreground uppercase tracking-widest text-sm">
                      Materials
                    </h3>
                    {product.materials.map((material: any) => (
                      <div key={material._id} className="text-sm">
                        <p className="font-medium text-foreground">
                          {material.name}
                        </p>
                        {material.composition && (
                          <p className="text-foreground">
                            {material.composition}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-foreground">
                  You May Also Like
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {relatedProducts.map((p) => (
                  <Link key={p._id} href={`/products/${p.slug.current}`}>
                    <div className="cursor-pointer group">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#1a1a1a]">
                        {p.image?.asset?.url && (
                          <Image
                            src={p.image.asset.url}
                            alt={p.name}
                            fill
                            className="object-cover group-hover:scale-105 smooth-transition"
                          />
                        )}
                      </div>
                      <h3 className="mt-3 font-semibold text-foreground group-hover:text-foreground smooth-transition">
                        {p.name}
                      </h3>
                      <p className="text-foreground font-semibold">
                        ${p.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
