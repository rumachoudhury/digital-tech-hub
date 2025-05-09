"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, User, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.length;

  const { user, logout } = useAuth() as {
    user: { name: string } | null;
    logout: () => void;
  };
  // By using void, we're telling TypeScript:"Don’t expect a return value from this function, it doesn’t return anything — not a value, not a promise, just runs and ends.

  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-2 fixed top-0 left-0 z-50 shadow-md w-full ">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            DigitalTechHub
          </h1>
        </div>

        {/* Hamburger icon */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 ml-10">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="#products" className="hover:text-gray-400">
            Products
          </Link>
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
          <Link href="/contact" className="hover:text-gray-400">
            Contact Us
          </Link>
        </div>

        {/* Search */}
        <div className="hidden lg:block flex-1 mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-1 rounded-md text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Icons and User */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/cart" className="relative hover:text-blue-400">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <User size={24} />
          {user ? (
            <span className="hover:text-gray-400">Hi, {user.name}</span>
          ) : (
            <Link href="/login" className="hover:text-gray-400">
              Login
            </Link>
          )}
          {user && (
            <Button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 ml-2"
            >
              Logout
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 space-y-2">
          <Link href="/" className="block hover:text-gray-400">
            Home
          </Link>
          <Link href="#products" className="block hover:text-gray-400">
            Products
          </Link>
          {/* <div>
            <span className="block hover:text-gray-400">Categories</span>
            <div className="ml-4 space-y-1 text-sm">
              <Link href="#laptops" className="block hover:text-gray-400">
                Laptops
              </Link>
              <Link href="#phones" className="block hover:text-gray-400">
                Phones
              </Link>
              <Link href="#accessories" className="block hover:text-gray-400">
                Accessories
              </Link>
            </div>
          </div> */}
          {/* Dropdown for Categories */}
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
          <Link href="/contact" className="block hover:text-gray-400">
            Contact Us
          </Link>
          <Link href="/cart" className="block hover:text-blue-400">
            Cart ({totalItems})
          </Link>
          {user ? (
            <>
              <span className="block hover:text-gray-400">Hi, {user.name}</span>
              <Button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 w-full"
              >
                Logout
              </Button>
            </>
          ) : (
            <Link href="/login" className="block hover:text-gray-400">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
