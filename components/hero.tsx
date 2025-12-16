"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center pt-6 sm:pt-8 md:pt-12 px-4 sm:px-6 md:px-12 lg:px-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <div className="absolute w-full h-px bg-white/20 top-1/4 left-0 animate-shimmer" />
        <div className="absolute w-px h-full bg-white/20 left-1/3 top-0" />
        <div className="absolute w-px h-full bg-white/20 right-1/4 top-0" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center justify-items-center lg:justify-items-start">
          <div className="mb-8 md:mb-12 w-full max-w-2xl">
            <h1
              className={`text-xl sm:text-2xl md:text-4xl font-black leading-tight sm:leading-none mb-4 sm:mb-6 md:mb-8 tracking-tighter ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.2s", color: "#DDCCAF", letterSpacing: "0.05em" }}
            >
              BLCK - это больше, чем просто аксессуары.
            </h1>

            <div
              className={`w-16 sm:w-20 h-px my-6 sm:my-8 md:my-12 ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}
              style={{ animationDelay: "0.3s", backgroundColor: "rgba(221, 204, 175, 0.4)" }}
            />

            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-lg mb-6 sm:mb-8 md:mb-12 font-medium ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s", color: "rgba(221, 204, 175, 0.6)" }}
            >
              Это видение, которое вы транслируете в мир. Мы постоянно развиваемся и работаем над улучшением наших изделий, чтобы вы могли выбрать модель, которая идеально подойдет именно Вам.
            </p>

            <Link href="/collections" className="group inline-block">
              <span
                className={`inline-flex items-center gap-3 text-xs uppercase font-semibold border-b-2 pb-3 hover:opacity-60 transition-elegant relative ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ letterSpacing: "0.15em", animationDelay: "0.5s", color: "#DDCCAF", borderColor: "#DDCCAF" }}
              >
                Смотреть коллекцию
                <span className="inline-block transition-elegant duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
                  →
                </span>
              </span>
            </Link>
          </div>

          <div
            className={`hidden lg:flex items-center justify-center group ${isLoaded ? "animate-scale-up" : "opacity-0"}`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="w-full max-w-md aspect-square relative">
              <div
                className="w-full h-full bg-gradient-to-br from-white/5 to-black flex items-center justify-center border transition-elegant"
                style={{ borderColor: "rgba(221, 204, 175, 0.05)" }}
              >
                <img
                  src="/luxury-leather-belt-studio-monochrome.jpg"
                  alt="BLCK leather belt"
                  className="w-full h-full object-contain object-center grayscale opacity-80 group-hover:opacity-100 transition-elegant"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
