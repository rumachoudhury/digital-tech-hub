// import ContactUs from "@/components/ContactUs"; // Use @ if alias is set

// export default function ContactPage() {
//   return <ContactUs />;
// }
// ------------
"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import ContactUs from "@/components/ContactUs"; // assuming your ContactUs is in components

export default function ContactPage() {
  return (
    <ProtectedRoute>
      <ContactUs />
    </ProtectedRoute>
  );
}
