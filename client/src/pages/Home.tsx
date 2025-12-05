import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import OrderFormSection from "@/components/sections/OrderFormSection";
import HowToOrderSection from "@/components/sections/HowToOrderSection";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Footer from "@/components/Footer";
import { getProductById } from "@/lib/products";

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>();
  const [selectedProductName, setSelectedProductName] = useState<string | undefined>();
  const orderSectionRef = useRef<HTMLDivElement>(null);

  const handleOrderProduct = (productId: string, productName: string) => {
    setSelectedProductId(productId);
    setSelectedProductName(productName);
    
    setTimeout(() => {
      const orderSection = document.querySelector("#order");
      if (orderSection) {
        orderSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleClearSelection = () => {
    setSelectedProductId(undefined);
    setSelectedProductName(undefined);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductsSection onOrderProduct={handleOrderProduct} />
        <OrderFormSection
          selectedProductId={selectedProductId}
          selectedProductName={selectedProductName}
          onClearSelection={handleClearSelection}
        />
        <HowToOrderSection />
        <FAQSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
