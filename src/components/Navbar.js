import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div className="nav">
    <div className="nav__container">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className="nav__link"
            to="/"
            activeClassName="nav__link--active"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__link"
            to="/search"
            activeClassName="nav__link--active"
          >
            Search
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
