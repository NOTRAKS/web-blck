# ✅ Чеклист перед деплоем на REG.RU

## 🔍 Проверка структуры проекта

### Папки (должны быть):
- [x] `app/` - страницы приложения
- [x] `components/` - компоненты React
- [x] `public/` - статические файлы (изображения)
- [x] `styles/` - стили
- [x] `lib/` - утилиты
- [x] `hooks/` - хуки React

### Файлы в корне (должны быть):
- [x] `package.json` - зависимости
- [x] `package-lock.json` - зафиксированные версии
- [x] `next.config.mjs` - конфигурация Next.js
- [x] `tsconfig.json` - конфигурация TypeScript
- [x] `postcss.config.mjs` - конфигурация PostCSS

---

## 🖼️ Проверка изображений

### Изображения в `public/` (должны быть):
- [x] `luxury-leather-bag-monochrome.jpg`
- [x] `luxury-leather-belt-monochrome.jpg`
- [x] `luxury-leather-belt-studio-monochrome.jpg`
- [x] `luxury-minimal-wallet-monochrome.jpg`
- [x] `luxury-perfume-bottle-monochrome.jpg`
- [x] `placeholder.jpg`
- [x] `placeholder.svg`
- [x] `icon.svg`
- [x] `icon-light-32x32.png`
- [x] `icon-dark-32x32.png` (логотип BLCK)
- [x] `apple-icon.png`

### Проверка путей к изображениям в коде:
- [x] Все пути начинаются с `/` (например: `/luxury-leather-bag-monochrome.jpg`)
- [x] Нет путей типа `../public/` или `./public/`
- [x] Все изображения используются из папки `public/`

---

## 📦 Проверка зависимостей

### package.json должен содержать:
- [x] `next` - версия 16.x
- [x] `react` - версия 19.x
- [x] `react-dom` - версия 19.x
- [x] `typescript` - в devDependencies
- [x] `tailwindcss` - в devDependencies
- [x] Все зависимости из `@radix-ui/*`
- [x] `@vercel/analytics` - для аналитики

### Проверка:
```bash
npm install
npm run build
```
Должно пройти без ошибок ✅

---

## 🔗 Проверка импортов

### Все импорты должны быть правильными:
- [x] Импорты компонентов: `import Header from "@/components/header"`
- [x] Импорты утилит: `import { cn } from "@/lib/utils"`
- [x] Импорты хуков: `import { useToast } from "@/hooks/use-toast"`
- [x] Нет относительных путей типа `../../components/`
- [x] Все пути через `@/` работают (проверено в tsconfig.json)

---

## ⚙️ Проверка конфигурации

### next.config.mjs:
- [x] `output: 'standalone'` - для продакшена
- [x] `images.unoptimized: true` - для хостинга без оптимизации
- [x] `typescript.ignoreBuildErrors: true` - если есть ошибки типов

### tsconfig.json:
- [x] `paths: { "@/*": ["./*"] }` - алиасы путей настроены
- [x] `moduleResolution: "bundler"` - для Next.js

---

## 📄 Проверка страниц

### Все страницы должны существовать:
- [x] `app/page.tsx` - главная страница
- [x] `app/collections/page.tsx` - страница коллекций
- [x] `app/checkout/page.tsx` - страница заказа
- [x] `app/layout.tsx` - корневой layout

### Все компоненты должны существовать:
- [x] `components/header.tsx`
- [x] `components/footer.tsx`
- [x] `components/hero.tsx`
- [x] `components/welcome.tsx`
- [x] `components/philosophy.tsx`
- [x] `components/collections.tsx`

---

## 🧪 Локальная проверка

### Перед деплоем проверьте локально:

1. **Сборка:**
   ```bash
   npm run build
   ```
   Должно пройти без ошибок ✅

2. **Запуск:**
   ```bash
   npm start
   ```
   Сайт должен открыться на `http://localhost:3000` ✅

3. **Проверка страниц:**
   - [x] Главная страница открывается
   - [x] Страница коллекций открывается
   - [x] Страница заказа открывается
   - [x] Все изображения загружаются
   - [x] Форма заказа работает (открывается Telegram)

---

## 📦 Проверка ZIP архива

### Перед загрузкой на REG.RU:

- [x] ZIP создан без `node_modules/`
- [x] ZIP создан без `.next/`
- [x] ZIP создан без `.git/`
- [x] Все папки включены: `app/`, `components/`, `public/`, `styles/`
- [x] Все файлы включены: `package.json`, `next.config.mjs`, `tsconfig.json`
- [x] Размер ZIP разумный (5-15 МБ, не больше 50 МБ)

### Создание ZIP:
```bash
./create-zip.sh
```
Или вручную по инструкции в `FILES_FOR_ZIP.txt`

---

## 🚀 Готово к деплою!

Если все пункты отмечены ✅ - можно загружать на REG.RU!

**Следующие шаги:**
1. Создайте ZIP архив
2. Загрузите на REG.RU
3. Следуйте инструкции в `REG_RU_DEPLOY.md`

---

## ❓ Если что-то не работает:

1. **Ошибка сборки:**
   - Проверьте логи: `npm run build`
   - Убедитесь, что все зависимости установлены

2. **Изображения не загружаются:**
   - Проверьте, что папка `public/` в ZIP
   - Проверьте пути в коде (должны начинаться с `/`)

3. **Импорты не работают:**
   - Проверьте `tsconfig.json` - должны быть алиасы `@/*`
   - Убедитесь, что все файлы на месте

4. **Страницы не открываются:**
   - Проверьте, что все файлы в `app/` загружены
   - Проверьте логи на сервере


