
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import ScrollToTop from "@/components/ScrollToTop";

const Products = () => {
  useEffect(() => {
    document.title = "Prodotti - F.lli Di Raffaele";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold text-center text-avicola-darkgreen mb-2">I Nostri Prodotti</h1>
          <p className="text-xl text-center text-gray-600 mb-12">Scopri la qualità e la tradizione dei nostri prodotti avicoli</p>
          
          <ProductGrid />
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Products;
