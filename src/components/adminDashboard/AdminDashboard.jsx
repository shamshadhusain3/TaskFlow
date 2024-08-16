import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import EmployeeList from './EmployeeList';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Header from '../header/Header';
import Navbar from '../header/Navbar';

export const AdminDashboard = () => {
    const [employees, setEmployees] = useState([
        { name: 'Shamshad Husain', role: 'Leader' },
        { name: 'Abhishek Tiwari', role: 'Developer' },
        { name: 'Astha Sachan', role: 'Designer' },
        { name: 'Harsh Shukla', role: 'Developer' },
    ]);
    const [showForm, setShowForm] = useState(false);
    const [tasks, setTasks] = useState([]);

    const addEmployee = (employee) => {
        setEmployees([...employees, employee]);
    };

    const removeEmployee = (employeeToRemove) => {
        setEmployees(employees.filter(employee => employee !== employeeToRemove));
    };

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const editTask = (task) => {
        // Implement edit logic
    };

    const deleteTask = (task) => {
        setTasks(tasks.filter(t => t !== task));
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="">
            <Header navTitle='Admin Dashboard'/>
            <Navbar/>
            <div className="flex-grow p-5">
                <Dashboard />
                <TaskForm onSubmit={addTask} />
                <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
                <EmployeeList
                    employees={employees}
                    onAdd={addEmployee}
                    onRemove={removeEmployee}
                    toggleForm={toggleForm}
                    showForm={showForm}
                />
            </div>
        </div>
    );
};
