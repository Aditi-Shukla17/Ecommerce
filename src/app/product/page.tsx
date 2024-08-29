import Product from "@/Component/Product/Product";
import Cta from "@/Component/Shared/CTA/Cta";
import FAQ from "@/Component/Shared/FAQ/Faq";

import Testimonial from "@/Component/Shared/Testimonial/Testimonial";
import React from "react";

const ProductPage = () => {
  return (
    <>
      <Product />
      <Testimonial />
      <FAQ />
      <Cta />
    </>
  );
};

export default ProductPage;
