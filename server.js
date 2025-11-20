const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;

app.use(express.json());

// Array in memoria per le attività
let todos = [];

// Rotta base
app.get('/', (req, res) => {
  res.send('Benvenuto nella To-Do List app!');
});

// GET tutte le attività
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST nuova attività
app.post('/todos', (req, res) => {
  const todo = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// PUT modifica attività (es. completare)
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.text = req.body.text ?? todo.text;
    todo.completed = req.body.completed ?? todo.completed;
    res.json(todo);
  } else {
    res.status(404).send('Attività non trovata');
  }
});

// DELETE elimina attività
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.status(204).send();
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
