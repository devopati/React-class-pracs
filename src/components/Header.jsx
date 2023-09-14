import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = ({ cartClicked, totalItems }) => {
  return (
    <div className="header-container">
      <div className="logo">
        <h2>LOGO</h2>
      </div>
      <ul className="menu">
        <li>Home</li>
        <li>Service</li>
        <li>About</li>
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
