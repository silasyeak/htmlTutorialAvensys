import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="body">
      <BrowserRouter>
        <div className="container">
          <img
            width={130}
            height={70}
            src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
            alt="netflix logo"
          />
          <span>
            <NavLink to="/">Home</NavLink>
          </span>
          <span>
            <NavLink to="/about">About</NavLink>
          </span>
          <span>
            <NavLink to="/service">Services</NavLink>
          </span>
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
