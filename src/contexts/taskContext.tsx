import React, { createContext, useState, useEffect, useMemo } from "react";
import { NewTask, Task } from "@/utils/interfaces";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuthContext } from "./authContext";

interface TaskContextValue {
  filteredTasks: Task[];
  addNewTask: (newTask: NewTask) => void;
  handleComplete: (taskId: string, completed: boolean) => void;
  handleDelete: (taskId: string) => void;
}

const TaskContext = createContext<TaskContextValue | null>(null);

interface TaskProviderProps {
  children?: React.ReactNode;
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/tasks");
        setTasks(response.data.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 10);
  };

  const showSuccessNotification = (message: any) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    });
  };

  const showInfoNotification = (message: any) => {
    toast.info(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    });
  };

  const showWarningNotification = (message: any) => {
    toast.warning(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    });
  };

  const showErrorNotification = (message: any) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    });
  };

  const addNewTask = (newTask: NewTask) => {
    if (user && Object.keys(user).length) {
      setTasks([
        ...tasks,
        {
          ...newTask,
          completed: false,
          userId: user?.id,
          id: generateRandomId(),
          group: user?.groupId,
        },
      ]);

      // Display a success notification when a new task is added
      showSuccessNotification("Task added successfully!");
    }
  };

  const handleComplete = (taskId: string, completed: boolean) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: completed } : task
      )
    );

    // Display a success notification when a task status is updated
    showSuccessNotification("Task status updated successfully!");
  };

  const handleDelete = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));

    // Display a success notification when a task is deleted
    showSuccessNotification("Task deleted successfully!");
  };

  // Memoize the filtered tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => task.group === user?.groupId);
  }, [tasks, user?.groupId]);

  console.log(filteredTasks, "<<<<<<<<<<<");

  return (
    <TaskContext.Provider
      value={{
        addNewTask,
        filteredTasks,
        handleComplete,
        handleDelete,
      }}
    >
      {/* Include ToastContainer once in your application */}
      <ToastContainer />
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = React.useContext(TaskContext);

  if (context === null) {
    throw new Error("useTaskContext must be used within an TaskProvider");
  }
  return context;
};
