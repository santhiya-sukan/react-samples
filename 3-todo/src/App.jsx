import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TodoInput onAdd={addTodo} />

      <h2>Pending Tasks</h2>
      {incompleteTodos.length === 0 && <p>No pending tasks</p>}
      {incompleteTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
      ))}

      <h2 style={{ marginTop: '40px' }}>Completed Tasks</h2>
      {completedTodos.length === 0 && <p>No completed tasks</p>}
      {completedTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
      ))}
    </div>
  );
};

export default App;
