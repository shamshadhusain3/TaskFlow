import React, { useState } from 'react';

const EmployeeForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && role) {
            onAdd({ name, role });
            setName('');
            setRole('');
        } else {
            alert('Please fill in both fields');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full mb-5">
            <h2 className="text-xl font-semibold mb-4">Add New Employee</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter employee name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Role
                </label>
                <input
                    type="text"
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter employee role"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
                Add Employee
            </button>
        </form>
    );
};

export default EmployeeForm;
