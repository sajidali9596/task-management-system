import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import CreateTaskFrom from "../components/CreateTaskFrom";
import TaskList from "../components/TaskList";
import { NewTask, Task } from "@/utils/interfaces";
import { TaskProvider } from "@/contexts/taskContext";
import { DragAndDropProvider } from "@/contexts/dragAndDropContext";
import LoginForm from "@/components/LoginForm";
import { AuthProvider, useAuthContext } from "@/contexts/authContext";

const inter = Inter({ subsets: ["latin"] });
function HomeContent() {
  const { user, logout } = useAuthContext();

  return (
    <div className="container">
      {!user ? (
        <LoginForm />
      ) : (
        <>
          <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h2 className="text-2xl font-bold">Task List</h2>
            {user && (
              <button className="text-white" onClick={logout}>
                Logout
              </button>
            )}
          </header>
          <h2 className="text-2xl font-bold mb-4">Task List</h2>
          <h1>Task Manager</h1>
          <CreateTaskFrom />
          <div className="overflow-x-auto">
            <TaskList />
          </div>
        </>
      )}
    </div>
  );
}
export default function Home() {
  return (
    <AuthProvider>
      <TaskProvider>
        <DragAndDropProvider>
          <HomeContent />
        </DragAndDropProvider>
      </TaskProvider>
    </AuthProvider>
  );
}
