import React from 'react';
import { useDrop } from 'react-dnd';
import Task from './dashboard/Task';


const Column = ({ columnId, column, moveTask, onEdit, onDelete }) => {
    const [{ isOver }, ref] = useDrop({
        accept: 'TASK',
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
                    key={task.taskNo} // Use taskNo or another unique identifier as the key
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

export default Column;
