import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  const data = [{
    id:1,
    title: "Star Wars: The Princess and the Scoundrel",
    img: "https://m.media-amazon.com/images/I/41+AXI9l-UL.jpg",
    price: 99.9,
    rating: 4,
  },
  {
    id:2,
    title: "Breath: The New Science of a Lost Art",
    img: "https://m.media-amazon.com/images/I/41o5B3nR1gL._SY300_.jpg",
    price: 43.69,
    rating: 4,
  },
  {
    id:3,
    title: "Bullet Train : A Novel",
    img: "https://m.media-amazon.com/images/I/51zLwXHWWBL._SY300_.jpg",
    price: 12.69,
    rating: 3,
  },
  {
    id:4,
    title: "Dead Against Her",
    img: "https://m.media-amazon.com/images/I/41XNnPPHR5L._SY300_.jpg",
    price: 43.69,
    rating: 4,
  },
  {
    id:5,
    title: "The Candid Life of Meena Dave",
    img: "https://m.media-amazon.com/images/I/51smsVgcV1L._SY300_.jpg",
    price: 32.69,
    rating: 4,
  },
  {
    id:6,
    title: "Beauty and the Baller",
    img: "https://m.media-amazon.com/images/I/51XKuV3ICgL._SY300_.jpg",
    price: 85.69,
    rating: 4,
  },
];
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_banner" src="./assets/banner1.jpg" alt=""></img>
      </div>
      <div className="home_row">
        <Product data={data[0]} />
        <Product data={data[1]} />
      </div>
      <div className="home_row">
        <Product data={data[2]} />
        <Product data={data[3]} />
        <Product data={data[4]} />
      </div>
      <div className="home_row">
        <Product data={data[5]} />
      </div>
    </div>
  );
}

export default Home;
