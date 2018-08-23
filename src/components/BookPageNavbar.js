import React from "react";
import { NavLink } from "react-router-dom";

const BookPageNavbar = props => (
  <ul>
    <li>
      <NavLink to={`${props.match.url}`}>Overview</NavLink>
    </li>
    <li>
      <NavLink to={`${props.match.url}/description`}>Description</NavLink>
    </li>
  </ul>
);

export default BookPageNavbar;
