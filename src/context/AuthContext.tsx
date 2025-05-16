// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";

// type AuthContextType = {
//   user: string | null;
//   login: (email: string) => void;
//   logout: () => void;
// };

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   login: () => {},
//   logout: () => {},
// });

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<string | null>(null);

//   useEffect(() => {
//     // 🔁 Load from localStorage
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const login = (email: string) => {
//     //Save to localStorage
//     localStorage.setItem("user", email);
//     setUser(email);
//   };

//   const logout = () => {
//     setUser(null); // Clear user state
//     localStorage.removeItem("user"); // optional, if you're storing user info
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// ------------------------
"use client";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: { name: string; email: string } | null;
  login: (userData: { name: string; email: string }) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: { name: string; email: string }) => {
    setUser(userData);
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
