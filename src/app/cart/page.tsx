// "use client";

// import { useState } from "react";

// import CartItems from "@/components/CartItems";
// import { useCart } from "@/context/CartContext";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// // import { CartItems } from "@/components/CartItems";
// import { CartItem } from "@/types/CartItem";

// export default function CartPage() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedItems, setSelectedItems] = useState<CartItem[]>([]);
//   const router = useRouter();

//   const { cart, clearCart } = useCart();

//   /* ── helpers ─────────────────────────────────────────────── */
//   const subtotal = selectedItems
//     .reduce(
//       (acc, item) =>
//         acc +
//         (typeof item.price === "string"
//           ? parseFloat((item.price as string).replace("$", ""))
//           : item.price),
//       0
//     )
//     .toFixed(2);
//   const tax = (parseFloat(subtotal) * 0.1).toFixed(2);
//   const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

//   const handleRemoveItem = (index: number) =>
//     setSelectedItems((prev) => prev.filter((_, i) => i !== index));

//   const handleConfirm = () => {
//     localStorage.setItem("confirmedItems", JSON.stringify(selectedItems));
//     clearCart();
//     router.push(
//       `/confirmation?subtotal=${subtotal}&items=${selectedItems.length}`
//     );
//   };

//   /* ── layout ──────────────────────────────────────────────── */
//   return (
//     <div className="flex flex-col md:flex-row min-h-screen mt-20">
//       {/* Left – cart list */}
//       <div className="flex-1 p-6 bg-gray-50 overflow-y-auto ml-20">
//         <div className="relative w-[300px] h-[300px]">
//           <Image
//             src="/hippo-empty-cart.png"
//             alt="empty cart"
//             fill
//             className="object-contain"
//           />
//         </div>

//         <h2 className="text-xl font-semibold mb-4">
//           Your Cart ({cart.length} items)
//         </h2>

//         <CartItems
//           cart={cart}
//           setShowModal={setShowModal}
//           setSelectedItems={setSelectedItems}
//         />
//       </div>

//       {/* Right – slide-over / sidebar */}
//       {showModal && (
//         <>
//           {/* mobile backdrop */}
//           <div
//             className="fixed inset-0 bg-black/50 md:hidden z-40"
//             onClick={() => setShowModal(false)}
//           />

//           <div
//             className="
//               fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-y-auto
//               bg-white p-6 shadow-2xl rounded-t-2xl
//               md:static md:w-full md:max-w-md md:rounded-none md:border-l
//             "
//           >
//             <h2 className="text-2xl font-semibold border-b pb-4">
//               Order Summary ({selectedItems.length} items)
//             </h2>

//             {selectedItems.length ? (
//               <>
//                 {selectedItems.map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex justify-between items-center py-4 border-b"
//                   >
//                     <div className="flex items-center gap-4">
//                       <Image
//                         src={item.img || item.image || "/fallback.jpg"}
//                         width={70}
//                         height={70}
//                         alt={item.title}
//                         className="rounded object-cover max-w-full h-auto"
//                       />
//                       <div>
//                         <p className="font-medium text-sm">{item.title}</p>
//                         <p className="text-sm text-gray-500">{item.price}</p>
//                         <p className="text-sm text-gray-500">Qty: 1</p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => handleRemoveItem(i)}
//                       className="text-red-600 hover:text-red-800 text-xs border border-red-600 rounded px-2 py-1"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 ))}

//                 {/* Shipping */}
//                 <div className="pt-4 space-y-2">
//                   <p className="font-semibold">Shipping</p>
//                   <label className="flex items-center gap-2">
//                     <input type="radio" name="ship" defaultChecked />
//                     <span className="text-sm">Same-day Delivery - $9.99</span>
//                   </label>
//                   <label className="flex items-center gap-2">
//                     <input type="radio" name="ship" />
//                     <span className="text-sm">Store Pickup - FREE</span>
//                   </label>
//                 </div>

//                 {/* Totals */}
//                 <div className="pt-4 border-t space-y-1 text-sm">
//                   <div className="flex justify-between">
//                     Subtotal:<span>${subtotal}</span>
//                   </div>
//                   <div className="flex justify-between text-gray-600">
//                     Tax:<span>${tax}</span>
//                   </div>
//                   <div className="flex justify-between text-lg font-semibold text-green-700">
//                     Total:<span>${total}</span>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <p className="text-center text-gray-500 py-6">
//                 No items selected.
//               </p>
//             )}

//             {/* Buttons */}
//             <div className="space-y-3 mt-6">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="w-full bg-red-600 text-white py-2 rounded"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={handleConfirm}
//                 disabled={!selectedItems.length}
//                 className="w-full bg-gray-800 text-white py-2 rounded disabled:opacity-40"
//               >
//                 Confirm Order
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// done with responsive
// ---------------
"use client";

import { useState } from "react";
import CartItems from "@/components/CartItems";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState<CartItem[]>([]);
  const router = useRouter();

  const { cart, clearCart } = useCart();

  type CartItem = {
    title: string;
    price: string | number;
    img: string;
    image?: string;
  };

  /* ── helpers ─────────────────────────────────────────────── */
  const subtotal = selectedItems
    .reduce(
      (acc, item) =>
        acc +
        (typeof item.price === "string"
          ? parseFloat(item.price.replace("$", ""))
          : item.price),
      0
    )
    .toFixed(2);
  const tax = (parseFloat(subtotal) * 0.1).toFixed(2);
  const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

  const handleRemoveItem = (index: number) =>
    setSelectedItems((prev) => prev.filter((_, i) => i !== index));

  const handleConfirm = () => {
    localStorage.setItem("confirmedItems", JSON.stringify(selectedItems));
    clearCart();
    router.push(
      `/confirmation?subtotal=${subtotal}&items=${selectedItems.length}`
    );
  };

  /* ── layout ──────────────────────────────────────────────── */
  return (
    <div className="flex flex-col md:flex-row min-h-screen mt-20">
      {/* Left – cart list */}
      <div className="flex-1 p-6 bg-gray-50 overflow-y-auto ml-20">
        <div className="relative w-[300px] h-[300px]">
          <Image
            src="/hippo-empty-cart.png"
            alt="empty cart"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-xl font-semibold mb-4">
          Your Cart ({cart.length} items)
        </h2>

        <CartItems
          cart={cart}
          setShowModal={setShowModal}
          setSelectedItems={setSelectedItems}
        />
      </div>

      {/* Right – slide-over / sidebar */}
      {showModal && (
        <>
          {/* mobile backdrop */}
          <div
            className="fixed inset-0 bg-black/50 md:hidden z-40"
            onClick={() => setShowModal(false)}
          />

          <div
            className="
              fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-y-auto
              bg-white p-6 shadow-2xl rounded-t-2xl
              md:static md:w-full md:max-w-md md:rounded-none md:border-l   
            "
          >
            <h2 className="text-2xl font-semibold border-b pb-4">
              Order Summary ({selectedItems.length} items)
            </h2>

            {selectedItems.length ? (
              <>
                {selectedItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-4 border-b"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.img || item.image || "/fallback.jpg"}
                        width={70}
                        height={70}
                        alt={item.title}
                        className="rounded object-cover max-w-full h-auto"
                      />
                      <div>
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.price}</p>
                        <p className="text-sm text-gray-500">Qty: 1</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(i)}
                      className="text-red-600 hover:text-red-800 text-xs border border-red-600 rounded px-2 py-1"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Shipping */}
                <div className="pt-4 space-y-2">
                  <p className="font-semibold">Shipping</p>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="ship" defaultChecked />
                    <span className="text-sm">Same-day Delivery - $9.99</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="ship" />
                    <span className="text-sm">Store Pickup - FREE</span>
                  </label>
                </div>

                {/* Totals */}
                <div className="pt-4 border-t space-y-1 text-sm">
                  <div className="flex justify-between">
                    Subtotal:<span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    Tax:<span>${tax}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold text-green-700">
                    Total:<span>${total}</span>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-center text-gray-500 py-6">
                No items selected.
              </p>
            )}

            {/* Buttons */}
            <div className="space-y-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-red-600 text-white py-2 rounded"
              >
                Close
              </button>
              <button
                onClick={handleConfirm}
                disabled={!selectedItems.length}
                className="w-full bg-gray-800 text-white py-2 rounded disabled:opacity-40"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
