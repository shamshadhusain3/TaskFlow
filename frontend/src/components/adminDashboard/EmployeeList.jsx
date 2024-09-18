import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const EmployeeList = ({employees, onAdd, onRemove, onUpdate, loading, error}) => {

    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState({ firstName: '', lastName: '', role: '', email_id: '' });
    const formRef = useRef(null);

    useEffect(() => {
        if (showForm) {
            gsap.fromTo(formRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5 });
        }
    }, [showForm]);

    const handleAddOrUpdateEmployee = async (event) => {
        event.preventDefault();
        const first_name = event.target.first_name.value;
        const last_name = event.target.last_name.value;
        const role = event.target.role.value;
        const password = event.target.password.value;
        const email_id = event.target.email_id.value; // Use email_id for database

        if (first_name && last_name && role && email_id && (isEditing || password)) {
            if (isEditing) {
                // Update employee
                await onUpdate(currentEmployee.id, { firstName: first_name, lastName: last_name, role, password, email_id });
                setIsEditing(false); // Reset editing state
            } else {
                // Add new employee
                await onAdd({ firstName: first_name, lastName: last_name, role, password, email_id });
            }
            toggleForm(); // Close form after adding/updating
        }
    };

    const handleEditEmployee = (employee) => {
        setCurrentEmployee(employee); // Set employee for editing
        setIsEditing(true); // Enable editing mode
        setShowForm(true); // Show the form with employee details
    };

    const handleRemoveEmployee = async (employee) => {
        await onRemove(employee.id); // Remove employee by ID
    };

    const toggleForm = () => {
        setShowForm(!showForm);
        if (!showForm) {
            setCurrentEmployee({ firstName: '', lastName: '', role: '', email_id: '' }); // Reset form
            setIsEditing(false); // Reset editing state
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="p-5 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">Employee Management</h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-5">
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="pb-4 text-sm sm:text-base">Name</th>
                            <th className="pb-4 text-sm sm:text-base">Role</th>
                            <th className="pb-4 text-sm sm:text-base">email</th>

                            <th className="pb-4 text-sm sm:text-base">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees && employees.map((employee, index) => (
                            <motion.tr
                                key={index}
                                className="border-t"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <td className="py-4 text-sm sm:text-base">{employee.firstName} {employee.lastName}</td>
                                <td className="text-sm sm:text-base">{employee.role}</td>
                                <td className="text-sm sm:text-base">{employee.email_id}</td>

                                <td>
                                    <button
                                        onClick={() => handleEditEmployee(employee)}
                                        className="text-blue-500 hover:text-blue-700 text-sm sm:text-base mr-4"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleRemoveEmployee(employee)}
                                        className="text-red-500 hover:text-red-700 text-sm sm:text-base"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
                <button
                    onClick={toggleForm}
                    className="mt-5 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto"
                >
                    {isEditing ? 'Update Employee' : 'Add Employee'}
                </button>
                {showForm && (
                    <div ref={formRef} className="mt-5 bg-gray-100 p-4 sm:p-5 rounded-lg shadow-md">
                        <form onSubmit={handleAddOrUpdateEmployee}>
                            <div className="mb-4">
                                <label className="block text-sm sm:text-base font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    defaultValue={currentEmployee.firstName}
                                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm sm:text-base font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    defaultValue={currentEmployee.lastName}
                                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm sm:text-base font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email_id" // Use email_id to match the database column
                                    defaultValue={currentEmployee.email_id}
                                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm sm:text-base font-medium text-gray-700">Role</label>
                                <input
                                    type="text"
                                    name="role"
                                    defaultValue={currentEmployee.role}
                                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm sm:text-base font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 w-full sm:w-auto"
                                >
                                    {isEditing ? 'Update' : 'Add'}
                                </button>
                                <button
                                    type="button"
                                    onClick={toggleForm}
                                    className="ml-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmployeeList;
