import Hero from "../components/Hero";
import Features from "@/components/Features";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

// import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
