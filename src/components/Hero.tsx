"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20 md:py-30">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 gap-y-10 md:gap-y-0">
        {/* Left side: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            <span className="text-blue-600 bg-blue-100 px-3 py-1 rounded-md shadow-sm animate-pulse">
              One-Stop Shop
            </span>{" "}
            for All Things Tech
          </h2> */}

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 text-blue-900 px-3 py-1 rounded-md shadow-sm animate-pulse">
              One-Stop Shop
            </span>{" "}
            for All Things Tech
          </h2>
          <p className="text-md md:text-lg max-w-lg mx-auto md:mx-0">
            Discover the latest gadgets, best deals, and top brands. Explore new
            arrivals, exclusive discounts, and expert picks to upgrade your tech
            life today. Whether you&apos;re a gamer, a tech enthusiast, or just
            looking for everyday electronics, we&apos;ve got everything you need
            to stay ahead of the curve—all in one place.
          </p>

          <Link href="#products">
            <Button
              variant="default"
              className="mt-6 bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer"
            >
              Shop Now
            </Button>
          </Link>
        </div>

        {/* small screens using gap-y-10, image sizing with max-w-xs on mobile, w-full so image doesn't overflow on smaller devices */}
        <div className="md:w-1/2 w-full flex justify-center items-center mt-10 md:mt-20">
          <Image
            src="/technology-and-online-shopping.jpg"
            alt="Tech Gadgets"
            width={400}
            height={400}
            // className="rounded-lg shadow-lg w-full max-w-xs lg:max-w-xl"
            className="rounded-lg shadow-lg w-full md:w-[80%] lg:w-full"
          />
        </div>
      </div>
    </section>
  );
}
