/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  // Статический экспорт для обычного хостинга
  output: 'export',
  trailingSlash: true,
  // Отключаем source maps из-за кириллицы в пути
  productionBrowserSourceMaps: false,
  // Оптимизация производительности
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Оптимизация сборки
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
