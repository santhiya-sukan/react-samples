import React, { useEffect, useState } from 'react';
import './ResumeList.css';

export default function ResumeList({ switchToForm, setEditIndex }) {
  const [resumes, setResumes] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('resumes') || '[]');
    setResumes(stored);
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleDelete = (index) => {
  const updated = resumes.filter((_, i) => i !== index);
  setResumes(updated);
  localStorage.setItem('resumes', JSON.stringify(updated));
  alert('🗑️ Resume deleted successfully!');
};

const handleDeleteAll = () => {
  localStorage.removeItem('resumes');
  setResumes([]);
  alert('🗑️ All resumes have been deleted!');
};


  const handleUpdate = (index) => {
    setEditIndex(index);
    switchToForm();
  };

  return (
    <div className="list-container">
      <h2>Submitted Resumes</h2>
      {message && <p className="success-msg">{message}</p>}
      <button onClick={switchToForm}>Back to Form</button>
      {resumes.length > 0 && (
        <button onClick={handleDeleteAll} className="delete-all-btn">
          Delete All
        </button>
      )}
      {resumes.length === 0 ? (
        <p>No resumes submitted yet.</p>
      ) : (
        resumes.map((r, i) => (
          <div key={i} className="resume-card">
            <p><strong>Name:</strong> {r.name}</p>
            <p><strong>Email:</strong> {r.email}</p>
            <p><strong>Phone:</strong> {r.phone}</p>
            <p><strong>Address:</strong> {r.address}</p>
            <p><strong>Profile Summary:</strong> {r.profile}</p>
            <p><strong>Education:</strong> {r.education}</p>
            <p><strong>Skills:</strong> {r.skills}</p>
            <p><strong>Experience:</strong> {r.experience}</p>
            <p><strong>Languages Known:</strong> {r.languages}</p>
            <button onClick={() => handleUpdate(i)} className="update-btn">Update</button>
            <button onClick={() => handleDelete(i)} className="delete-btn">Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
