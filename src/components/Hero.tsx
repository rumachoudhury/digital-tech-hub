"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20 md:py-30 md:mt-6 sm:mt-2">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 gap-y-10 md:gap-y-0 md:gap-x-12 lg:gap-x-20">
        {/* Left side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
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
              variant="destructive"
              className="mt-6 font-bold px-8 py-3 rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer"
            >
              Shop Now
            </Button>
          </Link>
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="/technology-and-online-shopping3.jpg"
            alt="Tech Gadgets"
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-full max-w-md lg:max-w-xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}
