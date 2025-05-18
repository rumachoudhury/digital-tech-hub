// import ContactUs from "@/components/ContactUs"; // Use @ if alias is set

// export default function ContactPage() {
//   return <ContactUs />;
// }
// ------------
"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import ContactUs from "@/components/ContactUs";

export default function ContactPage() {
  return (
    <ProtectedRoute>
      <ContactUs />
    </ProtectedRoute>
  );
}

//<ProtectedRoute> for emailjs
