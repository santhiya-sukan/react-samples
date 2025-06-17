import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const activeTasks = todos.filter(todo => !todo.completed);
  const completedTasks = todos.filter(todo => todo.completed);

  return (
    <div className="app-container">
      <h1>My To-Do List</h1>
      <TodoInput onAdd={addTask} />
      <TodoList
        todos={activeTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        title="Active Tasks"
      />
      <TodoList
        todos={completedTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        title="Completed Tasks"
      />
    </div>
  );
};

export default App;
