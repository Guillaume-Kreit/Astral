import React from "react";
import { NavLink } from "react-router-dom";

const Begin = () => {
  return(
    <nav>
      <NavLink activeClassName="active" exact to="/YogaRoom">
            Begin
      </NavLink>
    </nav>
  )
}

export default Begin;
