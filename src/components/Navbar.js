import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="nav">
    <div className="nav__container">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/search">
            Search
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
