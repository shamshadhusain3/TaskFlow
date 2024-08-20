import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = ({ tasks, setTasks, onEdit, onDelete }) => {
    // Define columns with tasks filtered by status
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

    // Handle the end of drag-and-drop event
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const { source, destination } = result;

        // Ensure the columns exist and task ids are valid
        if (!columns[source.droppableId] || !columns[destination.droppableId]) return;

        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];

        // Create copies of task arrays
        const sourceTasks = Array.from(sourceColumn.tasks);
        const destTasks = Array.from(destColumn.tasks);

        // Remove task from source and add to destination
        const [movedTask] = sourceTasks.splice(source.index, 1);
        movedTask.status = destination.droppableId;
        destTasks.splice(destination.index, 0, movedTask);

        // Update tasks state
        const updatedTasks = tasks.map(task =>
            task.id === movedTask.id ? { ...task, status: movedTask.status } : task
        );

        setTasks(updatedTasks);
    };

    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold mb-5">Task Board</h2>
            <div className="flex flex-col md:flex-row gap-3 w-full justify-between">
                <DragDropContext onDragEnd={onDragEnd}>
                    {Object.entries(columns).map(([columnId, column]) => (
                        <Droppable key={columnId} droppableId={columnId}>
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="bg-white rounded-lg shadow-md p-5 w-[260px] mx-2"
                                >
                                    <h3 className="font-bold text-lg mb-4">{column.name}</h3>
                                    {column.tasks.map((task, index) => (
                                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="p-3 mb-4 bg-gray-100 rounded-lg shadow-sm"
                                                >
                                                    <h4 className="font-semibold">{task.name || task.taskNo}</h4>
                                                    <p className="text-sm text-gray-600"> {task.assignedTo || task.description}</p>
                                                    <div className="flex justify-between mt-3">
                                                        <button onClick={() => onEdit(task)} className="text-blue-500 hover:text-blue-700">Edit</button>
                                                        <button onClick={() => onDelete(task)} className="text-red-500 hover:text-red-700">Delete</button>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </DragDropContext>
            </div>
        </div>
    );
};

export default TaskList;
