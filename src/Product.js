import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const { id , title, img, price, rating } = props.data;
  const [{basket}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image: img,
        price,
        rating,
      },
    });
  };

  return (
    <div key={id} className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt=""></img>
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
