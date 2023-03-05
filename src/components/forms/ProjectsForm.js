import React, { useState } from 'react';
import './form.css';
function ProjectsForm() {
  const [Projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const MAX_ProjectS = 10;
  const handleNewProjectChange = (event) => {
    setNewProject(event.target.value);
  };

  const handleAddProject = (event) => {
    event.preventDefault();
    if (editingIndex === null) {
      if (Projects.length < MAX_ProjectS) {
        setProjects([...Projects, newProject]);
        setNewProject('');
      } else {
        alert(`You can't add more than ${MAX_ProjectS} Projects`);
      }
    } else {
      const newProjects = [...Projects];
      newProjects[editingIndex] = newProject;
      setProjects(newProjects);
      setNewProject('');
      setEditingIndex(null);
    }
  };

  const handleEditProject = (ProjectIndex) => {
    setNewProject(Projects[ProjectIndex]);
    setEditingIndex(ProjectIndex);
  };

  const handleDeleteProject = (ProjectIndex) => {
    setProjects(Projects.filter((_, index) => index !== ProjectIndex));
    setEditingIndex(null);
  };

  return (
    <div className='form'>
      <h2>My Projects </h2>
      <form onSubmit={handleAddProject}>
        <label htmlFor="new-Project">New Project:</label>
        <input
          type="text"
          id="new-Project"
          value={newProject}
          onChange={handleNewProjectChange}
        />
        <button type="submit">{editingIndex !== null ? 'Save Project' : 'Add Project'}</button>
      </form>
      {Projects.length > 0 ? (
        <ul>
          {Projects.map((Project, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <input type="text" value={newProject} onChange={handleNewProjectChange} />
              ) : (
                <>{Project}</>
              )}
              {editingIndex === index ? (
                <button onClick={() => setEditingIndex(null)}>Cancel</button>
              ) : (
                <>
                  <button onClick={() => handleEditProject(index)}>Edit</button>
                  <button onClick={() => handleDeleteProject(index)}>X</button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Projects added yet</p>
      )}
    </div>
  );
}

export default ProjectsForm;
