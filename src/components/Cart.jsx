import React from "react";
import "./componetsStyle.css";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_CART_ITEM } from "../redux/Slices/CartSlice";
const Cart = ({ cartActive, closeCart, removeItem }) => {
  const { cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems);

  const dispatch = useDispatch();
  return (
    <div className="big-cart-container">
      <div
        className={`cart-container ${
          cartActive ? "cartactive" : " cartclosed"
        }`}
      >
        <h3>Cart Items</h3>
        <div className="cart-icon">
          <GrFormClose size={34} onClick={closeCart} />
        </div>
      </div>
      {cartItems?.map((item) => {
        return (
          <div className="cart-itemm" key={item?.id}>
            <h3>{item?.title}</h3>
            <p>{item?.price}</p>
            <GrFormClose
              size={34}
              onClick={() => dispatch(REMOVE_CART_ITEM(item.id))}
              color="grey"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
