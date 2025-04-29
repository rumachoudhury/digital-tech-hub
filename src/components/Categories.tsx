"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu"; //using shadcn/ui
import { Button } from "@/components/ui/button";

import {
  Laptop,
  Smartphone,
  Headphones,
  Shirt,
  Book,
  HeartPulse,
  Utensils,
  Dumbbell,
} from "lucide-react";

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-gray-200">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-bold mb-4">Shop by Categories</h3>
        <p className="text-gray-600 mb-6">
          Find everything you need in one place.
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="text-lg px-6 py-3">
              Browse Categories
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <DropdownMenuLabel>All Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Laptop className="w-4 h-4 mr-2" /> Electronics
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Shirt className="w-4 h-4 mr-2" /> Fashion
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Utensils className="w-4 h-4 mr-2" /> Home & Kitchen
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Dumbbell className="w-4 h-4 mr-2" /> Sports
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HeartPulse className="w-4 h-4 mr-2" /> Beauty & Health
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Book className="w-4 h-4 mr-2" /> Books
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Headphones className="w-4 h-4 mr-2" /> Others
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
          <Laptop className="w-10 h-10 text-blue-500 mb-4 mx-auto" />
          <h4 className="text-2xl font-bold mb-3">Laptops</h4>
          <p className="text-gray-600">Powerful laptops for work and play.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
          <Smartphone className="w-10 h-10 text-green-500 mb-4 mx-auto" />
          <h4 className="text-2xl font-bold mb-3">Smartphones</h4>
          <p className="text-gray-600">
            Stay connected with the latest phones.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
          <Headphones className="w-10 h-10 text-purple-500 mb-4 mx-auto" />
          <h4 className="text-2xl font-bold mb-3">Accessories</h4>
          <p className="text-gray-600">Find the best tech accessories here.</p>
        </div>
      </div>
    </section>
  );
}
