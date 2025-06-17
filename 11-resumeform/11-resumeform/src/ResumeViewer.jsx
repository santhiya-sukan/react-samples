import React from 'react';
import './ResumeForm.css';

export default function ResumeViewer({ data, onEdit }) {
  if (!data) return <p>No resume data found.</p>;

  return (
    <div className="viewer">
      <h2>Your Resume</h2>
      <div><strong>Name:</strong> {data.name}</div>
      <div><strong>Email:</strong> {data.email}</div>
      <div><strong>Phone:</strong> {data.phone}</div>
      <div><strong>Location:</strong> {data.location}</div>
      <div><strong>LinkedIn:</strong> {data.linkedin}</div>
      <div><strong>Summary:</strong> {data.summary}</div>
      <div><strong>Languages:</strong> {data.languages}</div>
      <div><strong>Education:</strong> {data.education}</div>
      <div><strong>Experience:</strong> {data.experience}</div>
      <div><strong>Skills:</strong> {data.skills}</div>

      <button onClick={onEdit} className="edit-button">Edit Resume</button>
    </div>
  );
}
