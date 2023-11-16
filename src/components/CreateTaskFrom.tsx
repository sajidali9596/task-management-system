import React, { useState, ChangeEvent, FormEvent } from "react";
import { NewTask } from "@/pages/index";

interface TaskFormProps {
  addNewTask: (newTask: NewTask) => void;
}

const CreateTaskForm: React.FC<TaskFormProps> = ({ addNewTask }) => {
  const [task, setTask] = useState<NewTask>({
    title: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description } = task;
    addNewTask({ title, description });
    setTask({
      title: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="bg-blue-500">
        Add Task
      </button>
    </form>
  );
};
export default CreateTaskForm;
