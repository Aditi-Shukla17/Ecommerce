import ProductDetail from "@/Component/Product_details/ProductDetail";
import Cta from "@/Component/Shared/CTA/Cta";
import FAQ from "@/Component/Shared/FAQ/Faq";
import Testimonial from "@/Component/Shared/Testimonial/Testimonial";
import { products } from "@/Component/Product/data";
import React from "react";
import Nav from "@/Component/Shared/Header/Nav";
import Footer from "@/Component/Shared/Footer/Footer";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

const ProductDetailPage = ({ params }) => {
  const productId = Number(params.id);

  if (!productId) {
    return <p>Product not found.</p>;
  }

  return (
    <>
   
      <ProductDetail id={productId} />
     
      
    </>
  );
};

export default ProductDetailPage;
