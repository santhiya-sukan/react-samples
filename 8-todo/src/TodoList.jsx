import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import './App.css';

export default function TodoList() {
  const [state, setState] = useState({
    tasks: [],
    input: ''
  });

  const [message, setMessage] = useState('');
  const [lastAction, setLastAction] = useState(null); // changed to object

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 2000);
  };

  useEffect(() => {
    if (!lastAction) return;

    const { type } = lastAction;

    if (type === 'add') showMessage('✅ Task successsfully added!');
    else if (type === 'edit') showMessage('✏️ Task updated!');
    else if (type === 'delete') showMessage('🗑️ Task deleted!');
    else if (type === 'clearChecked') showMessage('✔️ Completed tasks removed!');
  }, [lastAction]);

  const handleAdd = () => {
    if (state.input.trim()) {
      setState({
        ...state,
        tasks: [...state.tasks, { text: state.input.trim(), done: false }],
        input: ''
      });
      setLastAction({ type: 'add', id: Date.now() });
    }
  };

  const handleToggle = (index) => {
    const updated = [...state.tasks];
    updated[index].done = !updated[index].done;
    setState({ ...state, tasks: updated });
  };

  const handleEdit = (index) => {
    const newText = prompt('Edit task:', state.tasks[index].text);
    if (newText !== null) {
      const updated = [...state.tasks];
      updated[index].text = newText;
      setState({ ...state, tasks: updated });
      setLastAction({ type: 'edit', id: Date.now() });
    }
  };

  const handleDelete = (index) => {
    const updated = [...state.tasks];
    updated.splice(index, 1);
    setState({ ...state, tasks: updated });
    setLastAction({ type: 'delete', id: Date.now() });
  };

  const handleRemoveChecked = () => {
    const updated = state.tasks.filter(task => !task.done);
    setState({ ...state, tasks: updated });
    setLastAction({ type: 'clearChecked', id: Date.now() });
  };

  const doneCount = state.tasks.filter(task => task.done).length;
  const percentageDone = state.tasks.length ? (doneCount / state.tasks.length) * 100 : 0;

  return (
    <div className="todo-container">
      <h1 className="heading">TODOLIST</h1>

      <div className="input-container">
        <input
          className="input"
          placeholder="what needs to be done?"
          value={state.input}
          onChange={(e) => setState({ ...state, input: e.target.value })}
        />
        <button className="add-button" onClick={handleAdd}>+</button>
      </div>

      <ul className="task-list">
        {state.tasks.map((task, index) => (
          <TodoItem
            key={index}
            index={index}
            task={task}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </ul>

      <div className="footer">
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${percentageDone}%` }}></div>
          </div>
          <span>{doneCount} of {state.tasks.length} tasks done</span>
        </div>
        <button onClick={handleRemoveChecked}>Remove checked ✖</button>
      </div>

      {message && <div className="message">{message}</div>}
    </div>
  );
}
