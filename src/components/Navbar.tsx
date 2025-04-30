// This is a simple Navbar component for a digital products store.
// It includes a logo, menu links, a search input, and icons for the shopping cart, and user profile.It also features a dropdown menu for categories.
// ---------------------------------------------------------------------------

"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, User, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu"; // using shadcn/ui
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.length;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          DigitalTechHub
        </h1>
      </div>

      {/* Hamburger Menu Icon */}
      <button
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <ChevronDown size={24} />
      </button>

      {/* Menu Links (Responsive) */}
      <ul
        className={`lg:flex space-x-6 items-center ml-10 ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <li>
          <Link href="#features" className="hover:text-gray-400">
            Features
          </Link>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-gray-400 flex items-center gap-1 focus:outline-none">
              Categories <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 text-white mt-2">
              <DropdownMenuItem>
                <Link href="#laptops" className="w-full">
                  Laptops
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#phones" className="w-full">
                  Phones
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#accessories" className="w-full">
                  Accessories
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <Link href="#products" className="hover:text-gray-400">
            Products
          </Link>
        </li>

        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>

        <li>
          <Link href="/contact" className="hover:text-gray-400">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Search Input (Hidden on small screens) */}
      <div className="flex-1 mx-8 hidden lg:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-100 pl-10 pr-4 py-1 rounded-md text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-6">
        {/* User Icon */}
        <Link href="#user" className="hover:text-gray-400">
          <User size={24} />
        </Link>

        {/* Cart Icon with Count */}
        <Link href="/cart" className="relative hover:text-blue-400">
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
