import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-5.png"
          alt=""
        />
        <h2 className="checkout_title" >Your Shopping Cart</h2>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
