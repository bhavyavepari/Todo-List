import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const [newDueDate, setNewDueDate] = useState('');

  
  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.log(err));
  }, []);

  const addTodo = () => {
  if (!newTodo) return;

  axios.post('http://localhost:5000/api/todos', {
    text: newTodo,
    dueDate: newDueDate || null,
  })
  .then(res => {
    setTodos([...todos, res.data]);
    setNewTodo('');
    setNewDueDate('');
  })
  .catch(err => console.error(err));;
};


  const toggleTodo = (id) => {
    axios.put(`http://localhost:5000/api/todos/${id}`)
      .then(res => {
        setTodos(todos.map(todo => todo._id === id ? res.data : todo));
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/api/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id)));
  };


  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        newDueDate={newDueDate}
        setNewDueDate={setNewDueDate}
        addTodo={addTodo}
      />

      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
