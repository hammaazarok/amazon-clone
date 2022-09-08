import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header(props) {
  return (
    <div className="header">
      <img className="header_logo" src="./assets/logo.png" />
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option1">Hello Guest</span>
          <span className="header_option2">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option1">Your</span>
          <span className="header_option2">& Prime</span>
        </div>
      </div>
      <div className="header_optionBasket">
        <ShoppingBasketIcon />
        <span className="header_option2 header_bascketCount">0</span>
      </div>
    </div>
  );
}

export default Header;
