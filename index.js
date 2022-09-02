const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './templates');

app.get('/', (req, res) => {
  res.render('index', { name: 'Alex', id: 1 });
});

app.get('/about', (req, res) => {
  res.render('about');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});
