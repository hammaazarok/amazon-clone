import React from "react";
import "./checkoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating , hideButton}) {
  const [{}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt=""></img>
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
{!hideButton && [
 <button onClick={removeFromBasket}>Remove From Cart</button>
]}
       
      </div>
    </div>
  );
}

export default CheckoutProduct;
