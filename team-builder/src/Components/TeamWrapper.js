import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamWrapper = ({ teamMembers, setMemberToEdit, setIsEditing }) => {

    return (
        <div className="bg-white rounded-lg overflow-hidden border border-gray-400 p-4 p-10 flex flex-wrap justify-center mt-4">
            { teamMembers.map( (member, i) => {
                return (
                    <TeamMemberCard
                        name={member.name}
                        email={member.email}
                        role={member.role}
                        key={i}
                        index={i}
                        setMemberToEdit={setMemberToEdit}
                        setIsEditing={setIsEditing}
                    />
                );
            })}
        </div>
    );
};

export default TeamWrapper;