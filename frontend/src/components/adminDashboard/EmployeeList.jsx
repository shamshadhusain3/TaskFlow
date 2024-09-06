import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const EmployeeList = ({ employees, onAdd, onRemove, toggleForm, showForm }) => {
    const formRef = useRef(null);

    useEffect(() => {
        if (showForm) {
            gsap.fromTo(formRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5 });
        }
    }, [showForm]);

    const handleAddEmployee = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const role = event.target.role.value;
        const password = event.target.password.value;
        if (name && role && password) {
            onAdd({ name, role, password });
            toggleForm(); // Close form after adding
        }
    };

    return (
        <div className="p-5 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">Employee Management</h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-5">
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="pb-4 text-sm sm:text-base">Name</th>
                            <th className="pb-4 text-sm sm:text-base">Role</th>
                            <th className="pb-4 text-sm sm:text-base">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <motion.tr
                                key={index}
                                className="border-t"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <td className="py-4 text-sm sm:text-base">{employee.name}</td>
                                <td className="text-sm sm:text-base">{employee.role}</td>
                                <td>
                                    <button onClick={() => onRemove(employee)} className="text-red-500 hover:text-red-700 text-sm sm:text-base">Remove</button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
                <button
                    onClick={toggleForm}
                    className="mt-5 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto"
                >
                    Add Employee
                </button>
                {showForm && (
                    <div ref={formRef} className="mt-5 bg-gray-100 p-4 sm:p-5 rounded-lg shadow-md">
                        <form onSubmit={handleAddEmployee}>
                            <div className="mb-4">
                                <label className="block text-sm sm:text-base font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm sm:text-base font-medium text-gray-700">Role</label>
                                <input
                                    type="text"
                                    name="role"
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
                                    Add
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
