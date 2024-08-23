import React from 'react';
import { useDrop, useDrag, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Define the type for draggable items
const ItemType = 'TASK';

const Task = ({ task, index, moveTask, onEdit, onDelete }) => {
    const [, ref] = useDrag({
        type: ItemType,
        item: { id: task.id, index },
    });

    return (
        <div
            ref={ref}
            className="p-3 mb-4 bg-gray-100 rounded-lg shadow-sm"
        >
            <h4 className="font-semibold">{task.name}</h4>
            <p className="text-sm text-gray-600">{task.assignedTo}</p>
            <div className="flex justify-between mt-3">
                <button onClick={() => onEdit(task)} className="text-blue-500 hover:text-blue-700">Edit</button>
                <button onClick={() => onDelete(task)} className="text-red-500 hover:text-red-700">Delete</button>
            </div>
        </div>
    );
};

const Column = ({ columnId, column, moveTask, onEdit, onDelete }) => {
    const [{ isOver }, ref] = useDrop({
        accept: ItemType,
        drop: (item) => {
            moveTask(item.id, columnId);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div
            ref={ref}
            className={`bg-white rounded-lg shadow-md p-5 w-[260px] mx-2 ${isOver ? 'bg-gray-200' : ''}`}
        >
            <h3 className="font-bold text-lg mb-4">{column.name}</h3>
            {column.tasks.map((task, index) => (
                <Task
                    key={task.id}
                    task={task}
                    index={index}
                    moveTask={(sourceIndex, targetIndex) => moveTask(sourceIndex, targetIndex, columnId)}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

const TaskList = ({ tasks, setTasks, onEdit, onDelete }) => {
    const columns = {
        'Pending': {
            name: 'Pending',
            tasks: tasks.filter(task => task.status === 'Pending')
        },
        'In Progress': {
            name: 'In Progress',
            tasks: tasks.filter(task => task.status === 'In Progress')
        },
        'Completed': {
            name: 'Completed',
            tasks: tasks.filter(task => task.status === 'Completed')
        }
    };

    const moveTask = (taskId, targetColumnId) => {
        const taskToMove = tasks.find(task => task.id === taskId);

        if (!taskToMove) return; // Task not found

        // Remove the task from its current column
        const updatedTasks = tasks
            .filter(task => task.id !== taskId)
            .map(task => 
                task.id === taskId ? { ...task, status: targetColumnId } : task
            );

        // Add the task to the new column
        setTasks(updatedTasks);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="p-10">
                <h2 className="text-2xl font-bold mb-5">Task Board</h2>
                <div className="flex flex-col md:flex-row gap-3 w-full justify-between">
                    {Object.entries(columns).map(([columnId, column]) => (
                        <Column
                            key={columnId}
                            columnId={columnId}
                            column={column}
                            moveTask={(taskId, targetColumnId) => moveTask(taskId, targetColumnId)}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            </div>
        </DndProvider>
    );
};

export default TaskList;
