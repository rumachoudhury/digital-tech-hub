// This is a simple Navbar component for a digital products store.
// It includes a logo, menu links, a search input, and icons for the shopping cart, and user profile.It also features a dropdown menu for categories.

"use client";
import Link from "next/link";
import { ShoppingCart, User, ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuGroup,
} from "./ui/dropdown-menu"; //using shadcn/ui

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png" // your logo image
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          DigitalTechHub
        </h1>
      </div>

      {/* Menu Links */}
      <ul className="flex space-x-6 ml-10 items-center">
        <li>
          <Link href="#features" className="hover:text-gray-400">
            Features
          </Link>
        </li>

        {/* Dropdown for Categories */}
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
      </ul>

      {/* Center Search Input */}
      <div className="flex-1 mx-10">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-1 rounded-md text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-6">
        <Link href="#cart" className="hover:text-gray-400 text-blue-400">
          <ShoppingCart size={24} />
        </Link>
        <Link href="#user" className="hover:text-gray-400">
          <User size={24} />
        </Link>
      </div>
    </nav>
  );
}
