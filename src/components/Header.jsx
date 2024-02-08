import React, { useEffect, useState } from "react";
import "./Header.css";
import UserIcon from "../assets/user-icon.svg";
import ShoppingIcon from "../assets/shopping-icon.svg";

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

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
  

  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown");
    const main = document.querySelector("main");
  
    const handleMouseEnter = () => {
      main.style.filter = "brightness(70%)";
    };
  
    const handleMouseLeave = () => {
      main.style.filter = "none";
    };
  
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", handleMouseEnter);
      dropdown.addEventListener("mouseleave", handleMouseLeave);
    });
  
    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("mouseenter", handleMouseEnter);
        dropdown.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'headerscrolled' : ''}`}>
      <div className="logo">
        <h1>Isla Brava</h1>
      </div>
      <nav>
        <ul>
          <li className="dropdown">
            <a href="/shop">Shop</a>
            <div className="dropdown-content">
              <a href="#">Product 1</a>
              <a href="#">Product 2</a>
              <a href="#">Product 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/categories">Categories</a>
            <div className="dropdown-content">
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">Winter</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/info">Info</a>
            <div className="dropdown-content">
              <a href="#">About Us</a>
              <a href="#">About Us</a>
              <a href="#">About Us</a>
            </div> 
          </li>
          <li>
            <img className="icon" src={UserIcon} alt="user icon" />
          </li>
          <li>
            <img className="icon" src={ShoppingIcon} alt="shopping icon" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
