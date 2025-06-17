import React from 'react';
import './App.css';

export default function TodoItem({ index, task, onToggle, onEdit, onDelete }) {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(index)}
      />
      <span className={`task-text ${task.done ? 'done' : ''}`}>{task.text}</span>
      <button className="edit-button" onClick={() => onEdit(index)}>✎</button>
      <button className="delete-button" onClick={() => onDelete(index)}>✖</button>
    </li>
  );
}
