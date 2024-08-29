import Contact from "@/Component/Contact/Contact";
import HomePage from "@/Component/Home/Home";

import ProductDetail from "@/Component/Product_details/ProductDetail";


import Testimonial from "@/Component/Shared/Testimonial/Testimonial";


export default function Home() {
  return (
    <>
    <HomePage/>
    <ProductDetail/>
      <Testimonial />
      <Contact />
    </>
  );
}
