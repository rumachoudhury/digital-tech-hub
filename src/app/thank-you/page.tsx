"use client";
import Image from "next/image";
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
      <div className="flex justify-center">
        <div className="relative w-full max-w-xs h-64 lg:max-w-md lg:h-70 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/thank-you.jpg"
            alt="Thank you for your order"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-green-600">
        {/* Thank you for your order! */}
        Thank You For Supporting My Small Business.
      </h2>
      <p className="text-gray-700">
        We have received your details and will process your order shortly.
      </p>

      <button
        onClick={handleContinueShopping}
        className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg cursor-pointer"
      >
        Continue shopping
      </button>
    </div>
  );
}

// ------------
// done with responsive
