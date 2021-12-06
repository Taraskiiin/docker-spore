import React from "react";

import { NavLink } from "react-router-dom";

import "./navbar.scss";

const NavbarDesktop = () => {
  return (
    <nav className="navbar">
      <ul className="container">
        <li>
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
