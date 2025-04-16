
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

// Base URL from environment variable
const BASE_URL = "https://8be92fd2-ebee-438d-8564-6644d92b2900-00-3mzpyogzbl04l.sisko.replit.dev";

export const useAuth = () => {
  const { login, logout } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      login(data.token);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (email: string, password: string, name: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Some APIs automatically log you in after registration
      if (data.token) {
        login(data.token);
      }
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    logout();
  };

  return {
    loginUser,
    registerUser,
    logoutUser,
    loading,
    error,
  };
};
