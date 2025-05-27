const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// Add a new todo
router.post('/', async (req, res) => {
  const { text, dueDate } = req.body;
  const newTodo = new Todo({ text, dueDate });
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
});


// Update a todo
router.put('/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed; // Toggle the status
  await todo.save();
  res.json(todo);
});


// Delete a todo
router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

module.exports = router;
