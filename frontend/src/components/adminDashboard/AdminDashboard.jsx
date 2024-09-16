import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import EmployeeList from "./EmployeeList";
import EmployeeCard from "../EmployeeCard";

export const AdminDashboard = () => {
  const [employees, setEmployees] = useState([
    {
      name: "John Doe",
      role: "Software Engineer",
      email: "john.doe@example.com",
      imageUrl: "https://img.freepik.com/premium-photo/portrait-young-happy-latin-student-standing-classroom-looking-camera_562687-3027.jpg?w=740",
    },
    // Add other employees...
  ]);
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([
    { id: "1", name: "Task 1", assignedTo: "John Doe", status: "Pending" },
    { id: "2", name: "Task 2", assignedTo: "Jane Smith", status: "Completed" },
    {
      id: "3",
      name: "Task 3",
      assignedTo: "Alice Johnson",
      status: "In Progress",
    },
    { id: "4", name: "Task 4", assignedTo: "Bob Brown", status: "Completed" }
    // Add other tasks...
  ]);

  const totalTasks = tasks.length;
  const totalPendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;
  const totalCompletedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const removeEmployee = (employeeToRemove) => {
    setEmployees(employees.filter((employee) => employee !== employeeToRemove));
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (task) => {
    // Implement edit logic
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const [content, setContent] = React.useState("Employee");

  const showContent = {
    Task: "Task",
    Employee: "Employee",
  };

  return (
    <div className="flex w-full">
      <Sidebar setContent={setContent} />
      <div className="p-2 md:w-[70vw] md:absolute md:left-96 left-0">
        <Dashboard
          totalTasks={totalTasks}
          totalCompletedTasks={totalCompletedTasks}
          totalPendingTasks={totalPendingTasks}
          totalEmployee={employees.length}
        />
        {showContent.Task === content && (
          <TaskList
            tasks={tasks}
            setTasks={setTasks} // Pass setTasks to TaskList
            onEdit={editTask}
            onDelete={deleteTask}
          />
        )}
        <div className="px-10 flex w-full gap-10 flex-wrap">
          <div className="h-[50vh] w-[380px] bg-gray-100 flex items-center justify-center flex-wrap gap-8 p-10 overflow-auto">
            {employees.map((employee, index) => (
              <EmployeeCard
                key={index}
                name={employee.name}
                role={employee.role}
                email={employee.email}
                imageUrl={employee.imageUrl}
              />
            ))}
          </div>
          {/* Repeat EmployeeCard lists... */}
        </div>

        {showContent.Task === content && <TaskForm onSubmit={addTask} />}

        {showContent.Employee === content && (
          <EmployeeList
            employees={employees}
            onAdd={addEmployee}
            onRemove={removeEmployee}
            toggleForm={toggleForm}
            showForm={showForm}
          />
        )}
      </div>
    </div>
  );
};
