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
      {/* <div className="hidden lg:block h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
        <Image
          fill
          src="/thank-you.jpg"
          className="h-full w-full object-cover object-center"
          alt="thank you for your order"
        />
      </div> */}

      <div
        //   className="hidden lg:block h-80  overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-15"
        className="flex flex-col justify-center items-center"
      >
        <video
          className="h-64 w-64 object-cover object-center "
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
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
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer"
      >
        Continue shopping
      </button>
    </div>
  );
}

// ------------
// done with responsive
