import React from 'react';
import { useState } from 'react';
import './App.css';
import TeamWrapper from './Components/TeamWrapper';
import AddTeamMemberForm from './Components/AddTeamMemberForm';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {name: 'Mitchell', email: 'mitchell@lambdaschool.com', role: 'Backend Engineer'},
    {name: 'Darrian', email: 'darrian@lambdaschool.com', role: 'Designer'}
  ]);
  const[memberToEdit, setMemberToEdit] = useState({name: '', email: '', role: 'Backend Engineer', index: 0});
  const[isEditing, setIsEditing] = useState(false);

  const addTeamMember = (teamMember) => {
    setTeamMembers([...teamMembers, teamMember]);
  };

  const editTeamMember = (teamMember) => {
    let teamMembersCopy = [...teamMembers];
    teamMembersCopy[teamMember.index] = teamMember;
    setTeamMembers(teamMembersCopy);
    setIsEditing(false);
    setMemberToEdit({name: '', email: '', role: 'Backend Engineer', index: 0});
  };

  return (
    <div className="App bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4 flex justify-center items-center flex-col p-8">
      <AddTeamMemberForm
        addTeamMember={addTeamMember}
        memberToEdit={memberToEdit}
        isEditing={isEditing}
        editTeamMember={editTeamMember}
      />
      <TeamWrapper
        teamMembers={teamMembers}
        setMemberToEdit={setMemberToEdit}
        setIsEditing={setIsEditing}
      />
    </div>
  );
}

export default App;
