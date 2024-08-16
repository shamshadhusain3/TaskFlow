import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
    const [task, setTask] = useState({ name: '', assignedTo: '', status: 'Pending' });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(task);
        setTask({ name: '', assignedTo: '', status: 'Pending' });
    };

    return (
        <form onSubmit={handleSubmit} className="p-10">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-bold">Task Name</label>
                <input
                    type="text"
                    name="name"
                    value={task.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-bold">Assigned To</label>
                <input
                    type="text"
                    name="assignedTo"
                    value={task.assignedTo}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-bold">Status</label>
                <select
                    name="status"
                    value={task.status}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">Save Task</button>
        </form>
    );
};

export default TaskForm;
