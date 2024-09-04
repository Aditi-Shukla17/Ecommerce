"use client";
import Contact from "@/Component/Contact/Contact";
import HomePage from "@/Component/Home/Home";

import Testimonial from "@/Component/Shared/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      {/* <Component  /> */}
      <HomePage />
      <Testimonial />
      <Contact />
    </>
  );
}
