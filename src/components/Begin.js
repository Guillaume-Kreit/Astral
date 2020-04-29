import React from "react";
import { Link } from "react-router-dom";

const Begin = () => {
  const styles = {
    container: {
        display: 'flex',
        fontSize : '40px',
        justifyContent: 'center',
    }
}
  return(
    <nav style={styles.container}>
      <Link activeClassName="active" exact to="/YogaRoom">
            Begin
      </Link>
    </nav>
  )
}

export default Begin;
