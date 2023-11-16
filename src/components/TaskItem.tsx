import React from "react";
import { Task } from "@/pages/index";
import Button from "./Button";

interface Props {
  task: Task;
  handleComplete: (id: string, completed: boolean) => void;
  handleDelete: () => void;
}

const TaskItem: React.FC<Props> = ({ task, handleComplete, handleDelete }) => {
  return (
    <tr className="bg-white p-4 rounded mb-4">
      <td className="p-2">
        <strong className={`text-${task?.completed ? "green" : "yellow"}-500`}>
          {task?.completed ? "✓ " : "✗ "}
        </strong>
      </td>
      <td className="p-2">
        <strong>{task?.title}</strong>
      </td>
      <td className="p-2">{task.description}</td>
      <Button
        text="Mark Complete"
        textColor="white"
        color="green"
        onClick={() => handleComplete(task.id, true)}
      />
      <Button
        text="Mark Incomplete"
        textColor="gray"
        color="yellow"
        onClick={() => handleComplete(task.id, false)}
      />
      <Button
        text="Delete"
        textColor="white"
        color="red"
        onClick={handleDelete}
      />
    </tr>
  );
};

export default TaskItem;
