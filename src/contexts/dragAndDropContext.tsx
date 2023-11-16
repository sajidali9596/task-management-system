// DrapAndDropContext.js
import React, { createContext, useEffect } from "react";
import { NewTask, Task } from "@/utils/interfaces";
import { useTaskContext } from "./taskContext";

interface DragAndDropContextValue {
  tasks: Task[];
  onDragStart: (
    e: React.DragEvent<HTMLTableRowElement>,
    taskId: string
  ) => void;
  onDragEnter: (
    e: React.DragEvent<HTMLTableRowElement>,
    taskId: string
  ) => void;
  onDragEnd: (e: React.DragEvent<HTMLTableRowElement>, taskId: string) => void;
}

const DragAndDropContext = createContext<DragAndDropContextValue | null>(null);

interface DragAndDropProviderProps {
  children?: React.ReactNode;
}

export const DragAndDropProvider = ({ children }: DragAndDropProviderProps) => {
  const { filteredTasks } = useTaskContext();
  console.log(filteredTasks);

  const [tasks, setTasks] = React.useState<Task[]>([]);
  console.log(tasks);
  //save reference for dragItem and dragOverItem
  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  useEffect(() => {
    setTasks(filteredTasks);
  }, [filteredTasks]);

  // Handle Drag Start
  const onDragStart = (
    e: React.DragEvent<HTMLTableRowElement>,
    taskId: string
  ) => {
    const dragItemIndex = tasks.findIndex((task) => task.id === taskId);
    dragItem.current = dragItemIndex;
  };

  // Handle Drag Enter
  const onDragEnter = (
    e: React.DragEvent<HTMLTableRowElement>,
    overTaskId: string
  ) => {
    const dragOverItemIndex = tasks.findIndex((task) => task.id === overTaskId);
    dragOverItem.current = dragOverItemIndex;
  };

  // Handle Drag end
  const onDragEnd = (
    e: React.DragEvent<HTMLTableRowElement>,
    droppedTaskId: string
  ) => {
    console.log("drag end", droppedTaskId);

    // Reorder tasks based on the new positions
    const newTasks = [...tasks];

    //remove and save the dragged item content
    const draggedItemContent = newTasks.splice(dragItem.current, 1)[0];

    //switch the position
    newTasks.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setTasks(newTasks);
  };

  const contextValue: DragAndDropContextValue = {
    tasks,
    onDragStart,
    onDragEnter,
    onDragEnd,
  };

  return (
    <DragAndDropContext.Provider value={contextValue}>
      {children}
    </DragAndDropContext.Provider>
  );
};

export const useDragAndDropContext = () => {
  const context = React.useContext(DragAndDropContext);

  if (context === null) {
    throw new Error(
      "useDragAndDropContext must be used within a DragAndDropProvider"
    );
  }
  return context;
};
