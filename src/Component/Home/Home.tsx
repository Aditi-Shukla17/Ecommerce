import React from 'react';
import Navbar from '../Shared/Header/Navbar';

import Midd1 from './Mid1';

import Midd2 from './Mid2';

import Midd3 from './Mid3';
import Cta from '../Shared/CTA/Cta';
import Product from '../Product/Product';
import Testimonial from '../Shared/Testimonial/Testimonial';
import Footer from '../Shared/Footer/Footer';

 // Import the Navbar component

const HomePage: React.FC = () => {
  return (
     <>
      <Navbar/>
      <Midd1/>
      <Midd2/>
      <Midd3/>
      <Product/>
      {/* <Testimonial/> */}
      <Cta/>
      {/* <Footer/> */}
      </>

  );
}

export default HomePage;
