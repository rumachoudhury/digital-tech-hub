// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";

// type AuthContextType = {
//   user: string | null;
//   login: (email: string) => void;
//   logout: () => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<string | null>(null);

//   const login = (email: string) => {
//     setUser(email); // Replace with real auth logic
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// ----------------
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type AuthContextType = {
  user: string | null;
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // 🔁 Load from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (email: string) => {
    // ✅ Save to localStorage so it persists
    localStorage.setItem("user", email);
    setUser(email);
  };

  const logout = () => {
    setUser(null); // or however you're tracking the user
    localStorage.removeItem("user"); // optional, if you're storing user info
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
