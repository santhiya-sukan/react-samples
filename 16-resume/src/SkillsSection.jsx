// SkillsSection.jsx
import React, { useState, useEffect } from 'react'; // Add useEffect here

export default function SkillsSection({ skills, setSkills }) {
  const [skillCategoryInput, setSkillCategoryInput] = useState('');
  const [skillDetailInputs, setSkillDetailInputs] = useState({}); // Per-category skill input

  // Ensures skillDetailInputs are initialized for categories when skills prop changes (e.g., on edit load)
  // This useEffect mimics the behavior of the original component's main useEffect for skills
  useEffect(() => {
    const initialSkillDetailInputs = {};
    for (const category in skills) {
      initialSkillDetailInputs[category] = '';
    }
    setSkillDetailInputs(initialSkillDetailInputs);
  }, [skills]);


  const handleAddSkillCategory = () => {
    const trimmedCategory = skillCategoryInput.trim().toUpperCase();
    if (trimmedCategory && !skills[trimmedCategory]) {
      setSkills(prev => ({
        ...prev,
        [trimmedCategory]: [] // Initialize as empty array
      }));
      setSkillDetailInputs(prev => ({ ...prev, [trimmedCategory]: '' }));
      setSkillCategoryInput('');
    } else if (trimmedCategory) {
      alert(`Category "${trimmedCategory}" already exists.`);
    }
  };

  const handleSkillDetailInputChange = (category, value) => {
    setSkillDetailInputs(prev => ({ ...prev, [category]: value }));
  };

  const handleAddSkillDetail = (category) => {
    const trimmedSkill = (skillDetailInputs[category] || '').trim();

    if (trimmedSkill && skills[category] && !skills[category].includes(trimmedSkill)) {
      setSkills(prev => ({
        ...prev,
        [category]: [...(prev[category] || []), trimmedSkill]
      }));
      setSkillDetailInputs(prev => ({ ...prev, [category]: '' }));
    } else if (trimmedSkill && skills[category] && skills[category].includes(trimmedSkill)) {
      alert(`Skill "${trimmedSkill}" already exists in "${category}".`);
    } else if (trimmedSkill) {
      alert('Please select a category first.'); // This should ideally not happen if UI guides correctly
    }
  };

  const handleRemoveSkillCategory = (categoryToRemove) => {
    setSkills(prev => {
      const newSkills = { ...prev };
      delete newSkills[categoryToRemove];
      return newSkills;
    });
    setSkillDetailInputs(prev => {
      const newInputs = { ...prev };
      delete newInputs[categoryToRemove];
      return newInputs;
    });
  };

  const handleRemoveSkillDetail = (category, skillToRemove) => {
    setSkills(prev => ({
      ...prev,
      [category]: prev[category].filter(skill => skill !== skillToRemove)
    }));
  };

  return (
    <div className="section-container">
      <h3>Skills</h3>
      <div className="input-group">
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          <input
            type="text"
            value={skillCategoryInput}
            onChange={(e) => setSkillCategoryInput(e.target.value)}
            placeholder="Enter skill category (e.g., FRONT END)"
          />
          <button type="button" onClick={handleAddSkillCategory}>Add Category</button>
        </div>

        {Object.keys(skills).map(category => (
          <div key={category} style={{ marginBottom: '1rem', border: '1px dashed #eee', padding: '0.75rem', borderRadius: '5px' }}>
            <h4 style={{ margin: '0 0 0.5rem 0' }}>
              {category}
              <button type="button" onClick={() => handleRemoveSkillCategory(category)} style={{ marginLeft: '10px', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>❌</button>
            </h4>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input
                type="text"
                value={skillDetailInputs[category] || ''}
                onChange={(e) => handleSkillDetailInputChange(category, e.target.value)}
                placeholder={`Add skill to ${category}`}
              />
              <button type="button" onClick={() => handleAddSkillDetail(category)}>Add Skill</button>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {skills[category].map((skill, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span>{skill}</span>
                  <button type="button" onClick={() => handleRemoveSkillDetail(category, skill)}>❌</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}