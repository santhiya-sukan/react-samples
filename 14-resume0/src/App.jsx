import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumeList from './ResumeList';


export default function App() {
  const [view, setView] = useState('form');
  const [editIndex, setEditIndex] = useState(null);

  return (
    <div className="app-container">
      <div className="button-group">
        <button onClick={() => setView('form')}>Enter Resume Details</button>
        <button onClick={() => setView('list')}>View Resume Details</button>
        
      </div>
      {view === 'form' ? (
        <ResumeForm editIndex={editIndex} setEditIndex={setEditIndex} switchToList={() => setView('list')} />
      ) : (
        <ResumeList switchToForm={() => setView('form')} setEditIndex={setEditIndex} />
      )}
    </div>
  );
}