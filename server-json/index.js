const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3004;

// Middleware
app.use(cors());
app.use(express.json());

// Путь к файлу с данными
const dbPath = path.join(__dirname, '../json/db.json');

// Функция для чтения данных из JSON файла
function readDB() {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Ошибка чтения базы данных:', error);
    return { categories: [], mazda: [], service: [], entry: [] };
  }
}

// Функция для записи данных в JSON файл
function writeDB(data) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Ошибка записи в базу данных:', error);
    return false;
  }
}

// GET /categories - получить все категории
app.get('/categories', (req, res) => {
  try {
    const db = readDB();
    res.json(db.categories || []);
  } catch (error) {
    console.error('Ошибка при получении категорий:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// GET /mazda - получить все модели Mazda
app.get('/mazda', (req, res) => {
  try {
    const db = readDB();
    res.json(db.mazda || []);
  } catch (error) {
    console.error('Ошибка при получении моделей Mazda:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// POST /service - получить сервис по ID
app.post('/service', (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: 'ID не указан' });
    }
    
    const db = readDB();
    const service = db.service.find(s => s._id === id);
    
    if (!service) {
      return res.status(404).json({ error: 'Сервис не найден' });
    }
    
    res.json(service);
  } catch (error) {
    console.error('Ошибка при получении сервиса:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// POST /entry - создать новую заявку
app.post('/entry', (req, res) => {
  try {
    const { name, phone } = req.body;
    
    if (!name || !phone) {
      return res.status(400).json({ error: 'Имя и телефон обязательны' });
    }
    
    const db = readDB();
    
    // Создаем новую заявку
    const newEntry = {
      _id: Date.now().toString(),
      name,
      phone,
      createdAt: new Date().toISOString()
    };
    
    // Добавляем в массив entry
    if (!db.entry) {
      db.entry = [];
    }
    db.entry.push(newEntry);
    
    // Сохраняем в файл
    if (writeDB(db)) {
      console.log('Новая заявка создана:', newEntry);
      res.status(200).json({ message: 'Заявка успешно создана', entry: newEntry });
    } else {
      res.status(500).json({ error: 'Ошибка при сохранении заявки' });
    }
  } catch (error) {
    console.error('Ошибка при создании заявки:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
  console.log('Используется JSON база данных из файла:', dbPath);
});

