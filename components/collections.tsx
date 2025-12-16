"use client"

import { useState, useMemo } from "react"
import Link from "next/link"

export default function Collections() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const collections = useMemo(() => [
    {
      id: "wallets",
      title: "Портмоне",
      image: "/luxury-minimal-wallet-monochrome.jpg",
      price: "7000 рублей",
    },
    {
      id: "bags",
      title: "Сумки",
      image: "/luxury-leather-bag-monochrome.jpg",
      price: "скоро",
    },
    {
      id: "perfumes",
      title: "Парфюм",
      image: "/luxury-perfume-bottle-monochrome.jpg",
      price: "скоро",
    },
    {
      id: "belts",
      title: "Ремни",
      image: "/luxury-leather-belt-monochrome.jpg",
      price: "скоро",
    },
  ], [])

  return (
    <section id="collections" className="py-12 sm:py-16 md:py-24 lg:py-40 px-4 sm:px-6 md:px-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 animate-fade-in-up text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight mx-auto px-2 sm:px-4" style={{ color: "#DDCCAF" }}>
            Четыре
            <br />
            <span style={{ color: "rgba(221, 204, 175, 0.3)" }}>направления</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {collections.map((collection, idx) => (
            <div
              key={collection.id}
              className="group relative animate-fade-in-up overflow-hidden"
              style={{
                animationDelay: `${0.1 + idx * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/4] relative mb-4 border overflow-hidden" style={{ borderColor: "rgba(221, 204, 175, 0.1)", backgroundColor: "#1a1a1a" }}>
                <img
                  src={collection.image || "/placeholder.jpg"}
                  alt={collection.title}
                  className={`w-full h-full object-cover grayscale transition-elegant duration-500 ${
                    hoveredIndex === idx ? "opacity-100 grayscale-0 scale-105" : "opacity-70"
                  }`}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={idx === 0 ? "high" : "low"}
                />
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    hoveredIndex === idx ? "bg-white opacity-90" : "bg-transparent opacity-0"
                  }`}
                />
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                    hoveredIndex === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  {collection.id === "wallets" ? (
                    <>
                      <span
                        className="text-lg md:text-xl font-black uppercase mb-1"
                        style={{
                          letterSpacing: "0.15em",
                          color: "#000",
                        }}
                      >
                        7000
                      </span>
                      <span
                        className="text-xs md:text-sm font-semibold uppercase"
                        style={{
                          letterSpacing: "0.1em",
                          color: "#000",
                          opacity: 0.8,
                        }}
                      >
                        рублей
                      </span>
                    </>
                  ) : (
                    <span
                      className="text-sm md:text-base font-bold uppercase"
                      style={{
                        letterSpacing: "0.2em",
                        color: "#000",
                      }}
                    >
                      Скоро в продаже
                    </span>
                  )}
                </div>
              </div>
              <h3
                className="text-lg md:text-xl font-black uppercase text-center mb-4 transition-elegant"
                style={{ letterSpacing: "0.08em", color: hoveredIndex === idx ? "#DDCCAF" : "rgba(221, 204, 175, 0.7)" }}
              >
                {collection.title}
              </h3>
              <Link href={`/checkout?product=${collection.id}&title=${encodeURIComponent(collection.title)}&price=${encodeURIComponent(collection.price)}`}>
                <button
                  className="w-full py-3 border transition-elegant uppercase text-xs font-semibold"
                  style={{
                    letterSpacing: "0.15em",
                    borderColor: hoveredIndex === idx ? "#DDCCAF" : "rgba(221, 204, 175, 0.3)",
                    color: hoveredIndex === idx ? "#DDCCAF" : "rgba(221, 204, 175, 0.7)",
                    backgroundColor: hoveredIndex === idx ? "rgba(221, 204, 175, 0.05)" : "transparent"
                  }}
                >
                  Купить
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
