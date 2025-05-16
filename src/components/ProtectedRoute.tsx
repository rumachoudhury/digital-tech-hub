// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function ProtectedRoute({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("userToken");

//     // If no token found, redirect to login
//     if (!token) {
//       router.push("/login");
//     }
//   }, [router]);

//   return <>{children}</>;
// }

// ----------------------------------------------------------

"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const authContext = useAuth();
  const user = authContext?.user;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return <>{children}</>;
}
