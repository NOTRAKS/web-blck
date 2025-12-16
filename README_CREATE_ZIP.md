# Создание обновленного ZIP архива

## Быстрый способ

Выполните в терминале:

```bash
# 1. Скопируйте обновленные файлы в out/
cp public/favicon.ico out/favicon.ico
cp public/icon-dark-32x32.png out/icon-dark-32x32.png

# 2. Создайте новый ZIP архив
cd out
zip -r ../blck-site-static-v2.zip .
cd ..
```

Или используйте готовый скрипт:

```bash
# Вариант 1: Bash скрипт
./create-static-zip-updated.sh

# Вариант 2: Python скрипт
python3 create_updated_zip.py
```

## Что включено в архив

- ✅ Все файлы из папки `out/` (статический сайт)
- ✅ `favicon.ico` с логотипом BLCK
- ✅ `icon-dark-32x32.png` с логотипом BLCK
- ✅ Все HTML файлы с текстом "BLCK - Men's Accessories"
- ✅ Все обновленные метаданные

## Результат

Создастся файл: **`blck-site-static-v2.zip`**

Это обновленная версия `blck-site-static.zip` с:
- Новым названием (v2)
- Обновленным логотипом BLCK
- Обновленным текстом брендинга

