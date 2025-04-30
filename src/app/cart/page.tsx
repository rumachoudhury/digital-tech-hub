"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => {
            const price = parseFloat(item.price.replace("$", ""));
            const tax = (price * 0.1).toFixed(2);
            const salePrice = (price * 0.9).toFixed(2);

            return (
              <div
                key={index}
                className="border p-4 rounded-lg shadow bg-white flex items-center gap-6"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <div className="mt-2">
                    <p>Original Price: ${price.toFixed(2)}</p>
                    <p>Tax (10%): ${tax}</p>
                    <p className="font-bold text-green-700">
                      Sale Price: ${salePrice}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
