import React from "react";

import { NavLink } from "react-router-dom";

import "./navbar.scss";

const NavbarDesktop = () => {
  return (
    <nav className="navbar">
      <ul className="container_navbar">
        <li className="nav__btn">
          <NavLink to="/">Store</NavLink>
        </li>
        <li className="nav__btn">
          <NavLink to="/cart">cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
