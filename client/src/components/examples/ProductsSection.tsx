import ProductsSection from "../sections/ProductsSection";

export default function ProductsSectionExample() {
  const handleOrder = (productId: string, productName: string) => {
    console.log(`Order product: ${productId} - ${productName}`);
  };

  return <ProductsSection onOrderProduct={handleOrder} />;
}
