// "use client";

// export default function Hero() {
//   return (
//     <section className="bg-blue-600 text-white text-center py-20">
//       <h2 className="text-5xl font-bold mb-4">
//         One-Stop Shop for All Things Tech
//       </h2>
//       <p className="text-xl">
//         Discover the latest gadgets, best deals, and top brands.
//       </p>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left side: Text */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-5xl font-bold mb-4">
            One-Stop Shop for All Things Tech
          </h2>
          <p className="text-xl">
            Discover the latest gadgets, best deals, and top brands.
          </p>

          <Button
            variant="default"
            className="mt-6 bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </Button>
        </div>

        {/* Right side: Optimized Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/technology-and-online-shopping.jpg" // your image in public folder
            alt="Tech Gadgets"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
