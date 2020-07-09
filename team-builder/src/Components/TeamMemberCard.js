import React from 'react';
import cardTop from '../img/card-top.jpg';

const TeamMemberCard = ({ name, email, role }) => {

    return (
        <div className="max-w-sm m-6 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={cardTop} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {name}
                </div>
                <p className="text-gray-700 text-base">
                    {email}
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {role}
                </span>
            </div>
        </div>
    );
};


export default TeamMemberCard;