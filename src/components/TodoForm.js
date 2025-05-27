import React, { useState } from 'react';

function TodoForm({ newTodo, setNewTodo, newDueDate, setNewDueDate, addTodo }) {
  /*const [text, setText] = useState('');*/

  /*const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };*/

  return (
   <form className="todo-form" onSubmit={(e) => { e.preventDefault(); addTodo(); }}>
  <input
    type="text"
    className="todo-input"
    placeholder="Enter a task"
    value={newTodo}
    onChange={(e) => setNewTodo(e.target.value)}
  />
  <input
    type="date"
    className="todo-date-input"
    placeholder="Due date"
    value={newDueDate}
    onChange={(e) => setNewDueDate(e.target.value)}
  />
  <button type="submit" className="todo-button">Add Task</button>
</form>



  );
}

export default TodoForm;
