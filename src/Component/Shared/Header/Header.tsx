import React from 'react';
import Navbar from './Navbar';

import Middle1 from './Middle1';

 // Import the Navbar component

const Header: React.FC = () => {
  return (
    <header>
      <Navbar/> {/* Include the Navbar inside the Header */}
      <Middle1/>
    </header>
  );
}

export default Header;
