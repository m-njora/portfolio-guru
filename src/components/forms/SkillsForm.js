import React, { useState } from 'react';

function SkillsForm() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const MAX_SKILLS = 10;

  const handleNewSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleAddSkill = (event) => {
    event.preventDefault();
    if (skills.length < MAX_SKILLS) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    } else {
      alert(`You can't add more than ${MAX_SKILLS} skills`);
    }
  };

  const handleDeleteSkill = (skillIndex) => {
    setSkills(skills.filter((_, index) => index !== skillIndex));
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
        <button type="submit">Add Skill</button>
      </form>
      {skills.length > 0 ? (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill}
              <button onClick={() => handleDeleteSkill(index)}>Delete</button>
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
//In this example, we've added a constant MAX_SKILLS that specifies the maximum number of skills a user can add (in this case, 10). In the handleAddSkill function, we've added a check to ensure that the number of skills in the skills array is less than MAX_SKILLS before adding a new skill. If the number of skills is already at the maximum, we display an alert message to the user indicating that they cannot add any more skills.



