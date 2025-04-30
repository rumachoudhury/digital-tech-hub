// "use client";

// import Image from "next/image";
// import { useCart } from "@/context/CartContext";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Star, StarOff } from "lucide-react";
// import type { Product } from "@/context/CartContext";

// //TypeScript type for Product
// // type Product = {
// //   id: number;
// //   name: string;
// //   price: string;
// //   image: string;
// //   badge: string;
// //   badgeColor: string;
// //   description: string;
// //   rating: number;
// // };

// const products: Product[] = [
//   {
//     id: 1,
//     name: "High-End Laptop",
//     price: "$999.99",
//     image: "/laptop.png",
//     badge: "Best Seller",
//     badgeColor: "bg-green-600",
//     description: "Powerful performance for professionals and gamers.",
//     rating: 4,
//   },
//   {
//     id: 2,
//     name: "Latest Smartphone",
//     price: "$799.99",
//     image: "/smartphone.jpg",
//     badge: "New Arrival",
//     badgeColor: "bg-blue-600",
//     description: "Experience blazing speed and crystal-clear cameras.",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Wireless Headphones",
//     price: "$199.99",
//     image: "/ headphones.jpg",
//     badge: "Limited Offer",
//     badgeColor: "bg-red-600",
//     description: "Immersive sound quality with noise cancellation.",
//     rating: 4,
//   },
// ];

// export default function FeaturedProducts() {
//   //   const { addToCart } = useCart();
//   const { addToCart, cart } = useCart();
//   console.log("Cart state:", cart);
//   return (
//     <section id="products" className="py-20 bg-gray-50 text-center">
//       <h3 className="text-4xl font-bold mb-14 text-gray-800">
//         Featured Products
//       </h3>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
//         {products.map((product) => (
//           <Card
//             key={product.id}
//             className="hover:shadow-xl transition flex flex-col" // 🛠️ Make card flex column
//           >
//             <CardHeader className="relative flex flex-col items-center gap-4 pb-0">
//               <div
//                 className={`absolute top-2 left-2 text-white text-xs px-3 py-1 rounded-full ${product.badgeColor}`}
//               >
//                 {product.badge}
//               </div>
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={150}
//                 height={150}
//                 className="rounded-lg object-contain h-[150px]"
//               />
//               <CardTitle className="text-2xl text-center">
//                 {product.name}
//               </CardTitle>
//             </CardHeader>

//             <CardContent className="flex-1 flex flex-col justify-between">
//               {/* 🛠️ flex-1 to grow and push footer down */}
//               <div>
//                 <div className="flex justify-center mb-2">
//                   {Array.from({ length: 5 }).map((_, index) =>
//                     index < product.rating ? (
//                       <Star
//                         key={index}
//                         className="w-5 h-5 text-yellow-400 fill-yellow-400"
//                       />
//                     ) : (
//                       <StarOff key={index} className="w-5 h-5 text-gray-300" />
//                     )
//                   )}
//                 </div>
//                 <p className="text-gray-700 text-sm mb-2">
//                   {product.description}
//                 </p>
//               </div>
//               <p className="text-gray-900 font-semibold text-lg mt-4">
//                 {product.price}
//               </p>
//             </CardContent>

//             <CardFooter className="justify-center mt-4">
//               {/* <Button>Add to Cart</Button> */}
//               <Button
//                 onClick={() => addToCart(product)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl"
//               >
//                 Add to Cart
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

// ------------------------
// "use client";
// import Image from "next/image";
// import { useCart } from "@/context/CartContext";
// import { Product } from "@/context/CartContext";

// const featuredProducts: Product[] = [
//   {
//     // id: 1,
//     // name: "High-End Laptop",
//     // price: "$999.99",
//     // // image: "/laptop.jpg",
//     // image: "/laptop.png",
//     // badge: "New",
//     // badgeColor: "bg-green-500",
//     // description: "Powerful laptop with high-end performance.",
//     // rating: 4.5,
//     id: 1,
//     name: "High-End Laptop",
//     price: "$999.99",
//     image: "/laptop.png",
//     badge: "Best Seller",
//     badgeColor: "bg-green-600",
//     description: "Powerful performance for professionals and gamers.",
//     rating: 4,
//   },
//   {
//     id: 2,
//     name: "Latest Smartphone",
//     price: "$799.99",
//     image: "/phone.jpg",
//     badge: "Hot",
//     badgeColor: "bg-red-500",
//     description: "Sleek design with top-of-the-line camera.",
//     rating: 4.7,
//   },
//   {
//     id: 3,
//     name: "Noise Cancelling Headphones",
//     price: "$199.99",
//     image: "/headphones.jpg",
//     badge: "Sale",
//     badgeColor: "bg-yellow-500",
//     description: "Experience pure sound with noise cancellation.",
//     rating: 4.3,
//   },
// ];

// export default function FeaturedProducts() {
//   const { addToCart } = useCart();

//   return (
//     <section className="px-6 py-10 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//         Featured Products
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {featuredProducts.map((product) => (
//           <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//             <div className="relative w-full h-48 mb-4">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover rounded-md"
//               />
//               <span
//                 className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${product.badgeColor}`}
//               >
//                 {product.badge}
//               </span>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-1">
//               {product.name}
//             </h3>
//             <p className="text-sm text-gray-600 mb-2">{product.description}</p>
//             <p className="text-blue-600 font-bold mb-2">{product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// ---------------------------------
"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, StarOff } from "lucide-react";
import type { Product } from "@/context/CartContext";

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
    image: "/ headphones.jpg", // 🔧 Fixed extra space
    badge: "Limited Offer",
    badgeColor: "bg-red-600",
    description: "Immersive sound quality with noise cancellation.",
    rating: 4,
  },
];

export default function FeaturedProducts() {
  const { addToCart, cart } = useCart();
  console.log("Cart state:", cart);

  return (
    <section id="products" className="py-20 bg-gray-50 text-center">
      <h3 className="text-4xl font-bold mb-14 text-gray-800">
        Featured Products
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="hover:shadow-xl transition flex flex-col"
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
                loading="lazy"
                className="rounded-lg object-contain h-[150px]"
              />
              <CardTitle className="text-2xl text-center">
                {product.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col justify-between">
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
              <Button
                onClick={() => addToCart(product)}
                aria-label={`Add ${product.name} to cart`} //Added aria-label for accessibility
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl cursor-pointer"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
