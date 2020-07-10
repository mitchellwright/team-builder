import React, { useState, useEffect } from 'react';

const AddTeamMemberForm = props => {
    const [newTeamMember, setNewTeamMember] = useState({name: '', email: '', role: 'Backend Engineer'});

    const handleChange = event => {
        setNewTeamMember({...newTeamMember, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        if(props.isEditing) {
            props.editTeamMember({...newTeamMember, index: props.memberToEdit.index});
        } else {
            props.addTeamMember(newTeamMember);
        }

        setNewTeamMember({
            name: '',
            email: '',
            role: 'Backend Engineer'
        });
    };

    useEffect( () => {
        setNewTeamMember({name: props.memberToEdit.name, email: props.memberToEdit.email, role: props.memberToEdit.role});
    }, [props.memberToEdit]);

    return (
        <div className="w-full max-w-xs">
            <form
                className="w-full max-w-lg"
                onSubmit={ event => handleSubmit(event) }
            >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="name"
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                            value={newTeamMember.name}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="email"
                            type="text"
                            placeholder="Email Address"
                            name="email"
                            onChange={handleChange}
                            value={newTeamMember.email}
                        />
                    </div>
                </div>
                <div className="w-full mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="role">
                        Role
                    </label>
                    <div className="relative">
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="role"
                            name="role"
                            onChange={handleChange}
                            value={newTeamMember.role}
                        >
                            <option value="Backend Engineer">Backend Engineer</option>
                            <option value="Frontend Engineer">Frontend Engineer</option>
                            <option value="Data Science">Data Science</option>
                            <option value="iOS Developer">iOS Developer</option>
                            <option value="Team Lead">Team Lead</option>
                            <option value="Designer">Designer</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Save Teammate
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTeamMemberForm;