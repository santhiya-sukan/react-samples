import React, { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 border rounded-l px-3 py-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
