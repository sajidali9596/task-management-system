import React from "react";
import { Task } from "@/pages/index";
interface Popps {
  task: Task;
  handleComplete: (id: string, completed: boolean) => void;
  handleDelete: () => void;
}

const TaskItem = ({ task, handleComplete, handleDelete }: Popps) => {
  return (
    <li>
      <strong>{task?.completed ? <span>✓ </span> : <span>✗ </span>}</strong>
      <strong>{task?.title}</strong> - {task.description}
      <button
        className="mark-complete"
        onClick={() => handleComplete(task.id, true)}
      >
        Mark Complete
      </button>
      <button
        className="mark-incomplete"
        onClick={() => handleComplete(task.id, false)}
      >
        Mark Incomplete
      </button>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
