import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white w-64 p-5">
            <h1 className="text-2xl font-bold mb-10">TaskFlow Admin</h1>
            <nav>
                <ul>
                    <li className="mb-4">
                        <Link href="/dashboard" className="hover:text-blue-300">Dashboard</Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/tasks" className="hover:text-blue-300">Tasks</Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/employees" className="hover:text-blue-300">Employees</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
