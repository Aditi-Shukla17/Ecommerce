import ProductDetail from "@/Component/Product_details/ProductDetail";
import Cta from "@/Component/Shared/CTA/Cta";
import FAQ from "@/Component/Shared/FAQ/Faq";
import Testimonial from "@/Component/Shared/Testimonial/Testimonial";
import { products } from "@/Component/Product/data"; // Ensure the path is correct
import React from "react";

// Function to generate static params for dynamic routes
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

const ProductDetailPage = ({ params}) => {
  const productId = Number(params.id); // Get ID from params

  if (!productId) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <ProductDetail id={productId} />
      <Testimonial />
      <FAQ />
      <Cta />
    </>
  );
};

export default ProductDetailPage;
