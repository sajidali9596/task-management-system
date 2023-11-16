import { useAuthContext } from "@/contexts/authContext";
import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const { login } = useAuthContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    // After successful login, you can redirect the user or perform any other actions.
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit" className="bg-blue-500">Login</button>
    </form>
  );
};

export default LoginForm;
