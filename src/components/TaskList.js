import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, handleComplete, handleDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleComplete={handleComplete}
          handleDelete={() => handleDelete(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
