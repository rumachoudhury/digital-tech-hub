"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ConfirmationPage() {
  interface ConfirmedItem {
    img: string;
    title: string;
    image: string;
    description: string;
  }

  const [confirmedItems, setConfirmedItems] = useState<ConfirmedItem[]>([]);
  const searchParams = useSearchParams();

  const subtotal = searchParams.get("subtotal") || "0.00";
  const items = searchParams.get("items") || "0";

  useEffect(() => {
    const storedItems = localStorage.getItem("confirmedItems");
    if (storedItems) {
      setConfirmedItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <div className="p-8 flex flex-col md:flex-row justify-between gap-6 mt-20">
      {/* LEFT SIDE */}
      <div className="flex-1 space-y-6">
        {confirmedItems.map((item, index) => (
          <div key={index} className="flex gap-4 items-start border-b pb-4">
            <Image
              src={item.img || item.image}
              width={150}
              height={150}
              alt={item.title}
              className="rounded"
            />
            <div className="md:mt-4 sm:mt-0">
              <h3 className="text-xl gap-2 font-semibold flex">
                <CheckCircle className="w-6 h-6 text-white bg-green-400 rounded-full" />
                Added to cart
              </h3>

              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full max-w-sm p-6 border rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <p className="flex justify-between">
          <span>Items:</span> <span>{items}</span>
        </p>
        <p className="flex justify-between">
          <span>Subtotal:</span> <span>${subtotal}</span>
        </p>

        <Link href={`/Checkout?subtotal=${subtotal}&items=${items}`}>
          <button className="w-full border border-gray-500 text-white bg-red-500  py-2 rounded">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

// ------------
// done with responsive
