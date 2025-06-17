import React from 'react';
import TodoItem from './TodoItem';
import './App.css';

const TodoList = ({ todos, onToggle, onDelete, title }) => {
  return (
    <div className="todo-list-container">
      <h3>{title}</h3>
      <ul className="todo-list">
        {todos.length === 0 && <li style={{ color: '#999' }}>No tasks</li>}
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
