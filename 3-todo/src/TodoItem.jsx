

import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px',
      background: '#f0f0f0',
      borderRadius: '8px',
      marginBottom: '8px',
    }}
  >
    <span
      onClick={() => onToggle(todo.id)}
      style={{
        flex: 1,
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#999' : '#000',
      }}
    >
      {todo.text}
    </span>
    <span
      onClick={() => onDelete(todo.id)}
      style={{
        marginLeft: '16px',
        cursor: 'pointer',
        color: 'red',
        fontWeight: 'bold',
        fontSize: '1.2rem',
      }}
    >
      ✖
    </span>
  </div>
);

export default TodoItem;
