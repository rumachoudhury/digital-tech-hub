"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Star, StarOff } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  img: string;
  rating: number;
}

export default function FeaturedProducts() {
  const [loading, setLoading] = useState(true); //ch

  const { addToCart } = useCart();
  //   const {} = useAuth(); // checking if user is logged in
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const authContext = useAuth();
  const user = authContext?.user;

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://express-crud-c82n.onrender.com/products"
  //       );
  //       setProducts(response?.data?.data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://express-crud-c82n.onrender.com/products"
        );
        setProducts(response?.data?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); //ch
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="products" className="py-20 bg-gray-50 text-center">
      <h3 className="text-4xl font-bold mb-14 text-gray-800">
        Featured Products
      </h3>

      {loading ? ( //ch
        <div className="flex justify-center items-center min-h-[200px]">
          <FaSpinner className="animate-spin text-4xl text-gray-600" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((product) => (
            <Link key={product._id} href={`/product/${product._id}`}>
              {/* Card component here */}
              <Card className=" h-full md:max-h-[480px] hover:shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col cursor-pointer">
                <CardHeader className="relative flex flex-col items-center gap-4 pb-0">
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={150}
                    height={150}
                    loading="lazy"
                    className="rounded-lg object-contain h-[150px] w-auto"
                  />
                  <CardTitle className="text-2xl text-center">
                    {product.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between overflow-hidden ">
                  <div>
                    <div className="flex justify-center mb-2">
                      {Array.from({ length: 5 }).map((_, index) =>
                        index < product.rating ? (
                          <Star
                            key={index}
                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                          />
                        ) : (
                          <StarOff
                            key={index}
                            className="w-5 h-5 text-gray-300"
                          />
                        )
                      )}
                    </div>
                    <p className="text-gray-700 text-sm mb-2 line-clamp-3 h-[60px] overflow-hidden ">
                      {product.description}
                    </p>
                  </div>
                  <p className="text-gray-900 font-semibold text-lg mt-4">
                    ${product.price}
                  </p>
                  <p className="text-gray-900 font-semibold text-lg">
                    {product.category}
                  </p>
                </CardContent>

                <CardFooter className="justify-center mt-4">
                  <button
                    className="text-sm text-white bg-red-600 px-10 py-2 rounded-full cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();

                      if (!user) {
                        alert("Please log in to add items to your cart");
                        router.push("/login");
                        return; // Stop here if not logged in!
                      }

                      addToCart({
                        title: product.title,
                        price: product.price.toString(),
                        description: product.description,
                        image: product.img,
                      });
                    }}
                  >
                    Add To Cart
                  </button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {products.map((product) => (
          <Link key={product._id} href={`/product/${product._id}`}>
            <Card className=" h-full md:max-h-[480px] hover:shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col cursor-pointer">
              <CardHeader className="relative flex flex-col items-center gap-4 pb-0">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={150}
                  height={150}
                  loading="lazy"
                  className="rounded-lg object-contain h-[150px] w-auto"
                />
                <CardTitle className="text-2xl text-center">
                  {product.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between overflow-hidden ">
                <div>
                  <div className="flex justify-center mb-2">
                    {Array.from({ length: 5 }).map((_, index) =>
                      index < product.rating ? (
                        <Star
                          key={index}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ) : (
                        <StarOff
                          key={index}
                          className="w-5 h-5 text-gray-300"
                        />
                      )
                    )}
                  </div>
                  <p className="text-gray-700 text-sm mb-2 line-clamp-3 h-[60px] overflow-hidden ">
                    {product.description}
                  </p>
                </div>
                <p className="text-gray-900 font-semibold text-lg mt-4">
                  ${product.price}
                </p>
                <p className="text-gray-900 font-semibold text-lg">
                  {product.category}
                </p>
              </CardContent>

              <CardFooter className="justify-center mt-4">
              

                <button
                  className="text-sm text-white bg-red-600 px-10 py-2 rounded-full cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();

                    if (!user) {
                      alert("Please log in to add items to your cart");
                      router.push("/login");
                      return; // Stop here if not logged in!
                    }

                    addToCart({
                      title: product.title,
                      price: product.price.toString(),
                      description: product.description,
                      image: product.img,
                    });
                  }}
                >
                  Add To Cart
                </button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div> */}
    </section>
  );
}
