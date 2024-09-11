const express = require('express');
const app = express();
const path = require('path');

// إعداد محرك القوالب EJS لعرض الصفحات
app.set('view engine', 'ejs');

// إعداد المجلد العام للملفات الثابتة مثل CSS
app.use(express.static(path.join(__dirname, 'public')));

// توجيه الصفحة الرئيسية
app.get('/', (req, res) => {
  res.render('index');
});

// توجيه صفحة الفواكه
app.get('/fruits', (req, res) => {
  res.render('fruits');
});

// توجيه صفحة الملابس
app.get('/clothes', (req, res) => {
  res.render('clothes');
});

// توجيه صفحة الخدمات
app.get('/services', (req, res) => {
  res.render('services');
});

// توجيه صفحة الإشهار
app.get('/ads', (req, res) => {
  res.render('ads');
});

// توجيه صفحة الألعاب
app.get('/games', (req, res) => {
  res.render('games');
});

// تشغيل الخادم على المنفذ 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

