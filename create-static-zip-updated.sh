#!/bin/bash

# Скрипт для создания обновленного ZIP архива со статическим сайтом
# С обновленным логотипом BLCK и текстом

echo "📦 Создание обновленного ZIP архива со статическим сайтом BLCK..."

# Проверяем, что сборка есть
if [ ! -d "out" ]; then
    echo "❌ Ошибка: папка out не найдена!"
    echo "   Выполните сначала: npm run build"
    exit 1
fi

# Имя нового архива
ZIP_NAME="blck-site-static-v2.zip"

# Удаляем старый архив если есть
if [ -f "$ZIP_NAME" ]; then
    echo "🗑️  Удаляю старый архив..."
    rm "$ZIP_NAME"
fi

# Копируем обновленные файлы в out
echo "🔄 Обновляю файлы в out/..."
cp public/favicon.ico out/favicon.ico 2>/dev/null || true
cp public/icon-dark-32x32.png out/icon-dark-32x32.png 2>/dev/null || true

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
echo "  ✓ out/ (все статические файлы с обновлениями)"
echo "  ✓ favicon.ico (логотип BLCK)"
echo "  ✓ icon-dark-32x32.png (логотип BLCK)"
echo "  ✓ Все HTML файлы с текстом 'BLCK - Men's Accessories'"
echo "  ✓ Все обновленные метаданные"
echo ""
echo "🚀 Следующий шаг:"
echo "   1. Загрузите $ZIP_NAME на хостинг"
echo "   2. Распакуйте в папку public_html или www"
echo "   3. Готово! Сайт будет работать с обновленным брендингом BLCK"
echo ""
echo "✅ Все изменения внесены:"
echo "   - Логотип BLCK в favicon.ico"
echo "   - Логотип BLCK в icon-dark-32x32.png"
echo "   - Текст 'BLCK - Men's Accessories' во всех метаданных"
echo ""

