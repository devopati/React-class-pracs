import React from "react";

const Card = ({ title, imgurl, description, price, addItemToCart }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <h4>{title}</h4>
      </div>
      <div className="card-img">
        <img src={imgurl} alt="" />
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="price" style={{ fontWeight: "bold" }}>
        Ksh.{price}
      </div>
      <div className="card-btn" onClick={addItemToCart}>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
