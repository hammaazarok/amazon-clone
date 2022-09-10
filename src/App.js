import { Route, Router, Routes } from "react-router";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Header />
    <Routes>
          <Route
            path="/checkout"
            element={
                <Checkout />
            }
          ></Route>
          <Route
            path="/"
            element={
                <Home />
            }
          ></Route>
    </Routes>
    </div>
  );
}

export default App;
