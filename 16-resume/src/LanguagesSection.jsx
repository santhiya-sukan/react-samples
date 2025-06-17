// LanguagesSection.jsx
import React, { useState } from 'react';

export default function LanguagesSection({ languages, setLanguages }) {
  const [languageInput, setLanguageInput] = useState('');

  const handleLanguageAdd = () => {
    const trimmed = languageInput.trim();
    if (trimmed && !languages.includes(trimmed)) {
      setLanguages(prev => [...prev, trimmed]); // Use setter from props
      setLanguageInput('');
    }
  };

  const handleLanguageRemove = (lang) => {
    setLanguages(prev => prev.filter(l => l !== lang)); // Use setter from props
  };

  return (
    <div className="section-container">
      <h3>Languages</h3>
      <div className="input-group">
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={languageInput}
            onChange={(e) => setLanguageInput(e.target.value)}
            placeholder="Enter a language"
          />
          <button type="button" onClick={handleLanguageAdd}>Add</button>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          {languages.map((lang, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>{lang}</span>
              <button type="button" onClick={() => handleLanguageRemove(lang)}>❌</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}