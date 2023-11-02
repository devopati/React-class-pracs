import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = ({ cartClicked, totalItems }) => {
  return (
    <div className="header-container">
      <div className="logo">
        <h2>LOGO</h2>
      </div>
      <ul className="menu">
      
        <li><Link to ="/"> Home </Link></li>
        <li><Link to ="/services">service</Link></li>
        <li><Link to ="/login">Login</Link></li>        
        <div className="cart" onClick={cartClicked}>
          <AiOutlineShoppingCart size={25} color="white" />
          <div className="cart-counter">
            <h4>{totalItems}</h4>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Header;
