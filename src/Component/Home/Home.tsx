import React from "react";
// import Navbar from "../Shared/Header/Navbar";

import Midd1 from "./Mid1";

import Midd2 from "./Mid2";

import Midd3 from "./Mid3";

import Product_header from "./Product_header";
import Nav from "../Shared/Header/Nav";

const HomePage: React.FC = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Nav />
      <Midd1 />
      <Midd2 />
      <Midd3 />
      <Product_header />
    </>
  );
};

export default HomePage;
