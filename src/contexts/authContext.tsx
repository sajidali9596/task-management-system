import React, { createContext, useEffect, useState } from "react";
import { User } from "@/utils/interfaces";
import axios from "axios";

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

interface DragAndDropProviderProps {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: DragAndDropProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = await axios.post("http://localhost:3000/api/login", {
      email,
      password,
    });
    if (response.data) {
      setUser(response.data);
      // Save user details to local storage
      localStorage.setItem("user", JSON.stringify(response.data));
    } else {
      // Handle login failure
    }
  };

  const logout = () => {
    setUser(null);
    // Remove user details from local storage
    localStorage.removeItem("user");
  };

  const contextValue: AuthContextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};
