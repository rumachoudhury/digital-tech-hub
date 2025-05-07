// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="text-3xl text-green-500 font-bold text-center mt-6 ">
//       This is Home page
//     </div>
//   );
// }

import Hero from "../components/Hero";
import Features from "@/components/Features";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
// import Cart from "@/app/cart/page";

// import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      {/* <Link>Login</Link> */}
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <Categories />
      <FeaturedProducts />
      {/* <Cart />  */}
      <Footer />
    </main>
  );
}
