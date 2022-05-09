import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
        
      <span className="nav-logo">Coffee shop</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        <a href="/aboutus">About</a>
        <a href="/coffees">Coffee</a>
        <a href="/feature">Service</a>
        

      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;