import { useTaskContext } from "@/contexts/taskContext";
import { NewTask } from "@/utils/interfaces";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface TaskFormProps {}

const CreateTaskForm: React.FC<TaskFormProps> = () => {
  const { addNewTask } = useTaskContext();
  const [task, setTask] = useState<NewTask>({
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear validation error when the input changes
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation example (you can customize this based on your requirements)
    const newErrors: { [key: string]: string } = {};
    if (!task.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!task.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      addNewTask({ title: task.title, description: task.description });
      setTask({ title: "", description: "" });
      setErrors({});
    }
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
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
        />
        {errors.description && (
          <p className="text-red-500">{errors.description}</p>
        )}
      </label>
      <button type="submit" className="bg-blue-500">
        Add Task
      </button>
    </form>
  );
};

export default CreateTaskForm;
