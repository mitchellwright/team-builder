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

  const addTeamMember = (teamMember) => {
    setTeamMembers([...teamMembers, teamMember]);
  };

  return (
    <div className="App bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4 flex justify-center items-center flex-col p-8">
      <AddTeamMemberForm addTeamMember={addTeamMember} />
      <TeamWrapper teamMembers={teamMembers} />
    </div>
  );
}

export default App;
