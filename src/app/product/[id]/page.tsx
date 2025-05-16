"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Star, StarOff } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { user } = useAuth();
  const router = useRouter();
  const { addToCart } = useCart();
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  interface Product {
    _id: string;
    title: string;
    img: string;
    image?: string;
    description: string;
    price: number;
    rating: number;
    category: string;
  }

  const [otherProducts, setOtherProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productRes = await axios.get(
        `http://localhost:5001/products/${id}`
      );
      const allProductsRes = await axios.get("http://localhost:5001/products");

      setProduct(productRes.data?.data);
      const others = allProductsRes.data?.data.filter(
        (p: Product) => p._id !== id
      );
      setOtherProducts(others);
    };

    fetchData();
  }, [id]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 mt-20">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-10 items-center justify-around ">
        <Image
          src={product.img}
          alt={product.title}
          width={300}
          height={300}
          className="rounded-lg object-contain w-auto"
        />

        <div className="flex flex-col justify-between h-full w-full max-w-xl">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="flex mb-2">
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
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-semibold text-blue-600">
              ${product.price}
            </p>
            <p className="text-sm">Category: {product.category}</p>
          </div>

          <div className="flex gap-4 mt-5">
            <button
              className="text-sm text-white bg-red-600 px-10 py-2"
              onClick={() => {
                if (!user) {
                  alert("Please log in to add items to your cart.");
                  router.push("/login");
                  return;
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

            <button
              className="text-sm text-white bg-black px-10 py-2"
              onClick={() => {
                router.push("/cart"); // cart page
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      {otherProducts.length > 0 && (
        <div className="mt-16 w-auto h-auto shadow-2xl p-6 bg-white rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            You May Also Like
          </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {otherProducts.map((item: Product) => (
              <SwiperSlide key={item._id}>
                <Link href={`/product/${item._id}`}>
                  <div className="border p-4 rounded-lg hover:shadow-lg transition  flex flex-col items-center justify-between bg-white">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={150}
                      height={150}
                      className="mx-auto mb-4 object-contain h-[200px] w-auto"
                    />
                    <h3 className="text-lg font-semibold text-gray-700 text-center">
                      {item.title}
                    </h3>

                    <div className="flex justify-center my-2">
                      {Array.from({ length: 5 }).map((_, index) =>
                        index < item.rating ? (
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

                    <p className="text-gray-700 text-sm text-center mb-2 line-clamp-3 h-[60px] overflow-hidden">
                      {item.description}
                    </p>
                    <p className="text-blue-600 font-bold">${item.price}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

// productRes = the full response.
// productRes.data = just the product info from the backend.
