import React, { useEffect, useState } from "react";
import "./Header.css";
import UserIcon from "../assets/user-icon.svg";
import ShoppingIcon from "../assets/shopping-icon.svg";
import SearchIcon from "../assets/search-icon.svg";
import WishlistIcon from "../assets/wishlist-icon.svg";
import XIcon from "../assets/x-icon.svg";

const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const [dropdownHovered, setDropdownHovered] = useState(false);
  const [searchHovered, setSearchHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight * 0.92;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownHover = () => {
    setTimeout(() => {
      setDropdownHovered(!dropdownHovered);
    }, 200);
  };

  const handleSearchHover = () => {
    setTimeout(() => {
      setSearchHovered(!searchHovered);
    }, 200);
  }

  return (
    <header className={`header ${scrolled ? 'headerscrolled' : ''}`}>
      <div className="logo">
        <h1>Isla Brava</h1>
      </div>
      <nav>
        <ul>
          <li className="dropdown" onMouseEnter={handleDropdownHover} onMouseLeave={handleDropdownHover}>
            <a href="/shop">Shop</a>
            <div className="dropdown-content">
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">T-shirt</a>
              <a href="#">Hoodies</a>
            </div>
          </li>
          <li>
            <a href="/categories">About Us</a>
          </li>
          <li>
            <a href="/info">Contact</a>
          </li>
          <li className="dropdown" onMouseEnter={handleDropdownHover} onMouseLeave={handleDropdownHover}>
            <a href="/pages">Pages</a>
            <div className="dropdown-content">
              <a href="#">About Us</a>
              <a href="#">All Products</a>
              <a href="#">WishList</a>
              <a href="#">Cart Pages</a>
              <a href="#">CheckOut</a>
              <a href="#">Contact</a>
              <a href="#">Login</a>
            </div>
          </li>
          <li className="li-icon">
            <img className="icon" src={WishlistIcon} alt="whislist icon" />
          </li>
          <li className="li-icon">
            <img className="icon" src={UserIcon} alt="user icon" />
          </li>
          <li className="li-icon">
            <img className="icon" src={ShoppingIcon} alt="shopping icon" />
          </li>
          <li className="li-icon dropdown" >
            <img className="icon" src={SearchIcon} alt="search icon" onClick={handleSearchHover}/>
            <div className={searchHovered ? 'dropdown-search' : 'dropdown-search-hidden'}>
              <input id="search" type="text" placeholder="Search" />
              <label htmlFor="search"></label>
              <button className="btn">Submit</button>
              <button className="btn-x" onClick={handleSearchHover}><img className="icon" src={XIcon} alt="X icon" /></button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
