import { useEffect } from "react";
import { Route, Router, Routes } from "react-router";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

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
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
