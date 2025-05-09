"use client";
import { useState } from "react";
import CartItems from "@/components/CartItems";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart } = useCart();
  const [showModal, setShowModal] = useState(false); // Default to open
  type CartItem = {
    title: string;
    price: string | number;
    img: string;
    image?: string; // Optional field for compatibility
  };

  const [selectedItems, setSelectedItems] = useState<CartItem[]>([]);

  const calculateSubtotal = () => {
    return selectedItems
      .reduce((acc, item) => {
        const price =
          typeof item.price === "string"
            ? parseFloat(item.price.replace("$", ""))
            : item.price;
        return acc + price;
      }, 0)
      .toFixed(2);
  };

  const calculateTax = (subtotal: string) => {
    return (parseFloat(subtotal) * 0.1).toFixed(2);
  };

  const calculateTotal = (subtotal: string, tax: string) => {
    return (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = selectedItems.filter((_, i) => i !== index);
    setSelectedItems(updatedItems);
  };

  return (
    <div className="flex min-h-screen mt-20">
      {/* Left: Cart Items */}
      <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            Your Cart ({cart.length} items)
          </h2>
        </div>

        <CartItems
          cart={cart}
          setShowModal={setShowModal}
          setSelectedItems={setSelectedItems}
        />
      </div>

      {/* Order Summary */}
      {showModal && (
        <div className="w-full max-w-md h-full bg-white shadow-lg p-6 overflow-y-auto border-l">
          <h2 className="text-2xl font-semibold border-b pb-4">
            Order Summary ({selectedItems.length} items)
          </h2>

          {selectedItems.length > 0 ? (
            <>
              {selectedItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      width={150}
                      height={150}
                      //   src={item.img}
                      src={item.img || item.image || "/fallback.jpg"}
                      alt={item.title}
                      className=" rounded object-cover"
                    />
                    <div>
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.price}</p>
                      <p className="text-sm text-gray-500">Qty: 1</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="text-red-600 hover:text-red-800 text-sm border-2 border-red-600 rounded px-2 py-1"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Shipping Options */}
              <div className="pt-4">
                <p className="font-semibold">Shipping</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="same-day-delivery"
                      name="shipping"
                    />
                    <label htmlFor="same-day-delivery" className="ml-2">
                      Same Day Delivery - $9.99/delivery or included with
                      membership
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="order-pickup" name="shipping" />
                    <label htmlFor="order-pickup" className="ml-2">
                      Order Pickup - Ready within 2 hours at Sayville
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Totals */}
              <div className="pt-4 border-t space-y-2">
                <p className="flex justify-between text-lg font-medium">
                  Subtotal:{" "}
                  <span className="font-bold">${calculateSubtotal()}</span>
                </p>
                <p className="flex justify-between text-sm text-gray-600">
                  Taxes:{" "}
                  <span className="font-medium">
                    ${calculateTax(calculateSubtotal())}
                  </span>
                </p>
                <p className="flex justify-between text-xl font-semibold text-green-700">
                  Total:{" "}
                  <span>
                    $
                    {calculateTotal(
                      calculateSubtotal(),
                      calculateTax(calculateSubtotal())
                    )}
                  </span>
                </p>
              </div>

              {/* Payment Info */}
              <div className="pt-4 border-t text-sm text-gray-700 space-y-1">
                <p className="font-semibold">
                  Pay interest-free or as low as $12/mo with Affirm
                </p>
                <p className="text-gray-600">Not eligible for gift message</p>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 pt-6">No items selected.</p>
          )}

          {/* Close Button */}
          <button
            className="w-full mt-6 bg-red-600 text-white py-2 rounded-md cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            Close Order Summary
          </button>
          <button
            onClick={() => {
              alert("Order confirmed!");
              setShowModal(false);
            }}
            className="w-full mt-6 bg-gray-600 text-white py-2 rounded-md cursor-pointer"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}
