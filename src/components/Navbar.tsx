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
  const [searchTerm, setSearchTerm] = useState("");
  const { cart } = useCart();
  const totalItems = cart.length;

  const { user, logout } = useAuth() as {
    user: { name: string } | null;
    logout: () => void;
  };

  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav
      // className="bg-gray-900 text-white fixed top-0 left-0 z-50 w-full shadow-md"
      className="bg-gray-900 text-white fixed top-0 left-0 z-50 w-full shadow-md overflow-x-auto"
    >
      <div
        // className=" container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between"
        className="container mx-auto px-4 sm:px-5 lg:px-6 py-3 flex items-center justify-between"
      >
        {/* Left: Logo and Hamburger */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            // className="rounded-full"
            className="rounded-full flex-shrink-0"
          />
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            DigitalTechHub
          </h1>
        </div>
        {/* Hamburger Icon */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Nav Links */}
        {/* md:ml-4  the issue is solved for 1024 screen */}
        <div className="hidden lg:flex items-center space-x-4 md:ml-4 ">
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
                <Link href="#laptops">Laptops</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#phones">Phones</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#accessories">Accessories</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/contact" className="hover:text-gray-400">
            Contact Us
          </Link>
        </div>

        {/* Desktop Icons & Search */}
        <div
          // className="hidden lg:flex items-center space-x-4"
          className="hidden lg:flex items-center lg:space-x-4 xl:space-x-6"
        >
          {/* Search */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchTerm.trim())
                router.push(`/search?q=${searchTerm.trim()}`);
            }}
            className="relative max-w-sm"
          >
            <button type="submit" className="absolute left-2 top-2">
              <Search className="text-gray-400 w-5 h-5 cursor-pointer" />
            </button>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-4 py-1 rounded-md text-white bg-gray-800 focus:ring-2 focus:ring-blue-500"
            />
          </form>

          {/* Cart & User */}
          <Link href="/cart" className="relative hover:text-blue-400">
            <ShoppingCart size={24} />{" "}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <User size={24} />
          {user ? (
            <>
              <span className="hover:text-gray-400">Hi, {user.name}</span>
              <Button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600"
              >
                Logout
              </Button>
            </>
          ) : (
            <Link href="/login" className="hover:text-gray-400">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-3 bg-gray-800">
          <Link href="/" className="block hover:text-gray-400">
            Home
          </Link>
          <Link href="#products" className="block hover:text-gray-400">
            Products
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-gray-400 flex items-center gap-1 focus:outline-none">
              Categories <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 text-white mt-2">
              <DropdownMenuItem>
                <Link href="#laptops">Laptops</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#phones">Phones</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#accessories">Accessories</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/contact" className="block hover:text-gray-400">
            Contact Us
          </Link>
          {/* Mobile Search */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchTerm.trim())
                router.push(`/search?q=${searchTerm.trim()}`);
            }}
            className="relative items-center max-w-[250px] md:max-w-sm lg:max-w-md"
            // className="relative items-center hidden sm:flex max-w-[250px] md:max-w-sm lg:max-w-md"
          >
            <button type="submit" className="absolute left-2 top-2">
              <Search className="text-gray-400 w-5 h-5 cursor-pointer" />
            </button>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-4 py-1 rounded-md text-white bg-gray-700 focus:ring-2 focus:ring-blue-500"
            />
          </form>
          <Link href="/cart" className="block hover:text-blue-400">
            Cart ({totalItems})
          </Link>
          {user ? (
            <>
              <span className="block hover:text-gray-400">Hi, {user.name}</span>
              <Button
                onClick={handleLogout}
                // className="w-full bg-red-500 hover:bg-red-600 "
                className=" bg-red-500 hover:bg-red-600  lg:max-w-md"
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
