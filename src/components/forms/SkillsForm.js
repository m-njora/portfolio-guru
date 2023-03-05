import React, { useState } from 'react';

function SkillsForm() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const MAX_SKILLS = 10;
  const handleNewSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleAddSkill = (event) => {
    event.preventDefault();
    if (editingIndex === null) {
      if (skills.length < MAX_SKILLS) {
        setSkills([...skills, newSkill]);
        setNewSkill('');
      } else {
        alert(`You can't add more than ${MAX_SKILLS} skills`);
      }
    } else {
      const newSkills = [...skills];
      newSkills[editingIndex] = newSkill;
      setSkills(newSkills);
      setNewSkill('');
      setEditingIndex(null);
    }
  };

  const handleEditSkill = (skillIndex) => {
    setNewSkill(skills[skillIndex]);
    setEditingIndex(skillIndex);
  };

  const handleDeleteSkill = (skillIndex) => {
    setSkills(skills.filter((_, index) => index !== skillIndex));
    setEditingIndex(null);
  };

  return (
    <div>
      <h2>Skills Form</h2>
      <form onSubmit={handleAddSkill}>
        <label htmlFor="new-skill">New Skill:</label>
        <input
          type="text"
          id="new-skill"
          value={newSkill}
          onChange={handleNewSkillChange}
        />
        <button type="submit">{editingIndex !== null ? 'Save Skill' : 'Add Skill'}</button>
      </form>
      {skills.length > 0 ? (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <input type="text" value={newSkill} onChange={handleNewSkillChange} />
              ) : (
                <>{skill}</>
              )}
              {editingIndex === index ? (
                <button onClick={() => setEditingIndex(null)}>Cancel</button>
              ) : (
                <>
                  <button onClick={() => handleEditSkill(index)}>Edit</button>
                  <button onClick={() => handleDeleteSkill(index)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No skills added yet</p>
      )}
    </div>
  );
}

export default SkillsForm;
