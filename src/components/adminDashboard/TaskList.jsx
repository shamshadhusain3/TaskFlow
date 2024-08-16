import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold mb-5">Task List</h2>
            <div className="bg-white rounded-lg shadow-md p-5">
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="pb-4">Task Name</th>
                            <th className="pb-4">Assigned To</th>
                            <th className="pb-4">Status</th>
                            <th className="pb-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-4">{task.name}</td>
                                <td>{task.assignedTo}</td>
                                <td>{task.status}</td>
                                <td>
                                    <button onClick={() => onEdit(task)} className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                                    <button onClick={() => onDelete(task)} className="text-red-500 hover:text-red-700">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskList;
