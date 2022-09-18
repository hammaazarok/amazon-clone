import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import axios from './axios'
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
function Payment() {
  
  // pk_test_51LhJ6CC4y0LjrhI2Z0fTiHPeyLzVwpvp5fjE5o4glPBrC9bA0OeGZUOczcUq7I4gk9ZqApkVCvJGQq7Me5zNCQCQ00iagPWwPr
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
      
      const getClientSecret = async () => {
          const response = await axios({
              method: 'post',
              url: `/payments/create?total=${getBasketTotal(basket) * 100}`
          });
          setClientSecret(response.data.clientSecret)
      }

      getClientSecret();
  }, [basket])


  const handleSubmit = async (event) => {
     
      event.preventDefault();
      setProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
              card: elements.getElement(CardElement)
          }
      }).then(({ paymentIntent }) => {
      
          setSucceeded(true);
          setError(null)
          setProcessing(false)

          dispatch({
              type: 'EMPTY_BASKET'
          })

          navigate('/orders')
      })

  }

  const handleChange = event => {
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
  }


  return (
    <div className="payment">
      <div className="payment_container">
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;