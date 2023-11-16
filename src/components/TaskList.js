import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, handleComplete, handleDelete }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <table className="min-w-full bg-white border border-gray-300">
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
      </table>
    </div>
  );
};

export default TaskList;
