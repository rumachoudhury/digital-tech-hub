"use client";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  const handleContinueShopping = () => {
    // Clear cart data
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartSubtotal");

    //  Go back to home
    router.push("/");
  };

  return (
    <div className="p-8 mt-20 max-w-xl mx-auto text-center space-y-4">
      <h2 className="text-2xl font-semibold text-green-600">
        Thank you for your order!
      </h2>
      <p className="text-gray-700">
        We have received your details and will process your order shortly.
      </p>

      <button
        onClick={handleContinueShopping}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer"
      >
        Continue shopping
      </button>
    </div>
  );
}


// ------------
// done with responsive

