import ProductDetail from "@/Component/Product_details/ProductDetail";
import Cta from "@/Component/Shared/CTA/Cta";
import FAQ from "@/Component/Shared/FAQ/Faq";
import Testimonial from "@/Component/Shared/Testimonial/Testimonial";
import React from "react";

const ProductDetailPage = () => {
  return (
    <>
      <ProductDetail />
      <Testimonial />
      <FAQ />
      <Cta />
    </>
  );
};

export default ProductDetailPage;
