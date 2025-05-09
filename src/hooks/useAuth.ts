import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : null;
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return { user };
}
