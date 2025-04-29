"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, StarOff } from "lucide-react";

//TypeScript type for Product
type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  badge: string;
  badgeColor: string;
  description: string;
  rating: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "High-End Laptop",
    price: "$999.99",
    image: "/laptop.png",
    badge: "Best Seller",
    badgeColor: "bg-green-600",
    description: "Powerful performance for professionals and gamers.",
    rating: 4,
  },
  {
    id: 2,
    name: "Latest Smartphone",
    price: "$799.99",
    image: "/smartphone.jpg",
    badge: "New Arrival",
    badgeColor: "bg-blue-600",
    description: "Experience blazing speed and crystal-clear cameras.",
    rating: 5,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: "$199.99",
    image: "/ headphones.jpg",
    badge: "Limited Offer",
    badgeColor: "bg-red-600",
    description: "Immersive sound quality with noise cancellation.",
    rating: 4,
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-20 bg-gray-50 text-center">
      <h3 className="text-4xl font-bold mb-14 text-gray-800">
        Featured Products
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="hover:shadow-xl transition flex flex-col" // 🛠️ Make card flex column
          >
            <CardHeader className="relative flex flex-col items-center gap-4 pb-0">
              <div
                className={`absolute top-2 left-2 text-white text-xs px-3 py-1 rounded-full ${product.badgeColor}`}
              >
                {product.badge}
              </div>
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="rounded-lg object-contain h-[150px]"
              />
              <CardTitle className="text-2xl text-center">
                {product.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col justify-between">
              {/* 🛠️ flex-1 to grow and push footer down */}
              <div>
                <div className="flex justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, index) =>
                    index < product.rating ? (
                      <Star
                        key={index}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ) : (
                      <StarOff key={index} className="w-5 h-5 text-gray-300" />
                    )
                  )}
                </div>
                <p className="text-gray-700 text-sm mb-2">
                  {product.description}
                </p>
              </div>
              <p className="text-gray-900 font-semibold text-lg mt-4">
                {product.price}
              </p>
            </CardContent>

            <CardFooter className="justify-center mt-4">
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
