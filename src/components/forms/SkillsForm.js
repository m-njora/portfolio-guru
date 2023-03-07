import React, { useState, useEffect } from 'react';
import './form.css';

function SkillsForm() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const MAX_SKILLS = 10;

  // Fetch the list of skills when the component mounts
  useEffect(() => {
    fetch('https://portfolio-back-end-f9we.onrender.com/skills')
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(error => console.error(error));
  }, []);

  const handleNewSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleAddSkill = (event) => {
    event.preventDefault();
    if (editingIndex === null) {
      if (skills.length < MAX_SKILLS) {
        // Send a POST request to create a new skill
        fetch('https://portfolio-back-end-f9we.onrender.com/skills/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: newSkill })
        })
          .then(response => response.json())
          .then(data => setSkills([...skills, data]))
          .catch(error => console.error(error));
        setNewSkill('');
      } else {
        alert(`You can't add more? than ${MAX_SKILLS} skills`);
      }
    } else {
      const skillId = skills[editingIndex].id;
      // Send a PUT request to update an existing skill
      fetch(`https://portfolio-back-end-f9we.onrender.com/skills/update/${skillId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newSkill })
      })
        .then(response => response.json())
        .then(() => {
          const newSkills = [...skills];
          newSkills[editingIndex].name = newSkill;
          setSkills(newSkills);
          setNewSkill('');
          setEditingIndex(null);
        })
        .catch(error => console.error(error));
    }
  };

  const handleEditSkill = (skillIndex) => {
    setNewSkill(skills[skillIndex].name);
    setEditingIndex(skillIndex);
  };

  const handleDeleteSkill = (skillIndex) => {
    const skillId = skills[skillIndex].id;
    // Send a DELETE request to delete a skill
    fetch(`https://portfolio-back-end-f9we.onrender.com/skills/destroy/${skillId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(() => {
        setSkills(skills.filter((_, index) => index !== skillIndex));
        setEditingIndex(null);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='form'>
      <h2>My Skills</h2>
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
            <li key={skill.id}>
              {editingIndex=== index ? (
                <input type="text" value={newSkill} onChange={handleNewSkillChange} />
              ) : (
                <>{skill}</>
              )}
              {editingIndex === index ? (
                <button onClick={() => setEditingIndex(null)}>Cancel</button>
              ) : (
                <>
                  <button onClick={() => handleEditSkill(index)}>Edit</button>
                  <button onClick={() => handleDeleteSkill(index)}>X</button>
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
// import React, { useState } from 'react';
// import './form.css';

// function SkillsForm() {
//   const [skills, setSkills] = useState([]);
//   const [newSkill, setNewSkill] = useState('');
//   const [editingIndex, setEditingIndex] = useState(null);
//   const MAX_SKILLS = 10;
//   const handleNewSkillChange = (event) => {
//     setNewSkill(event.target.value);
//   };

//   const handleAddSkill = (event) => {
//     event.preventDefault();
//     if (editingIndex === null) {
//       if (skills.length < MAX_SKILLS) {
//         setSkills([...skills, newSkill]);
//         setNewSkill('');
//       } else {
//         alert(`You can't add more than ${MAX_SKILLS} skills`);
//       }
//     } else {
//       const newSkills = [...skills];
//       newSkills[editingIndex] = newSkill;
//       setSkills(newSkills);
//       setNewSkill('');
//       setEditingIndex(null);
//     }
//   };

//   const handleEditSkill = (skillIndex) => {
//     setNewSkill(skills[skillIndex]);
//     setEditingIndex(skillIndex);
//   };

//   const handleDeleteSkill = (skillIndex) => {
//     setSkills(skills.filter((_, index) => index !== skillIndex));
//     setEditingIndex(null);
//   };

//   return (
//     <div className='form'>
//       <h2>My Skills</h2>
//       <form onSubmit={handleAddSkill}>
//         <label htmlFor="new-skill">New Skill:</label>
//         <input
//           type="text"
//           id="new-skill"
//           value={newSkill}
//           onChange={handleNewSkillChange}
//         />
//         <button type="submit">{editingIndex !== null ? 'Save Skill' : 'Add Skill'}</button>
//       </form>
//       {skills.length > 0 ? (
//         <ul>
//           {skills.map((skill, index) => (
//             <li key={index}>
//               {editingIndex === index ? (
//                 <input type="text" value={newSkill} onChange={handleNewSkillChange} />
//               ) : (
//                 <>{skill}</>
//               )}
//               {editingIndex === index ? (
//                 <button onClick={() => setEditingIndex(null)}>Cancel</button>
//               ) : (
//                 <>
//                   <button onClick={() => handleEditSkill(index)}>Edit</button>
//                   <button onClick={() => handleDeleteSkill(index)}>X</button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No skills added yet</p>
//       )}
//     </div>
//   );
// }

// export default SkillsForm;
