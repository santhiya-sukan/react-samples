import React from 'react';
import './App.css';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <span onClick={() => onToggle(todo.id)} className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} className="todo-delete-button" >
        ✖
      </button>
    </li>
  );
};

export default TodoItem;
