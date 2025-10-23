const express = require('express');
const serverless = require("serverless-http");
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./views");

let books = [
  { id: 1, title: 'micky', author: 'micky' },
  { id: 2, title: 'The Jungle Book', author: 'Kipling' },
  { id: 3, title: 'Alice in Wonderland', author: 'aLewis' }
];

app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'title and author are required' });
  }
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.get('/books', (req, res) => {
  res.status(200).json(books);
});


module.exports = app;

