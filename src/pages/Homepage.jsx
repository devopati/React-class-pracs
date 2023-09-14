import React, { useState } from "react";
import "./homepage.css";
import Header from "../components/Header";
import Cart from "../components/Cart";
import Card from "../components/Card";
import { data } from "../Data/data";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART_ITEMS } from "../redux/Slices/CartSlice";

const Homepage = () => {
  const [cartActive, setCartActive] = useState(false);

  const { cartItems, totalItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <Header
          cartClicked={() => setCartActive(!cartActive)}
          totalItems={cartItems.length}
        />
        <div className="cards-cont">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <Card
                  title={item.title}
                  imgurl={item.imgUrl}
                  description={item.description}
                  price={item.price}
                  addItemToCart={() => dispatch(SET_CART_ITEMS(item))}
                />
              </div>
            );
          })}
        </div>
        <div className="cart-home" style={{ position: cartActive && "fixed" }}>
          <Cart
            cartActive={cartActive}
            closeCart={() => setCartActive(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
