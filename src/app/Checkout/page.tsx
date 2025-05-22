"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const subtotal = searchParams.get("subtotal") || "0.00";
  const items = searchParams.get("items") || "0";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("checkoutInfo", JSON.stringify(formData));
    // redirect to thank you page
    router.push("/thank-you");
  };

  return (
    <div className="p-8 mt-20 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Shipping Address"
          className="w-full border p-2 rounded"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          required
        />
        <p className="text-gray-700">
          <strong>Items:</strong> {items} | <strong>Subtotal:</strong> $
          {subtotal}
        </p>

        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded w-full"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

// ------------
// done with responsive
