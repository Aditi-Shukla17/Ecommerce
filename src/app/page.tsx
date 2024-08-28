import Contact from "@/Component/Contact/Contact";

import ProductDetail from "@/Component/Product_details/ProductDetail";


import Testimonial from "@/Component/Shared/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
   <ProductDetail/>
      <Testimonial />
      <Contact />
    </>
  );
}
