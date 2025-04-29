"use client";
import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-100 text-center">
      <div>
        <h3 className="text-4xl font-bold mb-20">Features</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* <div className="p-6 bg-white shadow-md rounded-lg">
          <Image
            src="/fast-delivery.webp"
            alt="fast delivery"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
          <p>Get your products delivered at lightning speed.</p>
        </div> */}
        <div className="p-6 bg-white shadow-md rounded-lg relative overflow-visible">
          {/* Image positioned half outside */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <Image
              src="/fast-delivery.jpg"
              alt="Fast Delivery"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>

          {/* Content */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
            <p>Get your products delivered at lightning speed.</p>
          </div>
        </div>

        {/* <div className="p-6 bg-white shadow-md rounded-lg">

          <h4 className="text-xl font-bold mb-2">Top Brands</h4>
          <p>Shop from a wide range of popular tech brands.</p>
        </div> */}
        <div className="p-6 bg-white shadow-md rounded-lg relative overflow-visible">
          {/* Image positioned half outside */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <Image
              src="/top-brands.jpeg"
              alt="Top Brands"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>

          {/* Content */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold mb-2">Top Brands</h4>
            <p>Shop from a wide range of popular tech brands.</p>
          </div>
        </div>

        {/* <div className="p-6 bg-white shadow-md rounded-lg">
          <h4 className="text-xl font-bold mb-2">Secure Payment</h4>
          <p>Your transactions are safe and encrypted.</p>
        </div> */}
        <div className="p-6 bg-white shadow-md rounded-lg relative overflow-visible">
          {/* Image positioned half outside */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <Image
              src="/secure.jpg"
              alt="Top Brands"
              width={100}
              height={100}
              className="rounded-full "
            />
          </div>

          {/* Content */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold mb-2">Secure Payment</h4>
            <p>Your transactions are safe and encrypted.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
