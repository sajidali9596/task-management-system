// TaskList.js
import React from "react";
import { motion } from "framer-motion";
import TaskItem from "./TaskItem";
import { useTaskContext } from "@/contexts/taskContext";
import { useDragAndDropContext } from "@/contexts/dragAndDropContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskList = () => {
  const { handleComplete, handleDelete } = useTaskContext();
  const { tasks } = useDragAndDropContext();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <motion.table
        className="min-w-full bg-white border border-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <thead>
          <tr>
            <th className="p-4">Status</th>
            <th className="p-4">Title</th>
            <th className="p-4">Description</th>
            <th className="p-4">Mark Complete</th>
            <th className="p-4">Mark Incomplete</th>
            <th className="p-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="6" className="p-4 text-center">
                No data found.
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                handleComplete={handleComplete}
                handleDelete={() => handleDelete(task.id)}
              />
            ))
          )}
        </tbody>
      </motion.table>
    </div>
  );
};

export default TaskList;
