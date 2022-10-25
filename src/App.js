import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { Route, Router, Routes } from "react-router";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";

const promise = loadStripe(
  "pk_test_51LhJ6CC4y0LjrhI2Z0fTiHPeyLzVwpvp5fjE5o4glPBrC9bA0OeGZUOczcUq7I4gk9ZqApkVCvJGQq7Me5zNCQCQ00iagPWwPr"
);
function App() {
  const [{}, dispach] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log(authUser);
      if (authUser) {
        dispach({ type: "SET_USER", user: authUser });
      } else {
        dispach({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        ></Route>
        <Route path="/login" element={<Login />}/>
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
