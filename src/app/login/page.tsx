"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    // Changed to async function to handle API calls (if needed)
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      // Simulate an API call or get data from your backend (e.g., using fetch or axios)
      // For simplicity, we'll assume the data comes from localStorage here:
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

      if (storedUser.email === email && storedUser.password === password) {
        setError("");

        const loggedInUser = {
          name: storedUser.name, // Assuming your user object contains a 'name'
          email: storedUser.email,
          // You can include other data like 'role', 'preferences', etc.
        };

        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser)); // Store full user object

        // Call login function with the full user object
        login(loggedInUser);

        router.push("/");
      } else {
        setError("Invalid email or password.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-40 mb-6 p-8 border border-gray-300 rounded bg-white shadow-md">
      <h1 className="text-xl font-bold mb-4 text-center">Login</h1>

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4"
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4"
      />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <Button onClick={handleLogin} className="w-full">
        Submit
      </Button>

      <p className="mt-4 text-sm text-center">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
