"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const productId = searchParams.get("product")
  const productTitle = searchParams.get("title")
  const productPrice = searchParams.get("price") || "скоро"

  const productImages: Record<string, string> = {
    wallets: "/luxury-minimal-wallet-monochrome.jpg",
    bags: "/luxury-leather-bag-monochrome.jpg",
    perfumes: "/luxury-perfume-bottle-monochrome.jpg",
    belts: "/luxury-leather-belt-monochrome.jpg"
  }

  const productPrices: Record<string, string> = {
    wallets: "7000 рублей",
    bags: "скоро будет в продаже",
    perfumes: "скоро будет в продаже",
    belts: "скоро будет в продаже"
  }

  const imageSrc = productId ? (productImages[productId] || "/placeholder.jpg") : "/placeholder.jpg"
  const title = productTitle || "Товар"
  const price = productPrice || productPrices[productId || ''] || "Цена по запросу"

  return (
    <main className="bg-black min-h-screen">
      <Header />
      <section className="py-16 sm:py-24 md:py-40 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Фото растянуто по ширине и по центру */}
          <div className="mb-8 sm:mb-12 md:mb-16 flex justify-center">
            <img
              src={imageSrc}
              alt={title}
              className="w-full max-w-full h-auto object-cover grayscale opacity-70"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Текст по стилю */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-4 sm:mb-6" style={{ color: "#DDCCAF", letterSpacing: "0.08em" }}>
              {title}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold" style={{ color: "rgba(221, 204, 175, 0.8)", letterSpacing: "0.05em" }}>
              {price}
            </p>
          </div>

          {/* Telegram и WhatsApp */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://t.me/blck_store"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border uppercase text-sm font-semibold transition-elegant hover:bg-[#DDCCAF] hover:text-black text-center"
              style={{
                letterSpacing: "0.15em",
                borderColor: "#DDCCAF",
                color: "#DDCCAF"
              }}
            >
              Telegram
            </a>
            <a
              href="https://wa.me/79993560036"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border uppercase text-sm font-semibold transition-elegant hover:bg-[#DDCCAF] hover:text-black text-center"
              style={{
                letterSpacing: "0.15em",
                borderColor: "#DDCCAF",
                color: "#DDCCAF"
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <main className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center" style={{ color: "#DDCCAF" }}>подождите пару секунд</div>
      </main>
    }>
      <CheckoutContent />
    </Suspense>
  )
}

