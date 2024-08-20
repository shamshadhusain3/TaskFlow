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
    const [tasks, setTasks] = useState( [
        { "id": "1", "name": "Task 1", "assignedTo": "John Doe", "status": "Pending" },
        { "id": "2", "name": "Task 2", "assignedTo": "Jane Smith", "status": "Completed" },
        { "id": "3", "name": "Task 3", "assignedTo": "Alice Johnson", "status": "In Progress" },
        { "id": "4", "name": "Task 4", "assignedTo": "Bob Brown", "status": "Completed" }
    ]);
    const totalTasks = tasks.length;
    const totalPendingTasks = tasks.filter(task => task.status === 'Pending').length;
    const totalCompletedTasks = tasks.filter(task => task.status === 'Completed').length;

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

    const [content, setContent] = React.useState('Employee');

const showContent={
  Task:'Task',
  Employee:'Employee',
}


    return (
        <div className="flex w-full">
            {/* <Header navTitle='Admin Dashboard'/>
            <Navbar/> */} 
            <Sidebar setContent={setContent}  />
            <div className=" p-5 md:w-[70vw] md:absolute md:left-96 left-0">
                <Dashboard totalTasks={totalTasks} totalCompletedTasks={totalCompletedTasks} totalPendingTasks={totalPendingTasks} totalEmployee={employees.length} />
                {showContent.Task === content &&  <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} /> }
                {showContent.Task === content && <TaskForm onSubmit={addTask} />}
                
                {showContent.Employee === content && <EmployeeList
                    employees={employees}
                    onAdd={addEmployee}
                    onRemove={removeEmployee}
                    toggleForm={toggleForm}
                    showForm={showForm}
                />
                
                }
            </div>
        </div>
    );
};
