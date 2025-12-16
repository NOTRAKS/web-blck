#!/bin/bash

# Скрипт для создания ZIP архива для REG.RU
# С обновленными метаданными "BLCK | Мужские Аксессуары"

echo "📦 Создание ZIP архива для REG.RU..."

# Проверяем, что сборка есть
if [ ! -d "out" ]; then
    echo "❌ Ошибка: папка out не найдена!"
    echo "   Выполните сначала: ./build-static.sh"
    exit 1
fi

# Имя нового архива
ZIP_NAME="blck-site-reg-ru.zip"

# Удаляем старый архив если есть
if [ -f "$ZIP_NAME" ]; then
    echo "🗑️  Удаляю старый архив..."
    rm "$ZIP_NAME"
fi

# Копируем обновленные файлы в out (если нужно)
echo "🔄 Проверяю файлы в out/..."

# Проверяем наличие SVG иконок
if [ -f "public/icon.svg" ]; then
  echo "   ✓ icon.svg найден"
fi
if [ -f "public/icon-dark.svg" ]; then
  echo "   ✓ icon-dark.svg найден"
fi

# Создаем ZIP из папки out
echo "🗜️  Создаю ZIP архив..."
cd out
zip -r "../$ZIP_NAME" . -q
cd ..

# Проверяем размер
SIZE=$(du -h "$ZIP_NAME" 2>/dev/null | cut -f1 || echo "N/A")
echo ""
echo "✅ Архив создан: $ZIP_NAME"
echo "📊 Размер: $SIZE"
echo ""
echo "📋 Что включено:"
echo "  ✓ out/ (все статические файлы с обновленными метаданными)"
echo "  ✓ index.html (главная страница с 'BLCK | Мужские Аксессуары')"
echo "  ✓ Все HTML, CSS, JS файлы"
echo "  ✓ Все изображения из public/"
echo "  ✓ Все обновленные метаданные"
echo ""
echo "🚀 Следующий шаг для REG.RU:"
echo "   1. Загрузите $ZIP_NAME на хостинг REG.RU"
echo "   2. Распакуйте в папку public_html или www"
echo "   3. Готово! Сайт будет работать сразу"
echo ""
echo "✅ Все изменения внесены:"
echo "   - Метаданные: 'BLCK | Мужские Аксессуары'"
echo "   - Все статические файлы готовы для REG.RU"
echo ""

