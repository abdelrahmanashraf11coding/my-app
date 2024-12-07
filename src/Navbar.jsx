import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import MyImage from "./assets/img25.png";
const Navbar = (props) => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={MyImage} alt="" />
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#About">About</a>
            <a href="#">pages</a>
            <a href="#">portfolio</a>
            <a href="#">blog</a>
            <a href="#">shop</a>
            <a href="#">elements</a>
            
          </div>
        </div>
        <div className="text">
          <h1 className="logo-text">Welcom to Rasbud</h1>
          <h1 className="one">time to blossom</h1>
          <p>
            A simple gorgeous wordPress them packed with everything you will
            need to create a delightful website for your flower shop or florist
            business quickly and with ease.
          </p>
          <button className="bg btn">read more</button>
          <button className="out-line btn">read more</button>
        </div>
      </div>
    

    </>
  );
};

export default Navbar;
