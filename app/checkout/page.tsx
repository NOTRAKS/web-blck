"use client"

import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const productId = searchParams.get("product")
  const productTitle = searchParams.get("title")
  const productPrice = searchParams.get("price") || "скоро"
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  // Данные о товарах
  const productsData: Record<string, {
    images: string[]
    price: string
    characteristics: string[]
  }> = {
    wallets: {
      images: [
        "/luxury-minimal-wallet-monochrome.jpg",
        "/luxury-leather-belt-studio-monochrome.jpg",
        "/luxury-leather-materials-texture-monochrome.jpg",
      ],
      price: "7000 рублей",
      characteristics: [
        "Материал — Натуральная кожа премиум-класса",
        "Внутренняя отделка — Мягкая подкладка из натуральной кожи",
        "Размеры — 10.5 x 7.5 x 1.5 см",
        "Карманы — 6 карманов для карт, 2 отделения для купюр",
        "Фурнитура — Металлическая застежка с логотипом BLCK",
        "Цвет — Черный матовый",
        "Гарантия — 2 года на материалы и фурнитуру"
      ]
    },
    bags: {
      images: [
        "/luxury-leather-bag-monochrome.jpg",
        "/luxury-leather-belt-studio-monochrome.jpg",
        "/luxury-leather-materials-texture-monochrome.jpg",
      ],
      price: "скоро будет в продаже",
      characteristics: [
        "Материал — Натуральная кожа премиум-класса",
        "Размеры — 35 x 25 x 12 см",
        "Ручки — Кожаные ручки с металлическими элементами",
        "Внутренняя отделка — Мягкая подкладка",
        "Фурнитура — Металлическая фурнитура с логотипом BLCK",
        "Цвет — Черный матовый"
      ]
    },
    perfumes: {
      images: [
        "/luxury-perfume-bottle-monochrome.jpg",
        "/luxury-leather-belt-studio-monochrome.jpg",
        "/luxury-leather-materials-texture-monochrome.jpg",
      ],
      price: "скоро будет в продаже",
      characteristics: [
        "Объем — 100 мл",
        "Аромат — Древесный, пряный",
        "База — Амбра, ваниль, сандал",
        "Средние ноты — Лаванда, бергамот",
        "Верхние ноты — Черный перец, кардамон",
        "Упаковка — Премиальная упаковка с логотипом BLCK"
      ]
    },
    belts: {
      images: [
        "/luxury-leather-belt-monochrome.jpg",
        "/luxury-leather-belt-studio-monochrome.jpg",
        "/luxury-leather-materials-texture-monochrome.jpg",
      ],
      price: "скоро будет в продаже",
      characteristics: [
        "Материал — Натуральная кожа премиум-класса",
        "Ширина — 3.5 см",
        "Длина — Регулируемая (80-110 см)",
        "Пряжка — Металлическая с логотипом BLCK",
        "Цвет — Черный матовый",
        "Гарантия — 2 года на материалы и фурнитуру"
      ]
    }
  }

  const product = productId ? productsData[productId] : null
  const images = product?.images || ["/placeholder.jpg"]
  const price = productPrice || product?.price || "Цена по запросу"
  const title = productTitle || "Товар"
  const characteristics = product?.characteristics || []

  // Синхронизация карусели с миниатюрами
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setSelectedImageIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  // Переключение на выбранную миниатюру
  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index)
    api?.scrollTo(index)
  }

  return (
    <main className="bg-black min-h-screen">
      <Header />
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Левая часть - Карусель изображений */}
            <div className="space-y-4">
              {/* Основное изображение с каруселью */}
              <div className="relative">
                <Carousel
                  className="w-full"
                  setApi={setApi}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-square overflow-hidden border" style={{ borderColor: "rgba(221, 204, 175, 0.1)" }}>
                          <img
                            src={image}
                            alt={`${title} - изображение ${index + 1}`}
                            className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 transition-elegant"
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious 
                    className="left-2 border-white/20 hover:border-[#DDCCAF] bg-black/80 hover:bg-black"
                    style={{ color: "#DDCCAF" }}
                  />
                  <CarouselNext 
                    className="right-2 border-white/20 hover:border-[#DDCCAF] bg-black/80 hover:bg-black"
                    style={{ color: "#DDCCAF" }}
                  />
                </Carousel>
              </div>

              {/* Миниатюры */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`flex-shrink-0 w-20 h-20 border overflow-hidden transition-elegant cursor-pointer ${
                      selectedImageIndex === index 
                        ? "border-[#DDCCAF] opacity-100 grayscale-0" 
                        : "border-white/10 opacity-60 hover:opacity-80 grayscale"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${title} - миниатюра ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Правая часть - Информация о товаре */}
            <div className="space-y-6">
              {/* Название */}
              <div>
                <h1 
                  className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4"
                  style={{ color: "#DDCCAF", letterSpacing: "0.08em" }}
                >
                  {title}
                </h1>
                <p 
                  className="text-xl sm:text-2xl md:text-3xl font-semibold"
                  style={{ color: "rgba(221, 204, 175, 0.9)", letterSpacing: "0.05em" }}
                >
                  {price}
                </p>
              </div>

              {/* Кнопки */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t.me/blck_store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-8 py-4 border uppercase text-sm font-semibold transition-elegant hover:bg-[#DDCCAF] hover:text-black text-center"
                  style={{
                    letterSpacing: "0.15em",
                    borderColor: "#DDCCAF",
                    color: "#DDCCAF"
                  }}
                >
                  Купить
                </a>
                <a
                  href="https://wa.me/79993560036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-8 py-4 border uppercase text-sm font-semibold transition-elegant hover:bg-[#DDCCAF] hover:text-black text-center"
                  style={{
                    letterSpacing: "0.15em",
                    borderColor: "#DDCCAF",
                    color: "#DDCCAF"
                  }}
                >
                  Заказать консультацию
                </a>
              </div>

              {/* Характеристики */}
              {characteristics.length > 0 && (
                <div className="pt-6 border-t" style={{ borderColor: "rgba(221, 204, 175, 0.1)" }}>
                  <h2 
                    className="text-lg sm:text-xl font-black uppercase mb-4"
                    style={{ color: "#DDCCAF", letterSpacing: "0.1em" }}
                  >
                    Характеристики:
                  </h2>
                  <ul className="space-y-3">
                    {characteristics.map((char, index) => (
                      <li 
                        key={index}
                        className="text-sm sm:text-base"
                        style={{ color: "rgba(221, 204, 175, 0.8)", letterSpacing: "0.02em" }}
                      >
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
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
