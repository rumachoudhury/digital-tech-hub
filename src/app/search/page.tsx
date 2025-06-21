"use client";

import { Star, StarOff } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Product = {
  _id: string;
  title: string;
  img: string;
  price: number;
  description: string;
  category: string;
  rating: number;
};

type SearchPageProps = {
  searchParams: {
    q?: string;
  };
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const { addToCart } = useCart();
  const q = searchParams?.q ?? "";
  const query = typeof q === "string" ? q.toLowerCase() : "";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5001/products");
        const json = await res.json();
        if (Array.isArray(json.data)) {
          setProducts(json.data);
        } else {
          console.error("Invalid response:", json.data);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(query)
  );
  const otherProducts = products.filter(
    (product) => !filtered.includes(product)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 mt-32">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-start">
        Search Results for{" "}
        <span className="text-red-500">&quot;{query}&quot;</span>
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((product) => (
            <div
              key={product._id}
              className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden group hover:shadow-lg transition h-auto  "
            >
              <Image
                src={product.img}
                alt={product.title}
                width={300}
                height={250}
                className="rounded-lg object-contain  w-full h-[250px] transform transition-transform duration-300 group-hover:scale-105 "
              />

              <div className="p-4 flex flex-col justify-between flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h2>

                <div className="flex items-center space-x-1 mb-2">
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

                <p className="text-gray-700 text-sm mb-1 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  Category: {product.category}
                </p>
                <p className="text-lg font-bold text-green-600 mb-4">
                  ${product.price}
                </p>

                <button
                  onClick={() =>
                    addToCart({
                      title: product.title,
                      price: product.price.toString(),
                      description: product.description,
                      image: product.img,
                    })
                  }
                  className="mt-auto bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition cursor-pointer"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Swiper Slider */}
      {otherProducts.length > 0 && (
        <div className="mt-20 bg-white p-6 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Search More Products
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
            {otherProducts.map((item) => (
              <SwiperSlide key={item._id}>
                <Link href={`/product/${item._id}`}>
                  <div className="flex flex-col bg-white border p-4 rounded-lg hover:shadow-lg transition items-center">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={150}
                      height={150}
                      className="object-contain h-[200px] w-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-center text-gray-800 mb-1">
                      {item.title}
                    </h3>

                    <div className="flex justify-center my-1">
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

                    <p className="text-gray-700 text-sm text-center line-clamp-2 mb-2 h-[40px] overflow-hidden">
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
