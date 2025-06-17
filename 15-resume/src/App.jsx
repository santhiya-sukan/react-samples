// App.js
import React, { useEffect, useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumeList from './ResumeList';
import './ResumeForm.css';

export default function App() {
  const [view, setView] = useState('form');
  const [editIndex, setEditIndex] = useState(null);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('resumes') || '[]');
    setResumes(stored);
  }, []);

  const handleDeleteAll = () => {
    if (resumes.length === 0) {
      alert('No resume available to delete.');
      return;
    }
    if (window.confirm('Are you sure you want to delete all resumes?')) {
      localStorage.removeItem('resumes');
      setResumes([]);
      alert('All resumes deleted successfully!');
    }
  };

  return (
    <div className="app-container">
      <div className="button-group">
        <button onClick={() => { setEditIndex(null); setView('form'); }}>Create Resume</button>
        <button onClick={() => setView('list')}>View Resume</button>
        <button onClick={handleDeleteAll}>Delete All</button>
      </div>

      {view === 'list' && resumes.length === 0 && (
        <p style={{ textAlign: 'center', color: 'red' }}>No resume available.</p>
      )}

      {view === 'form' ? (
        <ResumeForm
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          switchToList={() => setView('list')}
          resumes={resumes} // Pass resumes to ResumeForm
          setResumes={setResumes} // Pass setResumes to ResumeForm
        />
      ) : (
        <ResumeList
          switchToForm={() => setView('form')}
          setEditIndex={setEditIndex}
          resumes={resumes}
          setResumes={setResumes}
        />
      )}
    </div>
  );
}