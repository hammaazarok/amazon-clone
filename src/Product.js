import React from "react";
import "./product.css";

function Product(props) {
    const {title , img , price , rating } = props.data;
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_,i) => (<p>⭐</p>))}
        </div>
      </div>
      <img src={img} alt=""></img>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
