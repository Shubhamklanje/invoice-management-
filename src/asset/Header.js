import React from 'react';
import logo from '../img/logo.png';
import Clogo from '../img/Clogo.png';

function Header() {
    return (
      <div>
         <img src={logo} alt="Logo" className= "imageone" />
         <img src={Clogo} alt="CLogo" className = "imagetwo" />
      </div>
    );
  }
  
  export default Header;