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
