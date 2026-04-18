import { useState, useEffect } from 'react';

export function useAuth() {
  const [isAuth, setLocalAuth] = useState(() => {
    return localStorage.getItem("auth") === "true";
  });

  // Sync auth state with localStorage
  useEffect(() => {
    if (isAuth) {
      localStorage.setItem("auth", "true");
    } else {
      localStorage.removeItem("auth");
    }
  }, [isAuth]);

  // Listen for storage changes in other tabs/windows
  useEffect(() => {
    const handleStorageChange = () => {
      setLocalAuth(localStorage.getItem("auth") === "true");
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const login = (username, password) => {
    const registeredStr = localStorage.getItem("registered");
    const registeredUsers = JSON.parse(registeredStr) || {};

    if (!registeredUsers[username]) {
      return { success: false, error: "User not found" };
    }

    if (password !== registeredUsers[username]) {
      return { success: false, error: "Incorrect password" };
    }

    setLocalAuth(true);
    return { success: true };
  };

  const signup = (username, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return { success: false, error: "Password and confirm password do not match" };
    }

    const registeredStr = localStorage.getItem("registered");
    const registeredUsers = JSON.parse(registeredStr) || {};

    if (registeredUsers[username]) {
      return { success: false, error: "User already exists" };
    }

    registeredUsers[username] = password;
    localStorage.setItem("registered", JSON.stringify(registeredUsers));
    return { success: true };
  };

  const logout = () => {
    setLocalAuth(false);
  };

  return {
    isAuth,
    login,
    signup,
    logout,
  };
}
