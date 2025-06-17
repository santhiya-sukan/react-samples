import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumeList from './ResumeList';

export default function App() {
  const [view, setView] = useState('form'); // 'form' or 'list'
  const [editIndex, setEditIndex] = useState(null);
  const [message, setMessage] = useState('');


  const switchToForm = () => setView('form');
  const switchToView = () => {
    setEditIndex(null);
    setView('list');
  };

  return (
    <div>
      {view === 'form' ? (
        <ResumeForm switchToView={switchToView} editIndex={editIndex} />
      ) : (
        <ResumeList switchToForm={switchToForm} setEditIndex={setEditIndex} />
      )}
    </div>
  );
}
