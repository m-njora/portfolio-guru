import React from 'react'

function SkillsForm() {
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
  
    
    )
}

export default SkillsForm;
