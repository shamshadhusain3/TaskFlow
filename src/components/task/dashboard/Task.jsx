// Task.js
import React, { useState } from 'react';
import TaskCard from '../TaskCard';
import TaskModal from '../TaskModal';
import RemarkModal from '../RemarkModal';
import TaskList from '../../adminDashboard/TaskList'

const Task = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isRemarkModalOpen, setIsRemarkModalOpen] = useState(false);

  const [tasks, setTasks] = useState([
    {
        "taskNo": "1121",
        "description": "Make a landing page for client DL Education. at your earliest preference and inform the manager.",
        "assignedDate": "2024-08-01",
        "submissionDate": "2024-08-15",
        "remarks": "No remarks",
        "status": "Completed"
    },
    {
        "taskNo": "1122",
        "description": "Make a landing page for client DL Education. at your earliest preference and inform the manager.",
        "assignedDate": "2024-08-02",
        "submissionDate": "2024-08-16",
        "remarks": "Pending review",
        "status": "Pending"
    },
    {
        "taskNo": "1123",
        "description": "Develop a new feature for the internal tool.",
        "assignedDate": "2024-08-03",
        "submissionDate": "2024-08-20",
        "remarks": "Awaiting feedback",
        "status": "In Progress"
    },
    {
        "taskNo": "1124",
        "description": "Fix bugs in the client website.",
        "assignedDate": "2024-08-04",
        "submissionDate": "2024-08-18",
        "remarks": "Urgent fix required",
        "status": "Pending"
    },
    {
        "taskNo": "1125",
        "description": "Update the documentation for the new API.",
        "assignedDate": "2024-08-05",
        "submissionDate": "2024-08-12",
        "remarks": "Completed ahead of schedule",
        "status": "Completed"
    },
    {
        "taskNo": "1126",
        "description": "Prepare presentation for the quarterly meeting.",
        "assignedDate": "2024-08-06",
        "submissionDate": "2024-08-25",
        "remarks": "In progress",
        "status": "In Progress"
    },
    {
        "taskNo": "1127",
        "description": "Conduct user testing for the new mobile app.",
        "assignedDate": "2024-08-07",
        "submissionDate": "2024-08-22",
        "remarks": "Initial tests completed",
        "status": "Completed"
    },
    {
        "taskNo": "1128",
        "description": "Design the UI for the new dashboard.",
        "assignedDate": "2024-08-08",
        "submissionDate": "2024-08-30",
        "remarks": "Design phase ongoing",
        "status": "Pending"
    }
]
);

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
      <TaskList tasks={tasks} setTasks={setTasks} onEdit={handleShowDetails}/>
      {/* {tasks.map(task => (
        <TaskCard
          key={task.taskNo}
          task={task}
          onShowDetails={handleShowDetails}
          onShowRemarks={handleShowRemarks}
        />
      ))} */}
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
