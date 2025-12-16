"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Welcome() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 bg-black relative overflow-hidden pt-20 sm:pt-24 md:pt-0">
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <div className="absolute w-full h-px bg-white/10 top-1/2 left-0" />
        <div className="absolute w-px h-full bg-white/10 left-1/2 top-0" />
      </div>

      <div className="relative z-10 text-center">
        <div
          className={`text-[10px] sm:text-xs md:text-sm font-semibold uppercase mb-6 sm:mb-8 md:mb-12 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
          style={{ letterSpacing: "0.3em", color: "rgba(221, 204, 175, 0.6)" }}
        >
          Welcome to
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link href="/collections">
            <div
              className="flex items-center justify-center mx-auto transition-elegant group hover:scale-105 cursor-pointer"
              style={{ 
                width: "clamp(200px, 55vw, 400px)", 
                height: "clamp(50px, 12vw, 100px)", 
                backgroundColor: "#DDCCAF" 
              }}
            >
              <span
                className="font-black text-black"
                style={{
                  fontSize: "clamp(36px, 9vw, 70px)",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  letterSpacing: "0.10px",
                }}
              >
                BLCK
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

