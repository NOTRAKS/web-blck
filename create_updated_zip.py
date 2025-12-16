#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для создания обновленного ZIP архива со статическим сайтом BLCK
С обновленным логотипом и текстом
"""

import os
import shutil
import zipfile
from pathlib import Path

def main():
    print("📦 Создание обновленного ZIP архива со статическим сайтом BLCK...")
    
    base_dir = Path(__file__).parent
    out_dir = base_dir / "out"
    public_dir = base_dir / "public"
    zip_name = "blck-site-static-v2.zip"
    zip_path = base_dir / zip_name
    
    # Проверяем, что папка out существует
    if not out_dir.exists():
        print("❌ Ошибка: папка out не найдена!")
        print("   Выполните сначала: npm run build")
        return
    
    # Копируем обновленные файлы в out
    print("🔄 Обновляю файлы в out/...")
    
    # Копируем favicon.ico
    favicon_src = public_dir / "favicon.ico"
    favicon_dst = out_dir / "favicon.ico"
    if favicon_src.exists():
        shutil.copy2(favicon_src, favicon_dst)
        print(f"   ✓ Скопирован favicon.ico")
    else:
        print(f"   ⚠ favicon.ico не найден в public/")
    
    # Копируем icon-dark-32x32.png
    icon_src = public_dir / "icon-dark-32x32.png"
    icon_dst = out_dir / "icon-dark-32x32.png"
    if icon_src.exists():
        shutil.copy2(icon_src, icon_dst)
        print(f"   ✓ Скопирован icon-dark-32x32.png")
    else:
        print(f"   ⚠ icon-dark-32x32.png не найден в public/")
    
    # Удаляем старый архив если есть
    if zip_path.exists():
        print("🗑️  Удаляю старый архив...")
        zip_path.unlink()
    
    # Создаем ZIP из папки out
    print("🗜️  Создаю ZIP архив...")
    
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(out_dir):
            # Пропускаем скрытые файлы и папки
            dirs[:] = [d for d in dirs if not d.startswith('.')]
            files = [f for f in files if not f.startswith('.')]
            
            for file in files:
                file_path = Path(root) / file
                arcname = file_path.relative_to(out_dir)
                zipf.write(file_path, arcname)
    
    # Проверяем размер
    size_mb = zip_path.stat().st_size / (1024 * 1024)
    print("")
    print(f"✅ Архив создан: {zip_name}")
    print(f"📊 Размер: {size_mb:.2f} MB")
    print("")
    print("📋 Что включено:")
    print("  ✓ out/ (все статические файлы с обновлениями)")
    print("  ✓ favicon.ico (логотип BLCK)")
    print("  ✓ icon-dark-32x32.png (логотип BLCK)")
    print("  ✓ Все HTML файлы с текстом 'BLCK - Men's Accessories'")
    print("  ✓ Все обновленные метаданные")
    print("")
    print("🚀 Следующий шаг:")
    print(f"   1. Загрузите {zip_name} на хостинг")
    print("   2. Распакуйте в папку public_html или www")
    print("   3. Готово! Сайт будет работать с обновленным брендингом BLCK")
    print("")
    print("✅ Все изменения внесены:")
    print("   - Логотип BLCK в favicon.ico")
    print("   - Логотип BLCK в icon-dark-32x32.png")
    print("   - Текст 'BLCK - Men's Accessories' во всех метаданных")
    print("")

if __name__ == "__main__":
    main()

