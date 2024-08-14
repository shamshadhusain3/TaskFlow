// Task.js
import React, { useState } from 'react';
import TaskCard from '../TaskCard';
import TaskModal from '../TaskModal';
import RemarkModal from '../RemarkModal';

const Task = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isRemarkModalOpen, setIsRemarkModalOpen] = useState(false);

  const [tasks, setTasks] = useState([
    {
      taskNo: '1121',
      description: 'Make a landing page for client DL Education. at your earliest preference.and inform to manager.',
      assignedDate: '2024-08-01',
      submissionDate: '2024-08-15',
      remarks: 'No remarks'
    },
    {
      taskNo: '1122',
      description: 'Make a landing page for client DL Education. at your earliest preference.and inform to manager.',

      assignedDate: '2024-08-02',
      submissionDate: '2024-08-16',
      remarks: 'Pending review'
    }
  ]);

  const handleShowDetails = (task) => {
    setSelectedTask(task);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedTask(null);
  };

  const handleShowRemarks = (task) => {
    setSelectedTask(task);
    setIsRemarkModalOpen(true);
  };

  const handleCloseRemarkModal = () => {
    setIsRemarkModalOpen(false);
    setSelectedTask(null);
  };

  const handleSaveRemark = (taskNo, newRemark) => {
    setTasks(tasks.map(task =>
      task.taskNo === taskNo ? { ...task, remarks: newRemark } : task
    ));
  };

  return (
    <div className="card-container flex flex-col justify-center items-center mt-12 gap-5 border-2 border-b-blue-500 mb-5 py-6">
      {tasks.map(task => (
        <TaskCard
          key={task.taskNo}
          task={task}
          onShowDetails={handleShowDetails}
          onShowRemarks={handleShowRemarks}
        />
      ))}
      {selectedTask && (
        <TaskModal
          isOpen={isDetailModalOpen}
          onClose={handleCloseDetailModal}
          task={selectedTask}
        />
      )}
      {selectedTask && (
        <RemarkModal
          isOpen={isRemarkModalOpen}
          onClose={handleCloseRemarkModal}
          task={selectedTask}
          onSaveRemark={handleSaveRemark}
        />
      )}
    </div>
  );
};

export default Task;
