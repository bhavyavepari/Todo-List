import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const formattedDate = new Date(todo.createdAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo._id)}
      />

      <div className="todo-content">
        <span className="todo-text">{todo.text}</span>
        <span className="todo-date">Created: {formattedDate}</span>
        <span className="todo-due-date">
          {todo.dueDate ? `Due: ${new Date(todo.dueDate).toLocaleDateString()}` : 'No due date'}
        </span>
      </div>

      <span className={`status ${todo.completed ? 'completed' : 'not-completed'}`}>
        {todo.completed ? '✅ Completed' : '❌ Not Completed'}
      </span>

      <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
