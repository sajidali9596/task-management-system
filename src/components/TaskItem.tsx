import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { Task } from "@/utils/interfaces";
import { useDragAndDropContext } from "@/contexts/dragAndDropContext";

interface Props {
  task: Task;
  handleComplete: (id: string, completed: boolean) => void;
  handleDelete: () => void;
}
const TaskItem: React.FC<Props> = ({ task, handleComplete, handleDelete }) => {
  const { onDragStart, onDragEnter, onDragEnd } = useDragAndDropContext();

  return (
    <motion.tr
      className="bg-white p-4 rounded mb-4"
      draggable
      onDragStart={(e: any) => onDragStart(e, task.id)}
      onDragEnter={(e: any) => onDragEnter(e, task.id)}
      onDragEnd={(e: any) => onDragEnd(e, task.id)}
      onDragOver={(e:any) => e.preventDefault()}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
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
    </motion.tr>
  );
};

export default TaskItem;
