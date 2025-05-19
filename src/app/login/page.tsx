"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const authContext = useAuth();
  const login = authContext?.login;
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

      if (storedUser.email === email && storedUser.password === password) {
        setError("");

        const loggedInUser = {
          name: storedUser.name,
          email: storedUser.email,
        };

        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        localStorage.setItem("userToken", JSON.stringify(true));

        // Call login function with the full user object
        login?.(loggedInUser);

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
        <Link
          href="/register"
          className="text-blue-500 hover:underline  inline-flex items-center"
        >
          Register
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </p>
    </div>
  );
}
