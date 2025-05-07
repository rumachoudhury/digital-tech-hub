"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To hold error message
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    login(email);
    // router.push("/dashboard");
    router.push("/"); // Redirect to home page after login
  };

  return (
    <div className="max-w-md mx-auto mt-40 mb-6 p-8 border border-gray-300 rounded bg-white shadow-md">
      <h1 className="text-xl font-bold mb-4 flex justify-center">Login</h1>

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setUsername(e.target.value)}
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

      <p className="mt-4 text-sm">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
}
