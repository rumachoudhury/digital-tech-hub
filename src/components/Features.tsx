// "use client";
// import Image from "next/image";

// export default function Features() {
//   return (
//     <section id="features" className="py-16 bg-gray-100 text-center">
//       <div>
//         <h3 className="text-4xl font-bold mb-20">Features</h3>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         <div className="p-6 bg-white shadow-md rounded-lg relative overflow-visible">
//           {/* Image positioned half outside */}
//           <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
//             <Image
//               src="/fast-delivery.jpg"
//               alt="Fast Delivery"
//               width={100}
//               height={100}
//               className="rounded-full border-4 border-white shadow-md"
//             />
//           </div>

//           {/* Content */}
//           <div className="mt-12 text-center">
//             <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
//             <p>Get your products delivered at lightning speed.</p>
//           </div>
//         </div>

//         <div className="p-6 bg-white shadow-md rounded-lg relative overflow-visible">
//           {/* Image positioned half outside */}
//           <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
//             <Image
//               src="/top-breands2.jpeg"
//               alt="Top Brands"
//               width={100}
//               height={100}
//               className="rounded-full border-4 border-white shadow-md"
//             />
//           </div>

//           {/* Content */}
//           <div className="mt-12 text-center">
//             <h4 className="text-xl font-bold mb-2">Top Brands</h4>
//             <p>Shop from a wide range of popular tech brands.</p>
//           </div>
//         </div>

//         <div className="p-6 bg-white shadow-md rounded-lg relative overflow-visible">
//           {/* Image positioned half outside */}
//           <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
//             <Image
//               src="/secure.jpg"
//               alt="Secure Payment"
//               width={100}
//               height={100}
//               className="rounded-full "
//             />
//           </div>

//           {/* Content */}
//           <div className="mt-12 text-center">
//             <h4 className="text-xl font-bold mb-2">Secure Payment</h4>
//             <p>Your transactions are safe and encrypted.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// --------------

"use client";
import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-100 text-center px-4">
      <div>
        <h3 className="text-3xl sm:text-4xl font-bold mb-16">Features</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="p-6 bg-white shadow-md rounded-lg relative overflow-visible  transition-transform duration-300 hover:scale-105">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <Image
              src="/fast-delivery.jpg"
              alt="Fast Delivery"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>
          <div className="mt-12">
            <h4 className="text-lg font-bold mb-2">Fast Delivery</h4>
            <p className="text-sm sm:text-base">
              Get your products delivered at lightning speed.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-white shadow-md rounded-lg relative overflow-visible  transition-transform duration-300 hover:scale-105">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <Image
              src="/top-breands2.jpeg"
              alt="Top Brands"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-md  "
            />
          </div>
          <div className="mt-12">
            <h4 className="text-lg font-bold mb-2">Top Brands</h4>
            <p className="text-sm sm:text-base">
              Shop from a wide range of popular tech brands.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-white shadow-md rounded-lg relative overflow-visible  transition-transform duration-300 hover:scale-105">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <Image
              src="/secure.jpg"
              alt="Secure Payment"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-md "
            />
          </div>
          <div className="mt-12">
            <h4 className="text-lg font-bold mb-2">Secure Payment</h4>
            <p className="text-sm sm:text-base">
              Your transactions are safe and encrypted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
