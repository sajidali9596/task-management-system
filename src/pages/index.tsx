import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import CreateTaskFrom from "../components/CreateTaskFrom";
import TaskList from "../components/TaskList";
import { NewTask, Task } from "@/utils/interfaces";
import { TaskProvider } from "@/contexts/taskContext";
import { DragAndDropProvider } from "@/contexts/dragAndDropContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <TaskProvider>
      <DragAndDropProvider>
        <div className="container bg-red">
          <h1>Task Manager</h1>
          <CreateTaskFrom />
          <div className="overflow-x-auto">
            <TaskList />
          </div>
        </div>
      </DragAndDropProvider>
    </TaskProvider>
  );
}
