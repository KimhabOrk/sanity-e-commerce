import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export const metadata = {
  title: "Shopping Cart - LUXARA",
  description: "Your shopping cart at LUXARA.",
};

export default function CartPage() {
  // Cart would be managed via state/context/database
  // This is a placeholder template
  const cartItems = [];

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Header */}
        <section className="border-b border-[#2d2d2d] py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <h1 className="font-playfair text-4xl font-bold text-foreground">
              Shopping Cart
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20">
                <ShoppingBag
                  size={64}
                  className="text-foreground mb-4 opacity-50"
                />
                <h2 className="font-playfair text-2xl font-bold text-foreground mb-2">
                  Your cart is empty
                </h2>
                <p className="text-foreground mb-6">
                  Discover our beautiful collection of luxury womenswear
                </p>
                <Link
                  href="/products"
                  className="bg-primary text-[#0a0a0a] px-8 py-3 rounded-sm font-semibold hover:bg-[#e8d4a0] smooth-transition"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item: any) => (
                    <div
                      key={item.id}
                      className="border border-[#2d2d2d] rounded-sm p-6 flex gap-6"
                    >
                      {/* Item preview would go here */}
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-sm p-6 space-y-6 sticky top-24">
                    <h2 className="font-semibold text-foreground text-lg">
                      Order Summary
                    </h2>
                    <div className="space-y-3 border-t border-b border-[#2d2d2d] py-4">
                      <div className="flex justify-between text-sm text-foreground">
                        <span>Subtotal</span>
                        <span>$0.00</span>
                      </div>
                      <div className="flex justify-between text-sm text-foreground">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between text-sm text-foreground">
                        <span>Tax</span>
                        <span>$0.00</span>
                      </div>
                    </div>
                    <div className="flex justify-between font-semibold text-foreground">
                      <span>Total</span>
                      <span className="text-foreground">$0.00</span>
                    </div>
                    <button className="w-full bg-primary text-[#0a0a0a] py-3 px-6 rounded-sm font-semibold hover:bg-[#e8d4a0] smooth-transition">
                      Proceed to Checkout
                    </button>
                    <Link
                      href="/products"
                      className="block text-center text-foreground hover:text-[#e8d4a0] smooth-transition text-sm font-semibold"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
