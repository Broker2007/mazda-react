# Инструкция по конвертации видео в GIF

## Способ 1: Онлайн сервисы (самый простой)

### EZGIF.com (рекомендуется)
1. Перейдите на https://ezgif.com/video-to-gif
2. Загрузите файл `demo/bandicam 2023-10-01 13-16-43-801.mp4`
3. Настройте параметры:
   - **Start time** - время начала (например, 0)
   - **Duration** - длительность GIF (рекомендуется 10-30 секунд для меньшего размера)
   - **Size** - размер (можно уменьшить до 800px по ширине)
   - **FPS** - кадров в секунду (10-15 достаточно)
4. Нажмите "Convert to GIF"
5. Нажмите "Save" и скачайте файл
6. Переименуйте в `demo.gif` и поместите в папку `demo/`

### CloudConvert
1. Перейдите на https://cloudconvert.com/mp4-to-gif
2. Загрузите видео
3. Настройте параметры и конвертируйте
4. Скачайте результат

### GIPHY
1. Перейдите на https://giphy.com/create/gifmaker
2. Загрузите видео
3. Создайте GIF и скачайте

## Способ 2: FFmpeg (для продвинутых пользователей)

### Установка FFmpeg

**Windows:**
1. Скачайте FFmpeg с https://ffmpeg.org/download.html
2. Или используйте Chocolatey: `choco install ffmpeg`
3. Или используйте Scoop: `scoop install ffmpeg`

**Mac:**
```bash
brew install ffmpeg
```

**Linux:**
```bash
sudo apt install ffmpeg  # Ubuntu/Debian
sudo yum install ffmpeg  # CentOS/RHEL
```

### Команда для конвертации

```bash
# Базовая конвертация (может быть большой файл)
ffmpeg -i "demo/bandicam 2023-10-01 13-16-43-801.mp4" "demo/demo.gif"

# Оптимизированная конвертация (меньший размер файла)
ffmpeg -i "demo/bandicam 2023-10-01 13-16-43-801.mp4" \
  -vf "fps=10,scale=800:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
  -loop 0 \
  "demo/demo.gif"

# Конвертация с обрезкой времени (первые 30 секунд)
ffmpeg -i "demo/bandicam 2023-10-01 13-16-43-801.mp4" \
  -t 30 \
  -vf "fps=10,scale=800:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
  -loop 0 \
  "demo/demo.gif"
```

**Параметры:**
- `fps=10` - 10 кадров в секунду (меньше = меньше размер)
- `scale=800:-1` - ширина 800px, высота автоматически
- `-t 30` - только первые 30 секунд видео
- `-loop 0` - бесконечный цикл

## Способ 3: Программы для Windows

### ScreenToGif (бесплатно, рекомендуется)
1. Скачайте с https://www.screentogif.com/
2. Откройте видео через "Media File"
3. Обрежьте нужный фрагмент
4. Экспортируйте как GIF с настройками качества

### GIMP (бесплатно)
1. Установите GIMP
2. File → Import → выберите видео
3. File → Export As → выберите формат GIF
4. Настройте параметры и экспортируйте

### Photoshop
1. File → Import → Video Frames to Layers
2. Выберите диапазон кадров
3. File → Export → Save for Web (Legacy)
4. Выберите формат GIF и настройте параметры

## Рекомендации

1. **Длительность:** Для README лучше использовать короткие GIF (10-30 секунд)
2. **Размер:** Ширина 600-800px оптимальна для GitHub
3. **FPS:** 10-15 кадров в секунду достаточно для демонстрации
4. **Размер файла:** Старайтесь уложиться в 5-10 МБ для быстрой загрузки

## После конвертации

1. Переименуйте файл в `demo.gif`
2. Поместите в папку `demo/`
3. Обновите README.md (уже сделано автоматически)

