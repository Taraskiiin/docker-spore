import React from "react";

import { NavLink } from "react-router-dom";

const NavbarDesktop = () => {
  return (
    <nav className="navbar-desktop">
      <ul>
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
