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
        Search Results for <span className="text-red-500">"{query}"</span>
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <ul className="space-y-10 flex items-center justify-between">
          {filtered.map((product) => (
            <li
              key={product._id}
              className="flex flex-col md:flex-row items-start gap-6 p-6 border rounded-lg shadow-sm bg-white"
            >
              <Image
                src={product.img}
                alt={product.title}
                width={150}
                height={150}
                className="rounded-md object-contain w-[400px] h-[400px]"
              />

              <div className="flex-1 space-y-2 mt-15 ml-20">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {product.title}
                </h2>

                <div className="flex items-center space-x-1">
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

                <p className="text-gray-700 line-clamp-3">
                  {product.description}
                </p>

                <p className="text-sm text-gray-500">
                  Category: {product.category}
                </p>

                <p className="text-lg font-bold text-green-600">
                  ${product.price}
                </p>

                <button
                  className="mt-4 inline-block bg-red-600 text-white px-6 py-2 text-sm rounded hover:bg-red-700 transition"
                  onClick={() =>
                    addToCart({
                      title: product.title,
                      price: product.price.toString(),
                      description: product.description,
                      image: product.img,
                    })
                  }
                >
                  Add To Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Swiper Slider */}
      {otherProducts.length > 0 && (
        <div className="mt-16 w-auto h-auto shadow-2xl p-6 bg-white rounded-lg">
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
            {otherProducts.map((item: Product) => (
              <SwiperSlide key={item._id}>
                <Link href={`/product/${item._id}`}>
                  <div className="border p-4 rounded-lg hover:shadow-lg transition flex flex-col items-center justify-between bg-white">
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
