import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import CreateTaskFrom from "../components/CreateTaskFrom";
import TaskList from "../components/TaskList";

const inter = Inter({ subsets: ["latin"] });

export interface Task {
  id: string;
  title: string;
  description: string;
  group: string;
  userId: string;
  completed: boolean;
}

export interface NewTask {
  title: string;
  description: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentUserGroup, setCurrentUserGroup] = useState("developer"); // Change this based on your user authentication logic.
  const [currentUserId, setCurrentUserId] = useState("developer"); // Change this based on your user authentication logic.

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 10);
  };

  const addNewTask = (newTask: NewTask) => {
    setTasks([
      ...tasks,
      {
        ...newTask,
        completed: false,
        userId: currentUserId,
        id: generateRandomId(),
        group: currentUserGroup,
      },
    ]);
  };

  const handleComplete = (taskId: string, completed: boolean) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: completed } : task
      )
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => task.group === currentUserGroup);

  return (
    <div className="container bg-red">
      <h1>Task Manager</h1>
      <CreateTaskFrom addNewTask={addNewTask} />
      <div className="overflow-x-auto">
        <TaskList
          tasks={filteredTasks}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
